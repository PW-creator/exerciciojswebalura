function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio' ){
        elemento.play()
    }else{
        console.log('Elemento Não Encontrado')
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');  


for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio)
    }
    
    //onkeydown - tecla pressionada
    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
        tecla.classList.add('ativa')
        }
    }

    //onkeyup - tecla solta
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}
