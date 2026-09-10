# 💧 Jogo da Velha — AeroMatch! 💿

## 🌊 Visão Geral
O **Aero Match!** é uma versão refatorada e totalmente redesenhada do clássico Jogo da Velha (*Tic-Tac-Toe*). A aplicação foi desenvolvida em **React com Vite**, aplicando arquitetura modular de componentes e estilização com **CSS Modules** e **Bootstrap**.

Inspirado na estética otimista e futurista do **Frutiger Aero** (popular entre meados dos anos 2000 e início dos anos 2010), o jogo utiliza uma interface vibrante com elementos vítreos (*glassmorphism*), bolhas e tons aquáticos, substituindo os tradicionais `X` e `O` por ícones temáticos (`💿` e `💧`).

### 🚀 Diferenciais e Melhorias em Relação ao Tutorial do React
* **Identidade Visual Temática:** Transição do CSS global genérico para o tema Frutiger Aero via **CSS Modules** com convenção **BEM** e variáveis de CSS.
* **Modularização:** O código centralizado original foi fracionado em componentes reutilizáveis (`AeroBoxes`, `AeroMatchBoard`, `AeroGame`, `AeroClock`, `AeroScore`).
* **Acessibilidade & Usabilidade:** Adição de atributos explícitos (ex: `type="button"`) para evitar recarregamento indevido de formulário e suporte a leitores de tela.
* **Recursos Adicionais:** Implementação de placar de pontuação (`AeroScore`), temporizador de partida (`AeroClock`) e alerta modal customizado (via **SweetAlert2**) para o vencedor da rodada de 3 vitórias.

---

## 🎮 Como Jogar (Guia de Uso)

1. **Início da Partida:**
   Ao carregar o jogo, o tabuleiro 3x3 é exibido completamente limpo. A partida começa automaticamente sob o comando do Jogador CD (`💿`).

2. **Realizando uma Jogada:**
   Cada jogador clica em uma das células vazias do tabuleiro para registrar seu símbolo (`💿` ou `💧`). Após cada clique válido, o turno é alternado automaticamente para o adversário.

3. **Acompanhando Indicadores e Tempo:**
   * **Temporizador (`AeroClock`):** Exibe em tempo real o tempo corrido da partida atual em segundos.
   * **Placar (`AeroScore`):** Registra e exibe continuamente o total de vitórias do Jogador `💿`, do Jogador `💧` e o número de empates.

4. **Navegando pelo Histórico ("Viagem no Tempo"):**
   Na painel lateral, uma lista interativa exibe todas as jogadas realizadas na partida atual. Clicar no botão referente a uma jogada específica (ex: *"Vá para a jogada #2"*) permite visualizar o estado exato do tabuleiro naquele momento e continuar o jogo a partir dali. O botão *"Volte para o início!"* limpa as jogadas e reinicia a rodada atual.

5. **Condição de Vitória e Vantagem da Próxima Partida:**
   Alinhar três símbolos iguais na horizontal, vertical ou diagonal garante a vitória da partida. Para manter o dinamismo, o jogador perdedor ganha automaticamente a vantagem de começar jogando na partida seguinte.

6. **Definição do Campeão (Modo Melhor de 3):**
   A disputa geral é travada no formato de série. Quando qualquer um dos jogadores acumular **3 vitórias no placar global**, o jogo interrompe a sequência e exibe um alerta modal interativo via **SweetAlert2**, com mensagem comemorativa e estética personalizada. Em seguida, a pontuação acumulada é zerada para dar início a um novo torneio.

---

## 📜 Regras de Negócio

* **Início de Jogo:** O jogo inicia com o tabuleiro 3x3 limpo e o indicador apontando a vez do jogador `💿`.
* **Interação:** Dois jogadores disputam em turnos alternados de forma local na mesma tela.
* **Jogadas Válidas:** O jogador da vez clica em uma posição livre para registrar seu símbolo (`💿` ou `💧`).
* **Jogadas Inválidas:** O clique é bloqueado se a célula já contiver um símbolo ou se a partida já tiver sido encerrada.
* **Determinação do Vencedor:** Vitória confirmada quando três símbolos iguais forem alinhados em linha, coluna ou diagonal.
* **Empate ("Deu Velha!"):** Declarado quando todas as 9 casas forem preenchidas sem uma combinação vencedora.
* **Encerramento Automático:** A partida é finalizada ao registrar vitória ou empate, impedindo cliques posteriores no tabuleiro.
* **Vantagem de Turno:** O jogador que perde a rodada ganha a prioridade de começar a partida seguinte.

