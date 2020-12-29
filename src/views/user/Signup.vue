<template>
    <div id="container">
        <h3 class="sub_title">新用户注册</h3>
        <div class="form">
          <div class="username_box">
            <span>用户名</span>
            <input type="text" placeholder="请输入用户名" v-model="username" @focus="($event)=>{username=$event.target.value}">
          </div>
          <div class="pwd_box">
            <span>密码</span>
            <input type="password" placeholder="请输入密码" v-model="password" @focus="($event)=>{password=$event.target.value}">
          </div>
          <div class="confirm_pwd_box">
            <span>确认密码</span>
            <input type="password" placeholder="请再次输入密码" v-model="confirmPwd" @focus="($event)=>{confirmPwd=$event.target.value}">
          </div>
          <div class="login_btn" @click="onSubmit">注册</div>
        </div>
        <router-link to="/user/signin">已有账号？登录</router-link>
<!--      <Dialog></Dialog>-->
    </div>
</template>
<script>
    import {reactive, toRefs,getCurrentInstance} from "vue";
    import {signup,signupCheck} from '@/api/request.js'
    // import Dialog from '@/components/dialog/Dialog'
    export default {
        name: 'Signup',
        components:{
          // Dialog
        },
        setup(){
            const {ctx} = getCurrentInstance();

            const state = reactive({
                username: '',
                password: '',
                confirmPwd: ''
            });

            function checkUsername() {
                console.log('触发了检查用户名')
                const nameReg = /^(?!\d)[\u4e00-\u9fa5_a-zA-Z0-9]{6,12}$/;
                if(!nameReg.test(state.username)){
                    console.log('用户名不能以数字开头，长度6-12位，不能出现下划线以外的特殊字符');
                }else{
                    signupCheck({
                        username: state.username
                    }).then(res=>{
                        console.log(res)
                    })
                }
            }


            function onSubmit(){

                const pwdReg = /^[_a-zA-Z0-9]{8,22}$/

                if(state.password !== state.confirmPwd){
                  console.log('密码输入不一致,请重新填写')
                } else if(!pwdReg.test(state.password)){
                  console.log('密码长度在8 - 22位，英文字符数字，除_以外不允许出现任何特殊字符')
                }else{
                    signup({
                        username: state.username,
                        password: state.password,
                        confirmPassword: state.confirmPwd
                    }).then(res=>{
                        console.log(res)
                        ctx.$router.push('/user/singin')
                    })
                }

            }

            return {...toRefs(state),onSubmit,checkUsername}
        }
    }
</script>
<style scoped>
    .sub_title{
        color: #219ffc;
    }
    a{
        font-size: .38rem;
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
</style>