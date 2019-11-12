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
            <div class="row" v-if="generated">
                <div class="col-sm-8">
                    <span>{{ address }}</span>
                </div>
            </div>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6">
                    <router-link to="/start-migration"><button class="btn btn-fb-chain back">Exit</button></router-link>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-fb-chain" @click="getFbxAddress" v-if="!generated">Get FBX Address</button>
                    <button class="btn btn-fb-chain" @click="next" v-else>Next</button>
                    <!-- <router-link to="/ready-for-migration-2"><button class="btn btn-fb-chain">Get FBX Address</button></router-link> -->
                </div>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import userInfo from "../../components/UserInfo.vue"
import CosmosApp from "../../common/index.js"
import TransportWebUSB from "@ledgerhq/hw-transport-webusb"
// eslint-disable-next-line import/no-extraneous-dependencies
export default {
    name:"CosmosLedger",
    props:{},
     data() {
        return{
            deviceLog:[],
            transportChoice:"WebUSB",
            generated: false,
            address: null
        };
    },
    computed:{
        ledgerStatus(){
            return this.deviceLog;
        },
    },
    methods: {
        log(msg){
            this.deviceLog.push({
                index:this.deviceLog.length,
                msg,
            });
        },
        async getTransport() {
            let transport = null;
            console.log(`Trying to connect via ${this.transportChoice}...`);
            if (this.transportChoice === "WebUSB") {
                try {
                    transport = await TransportWebUSB.create();
                    console.log(transport);
                } catch (e) {
                    console.log(e);
                }
            }
            return transport;
        },
        async getFbxAddress(){
            this.deviceLog = [];
            // Given a transport (U2F/HIF/WebUSB) it is possible instantiate the app
            const transport = await this.getTransport();
            const app = new CosmosApp(transport);
            // now it is possible to access all commands in the app
            console.log("Please click in the device");
            const path = [44, 118, 5, 0, 3];
            const response = await app.getAddressAndPubKey(path, "cosmos");
            if (response.return_code !== 0x9000) {
                console.log(`Error [${response.return_code}] ${response.error_message}`);
                return;
            }
            console.log("Response received!");
            console.log(`App Version ${response.major}.${response.minor}.${response.patch}`);
            console.log(`Device Locked: ${response.device_locked}`);
            console.log(`Test mode: ${response.test_mode}`);
            console.log("Full response:");
            console.log(response);
            this.address = response.bech32_address;
            this.generated = true;
        },

        async next(){
            this.generated = false;
            this.$router.push('/ready-for-migration-2')
        }
    },
    components:{
        userInfo
    },
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
