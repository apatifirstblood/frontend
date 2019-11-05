<template>
    <div class="signup col-sm-10">
        <div class="inner">
            <img alt="FB chain logo" class="logo" src="../assets/FB-chain-logo.svg" />
            <p class="title">First, let’s create a new FB Chain account:</p>
            <form class="signup-form">
                <div class="form-group">
                    <label class="label1">Email</label>
                    <input type="email" placeholder="@email" id="signup-email" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Password</label>
                    <input type="password" placeholder="Password" id="signup-password" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Confirm password</label>
                    <input type="password" placeholder="Confirm password" id="signup-confirm-password" class="form-control" required/>
                </div>
            </form>
            <hr>
            <button class="btn btn-fb-chain">Signup</button>
            <p class="text-small">Already have an account? <router-link to="/">Log in</router-link></p>
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
.signup-form{
    width: 50%;
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
hr{
    margin:30px;
}
.btn-fb-chain{
   background-color: #9760aa;
  width: 150px;
  padding: 10px;
  display: block;
  margin: auto;
  color: white;
  font-size: 1em;
  font-weight: 500;
  margin-top: 30px;
  border-radius: 0px;
}
.text-small{
    font-size: 0.8em;
    margin-top: 20px;
}
.text-small a{
    color:#9760aa;
    font-weight: 500;
}
</style>