<template>
  <div class="start-migration col-sm-10">
    <user-info></user-info>
        <div class="inner">
          <p class="title">Welcome!</p>
          <p>You have successfuly created a FB Chain account. Before you can migrate tokens, you need to complete verification.</p>
          <hr>
          <router-link to="account-verification"><button class="btn-fb-chain">Start Verification</button></router-link>
        </div>
    </div>
</template>
<script>

import userInfo from "../components/UserInfo.vue"
export default {
  components:{
    userInfo
  }
}

</script>
<style scoped>

  p{
    margin-bottom: 30px;
  }
</style>