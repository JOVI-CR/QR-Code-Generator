$(document).ready(function() {
    $("#downloadBtn").click(function() {
        const link = document.createElement("a");
        link.href = "/qr_img.png";
        link.download = "qr_img.png"; // Nome do arquivo a ser baixado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});