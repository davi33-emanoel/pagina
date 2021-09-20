
 function nome(){
  let arr=['Orphan+Black', 'Guardians+of+the+Galaxy','Doctor+Who','Cosmos:+A+Spacetime+Odyssey','Inception', 'Arrival','the+Matrix', 'The+Theory+of+Everything', 'Hidden+Figures', 'The+Imitation+Game', 'Interstellar', 'Deus+Ex-+Machina']
  for(let i=0;i<arr.length;i++){
    $.ajax({url:`https://www.omdbapi.com/?t=${arr[i]}&apikey=42cfe2b5`,success:function(filme){
      $('.imagens')[0].innerHTML+=`<div id="film3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-title="${filme.Title}" data-plot="${filme.Plot}" ><img src="${filme.Poster}"></div>`
    }});
  }
 }

 function film(){
  let arr=['Orphan+Black', 'Guardians+of+the+Galaxy','Doctor+Who','Cosmos:+A+Spacetime+Odyssey','Inception', 'Arrival','the+Matrix', 'The+Theory+of+Everything', 'Hidden+Figures', 'The+Imitation+Game', 'Interstellar', 'Deus+Ex-+Machina']
  for(let i=0;i<arr.length;i++){
    $.ajax({url:`https://www.omdbapi.com/?t=${arr[i]}&apikey=42cfe2b5`,success:function(filme2){
      $('.filme4')[0].innerHTML+=`<div class="vitrine"><img src="${filme2.Poster}" id="films" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-title="${filme2.Title}" data-plot="${filme2.Plot}"></div>`
    }});
  }
 }
 
 setTimeout(function (){
  let slider=new Glider(document.querySelector('.imagens'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  slideAutoPaly(slider, '.imagens');

function slideAutoPaly(glider, selector, delay = 4000, repeat = true) {
    let autoplay = null;
    const slidesCount = glider.track.childElementCount;
    let nextIndex = 1;
    let pause = true;

    function slide() {
        autoplay = setInterval(() => {
            if (nextIndex >= slidesCount) {
                if (!repeat) {
                    clearInterval(autoplay);
                } else {
                    nextIndex = 0;
                }
            }
            glider.scrollItem(nextIndex++);
        }, delay);
    }

    slide();

    var element = document.querySelector(selector);
    element.addEventListener('mouseover', (event) => {
        if (pause) {
            clearInterval(autoplay);
            pause = false;
        }
    }, 300);

    element.addEventListener('mouseout', (event) => {
        if (!pause) {
            slide();
            pause = true;
        }
    }, 300);}
  
 },1000)

document.addEventListener('click', function(event){
  if(event.target.id=="film3"){
    let nome_filme=event.target.getAttribute('data-title');

    document.querySelector('.modal-title').innerText = nome_filme;
    let descricao_filme=event.target.getAttribute('data-plot');
    document.querySelector('.modal-body').innerText = descricao_filme;
  }

   else if(event.target.id=="films"){
    let nome_filme=event.target.getAttribute('data-title');

    document.querySelector('.modal-title').innerText = nome_filme;
    let descricao_filme=event.target.getAttribute('data-plot');
    document.querySelector('.modal-body').innerText = descricao_filme;
  }
  console.log(event)
})
 nome(), film()
