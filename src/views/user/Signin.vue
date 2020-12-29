
<template>
    <div id="container">
        <h3 class="sub_title">登录</h3>
        <div class="form">
          <div class="username_box">
            <span>用户名</span>
            <input type="text" placeholder="请输入用户名" v-model="username" @focus="($event)=>{username=$event.target.value}">
          </div>
          <div class="pwd_box">
            <span>密码</span>
            <input type="password" placeholder="请输入密码" v-model="password" @focus="($event)=>{password=$event.target.value}">
          </div>
          <div class="login_btn" @click="onSubmit">登录</div>
        </div>
        <p class="btns">
            <router-link to="/user/forgotpwd">忘记密码</router-link>
            <router-link to="/user/signup">立即注册</router-link>
        </p>
    </div>
</template>
<script>
    import {reactive,toRefs,getCurrentInstance} from 'vue'
    import {signin} from '@/api/request.js'
    export default {
        name: 'Signin',
        components:{
        },
        setup(){
            const state = reactive({
                username: '',
                password: ''
            });

            const {ctx} = getCurrentInstance()


            function onSubmit(){
              if(!state.username || !state.password) return;
                signin({
                    username: state.username,
                    password: state.password,
                    longTimeSignin: true
                }).then(res=>{
                    console.log(res)
                    if(res.status === 200){
                        localStorage.setItem('token',res.data.data.token)
                        ctx.$router.push('/user')
                        //ctx.$store.commit('saveUserInfo',{nickname:res.data.data.nickname,userID:res.data.data.id})
                        localStorage.setItem('userInfo',JSON.stringify({nickname:res.data.data.nickname,userID:res.data.data.id}))
                        console.log(localStorage.getItem('userInfo'))
                    }
                })
            }

            return {...toRefs(state),onSubmit}
        }
    }
</script>
<style scoped>
    #container{
      background-color: #fff;
    }
    .sub_title{
        color: #219ffc;
    }
    .form div{
      display: flex;
      justify-content: space-around;
      height: 1.5rem;
      line-height: 1.5rem;
    }
    .form span{
      font-size: .4rem;
      width: 3rem;
    }
    .form input{
      width: 6rem;
      height: 1rem;
      border: none;
      margin: 0;
      padding: 0;
      outline: none;
      border-bottom: .02rem solid #979c98;
      background-color: transparent;
      padding-left: .2rem;
    }

    .form .login_btn{
      width: 6.6rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      border-radius: .6rem;
      background-color: #7dc623;
      color: #fff;
      font-size: .5rem;
      margin: 0 auto;
    }
    .btns{
        display: flex;
        justify-content: space-between;
        padding: 0 .3rem;

    }
    .btns a{
        font-size: .38rem;
    }
</style>