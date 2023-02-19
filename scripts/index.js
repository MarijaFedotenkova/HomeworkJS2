"use strict"
 
console.log("Connected")

// Создать квадратный div средствами JS и при наведении курсора на него цвет div-а меняется на введенный пользователем через prompt (вариант со * - цвет рандомно меняется, без пользовательского ввода, для этого можно посмотреть в сторону нового метода Math.random())
 
const div = document.createElement("div");

div.style.widht = "100px";
div.style.height = "100px";
div.style.backgroundColor = "blue";

// div.addEventListener("mouseover", function (){
//     // const color = prompt("Введите цвет в формате #......")
//     div.style.backgroundColor = color;
// });
div.addEventListener("mouseover", function(){
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = randomColor;
})

document.body.appendChild(div);

// // //Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами. При повторном нажатии класс active удаляется.
const cardsNumber = document.querySelectorAll(".cardNum");

cardsNumber.forEach(card => {
    card.addEventListener("click", function(){
        if(card.classList.contains("active")){
            card.classList.remove("active");
        }else{
            card.classList.add("active")
        }
    })
})

//Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на парагараф текст должен меняться на звездочки. При повторном клике мы должны вновь увидеть текст.

const paragraphs = ["Первый параграф", "Второй параграф", "Третий параграф", "Четвертый параграф"];

const container = document.getElementById("paragraph-container");

paragraphs.forEach((text) => {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  paragraph.classList.add("paragraph");

  paragraph.addEventListener("click", () => {
    if (paragraph.innerText === text) {
      paragraph.innerText = "*".repeat(text.length);
    } else {
      paragraph.innerText = text;
    }
  });

  container.appendChild(paragraph);
});

  //В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

  const images = [
    "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg",
    "https://mobimg.b-cdn.net/v3/fetch/9d/9db2d4683d92f5f2045e9142fbd82633.jpeg",
    "https://fikiwiki.com/uploads/posts/2022-02/1644984017_1-fikiwiki-com-p-kartinki-zhivotnikh-na-avu-1.jpg",
    "https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg",
    "https://resheto.net/images/mater/kartinka_motivatsiya_tsitata_9.jpg",
  ];

  const gallery = document.getElementById("gallery");
  const mainImage = document.getElementById("main-image");

  images.forEach((src) => {
    const thumbnail = document.createElement("img");
    thumbnail.src = src;
    thumbnail.classList.add("thumbnail");

    thumbnail.addEventListener("click", () => {
      mainImage.src = src;
      const selectedThumbnail = document.querySelector(".selected");
      if (selectedThumbnail) {
        selectedThumbnail.classList.remove("selected");
      }
      thumbnail.classList.add("selected");
    });

    gallery.appendChild(thumbnail);
  });

  //Доработать задачу с предыдущего урока (с книжным магазином) - вывести сформированные данные на страницу (можно использовать тег article, внутрь положить заголовки, параграфы и тп). Все элементы должны генерироваться через JS. У каждой карточки должна быть кнопка “Добавить в корзину”, при клике на которую текст этой кнопки меняется на “Добавлено!”. Посредством CSS и присвоения/удаления классов элементам Вы можете их стилизовать, как и саму страницу Вашего магазина: подключить шрифты, добавить стили для обертки, которая будет держать в себе эти книжки и тп, на Ваш вкус. 
  const books = [
    {
        id: 1,
        title: 'Зелённая миля',
        author: 'Стивен Кинг',
        description: 'Стивен Кинг приглашает читателей в жуткий мир тюремного блока смертников, откуда уходят, чтобы не вернутьс',
        photo: 'https://s1.livelib.ru/boocover/1000966838/200x305/7df1/boocover.jpg',
        price: 10,
        discount: true,
        link: function() {
            return `books/items-${id}`;
        },
        calculatePrice: function () {
            return this.price * 0.8;
        }
    },
    {
        id: 2,
        title: 'Сияние',
        author: 'Стивен Кинг',
        description: 'ультовый роман Стивена Кинга',
        photo: 'https://s1.livelib.ru/boocover/1005666256/200x305/216a/boocover.jpg',
        price: 15,
        discount: false,
        link: function() {
            return `books/items-${id}`;
        },
        calculatePrice: function () {
            return this.price;
        }
    }
];

