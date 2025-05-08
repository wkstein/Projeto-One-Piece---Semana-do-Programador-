/*
O que precisamos fazer? - quando  clicar no botão do personagem na lista temos que marcar o botão coo selecionado e mostrar i personagem correspondente:
     
     OBJETIVO 1 - Quando clicar no botão do personagem lista, marcar o botão como selecionado.

    Passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
    
    Passo 2 - adicionar a calsse "selecionado" no botão que o usuário clicou

    Passo 3 -  verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele


    OBJETIVO 2 - Quando clicar no botão do personagem mostra as informações do personagem.

    Passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
    
    Passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou

    Passo 3 -  verificar se ja existe um personagem selecionado, se sim, devemos remover a seleção dele
    */

      
    const botoes = document.querySelectorAll(".botao");
    const personagens = document.querySelectorAll(".personagem");
    
    botoes.forEach((botao, indice) => {
         botao.addEventListener("click", () => {
              desselecionarBotao();
              desselecionarPersonagem();
    
              botao.classList.add("selecionado");
              personagens[indice].classList.add("selecionado");
         });
    });
    
    function desselecionarPersonagem() {
         const personagemSelecionado = document.querySelector(".personagem.selecionado");
         personagemSelecionado.classList.remove("selecionado");
    }
    
    function desselecionarBotao() {
         const botaoSelecionado = document.querySelector(".botao.selecionado");
         botaoSelecionado.classList.remove("selecionado");
    }