<template>
  <div id="contrast">
    <div class="content">
     <!-- <iframe src="https://www.aibaodata.com/product_detail/productplan/938_54307" frameborder="0"></iframe> -->
     <iframe src="https://www.aibaodata.com/fakelogin?url=/contrast_analysis" frameborder="0"></iframe>
     <!-- <webview id="foo" src="https://www.aibaodata.com/fakelogin?url=/contrast_analysis" allowpopups style="width:100%;height:100%;"></webview> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contrast'
}
</script>

<style scoped>
#contrast {
  height: calc(100% - 92px);
  width: 100%;
  overflow: hidden;
}

.content {
  margin-top: -300px;
  height: calc(100% + 300px);
  /* 遮罩层高度应加上margin */
}

.content iframe {
  width: 100%;
  height: 100%;
}
</style>
