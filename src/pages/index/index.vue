<template>
<div>
    <img :src="imgUrl" style="height: 100vh">
    </img>
    <div class="skip" @click="skipHandler">
      {{skip}}{{time}}s
    </div>
</div>
</template>
<script>
let imgUrl = require('../../../static/images/login.jpg')
export default {
  data () {
    return {
      imgUrl: imgUrl,
      skip: '跳过',
      time: 3
    }
  },
  mounted () {
    let timeout = () => {
      if (this.time <= 0) {
        this.skipHandler()
        return
      }
      setTimeout(() => {
        this.time--
        timeout()
      }, 1000)
    }
    timeout()
  },
  methods: {
    skipHandler () {
      const url = '../home/main'
      mpvue.switchTab({url})
    }
  }
}
</script>
<style scoped>
.skip{
  width: 100px;
  height: 50px;
  border: 1px #ccc solid;
  border-radius: 25px;
  position: absolute;
  right:0;
  bottom:0;
  text-align: center;
  line-height: 50px;
}
</style>