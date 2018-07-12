<template>
  <div  id="login">
    <img src="../assets/logo.png" width="50%"><br>
    <div class="columns">
      <div class="column">
      </div>
      <div class="column">
        <div class="field">
          <div class="control">
            <input class="input is-success"  v-model="username" type="text" placeholder="Username">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="field">
          <div class="control">
            <input class="input is-success" v-model="password" type="password" placeholder="Password">
          </div>
        </div>
      </div>
      <div class="column">
      </div>
    </div>
<a class="button is-success"  @click= "login()">login</a>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  data () {
    return {
      shadmin: '',
      data: {
        username: '',
        password: ''
      }
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
    login () {
      for (var mai in this.shadmin) {
        if (this.username === this.shadmin[mai].uasrname && this.password === this.shadmin[mai].password) {
          this.$router.replace('home1')
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
  margin-top: 60px;
}
</style>
