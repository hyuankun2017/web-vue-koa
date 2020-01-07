<template>
	<div class="ts-login__contain">
		<div class="ts-login__bg">
            <div class="ts-login__top">
                <div class="ts-login__logo">
                    <img src="@A/images/login_logo.jpg" />
                    <p>MY MANAGER SYSTEM</p>
                </div>
            </div>
            <div class="ts-login__item">
                <a-form id="components-form-demo-normal-login" :form="form" class="login-form"
                    @submit="handleSubmit">
                    <a-form-item>
                        <a-input class="ant-input260" v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] },]"
                            placeholder="Username">
                            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input class="ant-input260"
                            v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]"
                            type="password"
                            placeholder="Password">
                            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <div class="ts-login__remember">
                            <a-checkbox v-decorator="['remember',
                                {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                },]">记住账号</a-checkbox>
                            <a class="login-form-forgot" href="">忘记密码？</a>
                        </div>
                        <a-button type="primary" html-type="submit" class="login-form-button">登录</a-button>
                        <div><a href="">前往注册</a></div>
                    </a-form-item>
                </a-form>
            </div>
        </div>
	</div>
</template>

<script>
    // @ is an alias to /src
    import { Component, Vue } from 'vue-property-decorator'
    // // import { Form, Button, Input, Icon } from 'ant-design-vue'
    // console.log('这是个啥子哟')
    @Component({
        components: {
            
        }
    })
	export default {
        data(){
            return {
                // form: {}
            }
        },
        // 生命周期
        beforeCreate(){
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        
        // methods
        methods: {
            handleSubmit(e){
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            }
        }
	}
</script>


<style lang="scss">
    .ts-login__contain{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .ts-login__bg{
        width: 100%;
        height: 100%;
        background: url('~@A/images/login_bg.jpg') no-repeat;
        background-position: center;
        background-size: cover;
        & .ts-login__top{
            height: 80px;
            background: rgba($color: #000000, $alpha: 0.3);
            color: #ffffff;
            border-bottom: 1px solid rgba(255,255,255,.3);
        }
        & .ts-login__logo{
            height: inherit;
            padding: 0 30px;
            display: flex;
            align-items: center;
            &>img{
                width: 60px;
                height: 60px;
            }
            &>p{
                font-size: 28px;
                font-weight: bold;
                margin-left: 45px;
            }
        }
    }
    .ant-form-item{
        width: 100%;
    }
    .ts-login__item{
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        & .ant-form{
            background: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 25px 0;
            border-radius: 10px;
        }
        & .ts-login__remember{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        & .login-form-button{
            width: 100%;
        }
    }
</style>