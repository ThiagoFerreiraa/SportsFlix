console.log('(Thiago Ferreira) Flappy Bird');


const sprites = new Image();

sprites.src = './sprites.png';


const canvas = document.getElementById('game-canvas');
const contexto = canvas.getContext('2d');


const background = {
    spriteX:390,
    spriteY:0,
    largura:275,
    altura:100,
    x:0,
    y:canvas.height - 209,
    desenha(){
        contexto.fillStyle = '#70c5ce'
        contexto.fillRect(0,0,canvas.width,canvas.height)

        contexto.drawImage(
            sprites,
            background.spriteX,background.spriteY,//Sprite X ,Sprite Y (Sprite = imagem)
            background.largura,background.altura,//Tamanho do recorte na Sprite  = imagem
            background.x,background.y,//Posição do sprite no canvas
            background.largura,background.altura,//Tamanho do sprite no canvas
        );

        contexto.drawImage(
            sprites,
            background.spriteX,background.spriteY,//Sprite X ,Sprite Y (Sprite = imagem)
            background.largura,background.altura,//Tamanho do recorte na Sprite  = imagem
            (background.x + background.largura),background.y,//Posição do sprite no canvas
            background.largura,background.altura,//Tamanho do sprite no canvas
        );
    }
}

const chao ={
    spriteX:0,
    spriteY:610,
    largura:224,
    altura:112,
    x:0,
    y:canvas.height - 112,
    desenha(){
        contexto.drawImage(
            sprites,
            chao.spriteX,chao.spriteY,//Sprite X ,Sprite Y (Sprite = imagem)
            chao.largura,chao.altura,//Tamanho do recorte na Sprite  = imagem
            chao.x,chao.y,//Posição do sprite no canvas
            chao.largura,chao.altura,//Tamanho do sprite no canvas
        );
        contexto.drawImage(
            sprites,
            chao.spriteX,chao.spriteY,//Sprite X ,Sprite Y (Sprite = imagem)
            chao.largura,chao.altura,//Tamanho do recorte na Sprite  = imagem
            (chao.x + chao.largura) ,chao.y,//Posição do sprite no canvas
            chao.largura,chao.altura,//Tamanho do sprite no canvas
        );
    }
    
}



const FlappyBird = {
    spriteX:0,
    spriteY:0,
    largura:33,
    altura:24,
    x:10,
    y:50,
    gravidade:0.25,
    velociadade:0,


    atualiza(){
        FlappyBird.velociadade = FlappyBird.velociadade + FlappyBird.gravidade;
        FlappyBird.y = FlappyBird.y + FlappyBird.velociadade;
    },

    desenha(){
        contexto.drawImage(
            sprites,
            FlappyBird.spriteX,FlappyBird.spriteY,//Sprite X ,Sprite Y (Sprite = imagem)
            FlappyBird.largura,FlappyBird.altura,//Tamanho do recorte na Sprite  = imagem
            FlappyBird.x,FlappyBird.y,//Posição do sprite no canvas
            FlappyBird.largura,FlappyBird.altura,//Tamanho do sprite no canvas
        );
    }
}





function loop(){
    FlappyBird.atualiza();
    background.desenha();
    chao.desenha();
    FlappyBird.desenha();
    

    
    requestAnimationFrame(loop);
}


loop();