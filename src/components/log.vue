<template >
<div id = "admin">
  <div class="bd-example is-paddingless">
    <nav class="navbar is-info">
    <div class="navbar-brand">
      <a class="navbar-item" >
            <img src="../assets/logo.png" width="112" height="28">
      </a>
      <div class="navbar-burger burger" data-target="navMenuColorinfo-example">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuColorinfo-example" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"  @click= "href('/home1')">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Log
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item" @click= "href('/report')">
              Report
            </a>
            <a class="navbar-item"  @click= "href('/log')">
              Log
            </a>
            <a class="navbar-item"  @click= "href('/addAdmin')">
              Admin
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="button is-primary"href="/">
                <span class="icon">
                  <svg class="svg-inline--fa fa-sign-out-alt fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="download" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg><!-- <i class="fas fa-download"></i> -->
                </span>
                <span>Logout</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
<br><br>
  <div class="columns">
    <div class="column is-three-quarters" style="margin-left: 2%; width: 95%;">
      <div class="notification" >
        <a class="button is-danger is-outlined" style="  float: right;">Clear All</a> <br> <br>
        <table class="table is-striped"  style="margin-left: 1%; width: 100%;">
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
            <tr v-for = "(log, key) in log">
              <td>{{log.time}}</td>
              <td>{{log.temperature}}</td>
              <td></td>
              <td>{{log.time}}</td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
  </div>
<br><br><br>
</div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      log: ''
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      firebase.database().ref('/logDHT/').once('value').then(function (snapshot) {
        that.log = snapshot.val()
      })
    },
    href (s) {
      this.$router.replace(s)
    }
  }
}
</script>
<style lang="css">
html {
  /* background-color: red; */
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #D3D3D3;
}
</style>
