<template>

  <!--播放bilibili视频-->
  <el-dialog v-model="dialogVisible" title="CSSA宣传片" width="70%" destroy-on-close>
    <iframe class="player" src="https://www.xiaohongshu.com/search_result/679d936a000000002a0027f1?xsec_token=ABQR1VJnE1bvo_GC_kKtJyhczXK-VBp2QoPuj9gvmCZYk=&xsec_source=pc_search"
            border="0" framespacing="0" allowfullscreen="true">
    </iframe>
  </el-dialog>


  <el-container class="container">

    <!--插入aside照片（全体合照）-->
    <el-aside width="26.174vw">
      <el-row justify="center">
        <!--这里用img不卡，原来使用el-image会导致页面子元素过多，因此会卡顿。-->
        <img class="group-photo" :src="getAssetsFile('蛇年春晚.jpg')" style="width: 30vw; height: 35vw;"/>
        <!--视频播放键-->
        <el-button class="video" color="#a0342c" bg id="videoButton" :icon="CaretRight" circle
                   @click="dialogVisible=true; clearButtonState('videoButton')"/>
      </el-row>
    </el-aside>

    <el-main>

      <!--大标题-->
      <el-row>
        <el-col :offset="1" :span="23">
          <h1>{{ $t("intro.bigHeader") }}</h1>
          <h2>{{ $t("intro.subHeader") }}</h2>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22">
          <el-col :offset="1" :span="23">
            <p>
              {{ $t("intro.description") }}
            </p>
          </el-col>
        </el-col>
      </el-row>

      <el-row>
        <!--图片右边第一个箭头-->
        <el-col :span="5" class="col1">
          <el-button id="arrow1" color="#B02B3B" :icon="ArrowRightBold" circle plain class="arrow"
                     @click="clearButtonState('arrow1')"/>
        </el-col>
        <!--图片右边第一个小标题-->
        <el-col :span="12">
          <h1>{{ $t("intro.commitmentTitle") }}</h1>
          <p class="text">{{ $t("intro.commitmentText") }}</p>
        </el-col>
      </el-row>

      <el-row>
        <!--图片右边第二个箭头-->
        <el-col :span="5">
          <el-button id="arrow2" color="#B02B3B" :icon="ArrowRightBold" circle plain class="arrow"
                     @click="clearButtonState('arrow2')"/>
        </el-col>
        <!--图片右边第二个小标题-->
        <el-col :span="12">
          <h1>{{ $t("intro.valuesTitle") }}</h1>
          <p class="text">{{ $t("intro.valuesText") }}</p>
        </el-col>
      </el-row>

      <el-row justify="start">
        <!--图片右边第三个箭头-->
        <el-col :span="5">
          <el-button id="arrow3" color="#B02B3B" :icon="ArrowRightBold" circle plain class="arrow"
                     @click="clearButtonState('arrow3')"/>
        </el-col>
        <!--图片右边第三个小标题-->
        <el-col :span="12">
          <div/>
          <h1>{{ $t("intro.aspirationTitle") }}</h1>
          <p class="text">
            {{ $t("intro.aspirationText") }}</p>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import {ArrowRightBold, CaretRight} from '@element-plus/icons-vue'
import {getAssetsFile} from "../utils/getAssetsFile";

let dialogVisible = $ref(false);

// 清除按钮点击后的状态，使其恢复到未点击状态。
// https://blog.csdn.net/qq_43586088/article/details/126367134
function clearButtonState(id) {
  document.getElementById(id).blur();
}

</script>

<script>
export default {
  name: "HomeIntro"
}
</script>

<style scoped lang="less">

  .player {
    width: 60.431vw;
    height: 34.157vw;
  }

  .container {
    left: 25%;
    font-family: sans-serif;
    padding-top: 2vw;
    padding-left: 20%;
    width: 100%;
  }

  .group-photo {
    // margin-bottom: 3vw;
    object-fit: contain;
  }

  .video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  h1 {
    height: 0.1vw;
    font-size: 1vw;
    margin-bottom: 2vw;
  }

  h2 {
    height: 0.525vw;
    color: #4e4b42;
    font-size: 1.471vw;
  }

  p {
    margin-bottom: 2.102vw;
    color: #3d3f41;
  }

  .el-main {
    width: 34.157vw;
  }

  .arrow {
    position: relative;
    top: 35%;
    left: 30%;
  }

  .text {
    width: 22.596vw;
    font-size: 0.736vw;
  }

  :deep(.el-button .iconfont) {
    font-size: inherit;
  }

  :deep(.el-button) {
    width: 2.102vw;
    height: 2.102vw;
  }

</style>