<template>
    <div class="ready-for-migration col-sm-10">
        <user-info></user-info>
        <div class="inner">
        <h2>Token Migration</h2>
        <img src="../../assets/step-1-of-3/2-of-3.svg" class="step">
        <div class="inner1">
            <p class="title" >Download Metamask</p>
            <p>If you haven’t already, please <a href="">download Metamask</a> and import your account into it.</p>
            <img src="../../assets/metamask-icon.svg" class="metamask-icon"/>
            <hr>
            <p><a class="info" href="#">What is metamask?</a></p>
            <div class="row btn-row">
                <div class="col-sm-6">
                    <router-link to="/start-migration"><button class="btn btn-fb-chain back">Cancel</button></router-link>
                </div>
                <div class="col-sm-6">
                    <router-link to="/token-migration-3"><button class="btn btn-fb-chain">Got It, Continue</button></router-link>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import userInfo from "../../components/UserInfo.vue"
export default {
    components:{
        userInfo
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
        padding-top: 30px;
    }
    .inner1 p{
        margin-bottom:30px;
    }
    .step{
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
    .token-migration-form{
        width: 90%;
        display: block;
        margin: auto;
    }
    .label1{
        font-weight: 500;
        text-align: left;
        width: 100%;
        margin-top: 10px;
        font-size: 0.9em;
    }
    .btn-row{
        width: 90%;
        display: inline-flex;
        margin: auto;
    }
    .btn-row .col-sm-6{
        padding-left: 0px;
        padding-right: 0px;
    }
    .btn-fb-chain{
        background-color: #9760aa;
        width: 90%;
        padding: 12px;
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
        width: 90%;
        padding: 12px;
        display: block;
        margin: auto;
        color: black;
        font-size: 1em;
        font-weight: 500;
        border-radius: 0px;
    }
</style>