<template>
    <div class="ready-for-migration col-sm-10">
        <user-info></user-info>
        <div class="inner">
        <h2>Get Ready For Migration</h2>
        <img src="../../assets/step-1-of-3/3-of-3.svg" class="step">
        <div class="inner1">
            <div class="row">
                <div class="col-sm-4">
                    <img class="ready-for-migration-img" src="../../assets/card.svg">
                </div>
                <div class="col-sm-8">
                    <ul>
                        <li>Have your Ethereum Address ready <img src="../../assets/help.svg" class="help"></li>
                        <li>Make sure there is ETH in your wallet <img src="../../assets/help.svg" class="help"></li>
                        <li>Consolidate your 1ST token if possible</li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6">
                    <router-link to="/ready-for-migration-2"><button class="btn btn-fb-chain back">Back</button></router-link>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-fb-chain" @click="verifyMetamask()">I'm Ready</button>
                    <!-- <button class="btn btn-fb-chain" @click="migrateTokens()">Migrate</button> -->
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import userInfo from "../../components/UserInfo.vue"
import Web3 from "web3"
// import TruffleContract from "truffle"
export default {
    data() {
        return{
        contracts: {},
        account: '0x0',
        web3Provider: null,
        web3 : null
        }
    },
    methods: {
            async verifyMetamask(){
                if (typeof window.web3 !== 'undefined') {
                    this.web3Provider = window.web3.currentProvider;
                    this.web3 = new Web3(this.web3Provider);
                    await this.web3Provider.enable();
                    this.account = await this.web3.eth.getCoinbase();
                    var balance = await this.web3.eth.getBalance(this.account);
                    console.log("balance", balance);
            // $.getJSON("token.json", function(token) {
            //     this.contracts.token = TruffleContract(token);
            //     this.contracts.token.setProvider(this.web3Provider);
            //     this.contracts.token.deployed().then(function(token) {
            //     console.log("ERC Token Address:", token.address);
            //     });
            // }).done(function() {
            //     $.getJSON("peggy.json", function(peggy) {
            //     this.contracts.peggy = TruffleContract(peggy);
            //     this.contracts.peggy.setProvider(this.web3Provider);
            //     this.contracts.peggy.deployed().then(function(peggy) {
            //     console.log("peggy Address:", peggy.address);
            //     });
            //     return render();
            //     });
            // })
                // this.contracts.token.deployed().then((instance) => {
                // return instance.balanceOf(this.account);
                //     } ).then(function(balance) {
                // console.log(balance.toNumber());
                // })
            }
        },
        async migrateTokens(numberOfTokens){
            let payload;
            let peggy = await this.contracts.peggy.deployed();
            let token = await this.contracts.token.deployed();
            let resultAllow = await token.allowance(this.account, peggy.address, {
                from: this.account,
                value: numberOfTokens,
                gas: 500000
            });
            console.log("resultAllow", resultAllow);
            let resultLock = await peggy.lock(numberOfTokens, payload, {
                from: this.account,
                value: numberOfTokens,
                gas: 500000
            });
            console.log("resultLock", resultLock);
        }
    },
    components:{
        userInfo
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
        color: #9760AA;
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
        background-color: #9760AA;
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
