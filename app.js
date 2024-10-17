import inquirer from 'inquirer';
import bodyParser from "body-parser";
import qr from 'qr-image';
import fs from 'fs';
import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/generate", (req, res) => {
  const url = req.body.url;

  if (url) {
    
    let qr_svg = qr.image(url, { type: 'png' });
    const qrPath = path.join(__dirname, "public", "qr_img.png");

    qr_svg.pipe(fs.createWriteStream(qrPath));

    res.send(`
      <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>QR Code Generated</title>
                    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
                    <link rel="stylesheet" href="styles.css"> <!-- Seu CSS personalizado -->
                </head>
                <body>
                    <div class="container mt-5 text-center">
                        <h1>QR Code para a URL: ${url}</h1>
                        <img src="/qr_img.png" class="img-fluid" alt="QR Code">
                        <br>
                        <div class="button-container">
                          <a href="/qr_img.png" class="btn btn-success" download="QRCode.png">Download QR Code</a>
                          <a href="/" class="btn btn-primary">Criar Outro QR Code</a>
                        </div>
                    </div>
                </body>
                </html>
    `);
  } else {
    res.send("Por favor, forneça uma URL válida.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
