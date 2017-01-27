<template>
  <div id="userslist">
      <div class="users__title">Show Users
        <select v-model:value="listitems">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
        <ul class="userslist">
          <li class="users__row"
              v-for="user in computedList">
            <img class="users__pic" v-bind:src="user.picture.thumbnail" alt="">
            <span class="users__name">{{user.name.first}} {{user.name.last}}</span>
            <span class="users__email">{{user.email}} {{user.cell}}</span>
          </li>
        </ul>
  </div> <!-- end of #app -->
</template>

<script>
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
  computed: {
    computedList: function () {
      var vm = this;
      return this.userlist.filter(function (item) {
        return item.name.last.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
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
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.height = 0
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
    }
  }
}
</script>

<style>
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
    margin: 0;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 0 0 4px 4px;
  }
  .users__row {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
  select {
    border: 0;
    outline: 0;
    background: transparent;
  }

</style>
