<template>
    <div id="userslist">
        <div class="users__title">Show Users
            <select v-model:value="listitems">
                <option value="-1">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            <input v-model="searchText">
            <button v-on:click="shuffle2">Перемешать</button>
        </div>
        <transition name="fade" appear>
            <div class="userslist">
                <transition-group
                        name="user-flip-list"
                        tag="div"
                        >
                <div class="users__row"
                    v-for="(user, index) in userlist"
                    v-bind:key="user">
                    <span>{{ index }}</span>
                    <img class="users__pic" v-bind:src="user.picture.thumbnail" alt="">
                    <span class="users__name">{{user.name.first}} {{user.name.last}}</span>
                    <span class="users__email">{{user.email}} {{user.cell}}</span>
                    <button v-on:click="userlist.splice(index, 1)">X</button>
                </div>
                </transition-group>
            </div>
        </transition>
    </div> <!-- end of #app -->
</template>
<script>
import _ from 'underscore'
export default {
    name: 'userslist',

    data () {
        return {
            query: '',
            userlist: [
            ],
            listitems: "5"
        }
    },
    created:  function() {
        this.loadUser();
        this.loadUserQuantity();
    },
    watch: {
        listitems: function() {
            this.loadUserQuantity();
        }
    },
    methods: {
        removefromlist: function() {
            this.userlist.splice(1, 1);
        },
        loadUser: function() {
            var app = this;
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://randomuser.me/api/?results=5', true);
            xhr.onload = function() {
                var info = JSON.parse(xhr.responseText);
                app.user.name = info.results[0].name.first  + ' ' + info.results[0].name.last;
                app.user.pic = info.results[0].picture.thumbnail;
                app.userlist = info.results;
                console.log(app.userlist)
            };
            xhr.send();
        },
        loadUserQuantity: function() {
            var app = this;
            var xhr = new XMLHttpRequest();
            var usersQuantity = this.listitems;
            xhr.open('GET', 'https://randomuser.me/api/?results=' + usersQuantity, true);
            xhr.onload = function() {
                var info = JSON.parse(xhr.responseText);
                app.userlist = info.results;
                console.log(app.userlist);
            };
            xhr.send();
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                        el,
                        { opacity: 1, height: '1.6em' },
                        { complete: done }
                )
            }, delay)
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function () {
                Velocity(
                        el,
                        { opacity: 0, height: 0 },
                        { complete: done }
                )
            }, delay)
        },
        shuffle2: function () {
            this.userlist = _.shuffle(this.userlist)
        },
        beforeEnter: function (el) {
            el.style.opacity = 0
            el.style.height = 0
        },

    }
}
</script>
<style lang="scss">
    .users__pic {
        border-radius: 50%;
        margin-left: 8px;
    }
    .users__name {
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.6);
        min-width: 170px;
        padding: 0 10px;
        display: inline-block;
    }
    .users__title {
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 4px 4px 0 0;
        text-align: center;
        font-size: 20px;
    }
    .userslist {
        list-style:none;
        max-width: 800px;
        margin: 0 auto;
        padding: 10px;

        border-radius: 0 0 4px 4px;
    }
    .users__row {
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid white;
        display: flex;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.1);
        transform: translateY(0px);
        opacity: 1;
            &:last-child {
            border-bottom: 0;
             }
    }
    select {
        border: 0;
        outline: 0;
        background: transparent;
    }
    .user-flip-list-move {
        transform: translateY(0px);
        transition: transform 1s linear;
    }
    .user-flip-list-leave-active {
        transition: transform 1s, opacity 0.5s;
        &~.users__row {
            transform: translateY(-105%);
            transition: transform 1s linear;
          }

    }
    .user-flip-list-leave-to {
        transform: translateX(-60px);
        opacity: 0;
    }



    .fade-enter-active {
        transition: all 1s 0.2s;
    }
    .fade-enter {
        opacity: 0;
        transform: translateY(-30px);
    }



</style>