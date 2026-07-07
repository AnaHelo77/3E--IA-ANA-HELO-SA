
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta1 = "Pergunta 1";
const pergunta2 = "Pergunta 2";

const perguntas = [
             {
        enunciado: "Qual manejo equilibra tradição e alta tecnologia na pecuária atual?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você preferiu a pecuária extensiva tradicional de baixa densidade, focada na rusticidade animal. "
              
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você escolheu a Zootecnia de precisão, usando tecnologia aeroespacial para economizar pasto."
            }
        ]
    },

     {
        enunciado: "Qual método define o melhoramento de rebanhos na atualidade?Alternativa A: Escolha visual tradicional baseada apenas na beleza e tamanho animal.Afirmação A: Sua escolha focou no visual biológico clássico, método histórico com limites produtivos.Alternativa B: Seleção genômica via exame de DNA antes do animal nascer.Afirmação B: Você usou biotecnologia moderna e mapeamento genético para prever lucros e produção.Pergunta 3: SuinoculturaEnunciado: Qual é o foco tecnológico no manejo de porcas gestantes hoje?Alternativa A: Uso de gaiolas individuais restritas para controle total do espaço.Afirmação A: Você adotou o modelo industrial antigo de alta restrição física e menor bem-estar.Alternativa B: Baias coletivas com alimentação eletrônica ativada por microchip.Afirmação B: Você priorizou o bem-estar animal moderno aliado à automação e controle nutricional.Pergunta 4: Nutrição de AvesEnunciado: Como é calculada a ração moderna para frangos de granja?Alternativa A: Baseada apenas na porcentagem total de proteína bruta genérica.Afirmação A: Sua dieta seguiu uma linha nutricional antiga, que gera maior poluição ambiental.Alternativa B: Baseada em aminoácidos digestíveis exatos para cada fase da ave.Afirmação B: Você aplicou nutrição cirúrgica de alta conversão alimentar e baixo impacto ecológico.Pergunta 5: PisciculturaEnunciado: Qual inovação permite criar peixes em alta escala sem gastar muita água?Alternativa A: Uso de tanques escavados comuns com água corrente tirada de rios.Afirmação A: Você optou pela piscicultura tradicional de fluxo aberto, muito dependente de água natural.Alternativa B: Sistemas de bioflocos e recirculação fechada que purificam a água.Afirmação B: Você ativou a aquicultura ecológica moderna, que recicla água e evita desperdícios hídricos.Se você quiser ver como o chat monta o resultado, me avise para eu gerar uma simulação da mensagem final unindo as afirmações. Qual o próximo passo do seu projeto?As respostas da IA podem conter erros. Saiba mais",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Sua escolha focou no visual biológico clássico, método histórico com limites produtivos."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você usou biotecnologia moderna e mapeamento genético para prever lucros e produção."
            }
        ]
    },

     {
        enunciado: "Qual é o foco tecnológico no manejo de porcas gestantes hoje?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você adotou o modelo industrial antigo de alta restrição física e menor bem-estar. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você priorizou o bem-estar animal moderno aliado à automação e controle nutricional."
            }//fechamento do objeto do texto e afirmação da lista de alternativas
        ] //fechamento da lista de alternativas
    },//fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
]; //fechamento da lista de perguntas

  

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

mostraPergunta();
mostraAlternativas();

