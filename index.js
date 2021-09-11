
 function nome(){
  let arr=["evil+dead","star+wars","minha+mãe+é+uma+peça","pokemon","vampire+hunter+D"]
  for(let i=0;i<arr.length;i++){
    $.ajax({url:`http://www.omdbapi.com/?t=${arr[i]}&apikey=42cfe2b5`,success:function(filme){
      $('.imagens')[0].innerHTML+=`<div id="film3" data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-title="${filme.Title}" data-plot="${filme.Plot}" ><img src="${filme.Poster}"></div>`
    }});
  }
 }
 setTimeout(function (){
  new Glider(document.querySelector('.imagens'), {
    slidesToShow: 1,
    dots: '#dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
 },2000)
document.addEventListener('click', function(event){
  if(event.target.id=="film3"){
    let nome_filme=event.target.getAttribute('data-title');

    document.querySelector('.modal-title').innerText = nome_filme;
    let descricao_filme=event.target.getAttribute('data-plot');
    document.querySelector('.modal-body').innerText = descricao_filme;
  }
})
 nome()