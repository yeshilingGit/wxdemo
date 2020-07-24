<template>
<div class="home-container">
  <div class="queryInput">
    <input type="text">
    </input>
  </div>
  <div class="nav">
  <div v-for="item in navArray" :key="item.key" :class="{'active':item.key===activeKey}" @click="changeActiveKey(item.key)"><div>{{item.title}}</div></div>
  </div>
  <!-- <transition name="vLink"> -->
  <div class="vLink-container" v-show="activeKey===1">
    <video-link v-for="item in vLinkArr" :key="item.id" @click="vLinkTo(item.id)" 
    :title="item.title" :label="item.label" :uper="item.uper" :playNum="item.playNum" :date="item.date">
    </video-link>
  </div>
  <!-- </transition> -->
  <!-- <transition name="pursue"> -->
  <div v-show="activeKey===2">
    暂无数据
  </div>
  <!-- </transition> -->
  </div>
</template>

<script>
import videoLink from '@/components/videoLink.vue'
// import axios from 'axios'
export default {
  components: {
    videoLink
  },
  mounted () {

  },
  onPullDownRefresh () {
    if (this.pullDownRefreshFlag) {
      return
    }
    this.pullDownRefreshFlag = true
    wx.startPullDownRefresh({
      success: () => {
        console.log('开始下拉刷新...')
        setTimeout(() => {
          this.pullDownRefreshFlag = false
        }, 3000)
      }
    })
  },
  data () {
    return {
      a: 123,
      navArray: [
        {title: '热门', key: 1}, {title: '追番', key: 2}
      ],
      pullDownRefreshFlag: false,
      activeKey: 1,
      vLinkArr: [
        {id: 1, title: '3年300万订阅，我有些话想跟大家说...', label: '9万点赞', uper: '宝剑嫂', playNum: '43.4万', date: '7-20'},
        {id: 2, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 3, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 4, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 5, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 6, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 7, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'},
        {id: 8, title: '人类早期驯服野生熊本熊的珍贵影象', label: '很多人点赞', uper: '人类早期巡抚', playNum: '31.7万', date: '7-21'}
      ]
    }
  },
  methods: {
    gethttp () {
      // mpvue.request({url: 'http://127.0.0.1/my:3000',
      //   method: 'get',
      //   success: (res) => {
      //     console.log(res)
      //     console.log('333')
      //   }})
    },
    changeActiveKey (key) {
      this.gethttp()
      this.activeKey = key
    }
  }
}
</script>

<style scoped>
.container{

}
.queryInput{
  margin: 0 20px;
  background-color:#ccc;
  border-radius:30px;
  padding: 0 15px;
}
.nav{
  display: flex;
  margin-top: 20px;
  z-index:2;
}
.nav>div{
  flex:1;
  display: flex;
  justify-content: center;
  text-align: center;
}
.nav>.active{
  color: pink
}
.nav>.active>div{
  border-bottom: solid 2px pink;
}
.vLink-container{
  border-top: 1px solid Silver;
  z-index:1;
}
</style>
