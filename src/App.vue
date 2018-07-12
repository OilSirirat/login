<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyClAWP0HAAzIYvfW1EZXnyzh6DlmNYKa9I',
  authDomain: 'sensor-edbff.firebaseapp.com',
  databaseURL: 'https://sensor-edbff.firebaseio.com',
  projectId: 'sensor-edbff',
  storageBucket: 'sensor-edbff.appspot.com',
  messagingSenderId: '129341176027'
}
firebase.initializeApp(config)
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
