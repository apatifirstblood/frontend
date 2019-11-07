<template>
    <div class="login col-sm-10">
        <div class="inner">
            <img alt="FB chain logo" class="logo" src="../assets/FB-chain-logo.svg" />
            <p class="title">Login</p>
            <form class="login-form">
                <div class="form-group">
                    <label class="label1">Email</label>
                    <input type="email" v-model="email" placeholder="@email" id="login-email" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Password</label>
                    <input type="password" v-model="password" placeholder="Password" id="login-password" class="form-control" required/>
                </div>
            </form>
            <p class="reset-password">Forgot Password? <router-link to="/forgot-password">Reset it</router-link></p>
            <hr>
            <button class="btn btn-fb-chain" id="#login-btn" @click="userLogin">Login</button>
            <p class="text-small">Dont have an account? <router-link to="/signup">Sign up</router-link></p>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
    data (){
        return {
            email: null,
            password: null,
            response: null
        }
    },
    methods:{
        checkEmail(){
            return true;
        },
        checkPassword(){
            return true;
        },
        userLogin(){
            if(this.checkEmail()){
                if(this.checkPassword()){
                    this.$http.get('http://localhost:5000/api/users/login',{
                        params:{
                            email: this.email,
                            password: this.password
                        }
                    })
                    .then(response => (this.response = response))
                    return true
                }else{
                    //Password Not Validated
                }
            }else{
                //Email Not Validated
            }
            return false
        }
    }
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
.login-form{
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
.reset-password{
    font-size: 0.8em;
    margin-top: 10px;
}
.reset-password > a{
    color: #9760aa;
    font-weight: 500;
}
</style>