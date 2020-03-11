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

    }
};

function onclick_li(str) {
    var x = document.querySelector("li > a").href;
}

function Validate() {
    var name = document.querySelector(" input#name");
    var phone = document.querySelector(" input#phone");
    var centry = document.querySelector(" input#phone");
    var personal_data = document.querySelector("input#personal_data");

    if (name.value !== '') {
        document.querySelector('#name_error').innerHTML = '';
        name.style.border = '1px solid #E7E7E7'
    }
    if (phone.value !== '') {
        document.querySelector('#phone_error').innerHTML = '';
        phone.style.border = '1px solid #E7E7E7'
    }

    if (country.value !== '') {
        document.querySelector('#country_error').innerHTML = '';
        country.style.border = '1px solid #E7E7E7'
    }

    if (name.value == '' || phone.value == '' || country.value == '' || personal_data.checked == false) {
        if (phone.value == '') {
            phone.style.border = '1px solid #CB0037'
            document.querySelector('#phone_error').innerHTML = 'Укажите телефон';
        }

        if (name.value == '') {
            name.style.border = '1px solid #CB0037'
            document.querySelector('#name_error').innerHTML = 'Укажите имя';
        }

        if (country.value == '') {
            country.style.border = '1px solid #CB0037'
            document.querySelector('#country_error').innerHTML = 'Укажите континент, страну или город';
        }

        if (personal_data.checked = false) {
            b ='<span>' + b + '</span>'; 
        }
        

        return false;
    } else {
        return true;
    };
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
    template: '<div class="select-country"><select class="select-css"><option v-for = "country in country" v-bind:value = "country" > {{country}} </option></select></div>',
    data() {
        return {
            country: [
                'Страны',
                'Russia',
                'USA'
            ],
            selectedcountry: null
        };
    }
});

Vue.component('type', {
    template: '<div class="select-type"><select class="select-css"><option v-for = "type in type" v-bind:value = "type" > {{type}} </option></select></div>',
    data() {
        return {
            type: [
                'Тип путешествия',
                'Активный',
                'На авто'
            ],
            selectedtype: null
        };
    }
});

// $(function(){
//     $('#date').daterangepicker({
//      singleDatePicker: true,
//     });
//    });
// jQuery(function() {
//     jQuery('input[name="daterange"]').daterangepicker({
//       opens: 'left'
//     }, function(start, end, label) {
//       console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
//     });
//   });