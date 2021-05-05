#  Meu site/portfólio

### [Site](https://marcosadev.netlify.app/)
### [Protótipo no Figma](https://www.figma.com/file/FvFst2gKiNxcrc7grzCb3S/Portf%C3%B3lio)

#### To-Do
 - [ ] Rotas em back-end para fazer o roteamento corretamente entre as páginas ao atualizar(erro 404 atualmente).
 - [ ] Dar um highlight no link ativo da navbar, inclusive ao usar os botões de prev e next do browser.
 - [ ] Encontrar maneiras de substituir funções por classes (Constructor não pega elementos em outras páginas).
 - [x] ~~Ajustar grid e remover a prop 'Contents' pois ainda não é totalmente compatível(CanIUse).~~
 - [x] ~~Href limpo na origem e ajustado no js pra funcionar corretamente.~~
 - [x] ~~Adicionar modal ao clicar no link de e-mail, esse modal terá uma opção de copiar o e-mail.~~
 - [ ] Otimizar espaço útil do layout.
 - [ ] Breakpoint para tablets.
 - [ ] Otimizar código SASS e refatorar classes para o [BEM](http://getbem.com/introduction/).
 - [x] ~~Melhorar semântica no HTML.~~
 - [x] ~~Loading durante o carregamento das páginas.~~
 - [ ] Implementar testes (falta estudar sobre).
 
 ## Tecnologias
 - HTML & [SASS](https://sass-lang.com/)
 - Javascript vanilla
 - EsLint e Prettier para formatação e padronização do código
 - Webpack para minificação dos scripts js em um único arquivo './js/main.js'

Dependências de desenvolvimento
- sass, eslint, webpack e webpack-cli

#### Como rodar:
- ```npm i``` → p/ instalar as dependências.
- ```npm run dev``` → p/ rodar em modo de desenvolvimento.
- ```npm run build``` → p/ rodar em modo de produção.
- ```npm i -g sass``` -> p/ instalar o SASS (opcional).
- ```sass ./css/scss/style.scss ./css/style.css -w``` -> p/ rodar o SASS.

## Motivação
Esse projeto foi feito com intuito de estudar o Javascript vanilla e conhecer mais essa linguagem, antes de passar para os frameworks. Estudei um pouco de React durante o curso full-stack da Recode porém não me sentia muito confortável em fazer aplicações nele, pois a base em javascript ainda não era muito boa. **E após ver que era possível fazer uma Single Page Application somente com javascript, decidi realizar esse projeto.**

## Desafios
Como iniciante, muitos conceitos ainda não são tão claros, por isso foi desafiador fazer esse projeto do zero em todos os aspectos.
Várias ideias e soluções para problemas não funcionavam ou traziam outros problemas, mas programação é isso aí não é mesmo? rs

##  Trilha do projeto

#### Ideação e prototipação
 - Comecei pesquisando alguns layouts no Dribbble e Behance.
 - Prototipei a primeira tela no figma e criei um layout estilo landing-page sem nenhum scroll.
 - E aí, fui 'desenhando' as outras telas com base na primeira.
 - Cores por conta do [Coolors](https://coolors.co/palettes) e fontes por [Google Fonts](https://fonts.google.com/).
 - Sempre que crio protótipos mobile, uso a menor resolução popular: Iphone SE(320px largura).
 - E ai o desafio ficou ainda maior, pois era necessário que todo layout coubesse nessa resolução(sem scroll lembra?).
 
 #### Código
 - Comecei pelo HTML da página inicial e os primeiros passos em SASS.
 - Daí, o código da página inicial foi feito com uma div(#root) que inicialmente é a home, porém recebe as outras páginas conforme a navegação.
 - As outras páginas são buscadas através da função fetch.
 - E aí entra o trabalho da [HistoryAPI](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API)
 - Esta por sua vez faz o serviço com o método [PushState](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API#o_m%C3%A9todo_pushstate%28%29) e o evento [PopState](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API#o_evento_popstate).
 - Que bem resumidamente, controlam a URL e o histórico.
 - Ou seja, ao clicar nos botões previous e next do navegador, as páginas são chamadas corretamente.
 - E pra URL usei também o método replace para manipular as strings e criar um pathname mais limpo.
 - No 'ouvinte' do PopState precisei manipular a URL também, pois ela vem exatamente como no href.
 - E pra fazer tudo isso funcionar como queria, passei o mesmo pathname como id nos links de navegação.
 - Precisei criar uma função p/ ativar scripts específicos de cada página, somente quando essa página estiver sendo acessada.
