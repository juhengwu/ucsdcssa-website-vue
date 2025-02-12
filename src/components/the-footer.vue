<template>
  <el-container class="common-layout">
    <el-footer>
      <el-row>
        <el-col :span="10"> <div class="iconsss" />
          <el-row justify="center" class="follow">Follow US</el-row>
          <el-row justify="center">
            <el-col :span="2" class="icon1">
              <a href="https://www.facebook.com/ucsdcssa/">
                <el-image :src="getAssetsFile('facebook-fill.png')" class="icon icon-container facebook"></el-image>
              </a>
            </el-col>

            <!--Wechat image and link-->
            <el-col :span="2" class="icon1">
              <!--这里要打开的图片需要放到public文件夹下。-->
              <a href="/公众号海报.jpg" target="_blank">
                <el-image :src="getAssetsFile('wechat.png')" class="icon icon-container wechat"></el-image>
              </a>
            </el-col>

            <!--Instagram image and link-->
            <el-col :span="2" class="icon1">
              <a href="https://www.instagram.com/ucsdcssa1985/">
                <el-image :src="getAssetsFile('instagram.png')" class="icon icon-container instagram"></el-image>
              </a>
            </el-col>

              <!-- weibo image and link -->
            <el-col :span="2" class="icon1">
                  <a href="https://weibo.com/u/56743291145/">
                        <el-image :src="getAssetsFile('weibo.png')" class="icon icon-container gmail"/>
                  </a>  
            </el-col>
          </el-row>

          <!-- new row of contact -->
          <!--Youtube image and link-->
          <el-row :style="{ paddingBottom: '3%' }" justify="center">
            <el-col :span="2" class="icon2">
              <a href="https://www.youtube.com/@ucsdcssa9192">
                <el-image :src="getAssetsFile('youtube.jpg')" class="icon icon-container youtube"></el-image>
              </a>
            </el-col>

            <!--Red image-->
            <el-col :span="2" class="icon2">
              <a href="https://www.xiaohongshu.com/user/profile/61b981e1000000001000eaf9?xhsshare=CopyLink&appuid=6534a913000000000301c76c&apptime=1719550286">
              <!--这里要打开的图片需要放到public文件夹下。-->
                <el-image :src="getAssetsFile('red.jpg')" class="icon icon-container red" :fit="'contain'"></el-image>
              </a>
            </el-col>

            <!--Bilibili image and link-->
            <el-col :span="2" class="icon2">
              <a href="https://space.bilibili.com/34231252?spm_id_from=333.337.search-card.all.click">
                <el-image :src="getAssetsFile('bilibili.jpg')" class="icon icon-container bilibili" :fit="'contain'"></el-image>
              </a>
            </el-col>
            <!--Tiktok image and link -->
            <el-col :span="2" class="icon2">
              <a href="https://v.douyin.com/i6BuAgMJ/">
                <el-image :src="getAssetsFile('tiktok.jpg')" class="icon icon-container tiktok" :fit="'contain'"></el-image>
              </a>
            </el-col>
          </el-row>
        



          <!--CSSA LOGO-->
          <el-row justify="center" class="copy">
            <el-col :span="3">
              <el-image :src="getAssetsFile('logo.png')" class="logo"></el-image>
            </el-col>
            <!--Copyright-->
            <el-col :span="21" class="btm_text">
              <el-row class="texta">
                Copyright © 2023
                <span class="boldtext">&nbspUCSD CSSA&nbsp</span>
                All rights reserved.
              </el-row>
          
              <el-row class="texta">
                <!--网站备案信息-->
                <el-link href="https://beian.miit.gov.cn/#/Integrated/index" :underline="false">
                  苏ICP备2022038753号-1
                </el-link>
              </el-row>
            </el-col>
          </el-row>

        </el-col>

        
        

        <el-col :span="5">   
        <div class="iconsss" />  
        <el-row justify="center" class="follow">Contact us</el-row>
        <el-row justify="center" class="contact-email">ucsdcssa1985@gmail.com</el-row>
        <el-row justify="center">
            <!-- <form action="https://formsubmit.co/jic034@ucsd.edu" method="POST"> -->
              <form id="contactForm" action="mailto:ucsdcssa1985@gmail.com">
                <div class="form-group">
                  <div class="form-row">
                    <div class="col">
                      <!-- 保留 name 属性（用于 FormData 的遍历），但在构造 URL 时我们会特殊处理，
                          使得最终生成的 URL 只包含 body 参数中纯净的用户输入 -->
                        <input type="text" name="message" id="messageInput" class="form-control rounded-input" placeholder="Your Message" required style="height: 100px;">
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-lg btn-dark btn-block rounded-button" style="border-radius: 15px; background-color: white; color: black; padding: 10px 20px; font-size: 16px; transition: background-color 0.3s, color 0.3s;">Submit Form</button>              </form>

          </el-row>
       
        </el-col>

      </el-row>

     
  

    </el-footer>
  </el-container>
