<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <h1>CSSA Application</h1>
        <p>如果你有兴趣加入CSSA，请填写此表格，我们将尽快与你联系。</p>
        <h2>Tell me about yourself</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfaqiePyewGlCKrZS4G59Es_0BG_MSIm52e1C7b8PGgqoaFxg/viewform?embedded=true" width="1000" height="1886">Loading…</iframe>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>

</script>

<script>
export default {
  name: "application"
}
</script>

<style scoped lang="less">
h1{
  text-align: center;
  margin: 1%;
  font-size: 2.5vw;
}
p{
  text-align: center;
  margin: 2%;
  font-size: 1.5vw;
}
h2{
  text-align: center;
  font-size: 1.5vw;
}
iframe{
  margin: 1% 10% 1% 10%;
  width: 80%;
  border: none;
}

</style>