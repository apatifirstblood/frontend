<template>
    <div class="account-verification col-sm-10">
    <user-info></user-info>
      <div class="inner">
        <h2>Account Verification</h2>
        <img src="../assets/step-1-of-2.svg" class="step-1-of-2">
        <div class="inner1">
            <p class="title">First we need to verify your identity</p>
            <p>Prepare your device camera and your ID and click on “start verification” to start process via Jumio®</p>
            <img src="../assets/jumio-logo.svg" class="jumio-logo"/>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6">
                    <button class="btn btn-fb-chain back">Later</button>
                </div>
                <div class="col-sm-6">
                    <router-link to="/account-verification-complete"><button class="btn btn-fb-chain">Start Verification</button></router-link>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import userInfo from "../components/UserInfo.vue"
export default {
  data() {
    return{
      
    }
  },
  methods: {
   
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
    .step-1-of-2{
        margin-top:30px;
    }
    .btn-row{
    width: 90%;
    display: inline-flex;
    margin: auto;
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
    width: 100%;
    padding: 10px;
    display: block;
    margin: auto;
    color: black;
    font-size: 1em;
    font-weight: 500;
    border-radius: 0px;
    }
    .jumio-logo{
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>