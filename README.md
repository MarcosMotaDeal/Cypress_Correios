# Cypress_Correios

Teste de API - Busca de CEP das Capitais Brasileiras.

Este é um teste automatizado para validar a busca de CEPs utilizando a url https://cep-v2-americanas-npf.b2w.io/cep/.

O objetivo deste teste é validar o status_code e os dados do body response da requisição.

Pré-requisitos:

Node.js instalado na máquina
NPM instalado na máquina
Cypress instalado na máquina

Instruções para execução:

Faça o download ou clone o repositório
Abra o terminal na pasta raiz do projeto
Digite o comando npx cypress open para abrir a janela do Cypress
Clique no arquivo busca-cep.spec.js para executar o teste
Digite o comando npx cypress run caso queira que seja gerado evidência do teste em video

Cenários de teste:

Cenário válido - Busca de CEP da capital: este cenário verifica se a requisição para a API com um CEP válido retorna os dados corretos, como endereço, número, cidade, estado e outros. Caso algum dos dados esteja incorreto ou a requisição retorne um status diferente de 200, o teste falhará.

Cenário inválido - Busca de CEP inexistente: neste cenário, a API é testada com um CEP inexistente, ou seja, o teste verifica se a resposta da API é um status_code 400, e se a mensagem de erro e outras informações estão corretas. Caso algum dos dados esteja incorreto ou a requisição retorne um status diferente de 400, o teste falhará.

Passos do teste
O teste envia uma requisição GET para a API com o CEP informado.
O teste verifica se o status_code da resposta é igual a 200 no cenário válido e igual a 404 no cenário inválido.
O teste verifica se os dados do body response da resposta estão corretos no cenário válido e se a resposta de erro está correta no cenário inválido.

Conclusão:

Este é um teste simples e rápido que pode ser executado para verificar se a API dos Correios está funcionando corretamente na busca de CEPs das capitais brasileiras.

PS: [Collection-Consulta-Cep.zip](https://github.com/MarcosMotaDeal/Cypress_Correios/files/11343322/Collection-Consulta-Cep.zip)
