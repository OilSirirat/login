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
            Report
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
    <div class="column is-three-quarters" style="margin-left: 2%; width: 68%;">
        <div class="columns">
          <div class="column">
            <div class="notification">
              26 C <br> status
            </div>
          </div>
          <div class="column">
            <div class="notification" >
              50% C <br> status
            </div>
          </div>
          <div class="column">
            <div class="notification">
              Time Now <br>
              12:12  4-10-2018
            </div>
          </div>
        </div>
    </div>
    <div class="column">

    </div>
  </div>

  <div class="columns">
    <div class="column is-three-quarters" style="margin-left: 2%; width: 68%;">
      <div class="notification">
        Time Now <br>
        12:12  4-10-2018
      </div>
    </div>
    <div class="column">
      <div class="notification"  style="margin-right: 4%;">
        <div class="field">
          <div class="control">
            <input class="input is-info is-rounded" type="text" placeholder="Start Time">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input is-info is-rounded" type="text" placeholder="Stop Time">
          </div>
        </div>
        <a class="button is-link is-rounded">Search</a>
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
      data: {
        uasrname: '',
        password: ''
      },
      shadmin: '',
      sw: ''
    }
  },
  created: function () {
    this.pullData()
  },
  methods: {
    pullData () {
      let that = this
      firebase.database().ref('/admin/').once('value').then(function (snapshot) {
        that.shadmin = snapshot.val()
      })
    },
    add () {
      console.log('asd')
      firebase.database().ref('admin').push(this.data)
      this.data.uasrname = ''
      this.data.password = ''
      this.pullData()
    },
    Update (key, uasrname, password) {
      this.sw = ''
      firebase.database().ref('admin').child(key).update({
        uasrname: uasrname,
        password: password
      })
    },
    Delete (key) {
      firebase.database().ref('admin').child(key).remove()
      this.pullData()
    },
    swap: function (key) {
      this.sw = key
    },
    cancel () {
      this.sw = ''
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
