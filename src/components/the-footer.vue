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
              <el-popover placement="right"
                  :width="300"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
              >
                <template #reference>
                  <el-image :src="getAssetsFile('weibo.png')" class="icon icon-container gmail"/>
                </template>
                <template #default>
                  <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                  >

                    <p class="cssaemail" style="margin: 0">

                      https://weibo.com/u/5674329114
                    </p>
                  </div>
                </template>
              </el-popover>
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

            <!--Wechat image-->
            <el-col :span="2" class="icon2">
              <!--这里要打开的图片需要放到public文件夹下。-->
                <el-image :src="getAssetsFile('red.jpg')" class="icon icon-container red" :fit="'contain'"></el-image>
            </el-col>

            <!--Bilibili image and link-->
            <el-col :span="2" class="icon2">
              <a href="https://space.bilibili.com/34231252?spm_id_from=333.337.search-card.all.click">
                <el-image :src="getAssetsFile('bilibili.jpg')" class="icon icon-container bilibili" :fit="'contain'"></el-image>
              </a>
            </el-col>
            <!--Tiktok image and link -->
            <el-col :span="2" class="icon2">
              <a href="https://v.douyin.com/iJtfCFap/">
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
          <el-row justify="center" class="follow">Contact US</el-row>
          <el-row justify="center" style="color: white">cssa@gmail.com</el-row>
          <el-row justify="center">
            <form target="_blank" action="https://formsubmit.co/jic034@ucsd.edu" method="POST">
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Your Full Name" required>
                  </div>
                  <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Your Email Address" required>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
              </div>
              <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
            </form>
          </el-row>
       
        </el-col>

        <!-- 赞助商 -->
        <el-col :span="9">  <el-row class="follow" justify="center" > Sponsors </el-row>  
        <el-row justify="center">

        <!-- <el-col :span="2" class="icon-sponsor">
          <el-image :src="getAssetsFile('panda-express.png')" class="icon sponsor-container tiktok"></el-image>
        </el-col> -->
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('panda-express.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; ">
                Panda Express
              </div>
            </template>
          </el-popover>
        </el-col>
        
        

        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('tapioca-express.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Tapioca Express
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('yogurt-world.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Yogurt World
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('taco-villa.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Taco Villa
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right">
            <template #reference>
              <el-image :src="getAssetsFile('spot-ktv.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Spot KTV
              </div>
            </template>
          </el-popover>
        </el-col>
        
        <el-col :span="2" class="icon-sponsor">
          <el-popover placement="right" >
            <template #reference>
              <el-image :src="getAssetsFile('eastern-dynasty.png')" class="icon sponsor-container sponsors"/>
            </template>
            <template #default>
              <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                Eastern Dynasty
              </div>
            </template>
          </el-popover>
        </el-col>
        

       
        </el-row>

        <!-- second row -->
      

          <el-row justify="center">
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('blue-pepper.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Blue Pepper
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('fan-fan.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Fan Fan
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('starbucks.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Starbucks
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('youmi.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Youmie
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('kanpai.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    KANPAI
                  </div>
                </template>
              </el-popover>
            </el-col>
          
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('o-billiard-cafe.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    O Billiard Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
    
          

         
        </el-row>

          <!-- third row -->
          <el-row justify="center">

            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('rakiraki.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    RAKIRAKI
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('shanghai-cafe.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Shanghai Cafe
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('dumpling-inn.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Dumpling Inn
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('m-and-j.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    M&J 798
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('si-chuan-garden.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    Spicy City
                  </div>
                </template>
              </el-popover>
            </el-col>
            
            <el-col :span="2" class="icon-sponsor">
              <el-popover placement="right">
                <template #reference>
                  <el-image :src="getAssetsFile('bbking.png')" class="icon sponsor-container sponsors"/>
                </template>
                <template #default>
                  <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                    BB KING
                  </div>
                </template>
              </el-popover>
            </el-col>
            


          

          </el-row>

        <!-- fourth row -->
        <el-row justify="center">
       
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('sizzling-pot-king.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Sizzling Pot King 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('chakaa.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Chakaa 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('du-entertainment.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  DU Entertainment
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('encounter.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Encounter
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('k.ma.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  K.MA
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('vivi-bubble-tea.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  ViVi Bubble Tea
                </div>
              </template>
            </el-popover>
          </el-col>
  
        </el-row>

        <!-- fifth row -->
        <el-row justify="center">
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('yin-tang.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Yin Tang
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('wu-hu.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  Wu Hu
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('hai-si.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                 Hair Star 
                </div>
              </template>
            </el-popover>
          </el-col>
        
          <el-col :span="2" class="icon-sponsor">
            <el-popover placement="right">
              <template #reference>
                <el-image :src="getAssetsFile('nobel-chef.png')" class="icon sponsor-container sponsors"/>
              </template>
              <template #default>
                <div style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;">
                  The Nobel Chef
                </div>
              </template>
            </el-popover>
          </el-col>
        </el-row>
        



      </el-col>


      </el-row>

     
  

    </el-footer>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";</script>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="less">
  .common-layout {
    height: 23vw;
    background-color: #313338;
    padding: 0;
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

</style>