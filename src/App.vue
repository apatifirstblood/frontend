<template>
  <div id="app" class="row">
    <div id="nav" class="col-sm-2" v-if="isLoggedIn">
      <router-link to="/start-migration">Start Migration</router-link>
      <a @click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  computed:{
    isLoggedIn: function(){
      return this.$store.getters.isLoggedIn
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout').then(() => {console.log("inside")
      this.$router.push('/')})
      
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Barlow+Condensed:300,400,500,600,700&display=swap');

#app {
  font-family: 'Barlow Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  background-color: #F6F6F6;
  margin: 0px;
}
#nav {
  background-color: white; 
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  display:block;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.inner{
  width: auto;
  max-width: 50%;
  padding:20px;
  display: block;
  margin: auto;
  margin-top: 10%;
  height: auto;
  background-color: white;
  border-radius: 6px;
}
.title{
    font-weight: 600;
    font-size: 1em;
    margin-top: 30px;
}
hr{
    width: 90%;
    display: block;
    margin: auto;
    margin-top: 30px !important;
    margin-bottom: 30px !important;
}
.btn-fb-chain{
  background-color: #9760aa;
  width: 150px;
  padding: 10px;
  display: block;
  margin: auto;
  color: white;
  font-size: 1em;
  font-weight: 500;
  margin-top: 30px;
  border-radius: 0px;
}
.red-text{
  color: #F42E31;
}
.green-text{
  color: #00C2A9;
}
</style>
