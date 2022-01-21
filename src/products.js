// ? Tableau

const product = [
    {
      id: 1,
      title: 'Bobbie',
      category: 'Sac a dos',
      price: 179.99,
      img: './img/bobbi1',
      desc: `Sac à dos de ville en cuir marron - Sac rétro unisexe`,
    },
    {
      id: 2,
      title: 'Paula',
      category: 'Sac a dos',
      price: 139.99,
      img: './img/Paula.jpg',
      desc: `Petit sac à dos en cuir marron et toile bleue foncé `,
    },
    {
      id: 3,
      title: 'Nolan',
      category: 'Sac a dos',
      price: 129.99,
      img: './img/ingard.jpg',
      desc: `sac à dos sac à dos en cuir avec fermeture éclair et boucle antivol`,
    },
    {
      id: 4,
      title: 'Edvard',
      category: 'Sac a dos',
      price: 120.99,
      img: './img/Edvard.jpg',
      desc: `Sac à dos de ville vintage en cuir - Sac à dos de ville vintage `,
    },
    {
      id: 5,
      title: 'Ruben',
      category: 'Sac de voyage',
      price: 259.99,
      img: './img/rubben.jpg',
      desc: `Sac week-end Sac en cuir Bagage à main avec Imperméable`,
    },
    {
      id: 6,
      title: 'Hall',
      category: 'Sac de voyage',
      price: 229.99,
      img: './img/hall.jpg',
      desc: `Sac de sport Sac week-end Bagage à main Noir Cuir`,
    },
    {
      id: 7,
      title: 'Lawrence',
      category: 'Portefeuille',
      price: 24.99,
      img: './img/Lawrence.jpg',
      desc: `Portefeuille Porte-monnaie Hommes Marron Cuir `,
    },
    {
      id: 8,
      title: 'Easton',
      category: 'Portefeuille',
      price: 34.99,
      img: './img/eastone.jpg',
      desc: `Portefeuille porte-monnaie en cuir vintage`,
    },
    {
      id: 9,
      title: 'Klara',
      category: 'Ceinture',
      price: 24.99,
      img: './img/Klara.jpg',
      desc: `Ceinture en cuir marron Unisexe`,
    },
    {
      id: 10,
      title: 'Julius',
      category: 'Ceinture',
      price: 16.99,
      img: './img/Julius.jpg',
      desc: `Ceinture en cuir unisexe`,
    },
    {
      id: 11,
      title: 'Neil',
      category: 'Porte document',
      price: 79.99,
      img: './img/Neil.jpg',
      desc: `Sac porte-documents  Sac à bandoulière Vintage Cuir Noir`,
    },
    {
      id: 12,
      title: 'Maxwell',
      category: 'Porte document',
      price: 89.99,
      img: './img/Maxwell.jpg',
      desc: `Sac porte-documents Italien Cuir Noir`,
    },
  ];
  
  // ? Constantes
  
  // ? FOrce l'affichage de tout le tableau
  window.addEventListener('domcontentloaded', show_menus(product));
  
  // ? Parcourt les catégories du tableau
  const categories = product.map(function (article) {
    return article.category;
  });
  // console.log(categories);
  
  // ? Réduit les catégories pour éviter les doublons
  const reducer = categories.reduce(
    function (acc, accValue) {
      if (acc.indexOf(accValue) === -1) {
        acc.push(accValue);
      }
      return acc;
    },
    ['all']
  );
  // console.log(reducer);
  
  // ? Affiche les boutons par rapport à la catégorie donnée
  const navbar = reducer.map(function (category) {
    return `<li class="btn" data-id="${category}">${category}</li>`;
  });
  // console.log(navbar);
  document.querySelector('.indicator').innerHTML = navbar.join('');
  
  // ? Sélectionne les boutons
  const btns = document.querySelectorAll('.btn');
  
  // ? Parcourt le tableau et remplace les données
  function show_menus(array) {
    const menus = array.map(function (article) {
      return `
      <li  data-price="" id="${article.id}">
      <picture>
          <img src="${article.img}" alt="">
      </picture>
      <div class="detail">
          <p class="icon">
             <span><i class="far fa-heart"></i></span>
             <span><i class="far fa-share-square"></i></span>
             <span><i class="fas fa-shopping-basket"></i></span>
          </p>
          <span> <h2>${article.title}</h2> </span>
          <span>${article.desc}</span>
          <small>Acheter</small>
      </div>
      <h4>€${article.price}</h4>
  </li>
         `;
    }); //? met dans un nouveau tableau le html créé
    // console.log(menus);
    //? Affiche les éléments du tableau
    document.querySelector('.items').innerHTML = menus.join('');

  }
  // console.log(btns);
  
  // ? Filtre les article par rapport aux catégories
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const articles = product.filter(function (item) {
        if (btn.dataset.id === item.category) {
          return item;
        }
      });
  
      // ? Affiche les article quand on clique sur le bouton all
      show_menus(articles);
      if (btn.dataset.id === 'all') {
        show_menus(product);
      }
    });
  });
  