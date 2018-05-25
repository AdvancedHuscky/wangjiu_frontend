<template>
  <div class="mine">
    <div class="logon" v-show="flag1">
        <div class="logon_header">
          <img src="//i2.letvimg.com/lc04_img/201803/12/17/36/CNlogo2x.png" alt="">
          <p>一个帐号玩转所有乐视服务</p>
        </div>
        <form class="mui-input-group">
          <div class="mui-input-row">
            <label for=""> 用户名</label>
            <input type="text" class="mui-input-clear" placeholder="邮箱/手机号" id="user">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input type="password" class="mui-input-password" placeholder="密码" id="pasd">
          </div>
          <b @click="subClick()" class="btnLogin"> 登 &nbsp;录</b>
          <p class="textTest"><span> 短信验证码登录</span><span>|</span> <span>重置密码</span> </p>
        </form>
        <!--start sigin_in-->
        <p class="sign_in">从这里出发，开启乐视生态世界 <span>立即注册</span> </p>
      <h3 class="other">其他方式登录</h3>
      <p class="other_signin">
        <a href="#"><img src="../../../public/img/qq.png" alt=""></a>
        <a href="#"><img src="../../../public/img/weibo.png" alt=""></a>
      </p>
      <div class="lan_add">
        <p>
          <span>语言:简体中文</span>
          <span>国家/地区:中国</span>
        </p>
        <p> 客服电话:1010  9000</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data() {
    return {
      flag1: true,
      flag: false
    }
  },
}
</script>

<style scoped lang="scss">
$fontBlue:#0f93de;
.logon{
  width: 100%;
  height:100%;
  position: absolute;
  top:0;
  z-index: 20;
  background: #fff;
  .logon_header{
    text-align: center;
    padding: .5rem 0;
    img{
      width: 3rem;
    }
    p{
      font-size: .4rem;
      padding-top: .2rem;
    }
  }
  form {
      width: 100%;
      padding: 0 5%;
      padding-bottom: 2rem;
      .mui-input-row{
        height: 1.5rem;
        padding-top:.3rem;
      }
      .btnLogin{
        display: block;
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
        text-align: center;
        color: #fff;
        background: #45abe5;
        font-size: .6rem;
        border-radius: .3rem;
        margin-top: .8rem;
      }
      .textTest{
        display: flex;
        justify-content: space-around;
        margin-top: .5rem;
        color: $fontBlue;
        span:nth-child(2){
          color:#ccc;
        }
      }
  }
  .sign_in{
    padding: .3rem 0;
    font-size: .5rem;
    text-align: center;
    margin-bottom: .5rem;
    span{
      color:$fontBlue;
    }
  }
  .other{
    position: relative;
    padding-top: .2rem;
    width: 100%;
    text-align: center;
    height: 1.3rem;
    color:#999;
    line-height: .4rem;
  }
  .other:before{
    content: '';
    display:block;
    width: 2.2rem;
    height: .03rem;
    position: absolute;
    top: 28%;
    left: 10%;
    background-color: #dfdfdf;
  }
  .other:after{
    content: '';
    display:block;
    width: 2.2rem;
    height: .03rem;
    position: absolute;
    top: 28%;
    right: 10%;
    background-color: #dfdfdf;
  }
  .other_signin{
    display: flex;
    justify-content: space-around;
    align-items:center;
  }
  .lan_add{
    padding-top: 2rem;
    p{
      color:#b8b8b8;
      font-size: .4rem;
      text-align: center;
    }
  }
}
</style>
