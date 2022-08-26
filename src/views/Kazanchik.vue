<template>
    <div class="pro">
        <div class="container">
            <div class="pro__inner">
                <div class="pro__item">
                    <img src="@/assets/image/kazanchik.png" class="pro__img" alt="">
                </div>
                <div class="pro__item">
                    <div class="pro__title">
                       MONSTER - КАЗАНЧИК Чистящие средство для казанов
                    </div>
                    <div class="pro__text">
                        <span>Описания:</span>
                        Способ применения: (Нанести на горячую поверхности.) Распылите средство на загрязненный поверхности и оставить на несколько минут (3-5 минут). Очистить жёсткой щёткой и смыть чистой водой.
                    </div>
                    <div class="pro__phone-text">
                        <span>Узнать подробнее позвоните нам</span>
                        <a href="tel:+998930060040" class="pro__btn">Позвоните нам</a>
                    </div>
                    <video width="450" controls class="pro__video"></video>
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
    components: { Footer, Btn },
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";

</style>