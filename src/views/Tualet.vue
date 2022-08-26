<template>
    <div class="pro">
        <div class="container">
            <div class="pro__inner">
                <div class="pro__item">
                    <img src="@/assets/image/tualet.png" class="pro__img" alt="">
                </div>
                <div class="pro__item">
                    <div class="pro__title">
                        MONSTER - Чистящее средство для очистки кафеля, туалетов и ванн.
                    </div>
                    <div class="pro__text">
                        <span>Описания:</span>
                        На нержавейку нельзя использовать.

                        Способ применения: При первом применении нажать на дозатор пульверизатора, чтобы удалить
                        блокировоку, затем нажимать до появления средство. Распылять с расстояния приблизительно 20 см.
                        от поверхности. Оставить на несколько минут на поверхности (1-3 мин.) Очистить жёсткой щёткой и
                        смыть чистой водой.
                    </div>
                    <div class="pro__phone-text">
                        <span>Узнать подробнее позвоните нам</span>
                        <a href="tel:+998930060040" class="pro__btn">Позвоните нам</a>
                    </div>
                    <video width="450" controls class="pro__video" src="@/assets/basseyn/basseyn.mp4" type="video/mp4">
                        
                    </video>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Btn from "@/components/Btn.vue";
export default {
    name: 'app',
    components: { Footer, Btn, },
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";
</style>