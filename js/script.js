// const hamburger = document.querySelector(`.hamburger`);

// hamburger.addEventListener(`click`, (e) => {
//   e.target.closest(`.hamburger`).classList.toggle(`hamburger--active`);
//   e.target.closest(`.menu`).querySelector(`.menu__list`).classList.toggle(`menu__list--active`);
// });

function dop() {
    var x = document.querySelectorAll(".avia");
    var i;
    for (i = 0; i < x.length; i++) {
        if (x[i].innerHTML == "") {
            x[i].style.display = "none";
        }
        console.log(x[i].innerHTML);

    }
};

function onclick_li(str) {
    var x = document.querySelector("li > a").href;
    console.log(str);
}

var app = new Vue({
    el: '#app',
    data: {
        items: [{
                link: '/index.html',
                text: 'Путешествия'
            },
            {
                link: '/about.html',
                text: 'О нас'
            },
            {
                link: '/index.html',
                text: 'Отзывы'
            },
            {
                link: '/blog.html',
                text: 'Блог'
            },
        ],
        show: false,
    },
});
Vue.component('country', {
    template: '<div><select class="select-css"><option v-for = "country in country" v-bind:value = "country" > {{country}} </option></select></div>',
    data() {
        return {
            country: [
                'Russia',
                'USA'
            ],
            selectedcountry: null
        };
    }
});

Vue.component('type', {
    template: '<div><select><option v-for = "type in type" v-bind:value = "type" > {{type}} </option></select></div>',
    data() {
        return {
            type: [
                'Тип путешествия',
                'Активный',
                'На авто'
            ],
            selectedcountry: null
        };
    }
});
// var sel = new Vue({
//     el: '#app > #select_country',
//     data: {
//         country:[
//             'Russia',
//             'USA'
//         ],
//         selectedcountry:null
//     }
// });