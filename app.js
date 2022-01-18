const buttons = document.querySelectorAll(".btn1");
const articles = document.querySelectorAll("article");

//je parcour mais articles est je cree une fonction article
articles.forEach(function(article){
  //je mets mais article dans une const btn
  const btn = article.querySelector('.btn1') 
  //j'ecoute l'event sur mon click
  btn.addEventListener("click", function () {
  //je parcour mes article
    articles.forEach(function (item) {
      //si artcle est different de item
      if(article!=item){
        //je retire ma classe show text
      item.classList.remove("showText");
      }
    });
     // AJOUTER OU RETIRER CLASS SHOW TEXT
    article.classList.toggle("showText");
  });
});

const openNav = document.querySelector('.icon1');
const closeNav = document.querySelector('.fermer');
const menu = document.querySelector('.menu');



openNav.addEventListener('click', () => {
      menu.classList.add('watch')
})

closeNav.addEventListener('click', () => {
      menu.classList.remove('watch')
})