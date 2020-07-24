<template>
  <div class="container-box">
  <div v-for="item in litterImgArr" :key="item.title" class="litterImg">
      <div class="img"></div>
      <div class="title">{{item.title}}</div>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      litterImgArr: [{title: '番剧'}, {title: '国创'}, {title: '纪录片'}, {title: '动画'},
        {title: '音乐'}, {title: '舞蹈'}, {title: '游戏'}, {title: '知识'},
        {title: '数码'}, {title: '生活'}, {title: '鬼畜'}, {title: '时尚'},
        {title: '娱乐'}, {title: '影视'}, {title: '电影'}, {title: '电视剧1'}]
    }
  }
}
</script>

<style scoped>
.litterImg{
    width: 40px;
    height: 60px;
    padding: 20px;
    font-size: 12px;
    text-align: center;
}
.litterImg .img{
    width: 40px;
    height: 40px;
    border: 1px solid black;
}
.litterImg .title{
    width: 40px;
    height: 20px;
}
.container-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