---

## 🎯 Requisitos Funcionais (RF)

* **[RF01]** Permite iniciar e reiniciar a partida a qualquer momento.
* **[RF02]** Alterna automaticamente o turno entre os jogadores a cada movimento válido.
* **[RF03]** Impede jogadas em posições ocupadas ou com o jogo finalizado.
* **[RF04]** Exibe o indicador do jogador da vez, declaração de vitória ou empate.
* **[RF05]** Mantém o histórico de jogadas do tabuleiro na sessão.
* **[RF06]** Permite retroceder no tempo clicando em turnos anteriores do histórico.
* **[RF07]** Garante suporte responsivo e estilização isolada via CSS Modules.
* **[RF08] Placar de Pontuação:** Mantém contador de vitórias (`cdWins`, `dropWins`) e empates (`draws`).
* **[RF09] Temporizador de Partida:** Exibe o tempo corrido de jogo em segundos (`AeroClock`), zerado a cada nova partida.
* **[RF10] Alerta de Campeão:** Dispara modal customizado via SweetAlert2 ao atingir 3 vitórias e reseta a pontuação do jogo.

---

## 🛠️ Componentes e Estrutura do Projeto

* `AeroBoxes.jsx`: Componente de menor nível que renderiza a célula/botão individual do tabuleiro, lidando com estados desabilitados e os ícones temáticos.
* `AeroMatchBoard.jsx`: Monta a grade 3x3 (formada por 9 `AeroBoxes`) e avalia o status direto da partida (se há um vencedor ou empate).
* `AeroClock.jsx`: Gerencia o ciclo de vida do temporizador da rodada em segundos através do `useEffect` e `setInterval`.
* `AeroScore.jsx`: Exibe visualmente o placar acumulado das vitórias de ambos os jogadores e a contagem de empates.
* `AeroGame.jsx`: Componente contêiner principal responsável por gerenciar os estados globais (histórico de jogadas, controle do temporizador, alternância de turnos, pontuação acumulada e disparo do modal do campeão).
* `calcWin.js`: Função utilitária pura que analisa a matriz atual de jogadas e compara contra as combinações possíveis de vitória para determinar o vencedor.

---

## 🔍 Desenvolvimento, Decisões Técnicas e Solução de Bugs

### 1. Separação de Responsabilidades
No tutorial oficial do React, a lógica, o histórico e a renderização do tabuleiro são frequentemente misturados em um único arquivo monólito (`Game.jsx`). Para elevar o nível de sustentabilidade da aplicação, o **AeroMatch!** fracionou cada funcionalidade em componentes especializados:
* **UI Pura e Apresentação:** Os botões do tabuleiro (`AeroBoxes`) e os indicadores (`AeroScore`, `AeroClock`) preocupam-se unicamente em exibir dados recebidos via *props*.
* **Lógica de Estado:** Concentrada no `AeroGame`, facilitando a rastreabilidade do fluxo de dados (*unidirectional data flow*) e garantindo que mudanças em subcomponentes não gerem efeitos colaterais em toda a aplicação.

### 2. Dificuldades Encontradas e Correções
* **Problema de Recarregamento de Página ao Clicar:**
  Durante os primeiros testes, o clique nas células do tabuleiro fazia a aplicação recarregar a página web inteira. A causa era a omissão do atributo `type` na tag `<button>`. Por padrão, o navegador pode interpretar um `<button>` como um elemento de envio de formulário (`type="submit"`). A solução foi definir explicitamente `type="button"` em todas as tags de botão dos componentes `AeroBoxes` e da lista de histórico.
* **Navegação no Histórico:**
  Outra complicação envolvia renderizar a lista temporal sem perder o sincronismo de qual rodada o usuário estava acessando. A solução adotada mapeou a coleção de movimentos (`moves`), reescrevendo o estado corrente (`currentMove`) ao clicar em qualquer item anterior e permitindo refazer o fluxo de jogadas de forma transparente.