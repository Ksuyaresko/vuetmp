<template>
<div id="nav">
    <button v-on:click="show = !show">
        Переключить
    </button>
    <transition name="fade" appear>
        <p v-if="show">fade test</p>
    </transition>

</div>
</template>
<script>

    export default {
        name: "nav",
        data() {
            return {
                show: true,
            }
        },
    }
</script>
<style lang="scss">
    .nav {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        &__item {
            padding: 10px;
         }
    }
    .fade-enter-active {
        transition: all 1s;
    }
    .fade-leave-active {
        transition: all 1s;
    }
    .fade-enter {
        opacity: 0;
        transform: translateY(-30px);
    }
    .fade-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>