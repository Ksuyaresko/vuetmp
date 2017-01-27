<template>
  <div id="app">
    <div>Show users
        <select v-model:value="userquan">
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="8">8</option>
        </select>
      </div>
      <ul>
    <li v-for="item in userlist" v-bind:key="item">{{item.name.first}}</li>
      </ul>
        <ul>
    <li v-for="n in numbers">{{ n }}</li>
      </ul>
    <button v-on:click="shuffle">Перемешать</button>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in items" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import _ from 'underscore'
export default {
  name: 'app',
  data () {
    return {
      userlist: [],
      userquan: "8",
      numbers: [ 1, 2, 3, 4, 5 ],
      items: [1,2,3,4,5,6,7,8,9]
    }
  },
  created:  function() {
      this.loadUser();
    },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },
      loadUser: function() {
        var app = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://randomuser.me/api/?results=20', true);
        xhr.onload = function() {
          var info = JSON.parse(xhr.responseText);
          app.userlist = info.results
        }
        xhr.send();
      }
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.flip-list-move {
  transition: transform 1s;
}

</style>
