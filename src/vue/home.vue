<template>
    <div>
    <transition name="home-fade" appear>
<div class="text">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
    </transition>
    <input type="text" v-on:input="changeTitle">
<span>{{ title }}</span>
</div>
</template>
<script>
import _ from 'underscore'
export default {
    name: 'userslist',

    data () {
        return {
            title: " "
        }
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        }
    }

}
</script>
<style lang="scss">
.text {
    line-height: 1.4;
    text-indent: 30px;
    padding: 50px;
    max-width: 700px;
    margin: 0 auto;
}
    p {
        margin: 0 0 5px;
    }
.home-fade-enter-active {
    transition: all 1s;
}
.home-fade-enter {
    opacity: 0;
    transform: translateY(-30px);
}
</style>