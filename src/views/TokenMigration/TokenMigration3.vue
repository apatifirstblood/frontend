<template>
    <div class="ready-for-migration col-sm-10">
        <user-info></user-info>
        <div class="inner">
        <h2>Token Migration</h2>
        <img src="../../assets/step-1-of-3/3-of-3.svg" class="step">
        <div class="inner1">
            <p class="title">How much tokens would you like to migrate?</p>
            <form class="token-migration-form">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label class="label1">Ethereum tokens</label>
                            <input type="text" placeholder="No of tokens" id="ethereum-address" class="form-control" required/>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <img src="../../assets/right-arrow.svg" class="right-arrow"/>
                    </div>
                    <div class="col-sm-5">
                         <div class="form-group">
                            <label class="label1">Estimated FBX tokens</label>
                            <input type="text" placeholder="No of FBX tokens" id="fbx-address" class="form-control" required/>
                        </div>
                    </div>
                </div>             
            </form>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6 mx-auto">
                    <router-link to="/token-migration-success"><button class="btn btn-fb-chain">Continue</button></router-link>
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
        margin-top:30px;
        width: 90%;
        display: block;
        margin: auto;
    }
    .right-arrow{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .label1{
        font-weight: 500;
        text-align: left;
        width: 100%;
        margin-top: 10px;
        font-size: 0.9em;
    }
    .form-control{
        height: 100px;
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