</template>

<script setup>
import { onMounted } from 'vue'
import { getAssetsFile } from "../utils/getAssetsFile"

// 等待组件挂载完毕后再操作 DOM 元素
// JS 阻止默认表单提交，构造 mailto 链接并跳转 for contact form
onMounted(() => {
  const form = document.getElementById('contactForm')
  if (!form) return

  form.addEventListener('submit', function(event) {
    event.preventDefault() // 阻止默认表单提交

    // 利用 FormData 获取表单数据
    const data = new FormData(form)
    let url = form.action + "?"
    let params = []

    // 遍历表单中的每个字段
    for (let [name, value] of data) {
      if (name === "message") {
        // 只将用户输入内容传递给 body 参数
        params.push("body=" + encodeURIComponent(value))
      } else {
        params.push(name + "=" + encodeURIComponent(value))
      }
    }
    url += params.join("&")

    // 输出构造好的 URL 方便调试
    console.log("Constructed mailto URL:", url)

    // 跳转到构造好的 mailto 链接，打开默认邮件客户端
    window.location.href = url
  })
})
</script>

<script>
export default {
  name: "TheFooter"
}
</script>


<style scoped lang="less">
  .common-layout {
    height: 25vw;
    background-color: #313338;
    padding: 0;
  }

  .follow {
  font-size: 1.5em; /* 增加字体大小 */
  font-weight: bold; /* 增加字体粗细 */
  margin-bottom: 10px; /* 添加下边距 */
  color: #ffffff; /* 字体颜色 */
  }

  .contact-email {
  font-size: 1.2em; /* 增加字体大小 */
  color: #ffffff; /* 字体颜色 */
  background-color: #444; /* 背景颜色 */
  padding: 5px 10px; /* 添加内边距 */
  border-radius: 5px; /* 添加圆角 */
  }

  .form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  }

  button:hover {
  background-color: #f0f0f0; /* 悬停时的背景颜色 */
  color: #000; /* 悬停时的文字颜色 */
  }

  button:active {
    background-color: #000 !important; /* 点击时的背景颜色 */
    color: #e0e0e0 !important; /* 点击时的文字颜色 */
  }

  .first_container {
    height: 8vw;
    margin-top: 1vw;
  }

  .el-row{
    margin-top: 15px;
    margin-bottom: 10px;
    border-color: #bc1888;
  }

  .follow{
    color: lightgrey;
    font-weight: bold;
    font-size: x-large;
  }

  .copy{
    margin-left: 12vw;
  }

  .icon {
    padding: 0.75vw;
    width: 2.5vw;
    height: 2.5vw;
  }
  .red{
    width:4vw;
    height:1vw;

  }

  //
  .youtube:hover{
    background: #ff0000 !important;
  }
  .gmail:hover{
    background: #d44638;
  }
  .bilibili:hover{
    background: #2596be;
  }
  .red:hover{
    background: #fb2544;
  }
  .facebook:hover {
    background: #3b5998 !important;
  }
  .tiktok:hover {
    background: #000000 !important;
  }
  .wechat:hover {
    background: #7bb32e;
  }
  .instagram:hover {
    background: linear-gradient(45deg, yellow 0%, #f09433 20%, #e6683c 40%, #dc2743 60%, #cc2366 80%, #bc1888 100%);
  }
  .sponsors:hover {
    background: #000000 !important;
  }

  .icon-container {
    margin-top: 1vw;
    background: #8a8a8a;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 45%;
    line-height: 6vw;
    vertical-align: middle;
    padding: 0.7vw;
    transition: transform 0.3s;
  }
  .sponsor-container {
    margin-top: 1vw;
    background: #ffffff0e;
    width: 2vw;
    height: 2vw;
    border-radius: 45%;
    line-height: 6vw;
    vertical-align: middle;
    padding: 0.1vw;
    transition: transform 0.3s;
  }

  .icon1{
    margin-left: 0.5vw;
    margin-right: 0.5vw;
  }

  .icon2{
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    margin-top: -1.2vw;
  }
  .icon-sponsor{
    margin-left: 0.4vw;
    margin-bottom: -0.5vw;
  }

  .logo {
    width: 4vw;

  }

  .texta {
    color: lightgrey;
    margin-left: 3%;
  }

  .input{
    width: 10vw;

  }

  .rounded-input {
    border-radius: 5px;
    margin-bottom: 1px;
  }

  button {
  margin-top: 10px; /* 控制按钮和上方输入框的距离 */
  }
  
  

</style>