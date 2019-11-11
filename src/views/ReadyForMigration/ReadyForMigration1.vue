<template>
    <div class="ready-for-migration col-sm-10">
        <user-info></user-info>
        <div class="inner">
        <h2>Get Ready For Migration</h2>
        <img src="../../assets/step-1-of-3/1-of-3.svg" class="step">
        <div class="inner1">
            <div class="row">
                <div class="col-sm-4">
                    <img class="ready-for-migration-img" src="../../assets/clock.svg">
                </div>
                <div class="col-sm-8">
                    <ul>
                        <li>Have your Nano Ledger ready <img src="../../assets/help.svg" class="help"></li>
                        <li>Generate FBX wallet <img src="../../assets/help.svg" class="help"></li>
                        <li>Make sure your wallet is backed up</li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6 mx-auto">
                    <router-link to="/ready-for-migration-2"><button class="btn btn-fb-chain">Create Address</button></router-link>
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
    },
    methods:{
        logout(){
            this.$store.dispatch('logout').then(() => {
            this.$router.push('/')})
        }
    }
}
</script>
<style scoped>
    .inner{
        max-width: 80%;
        width: 60%;
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
    .ready-for-migration-img{
        padding-top: 30px;
        padding-bottom: 30px;
    }
    ul{
        line-height: 60px;
        width: 90%;
        display: block;
        margin: auto;
        list-style: decimal;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    li{
        width: 100%;
        text-align: left;
    }
    .help{
        
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