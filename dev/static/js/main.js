$(document).ready(function () {
    svg4everybody({});
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

//fixed header
window.onscroll = function() {fixedHeader()};

const header = document.querySelector('.header')
const fixed = header.offsetTop;

function fixedHeader() {
    if (window.pageYOffset > fixed) {
        header.classList.add("header_fixed");
    } else {
        header.classList.remove("header_fixed");
    }
}

$('.form-group__select').on('click', function(){
    $(this).toggleClass('form-group__select_open')
})

var galleryThumbs = new Swiper('.thumbs-slider__gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var galleryTop = new Swiper('.thumbs-slider__gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.thumbs-slider__btn-next',
        prevEl: '.thumbs-slider__btn-prev',
    },
    thumbs: {
        swiper: galleryThumbs
    }
});

var mainSlider = new Swiper('.main-slider__container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.main-slider__pagination',
    },
    navigation: {
        nextEl: '.main-slider__btn-next',
        prevEl: '.main-slider__btn-prev',
    },
})

var productSlider = new Swiper('.product-slider__container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1265: {
            slidesPerView: 3,
            spaceBetween: 24
        },
    },
    loop: true,
    navigation: {
        nextEl: '.product-slider__btn-next',
        prevEl: '.product-slider__btn-prev',
    },
})

var sharesSlider = new Swiper('.shares-slider__container', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        800: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1265: {
            slidesPerView: 3,
            spaceBetween: 24
        },
    },
    loop: true,
    navigation: {
        nextEl: '.shares-slider__btn-next',
        prevEl: '.shares-slider__btn-prev',
    },
})

//Кнопки Добавить в / Убрать из
const btnTypeRemove = $('.card__btn_type_remove')

$(document).ready(function(){
    $(this).find(btnTypeRemove).html(`Убрать из <span class=\"icon btn__icon icon_size_xs\"><svg viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.59793 1.90909C4.59793 1.28307 5.08601 0.825552 5.71142 0.825552H10.2888C10.914 0.825552 11.4021 1.28307 11.4021 1.90909V3.09582H12.2268V1.90909C12.2268 0.827971 11.3689 0 10.2888 0H5.71142C4.63135 0 3.77318 0.827971 3.77318 1.90909V3.09582H4.59793V1.90909Z" />
<path d="M3.12384 21H12.8764C13.8168 21 14.5465 20.172 14.5465 19.1425V6.39804H1.45361V19.1425C1.45361 20.172 2.18332 21 3.12384 21ZM10.6289 8.369C10.6289 8.14105 10.8136 7.95623 11.0413 7.95623C11.269 7.95623 11.4537 8.14105 11.4537 8.369V18.1208C11.4537 18.3488 11.269 18.5336 11.0413 18.5336C10.8136 18.5336 10.6289 18.3488 10.6289 18.1208V8.369ZM7.58766 8.369C7.58766 8.14105 7.7723 7.95623 8.00003 7.95623C8.22777 7.95623 8.41241 8.14105 8.41241 8.369V18.1208C8.41241 18.3488 8.22777 18.5336 8.00003 18.5336C7.7723 18.5336 7.58766 18.3488 7.58766 18.1208V8.369ZM4.54641 8.369C4.54641 8.14105 4.73105 7.95623 4.95878 7.95623C5.18651 7.95623 5.37116 8.14105 5.37116 8.369V18.1208C5.37116 18.3488 5.18651 18.5336 4.95878 18.5336C4.73105 18.5336 4.54641 18.3488 4.54641 18.1208V8.369Z" />
<path d="M1.03093 5.57239H14.9691C15.5385 5.57239 16 5.11044 16 4.54045C16 3.97047 15.5385 3.50851 14.9691 3.50851H1.03093C0.461504 3.50851 0 3.97047 0 4.54045C0 5.11044 0.461504 5.57239 1.03093 5.57239Z" />
</svg>
</span>`)
})

