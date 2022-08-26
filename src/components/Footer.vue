<template>
    <div class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__item">
                    <div class="footer__contact">
                        <div class="footer__icon">
                            <img src="@/assets/image/phone.png" alt="">
                        </div>
                        <div class="footer__contact-text"><span>Получите консультацию</span>
                            <a class="footer__phone-link" href="tel:+998930060040">+998 93 006 00 40
                            </a>
                            <a class="footer__phone-link" href="tel:+998900065000">+998 90 006 50 00
                            </a>
                        </div>
                    </div>
                    <div class="footer__adres">Адрес: Lorem ipsum dolor adres</div>
                </div>
                <div class="footer__item">
                    <div class="footer__soc-title">
                        Соц.сети
                    </div>
                        <a href="https://instagram.com/monsteruz.uz?igshid=NDBlY2NjN2I=" class="soc-link-bac">
                            <div class="footer__soc-link">
                                <img src="../assets/image/insta-icon.svg" alt="">
                            </div>
                            Instagram.com

                        </a>

                        <a href="#!" class="soc-link-bac">
                            <div class="footer__soc-link">
                                <img src="../assets/image/facebook-cin.svg" alt="">
                            </div>
                            facebook.com

                        </a>

                        <a href="https://t.me/monsteruzuz" class="soc-link-bac">
                            <div class="footer__soc-link">
                                <img src="../assets/image/teleg-icon.svg" alt="">
                            </div>
                            telegram.com
                        </a>
                    </div>

            </div>
            <div class="footer__copyright">Все права защищены © Monster | Разработка сайта - <a href="/"
                    class="footer__copy-link">doniyor-web.uz</a>
            </div>

        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/main.scss";

.footer {
    margin-top: 80px;
    background-color: #000000;
    padding: 60px 0px 50px 0px;
    color: $blue;

    &__title {
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__text {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 18px;
        width: 265px;
    }

    &__contact {
        display: flex;
        align-items: center;
    }

    &__contact-text {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

    &__contact-text span {
        font-size: 14px;
    }

    &__phone-link {
        font-size: 20px;
        text-decoration: none;
        color: $blue;
        font-weight: 700;
    }

    &__copyright {
        text-align: center;
        margin-top: 40px;
    }

    &__copy-link {
        text-decoration: none;
        color: $blue;
        font-weight: 700;
    }

    &__soc-title {
        font-weight: 600;
        font-size: 30px;
        color: $blue;
    }

    &__soc-link{
        background-color: $blue;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }
    &__inner {
        display: flex;
        gap: 30px;
    }
  @media (max-width:697px) { 
      &__inner {
        display: flex;
        justify-content: center;
    }
   }
  @media (max-width:487px) { 
      &__inner {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
   }

}
.soc-link-bac {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    color: $blue;
}
</style>
