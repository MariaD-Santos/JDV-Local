# 💧 Aero Match! — Jogo da Velha (Refatorado) 💿

> **Projeto Prático do Curso Técnico em Desenvolvimento de Sistemas**  
> Refatoração e Redesign do tutorial clássico de React (*Tic-Tac-Toe*)[cite: 1, 2].

---

## 🌊 Visão Geral

O **Aero Match!** é uma versão refatorada, modular e totalmente redesenhada do clássico Jogo da Velha (*Tic-Tac-Toe*). A aplicação foi desenvolvida utilizando **React com Vite**, aplicando arquitetura de componentes independentes e estilização com **CSS Modules** e **Bootstrap**[cite: 1].

Inspirado na estética **Frutiger Aero** (tendência visual marcante dos anos 2000/2010), o jogo se diferencia por apresentar uma interface futurista e otimista com tons aquáticos, elementos translúcidos (*glassmorphism*), bolhas e brilhos, substituindo os tradicionais `X` e `O` por ícones temáticos (`💿` e `💧`)[cite: 1].

### 🚀 Diferenciais e Melhorias da Refatoração
* **Identidade Visual Temática:** Transição do CSS global genérico para o tema Frutiger Aero via **CSS Modules** com convenção **BEM** e variáveis CSS[cite: 1].
* **Modularização:** Divisão do arquivo único original em componentes reutilizáveis (`Square`, `Board`, `Game`) e isolamento de lógicas puras em utilitários (`calculateWinner`)[cite: 1, 2].
* **Integração com Bootstrap:** Aplicação de utilitários de grid e responsividade[cite: 1].
* **Acessibilidade & Usabilidade:** Suporte a leitores de tela com atributos semânticos em HTML5[cite: 1].

---

## 📜 Regras de Negócio

* **Início de Jogo:** A partida inicia com o tabuleiro 3x3 limpo e com o indicador apontando o primeiro turno para o jogador `💿`[cite: 1, 2].
* **Interação:** Dois jogadores disputam em turnos alternados localmente na mesma tela[cite: 1, 2].
* **Jogadas Válidas:** O jogador da vez clica em uma posição vazia para registrar seu símbolo (`💿` ou `💧`)[cite: 1, 2].
* **Jogadas Inválidas:** O clique é bloqueado se a célula já contiver um símbolo ou se a partida já tiver sido encerrada[cite: 1, 2].
* **Determinação do Vencedor:** Vitória confirmada quando três símbolos iguais forem alinhados em linha, coluna ou diagonal[cite: 2].
* **Empate ("Deu Velha!"):** Declarado quando todas as 9 casas forem preenchidas sem uma combinação vencedora[cite: 1].
* **Encerramento Automático:** Ao detectar vitória ou empate, o tabuleiro trava para novas jogadas[cite: 2].
* **Viagem no Tempo:** Registro do histórico de jogadas permitindo voltar a qualquer movimento anterior[cite: 1, 2].

---

## 🎯 Requisitos Funcionais (RF)

* **[RF01]** Permite iniciar e reiniciar a partida a qualquer momento[cite: 1].
* **[RF02]** Alterna automaticamente a vez dos jogadores a cada movimento válido[cite: 1].
* **[RF03]** Impede jogadas em células ocupadas ou com o jogo finalizado[cite: 1, 2].
* **[RF04]** Exibe o indicador do jogador da vez ou a declaração de vitória/empate[cite: 1, 2].
* **[RF05]** Mantém o histórico com a lista das jogadas realizadas no jogo[cite: 1, 2].
* **[RF06]** Permite retroceder ao clicar em um turno do histórico ("Viagem no tempo")[cite: 1, 2].
* **[RF07]** Garante suporte responsivo e estilização isolada via CSS Modules[cite: 1].

---

## 🛠️ Tecnologias e Conceitos Aplicados

* **React (com Vite)** — Construção de interface reativa e rápida[cite: 1].
* **CSS Modules & BEM** — Estilização modular com escopo fechado[cite: 1].
* **Bootstrap** — Suporte ao layout responsivo e alinhamento[cite: 1].
* **Hooks do React (`useState`)** — Gerenciamento imutável de estado[cite: 1].
* **Clean Code** — Separação de responsabilidades e código legível[cite: 1].

---