$('.card__btn').on('click', function(event){
    event.preventDefault()
    const btn = $(this)
    if (btn.hasClass('card__btn_type_add')) {
        btn.removeClass('card__btn_type_add')
        btn.addClass('card__btn_type_remove')
        btn.html(`Убрать из <span class=\"icon btn__icon icon_size_xs\"><svg viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.59793 1.90909C4.59793 1.28307 5.08601 0.825552 5.71142 0.825552H10.2888C10.914 0.825552 11.4021 1.28307 11.4021 1.90909V3.09582H12.2268V1.90909C12.2268 0.827971 11.3689 0 10.2888 0H5.71142C4.63135 0 3.77318 0.827971 3.77318 1.90909V3.09582H4.59793V1.90909Z" />
<path d="M3.12384 21H12.8764C13.8168 21 14.5465 20.172 14.5465 19.1425V6.39804H1.45361V19.1425C1.45361 20.172 2.18332 21 3.12384 21ZM10.6289 8.369C10.6289 8.14105 10.8136 7.95623 11.0413 7.95623C11.269 7.95623 11.4537 8.14105 11.4537 8.369V18.1208C11.4537 18.3488 11.269 18.5336 11.0413 18.5336C10.8136 18.5336 10.6289 18.3488 10.6289 18.1208V8.369ZM7.58766 8.369C7.58766 8.14105 7.7723 7.95623 8.00003 7.95623C8.22777 7.95623 8.41241 8.14105 8.41241 8.369V18.1208C8.41241 18.3488 8.22777 18.5336 8.00003 18.5336C7.7723 18.5336 7.58766 18.3488 7.58766 18.1208V8.369ZM4.54641 8.369C4.54641 8.14105 4.73105 7.95623 4.95878 7.95623C5.18651 7.95623 5.37116 8.14105 5.37116 8.369V18.1208C5.37116 18.3488 5.18651 18.5336 4.95878 18.5336C4.73105 18.5336 4.54641 18.3488 4.54641 18.1208V8.369Z" />
<path d="M1.03093 5.57239H14.9691C15.5385 5.57239 16 5.11044 16 4.54045C16 3.97047 15.5385 3.50851 14.9691 3.50851H1.03093C0.461504 3.50851 0 3.97047 0 4.54045C0 5.11044 0.461504 5.57239 1.03093 5.57239Z" />
</svg>
</span>`)
    } else {
        btn.removeClass('card__btn_type_remove')
        btn.addClass('card__btn_type_add')
        btn.html(`Добавить в <span class=\"icon btn__icon icon_have_stroke icon_size_sm\"><svg viewBox="0 0 26 23"  fill="none" xmlns="http://www.w3.org/2000/svg">\\n' +
\t\t\t\t'<path d="M12.669 22.8629C12.8307 22.9531 13.0121 23.0002 13.1964 23L13.2274 22.9895C13.4367 22.9883 13.6412 22.9261 13.8169 22.8102C15.3159 21.7848 16.7557 20.6721 18.1292 19.4778C22.8034 15.5759 25.2749 12.6442 25.6679 10.6194C25.9014 9.80457 26.013 8.95842 25.9988 8.10958C25.9471 3.63824 22.5966 0 18.5325 0H18.3877C17.3537 0.0123051 16.3338 0.246902 15.3947 0.68847C14.4557 1.13004 13.6185 1.76865 12.9379 2.56259C12.2357 1.79164 11.3841 1.17793 10.437 0.760389C9.48997 0.34285 8.46815 0.130596 7.43638 0.137093C6.48573 0.143645 5.54594 0.343857 4.67222 0.725969C3.7985 1.10808 3.00847 1.66439 2.34852 2.36222C0.809753 3.98688 -0.034433 6.16751 0.00107655 8.42595C0.00552242 9.24198 0.131037 10.0526 0.373359 10.8304C0.859394 12.95 3.34128 15.7235 8.19129 19.5938C9.44995 20.5851 11.3263 21.9172 12.157 22.507L12.183 22.5254L12.5242 22.768L12.669 22.8629Z" />\\n' +
\t\t\t\t'</svg></span>`)
    }
})

// Меню
const menu = $('.menu')
const menuLink = menu.find('a')

menuLink.on('click', function(event){
    event.preventDefault()
    if ($(this).parent().hasClass('active') && $(this).parent().children('.submenu').length > 0) {
        if ($(this).length && $(this).attr('href')) {
            location.href = $(this).attr('href');
        }
    } else {}
    $(this).closest('li').toggleClass('active')
})

const sandwichToggle = document.querySelector('.sandwich')

if (sandwichToggle) {
    sandwichToggle.addEventListener('click', function () {
        const target = document.querySelector('.aside-menu')
        this.classList.toggle('is-active')
        target.classList.toggle('aside-menu_active')
    })
}

// Счетчики
function setupFlip(tick) {
    Tick.helper.interval(function() {
        tick.value++;
        tick.root.setAttribute(
            'aria-label',
            tick.value
        );
    }, 1000);
}

function handleTickInit(tick) {
    var counter = Tick.count.down('2021-01-01T00:00:00+01:00', {format: ['d','h','m'], language: 'ru-ru'});

    counter.onupdate = function(value) {
        tick.value = value;
    };

    counter.onended = function() {};
}

