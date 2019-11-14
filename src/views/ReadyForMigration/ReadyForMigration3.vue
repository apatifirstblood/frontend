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
                <div class="col-sm-4">
                    <router-link to="/ready-for-migration-2"><button class="btn btn-fb-chain back">Back</button></router-link>
                </div>
                <div class="col-sm-4">
                    <button class="btn btn-fb-chain" @click="verifyMetamask()">I'm Ready</button>
                    <br>
                    <button class="btn btn-fb-chain" @click="migrateTokens()">Migrate</button>
                </div>
                <div class="col-sm-4">
                    <input type="number" v-model="tokenInput">
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import userInfo from "../../components/UserInfo.vue"
import Web3 from "web3"
import TruffleContract from "truffle-contract"
import $ from 'jquery'
import axios from 'axios'

export default {
    data() {
        return{
        contracts: {},
        account: '0x0',
        web3Provider: null,
        web3 : null,
        tokenInput: 0,
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
                    console.log(this.account)
                    console.log("balance", balance);
                    console.log("$", $);

                    var token = await this.fetchData("FBT.json");
                    this.contracts.token = TruffleContract(token.data);
                    this.contracts.token.setProvider(this.web3Provider);
                    var deployedToken = await this.contracts.token.deployed();
                    console.log("ERC Token Address:", deployedToken.address);

                    var peggy = await this.fetchData("Peggy.json");
                    this.contracts.peggy = TruffleContract(peggy.data);
                    this.contracts.peggy.setProvider(this.web3Provider);
                    var deployedPeggy = await this.contracts.peggy.deployed()
                    console.log("peggy Address:", deployedPeggy.address);

                    var balance1 = await deployedToken.balanceOf(this.account);
                    console.log("balance.toNumber()", balance1.toNumber())

                    // this.contracts.token.deployed().then((instance) => {
                    // return instance.balanceOf(this.account);
                    //     } ).then(function(balance) {
                    // console.log(balance.toNumber());
                    // })
            }
        },
        async migrateTokens(){
            let peggy = await this.contracts.peggy.deployed();
            let token = await this.contracts.token.deployed();
            console.log("ths.tokenInput", this.tokenInput);
            // let transfer = await token.transfer("0x78a31729d5147d494A51b9A178566CE228464C1F", this.tokenInput, {
            //     from: this.account,
            //     gas: 500000,
            // })
            // console.log("transaction", transfer);
            
            let resultAllow = await token.approve(peggy.address, this.tokenInput, {
                from: this.account,
                gas: 500000
            });
            console.log("resultAllow", resultAllow);

        // bytes memory _recipient = cosmos address fetched by the ledger 
        // address _token = address of the token contract i.e token.address
        // uint256 _amount = the amount entered by the user,
        // uint8 _v,        v,r,s needs to be fetched by the database
        // bytes32 _r,
        // bytes32 _s


        //     let resultLock = await peggy.lock(recepient, tokenaddress, amount, v, r, s, {
        //         from: this.account,
        //         gas: 500000
        //     });
        //     console.log("resultLock", resultLock);
        },
        fetchData(filename){
            return new Promise((resolve, reject) => {
                axios.get(filename).then(response => {
                    resolve(response);
                }).catch(err => {
                    reject(err);
                })
            })
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
