<template>
    <div class="account-verification col-sm-10">
    <user-info></user-info>
    <div class="inner">
        <h2>Account Verification</h2>
        <img src="../assets/step-2-of-2.svg" class="step-2-of-2">
        <div class="inner1">
            <p class="error red-text">{{ error }}</p>
            <p class="title">First we need to verify your identity</p>
            <p>Please wait while we verify your info. This usually takes up to 15 minutes. When we’re done, you will receive a notification.</p>
            <img src="../assets/loading.svg" class="loading-img"/>
            <hr>
            <small>If you do not receive feedback in an hour, <a href="#">contact our support</a></small>
            <button class="btn btn btn-fb-chain back" @click="authenticateUser({email})">Logout</button>
        </div>
    </div>
    </div>
</template>
<script>
import userInfo from "../components/UserInfo.vue"
import axios from 'axios'

export default {
  data() {
    return{
      api_url: this.$store.getters.apiUrl,
      email: this.$store.getters.userEmail,
      error: null
    }
  },
  methods: {
    authenticateUser(email){
        axios({url: `${this.api_url}users/setAuthenticated`, data: email, method: 'POST'})
        .then(() => {
            this.$store.dispatch('logout').then(() => {
            this.$router.push('/')})  
        }).catch(err=>{
            this.error = err
        })
    }
  },
  components:{
    userInfo,
  }
}
</script>
<style scoped>
    .inner{
            background-color: transparent;
        }
    .inner1{
        width: auto;
        padding:20px;
        display: block;
        margin: auto;
        margin-top: 30px;
        height: auto;
        background-color: white;
        border-radius: 6px;
    }
    .step-2-of-2{
        margin-top:30px;
    }
    .loading-img{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    a{
        font-weight: 500;
        color: #9760aa;
    }
    .back{
    background-color: transparent;
    border: 1px solid black;
    width: 100%;
    padding: 10px;
    display: block;
    margin: auto;
    color: black;
    font-size: 1em;
    font-weight: 500;
    border-radius: 0px;
    margin-top: 30px;
    }
    .btn-fb-chain{
    background-color: #9760aa;
    width: 100%;
    padding: 10px;
    display: block;
    margin: auto;
    color: white;
    font-size: 1em;
    font-weight: 500;
    border-radius: 0px;
    }
    .back{
    background-color: transparent;
    border: 1px solid black;
    width: 50%;
    padding: 10px;
    display: block;
    margin: auto;
    color: black;
    font-size: 1em;
    font-weight: 500;
    border-radius: 0px;
    margin-top: 30px;
    }
</style>