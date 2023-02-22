const data = [
    {
        id: 1,
        title: "Elephant",
        image: "/images/elephant.avif",
        description: "Elephant",
        category: 'Herbivore',
    },
    {
        id: 2,
        title: "Grmpy Cat",
        image: "/images/grumpy-cat.avif",
        description: "Grmpy Cat",
        category: 'Cute',
    },
    {
        id: 3,
        title: "Fish",
        image: "/images/anemone-fish.avif",
        description: "Fish",
        category: 'Herbivore',
    },
    {
        id: 4,
        title: "Butterfly",
        image: "/images/butterfly.avif",
        description: "Butterfly",
        category: 'Cute',
    },
    {
        id: 5,
        title: "Deer",
        image: "/images/deer.avif",
        description: "Deer",
        category: 'Herbivore',
    },
    {
        id: 6,
        title: "Tiger",
        image: "/images/tiger.avif",
        description: "Tiger",
        category: 'Carnivore',
    },
    {
        id: 7,
        title: "Toucan",
        image: "/images/toucan.avif",
        description: "Toucan",
        category: 'Cute',
    }
];

let menu = document.querySelectorAll('.nav__link');
menu.forEach(item => {
    item.addEventListener('click', function(){
        menu.forEach(item => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    })
});

let portfolio = document.querySelector('.portfolio');
let portfolioItem = data.map(item => (
    `<div class="portfolio__item" data-item=${item.category}>
        <img src="${item.image}" alt="${item.title}" />
        <span class="portfolio__text">${item.title}</span>
    </div>`
));
portfolioItem.forEach((item)=>{
    portfolio.innerHTML += item
});

let portfolioItems = document.querySelectorAll('.portfolio__item');
let categories = document.querySelectorAll('.category');
categories.forEach(category => {
    portfolioItems.forEach(portfolio => {
        category.addEventListener('click', function(){
            categories.forEach(category => {
                category.classList.remove('active');
            })
            this.classList.add('active');
            if(category.textContent == "All"){
                portfolio.classList.add('show');
                portfolio.classList.remove('hide');
            }
            else if(portfolio.dataset.item == category.textContent){
                portfolio.classList.add('show');
                portfolio.classList.remove('hide');
            }
            else{
                portfolio.classList.add('hide');
                portfolio.classList.remove('show');
            }
        })
    })
})
