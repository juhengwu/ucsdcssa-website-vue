<template>
  <!--使用Element-plus: container布局容器组件-->
  <div class="common-layout">
    <el-container>
      <!--顶栏容器-->
      <el-header>
        <!--FAQ区域标题-->
        <h2>F. A. Q</h2>
        <p>{{ $t("faq.title") }}</p>
      </el-header>
      <!--主要区域容器-->
      <el-main>
        <br>
        <br>
        <br>
        <!--collapse折叠面板组件：手风琴效果-->
        <el-collapse accordion>
          <!--第一个折叠面板-->
          <el-collapse-item name="1" class="group">
            <!--通过title属性自定义面板标题内容-->
            <template #title>
              <!--增加图标效果-->
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <div>
                <!--第一个面板标题内容-->
                <h3>{{ $t("faq.questions.q1") }}</h3>
              </div>
            </template>
            <div>
              <!--第一个面板折叠内容-->
              <p class="text">{{ $t("faq.questions.a1") }}</p>
            </div>
          </el-collapse-item>
          <!--第二个折叠面板-->
          <el-collapse-item name="2" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <!--第二个面板标题内容-->
              <h3>{{ $t("faq.questions.q2") }}</h3>
            </template>
            <div>
              <!--第二个面板折叠内容-->
              <p class="text">{{ $t("faq.questions.a2") }}</p>
            </div>
          </el-collapse-item>
          <!--第三个折叠面板-->
          <el-collapse-item name="3" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <!--第三个面板标题内容-->
              <h3>{{ $t("faq.questions.q3") }}</h3>
            </template>
            <div>
              <!--第三个面板折叠内容-->
              <p class="text">{{ $t("faq.questions.a3") }}</p>
            </div>
          </el-collapse-item>
          <!--第四个折叠面板-->
          <el-collapse-item name="4" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <!--第四个面板折叠内容-->
              <h3>{{ $t("faq.questions.q4") }}</h3>
            </template>
            <div>
              <!--第四个面板折叠内容-->
              <p class="text">{{ $t("faq.questions.a4") }}</p>
            </div>
          </el-collapse-item>
          <!--第五个折叠面板-->
          <el-collapse-item name="5" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <!--第五个面板折叠内容-->
              <h3>{{ $t("faq.questions.q5") }}</h3>
            </template>
            <div>
              <!--第五个面板折叠内容-->
              <p class="text">{{ $t("faq.questions.a5_1") }}
                <!--更改字体颜色-->
                <text style="color: limegreen">{{ $t("faq.questions.a5_2") }}</text>
                {{ $t("faq.questions.a5_3") }}
              </p>
            </div>
            <div>
              <p class="text">{{ $t("faq.questions.a5_4") }}
                <text style="color: cornflowerblue">UCSDCSSA</text>
              </p>
            </div>
            <div>
              <p class="text">{{ $t("faq.questions.a5_5") }}
                <text style="color: cornflowerblue">UCSDCSSA2</text>
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {QuestionFilled} from '@element-plus/icons-vue'</script>

<script>
export default {
  name: "HomeFaq"
}
</script>

<style scoped lang="less">
  .common-layout {
    width: 85%;
    padding: 2vw 22vw 5vw 22vw;
  }

  .el-header {
    text-align: center;
    //line-height: 0.525vw;
  }

  h2 {
    color: #635551;
    font-family: "Poppins", sans-serif;
    font-size: 1.682vw;
    position: relative;
  }

  .el-main {
    position: relative;
    top: 2vw;
  }

  .group {
    margin-bottom: 1vw;
  }

  .header-icon {
    position: relative;
    left: 0.7vw;
    color: #ffb9a3;
  }

  h3 {
    position: relative;
    left: 1.051vw;
    font-family: "Open Sans", sans-serif;
  }

  .text {
    font-size: 0.841vw;
    font-family: "Open Sans", sans-serif;
    position: relative;
    left: 2.5vw;
    margin-top: -0.2vw;
    margin-bottom: -0.2vw;
  }

  :deep(.el-collapse-item__header) {
    color: #303313;
    background-color: transparent;
    border: none;
  }

  :deep(.el-collapse-item__wrap) {
    background-color: transparent;
  }

  :deep(.el-collapse-item) {
    background-color: white;
    //折叠面板自定义圆角
    border-radius: 20px;
    color: #BD5C46FF;
  }

  :deep(.el-collapse-item__header:hover) {
    color: #BD5C46FF;
  }

  :deep(.is-active) {
    color: #BD5C46FF;
  }
</style>