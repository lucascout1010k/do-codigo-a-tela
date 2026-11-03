# Do Código à Tela

Projeto acadêmico da disciplina Desenvolvimento Front-End para Web. A landing page apresenta, de forma visual e interativa, o papel do HTML, do CSS e do JavaScript na construção de uma experiência web.

## Tecnologias

- HTML5 para a estrutura e o conteúdo.
- CSS3 para o tema escuro, os detalhes verdes, a responsividade.
- Bootstrap 5.3.8 via CDN para a navegação, as colunas e os campos do formulário.
- JavaScript puro para a validação do formulário.

## Como abrir

1. Baixe o repositório pelo botão **Code > Download ZIP**, ou faça um clone.
2. Se baixar o ZIP, extraia todos os arquivos para uma pasta normal.
3. Abra o arquivo `index.html` dessa pasta no navegador.

Não é necessário instalar dependências, iniciar um servidor ou configurar um backend. Mantenha a conexão com a internet para carregar o Bootstrap e as fontes externas. Não abra o HTML diretamente dentro do ZIP.

## Arquivos principais

| Arquivo | Função |
| --- | --- |
| `index.html` | Página principal com topo, menu, hero, conteúdo, formulário e rodapé. |
| `style.css` | Aparência e ajustes para diferentes tamanhos de tela. |
| `script.js` | Validação dos campos Nome, E-mail e Mensagem. |
| `obrigado.html` | Agradecimento e link de retorno à página inicial. |

## Formulário demonstrativo

O formulário verifica campos vazios, espaços e o formato do e-mail. Se os dados forem válidos, abre `obrigado.html`. Os dados não são enviados para um servidor, não são armazenados e nenhum e-mail é disparado.

## Navegação

O menu permite acessar Início, Conteúdo e Contato. A página inclui duas colunas de conteúdo e um link para a documentação MDN Web Docs.
