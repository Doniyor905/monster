<template>
  <div class="home">

    <swiper class="home__inner mySwiper" :autoplay="{
      delay: 1500,
      disableOnInteraction: false,
    }" :modules="modules">
      <swiper-slide class="swiper-img"><img src="@/assets/image/asdgsdgsdg.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-img"><img src="@/assets/image/asdgsdgsdg.png" alt=""></swiper-slide>
      <swiper-slide class="swiper-img"><img src="@/assets/image/asdgsdgsdg.png" alt=""></swiper-slide>
    </swiper>
  </div>
  <div class="product">
    <div class="container">
      <h2 class="product__title">Продукты</h2>
      <div class="product__inner">
        <div class="product__item-box">
          <div class="product__item">
            <div class="prod-img">
              <img src="@/assets/image/1.png" class="product__img" alt="">
            </div>
            <div class="product__text">MONSTER - Чистящее средство для очистки брусчатки.</div>
            <div class="prodcut__btn">
              <Btn route="/brus" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>

          <div class="product__item">
            <div class="prod-img">
              <img src="@/assets/image/2.png" class="product__img" alt="">
            </div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки камня и гранита.</div>
            <div class="prodcut__btn">
              <Btn route="/granit" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
        </div>

        <div class="product__item-box">
          <div class="product__item">
            <div class="prod-img">
              <img src="@/assets/image/3.png" class="product__img" alt="">
              
            </div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки кафеля, туалетов и
              ванн. </div>
            <div class="prodcut__btn">
              <Btn route="/tualet" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
          <div class="product__item">
            <div class="prod-img">
              <img src="@/assets/image/4.png" class="product__img" alt="">
            </div>
            <div class="product__text">MONSTER - Анти Ржавчина </div>
            <div class="prodcut__btn">
              <Btn route="/jir" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
        </div>


      </div>
      <div class="product__inner">
        <div class="product__item-box">

          <div class="product__item">
            <div class="prod-img"> <img src="@/assets/image/5.png" class="product__img" alt="">
            </div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки стенок бассейна.</div>
            <div class="prodcut__btn">
              <Btn route="/basyen" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>

          <div class="product__item">
            <div class="prod-img">
              <img src="@/assets/image/6.png" class="product__img" alt="">
            </div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки камня и гранита</div>
            <div class="prodcut__btn">
              <Btn route="/super" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
        </div>

        <div class="product__item-box">
          <div class="product__item">
            <div class="prod-img"><img src="@/assets/image/7.png" class="product__img" alt=""></div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки ДНА унитазов.</div>
            <div class="prodcut__btn">
              <Btn route="/dna" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
          <div class="product__item">
            <div class="prod-img"><img src="@/assets/image/8.png" class="product__img" alt=""></div>
            <div class="product__text">MONSTER - Чистящее средство
              для очистки остатков цемент, фуги и др</div>
            <div class="prodcut__btn">
              <Btn route="/antiment" link="Подробнее" btn="product__all"></Btn>
            </div>
          </div>
        </div>
      </div>
      <div class="product__inner">
        <div class="product__item">
          <div class="prod-img"><img src="@/assets/image/9.png" class="product__img" alt=""></div>
          <div class="product__text">MONSTER - Антижир чистящее
            для жирных поверхностей</div>
          <div class="prodcut__btn">
            <Btn route="/antijir" link="Подробнее" btn="product__all"></Btn>
          </div>
        </div>

        <div class="product__item">
          <div class="prod-img"><img src="@/assets/image/10.png" class="product__img" alt=""></div>
          <div class="product__text">MONSTER - Казанчик чистящее
            средство для казанов</div>
          <div class="prodcut__btn">
            <Btn route="/kazanchik" link="Подробнее" btn="product__all"></Btn>
          </div>
          <div class="container">
            <div class="conytao">
              <nav>
                
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue"
import Btn from "@/components/Btn.vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper";

import "swiper/css";
export default {
  components: {
    Btn, Footer, Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
.prod-img {
  height: 220px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.swiper-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media(max-width:1600px) {
  .swiper-img {
    display: block;
    align-items: center;
    justify-content: center;
    max-width: 1600px;
  }

  .swiper-img img {
    width: 100%;
  }
}

.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  &__inner {
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

  }
}

.product {
  &__item-box {
    display: flex;
    width: 50%;
    justify-content: space-around;
  }
  &__img {
    max-width: 75px;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &__inner:nth-child(4) {
    justify-content: center;
    gap: 20px;
  }

  &__title {
    text-align: center;
    font-size: 50px;
    color: #fff;
    margin-top: 30px;
    margin-bottom: 60px;
  } 

  &__item {
    background-color: #ffffff;
    width: 269px;
    height: 380px;
    border: 1px solid #eee;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 15px;

  }

  &__text {
    color: $blue;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 16px;
  }

  &__all {
    width: 211px;
    height: 52px;
    border-radius: 3px;
    font-weight: 600;
  }


  @media (max-width:1147px) {
    &__item {
      width: 230px;
    }

    &__text {
      font-size: 12px;
      margin-top: 10px;
    }

    &__inner {
      justify-content: space-around;
    }
  }

  @media (max-width:991px) {
    &__inner {
      flex-direction: column;
      margin-bottom: 0;
    }

    &__item-box {
      display: flex;
      margin-bottom: 21px;
      margin-bottom: 21px;
      gap: 21px;
    }

    &__item {
      margin-bottom: 21px;
    }

    &__inner:nth-child(4) {
      flex-direction: row;
      align-items: flex-start;
    }

    &__item:nth-child(2) {
      margin-bottom: 0;
    }
  }

  @media (max-width:499px) {
    &__inner {
      flex-direction: column;
    }

    &__item-box {
      display: flex;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      gap: 0px;
    }

    &__item {
      width: 298px;
    }

    &__inner:nth-child(4) {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width:499px) {}

}

.about {
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    text-align: center;
    color: #fff;
    font-size: 50px;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  &__left {
    font-size: 14px;
    color: #fff;
    width: 550px;
    line-height: 180%;
  }
}
</style>