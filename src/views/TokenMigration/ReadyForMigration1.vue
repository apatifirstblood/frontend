<template>
    <div class="ready-for-migration col-sm-10">
        <user-info></user-info>
        <div class="inner">
        <h2>Account Verification</h2>
        <img src="../../assets/step-1-of-2.svg" class="step-1-of-2">
        <div class="inner1">
            <p class="title">First we need to verify your identity</p>
            <p>Prepare your device camera and your ID and click on “start verification” to start process via Jumio®</p>
            <img src="../../assets/jumio-logo.svg" class="jumio-logo"/>
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
import userInfo from "../../components/UserInfo.vue"
export default {
    components:{
        userInfo
    }
}
</script>
<style scoped>

</style>