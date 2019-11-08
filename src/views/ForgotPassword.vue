<template>
    <div class="forgot-password col-sm-12">
        <div class="inner">
            <img alt="FB chain logo" class="logo" src="../assets/FB-chain-logo.svg" />
            <p class="title">Reset password</p>
            <p class="text">Please enter email accoicated with your account and we will send you a password reset link.</p>
            <form class="login-form">
                <div class="form-group">
                    <label class="label1">Email</label>
                    <input type="email" placeholder="@email" id="login-email" class="form-control" required/>
                </div>
            </form>
            <hr>
            <div class="row btn-row">
                <div class="col-sm-6">
                    <router-link to="/"><button class="btn btn-fb-chain back">Back</button></router-link>
                </div>
                <div class="col-sm-6">
                    <button class="btn btn-fb-chain">Reset password</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.logo{
    width: 20%;
}
.title{
    font-weight: 600;
    font-size: 1em;
    margin-top: 30px;
}
.text{ 
    width: 90%;
    display: block;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
}
.login-form{
    width: 70%;
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
.form-control{
    height: 50px;
}
.btn-row{
    width: 90%;
    display: inline-flex;
    margin: auto;
}
.btn-fb-chain{
  background-color: #9760aa;
  width: 100%;
  padding: 10px;
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
  width: 100%;
  padding: 10px;
  display: block;
  margin: auto;
  color: black;
  font-size: 1em;
  font-weight: 500;
  border-radius: 0px;
}
.back a{
    color: black;
}
.col-sm-6{
    padding-left: 5px;
    padding-right: 5px;
}
</style>