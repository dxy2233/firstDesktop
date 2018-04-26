<template>
  <div id="poil">
    <div class="content">
     <iframe src="https://www.aibaodata.com/fakelogin?url=/user_insurance" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poil'
}
</script>

<style scoped>
#poil {
  height: calc(100% - 92px);
  width: 100%;
  overflow: hidden;
}

.content {
  margin-top: -100px;
  height: calc(100% + 100px);
  /* 遮罩层高度应加上margin */
}

.content iframe {
  width: 100%;
  height: 100%;
}
</style>
