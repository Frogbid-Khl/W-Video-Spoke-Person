let SwiperTop = new Swiper('.swiper--top', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

let SwiperBottom = new Swiper('.swiper--bottom', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        reverseDirection: true
    },
    loop: true,
    loopedSlides: 15,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

setCookie('width', getWidth());

window.setInterval(async function () {
    if (getWidth() !== parseInt(getCookie('width'))){
        setCookie('width', getWidth());

        $(".swiper-container").each(function(){
            this.swiper.destroy();
        });


        new Swiper('.swiper--top', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
                delay: 1,
            },
            loop: true,
            slidesPerView:'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });

        new Swiper('.swiper--bottom', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 6000,
            autoplay: {
                delay: 1,
                reverseDirection: true
            },
            loop: true,
            loopedSlides: 15,
            slidesPerView:'auto',
            allowTouchMove: false,
            disableOnInteraction: true
        });
    }
}, 2000);


function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