// Добавление акции
$('#add-card-btn').on('click', function () {
    const container = $('.add-product__container')
    const elements = $('.card-add-product').length
    const elem = `<div class="card-add-product">
          <a class="btn_type_delete" href="javascript:void(0);" onclick="$(this).parent().remove();">&#10006;</a>
          <div class="card-add-product__index">№${elements+1}</div>
          <div class="card-add-product__inner">
            <div class="form-group">
              <label class="card-add-product__label card-add-product__label_type_text" for="card-add-product__title"></label>
              <input class="card-add-product__title card-add-product__title_is_empty" type="text" name="cardAddProductTitle${elements}" id="card-add-product__title" value="" placeholder="Введите название">
            </div>
            <div class="form-group">
              <label class="card-add-product__label card-add-product__label_type_textarea" for="card-add-product__descr"></label>
              <textarea class="card-add-product__descr card-add-product__descr_is_empty" name="cardAddProductDescr${elements}" id="card-add-product__descr" placeholder="Введите описание" rows="3"></textarea>
            </div>
          </div>
          <div class="form-group card-add-product__thumb">
            <label class="form-group__label form-group__label_type_file" for="card-add-product__thumb-upload${elements}">
              <div id="card-add-product__img${elements}"></div>
              <div class="icon icon_size_lg icon_border_round card-add-product__icon"></div>
            </label>
            <input class="form-group__thumb-upload" type="file" name="cardAddProductThumbUpload${elements}" id="card-add-product__thumb-upload${elements}" value="">
          </div>
        </div>`

    container.append(elem)

    for (let item = 0; item < elements; item++) {
        const fileElem = document.getElementById(`card-add-product__thumb-upload${elements}`),
            fileList = document.getElementById(`card-add-product__img${elements}`);
        fileElem.addEventListener("change", handleFiles, false);

        function handleFiles() {
            if (!this.files.length) {
                return false
            } else {
                fileList.innerHTML = "";

                for (let i = 0; i < this.files.length; i++) {

                    const img = document.createElement("img");
                    img.className = 'form-group__img';
                    img.src = URL.createObjectURL(this.files[i]);
                    img.onload = function() {
                        URL.revokeObjectURL(this.src);
                    }
                    fileList.appendChild(img);

                }
            }
        }
    }

})

const fileElem = document.getElementById("card-add-product__thumb-upload"),
    fileList = document.getElementById("card-add-product__img");

    if (fileElem) {
        fileElem.addEventListener("change", handleFiles, false);
    }

function handleFiles() {
    if (!this.files.length) {
        return false
    } else {
        fileList.innerHTML = "";

        for (let i = 0; i < this.files.length; i++) {

            const img = document.createElement("img");
            img.className = 'form-group__img';
            img.src = URL.createObjectURL(this.files[i]);
            img.onload = function() {
                URL.revokeObjectURL(this.src);
            }
            fileList.appendChild(img);

        }
    }
}

//Добавление изображений
const shareFileElem = document.getElementById("shares-images__thumb-upload")

    if (shareFileElem) {
        shareFileElem.addEventListener("change", handleShareFiles, false);
    }

function handleShareFiles() {
    if (!this.files.length) {
        return false
    } else if (this.files.length > 20) {
        alert('Вы можете загружать до 19 изображений')
        return false
    } else {

        const list = $('.shares-images__list')
        for (let i = 0; i < this.files.length; i++) {
            console.log(list.find('.shares-images__item').length)
            if (list.find('.shares-images__item').length >= 20) {
                alert('Вы можете загружать до 19 изображений')
                return false
            } else {
                const img = document.createElement("img");
                img.className = 'form-group__img';
                img.src = URL.createObjectURL(this.files[i]);
                img.onload = function() {
                    URL.revokeObjectURL(this.src);
                }
                const card = `<div class="shares-images__item">
                              <a class="btn_type_delete" href="javascript:void(0);" onclick="$(this).parent().remove();">&#10006;</a>
                              <div class="form-group card-add-product__thumb shares-images__thumb">
                                <div class="shares-images__img">${img.outerHTML}</div>
                                <input class="form-group__thumb-upload" type="hidden" name="gallery[]" value="" />
                              </div>
                            </div>`
                list.append(card)
            }
        }
    }
}

$('.card-add-product__descr')
    .focus(function() {$(this).removeClass('card-add-product__descr_is_empty')})
    .blur(function() {if ($(this)[0].value == '') {$(this).addClass('card-add-product__descr_is_empty')}});
$('.card-add-product__title')
    .focus(function() {$(this).removeClass('card-add-product__title_is_empty')})
    .blur(function() {if ($(this)[0].value == '') {$(this).addClass('card-add-product__title_is_empty')}});

//Выбор даты
$('#datetimepicker-from input, #datetimepicker-to input').datetimepicker({format:'d.m.Y'});

//Кнопка вверх
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()!=0) {
            $('#toTop').fadeIn(500);
        }
        else {
            $('#toTop').fadeOut(500);
        }
    });
    if ($(this).scrollTop()!=0) {
        $('#toTop').fadeIn();
    }
    else {
        $('#toTop').fadeOut();
    }
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});