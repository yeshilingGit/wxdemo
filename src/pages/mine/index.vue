<template>
  <div>
    <div class="top">
      <div class="head-portrait"></div>
      <div class="login-button">B站登录</div>
    </div>
    <div class="history">
      <div>
        <div>历史记录</div>
        <div>查看更多></div>
      </div>
      <div>
        <div v-for="item in historyArr" :key="item.key" class="history-container">
          <div class="history-img"><img :src="imgUrl"></img></div>
          <div>{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="feedback">
      <div>意见反馈</div>
      <div>></div>
    </div>
  </div>
</template>

<script>
let imgUrl = require('../../../static/images/2.jpeg')
export default {
  data () {
    return {
      imgUrl: imgUrl,
      historyArr: [{key: 1, title: '前魅族副总裁分享11条防社会毒打...'},
        {key: 2, title: '这动画让腾讯跪舔，让制作组肝...'}, {key: 3, title: 'lpl夏季赛，7月20日...'}]
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
  height:100%;
}
.top{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
}
.head-portrait{
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 25px;
}
.login-button{
  width: 60px;
  height: 25px;
  margin-top: 10px;
  font-size: 12px;
  background-color: pink;
  color: white;
  border-radius: 5px;
  text-align: center;
  line-height: 25px;
}
.feedback,.history>div:first-child{
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-top: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  color: black;
  font-size: 12px;
  font-weight: 900;
}
.history-container{
  padding: 5px;
}
.history>div:first-child{
  border-bottom: none;
}
.history>div:nth-child(2){
  display: flex;
  font-size: 10px;
}
.history>div:nth-child(2)>div{
  flex: 1;
}
.history-img{
  height: 50px;
  border-radius: 5px;
}
</style>
