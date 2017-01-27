<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <div class="lead-form">
            <h1 class="text-center">Fill Out This Form</h1>
            <hr />
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Starting Zip" v-model="startingZip">
                <span class="city-span">{{startingCity}}</span>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Ending Zip" v-model="endingZip">
                <span class="city-span">{{endingCity}}</span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button class="btn btn-primary btn-block" id="submit-form">Submit</button>
              </div>
            </div>
          </div><!-- end of .lead-form -->
        </div> <!-- end of .col-md-6.col-md-offset-3 -->
      </div> <!-- end of .row -->
      <div class="users">
        <span>Hello</span>
        <span class="users__name">{{user.name}}</span>
        <img class="users__pic" v-bind:src="user.pic" alt="">
      </div>
      <div class="users__title">Show Users
        <select v-model:value="listitems">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
        <ul class="userslist">
          <li class="users__row"
              v-for="user in userlist">
            <img class="users__pic" v-bind:src="user.picture.thumbnail" alt="">
            <span class="users__name">{{user.name.first}} {{user.name.last}}</span>
            <span class="users__email">{{user.email}} {{user.cell}}</span>
          </li>
        </ul>
    </div> <!-- end of .container -->
  </div> <!-- end of #app -->
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      startingZip: '',
      startingCity: '',
      endingZip: '',
      endingCity: '',
      user: {
        name: "user",
        pic: ' '
      },
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
    startingZip: function() {
      this.startingCity = "";
      if (this.startingZip.length == 5) {
        this.lookupStartingZip()
      }
    },
    endingZip: function() {
      this.endingCity = "";
      if (this.endingZip.length == 5) {
        this.lookupEndingZip()
      }
    },
    listitems: function() {
      this.loadUserQuantity();
    },
  },
  methods: {
    lookupStartingZip: function() {
      var app = this;
      this.startingCity = "serching...";
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ziptasticapi.com/' + app.startingZip, true);
      xhr.onload = function() {
        var info = JSON.parse(xhr.responseText);
        app.startingCity = info.city + ', ' + info.state;
      };
      xhr.onerror = function() {
        app.startingCity = "Invalid Zipcode";
      };
      xhr.send();
    },
    lookupEndingZip: function() {
      var app = this;
      this.endingCity = "serching...";
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://ziptasticapi.com/' + app.endingZip, true);
      xhr.onload = function() {
        var info = JSON.parse(xhr.responseText);
        app.endingCity = info.city + ', ' + info.state;
      };
      xhr.onerror = function() {
        app.endingCity = "Invalid Zipcode";
      };
      xhr.send();
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
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },
  }
}
</script>

<style>
  body {
    background-color: grey;
    background: url("https://source.unsplash.com/category/nature/1920x1080") center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #app {
    width: 100vw;
    margin-bottom: 50px;

  }

  #submit-form {
    margin-top: 40px;
  }

  .lead-form {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    padding: 10px 50px 30px 50px;
    margin-top: 100px;
    margin-bottom: 30px;
  }

  span.city-span {
    color: #444;
    text-transform: uppercase;
    margin-left: 5px;
    margin-top: 10px;
  }

  .form-control {
    margin-bottom: 3px;
  }
  .users {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 4px 16px;
    border-radius: 4px;
  }
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
  .users__row:last-child {
    border-bottom: 0;
  }
  select {
    border: 0;
    outline: 0;
    background: transparent;
  }

</style>
