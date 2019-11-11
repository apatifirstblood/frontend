<template>
    <div class="signup col-sm-12">
        <div class="inner">
            <img alt="FB chain logo" class="logo" src="../assets/FB-chain-logo.svg" />
            <p class="title">First, let’s create a new FB Chain account:</p>
            <p class="error red-text">{{ error }}</p>
            <form class="signup-form">
                <div class="form-group">
                    <label class="label1">Name</label>
                    <input type="text" v-model="name" placeholder="Name" id="signup-name" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Email</label>
                    <input type="email" v-model="email" placeholder="@email" id="signup-email" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Password</label>
                    <input type="password" v-model="password" placeholder="Password" id="signup-password" class="form-control" required/>
                </div>
                <div class="form-group">
                    <label class="label1">Confirm password</label>
                    <small class="password-match-status" :class="passwordClass">{{ passwordStatus }}</small>
                    <input type="password" v-model="confirmPassword" placeholder="Confirm password" id="signup-confirm-password" class="form-control" required/>
                </div>
            </form>
            <hr>
            <button class="btn btn-fb-chain" @click="userSignUp">Signup</button>
            <p class="text-small">Already have an account? <router-link to="/">Log in</router-link></p>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            name: null,
            email: null,
            password: null,
            confirmPassword: null,
            passwordStatus: null,
            passwordClass: null,
            passwordSame: null,
            error: null,
            response: null
        }
    },
    methods: {
        checkEmail(){
            return true
        },
        checkPassword(){
            return true
        },
        userSignUp(){
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                repeat_password: this.confirmPassword,
                role: 'user' 
            }
            if(this.checkEmail()){
                if(this.checkPassword()){
                    this.$store
                    .dispatch('register', data)
                    .then(() => this.$router.push('/start-migration'))
                    .catch(err => this.error = err)
                }else{
                    this.error = "Password not secure enough!"
                }
            }else{
                this.error = "Email doesn't seem to be valid!"
            }
        },
    },
    watch: {
        confirmPassword(val){
            if(this.password !== val){
                this.passwordStatus = "Password Doesn't Match!"
                this.passwordClass = 'red-text'
                this.passwordSame = false
            }else{
                this.passwordStatus = "Password Matches!"
                this.passwordClass = 'green-text'
                this.passwordSame = true
            }
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
.password-match-status{
    text-align: left;
    width: 100%;
    display: block;
    padding-bottom: 5px;
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