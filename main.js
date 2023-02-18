

function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio).play();


    if(elemento  && elemento.localName === 'audio'){
    elemento.play();
    }else{
        alert('Elemento ou Seletor invalido!')
    }
 }


const listaDeTeclas = document.querySelectorAll('.tecla');


for(let i = 0; i < listaDeTeclas.length; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

}
