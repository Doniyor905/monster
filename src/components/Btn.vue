<template>
<router-link  :to="route" class="btn" :class="btn">{{link}}</router-link>

</template>

<script>
export default {
    name: "Btn",
    props: {
        route: String,
        link: String,
        btn: String,
    },
    data() {
        return {
            categories: [{href:"tel:+998990307544"}]
        }
    }
}
</script>

<style lang="scss">
    .btn {
        background-color: #00C4D2;
        color: #fff;
        text-decoration: none;
        font-family: "Montserrat";
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>