<template>
    <div class="inner">
        <h2>Account Verification</h2>
        <img src="../../assets/step-2-of-2.svg" class="step-2-of-2">
        <div class="inner1">
            <p class="title">First we need to verify your identity</p>
            <p>Please wait while we verify your info. This usually takes up to 15 minutes. When we’re done, you will receive a notification.</p>
            <img src="../../assets/loading.svg" class="loading-img"/>
            <hr>
            <small>If you do not receive feedback in an hour, <a href="#">contact our support</a></small>
        </div>
    </div>
</template>
<script>
export default {
    
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
</style>