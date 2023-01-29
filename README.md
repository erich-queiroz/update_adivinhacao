## Overview

Jogo simples, onde o objetivo é adivinhar o número de 0 a 10, gerado randômicamente por javaScript. 

A aparência visual do jogo é estilizada por meio de CSS, que define a fonte, cor, margem, borda, sombra, etc. O jogo também é responsivo, o que significa que se adapta a diferentes tamanhos de tela. Quando o jogo é jogado em um celular, a imagem de fundo de "main" é centralizada.

O script escolhe um número aleatório de 0 a 10 e o usuário tem 10 tentativas para adivinhá-lo. O valor digitado pelo usuário é pego pelo elemento HTML com id "inputPalpite" e o resultado da tentativa é exibido na página pelo elemento HTML com id "pResultado". Quando o usuário clica no botão com id "btn", o evento "click" é acionado e o valor digitado é comparado com o número escolhido aleatoriamente. Se o usuário acertar o número, é exibida uma mensagem de parabéns e o jogo termina. Se o usuário errar, a mensagem é de erro e o número de tentativas restantes é exibido pelo elemento com id "resultadoTentativas". Quando as tentativas acabam, é exibida uma mensagem de fim de jogo e o número correto é revelado. Além disso, o código remove os botões de incremento e decremento de valor dentro dos inputs do tipo number em navegadores que não suportam os pseudo-elementos "::-webkit-inner-spin-button" e "::-webkit-outer-spin-button". E também é possível acionar o botão clicando na tecla "Enter".
