# QR Code Generator

## Descrição

Este projeto é um **Gerador de QR Code** que permite ao usuário inserir uma URL e gerar um código QR correspondente. O código QR é exibido na página e o usuário pode fazer o download da imagem gerada. O projeto foi desenvolvido utilizando **Node.js**, **Express**, **Bootstrap** para estilização e a biblioteca **qr-image** para a geração dos códigos QR.

## Funcionalidades

- Inserção de uma URL pelo usuário.
- Geração de um QR Code com base na URL inserida.
- Exibição do QR Code na página.
- Opção de download da imagem QR Code gerada.
- Interface simples e responsiva usando Bootstrap.
- Exibe o QR Code sem a necessidade de recarregar a página.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para Node.js usado para criação do servidor.
- **qr-image**: Biblioteca para gerar QR Codes.
- **Bootstrap**: Framework CSS para estilização.
- **Inquirer.js**: Biblioteca para interações no terminal (usada na versão CLI do projeto).
- **jQuery**: Biblioteca para simplificar manipulação de elementos HTML e eventos.

## Instalação

### Pré-requisitos

- Node.js instalado na sua máquina. Você pode baixar [aqui](https://nodejs.org/).
- Git para clonar o repositório.

### Passos

1. Clone o repositório:
    ```bash
    git clone https://github.com/JOVI-CR/QR-Code-Generator.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd QR-Code-Generator
    ```

3. Instale as dependências necessárias:
    ```bash
    npm install
    ```

4. Inicie o servidor:
    ```bash
    node app.js
    ```

5. Acesse o projeto no navegador:
    Abra seu navegador e vá para `http://localhost:3000`.

## Como Funciona

### app.js

- **Rotas**
  - `GET /`: Serve a página HTML inicial (formulário para inserir URL).
  - `POST /generate`: Rota onde a URL inserida pelo usuário é processada, o QR Code é gerado, e a imagem é exibida.

- **Geração de QR Code**
  A biblioteca `qr-image` é usada para gerar o código QR com base na URL fornecida. Essa imagem é então salva no diretório `public` e exibida na página.

- **Função de Download**
  A funcionalidade de download da imagem é implementada através de um link gerado dinamicamente no HTML.

### public/index.html

- HTML simples que contém um formulário para o usuário inserir a URL e um espaço para exibir o QR Code gerado.

### public/styles.css

- Contém a estilização personalizada para o layout da página, como o espaçamento, cores e fonte do título.

### public/script.js

- Contém o código jQuery que controla a interação do usuário com a página e faz o download da imagem do QR Code quando o botão é clicado.

## Como Usar

1. Acesse a página inicial.
2. Digite a URL que você deseja gerar o QR Code.
3. O QR Code será gerado e exibido.
4. Clique no botão "Download QR Code" para salvar a imagem.

## Exemplo de Uso

1. **Entrada**: O usuário insere a URL `https://example.com`.
2. **QR Code**: O QR Code correspondente a essa URL é gerado e exibido na página.
3. **Download**: O usuário pode fazer o download da imagem clicando no botão de download.

## Contribuição

Se desejar contribuir com melhorias, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie um branch para sua funcionalidade (`git checkout -b feature/NomeFuncionalidade`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`).
4. Envie suas alterações para o branch (`git push origin feature/NomeFuncionalidade`).
5. Abra um Pull Request.

## Contato

Para mais informações ou para entrar em contato, acesse meu [GitHub](https://github.com/JOVI-CR).