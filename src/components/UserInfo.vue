<template>
    <div class="row">
      <img src="../assets/user-default.svg" class="user-default-icon" />
      <p>User Name</p>
      <img src="../assets/arrow-down.svg" class="user-arrow-down" />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .row{
        height: 50px;
        position: absolute;
        right: 50px;
        top: 30px;
    }
    .row p {
        line-height: 50px;
        margin-bottom: 0px;
        margin-left: 10px;
        margin-right: 10px;
    }
    .user-default-icon{
        margin-top: 10px;
        margin-bottom: 10px;
        height: 30px;
        width: auto;
    }
</style>