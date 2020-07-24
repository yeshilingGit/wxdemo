<template>
    <div class="container-box">
        <div class="left" >
            <img :src="img" />
        </div>
        <div class="right">
            <div class="title">{{title}}</div>
            <div class="label"><div>{{label}}</div></div>
            <div class="uper">{{uper}}</div>
            <div class="playNum">
                <div>{{playNum}}</div>
                <div>{{date}}</div>
            </div>
        </div>
    </div>
</template>
<script>
let img = require('../../static/images/1.jpeg')
export default {
  props: ['title', 'label', 'uper', 'playNum', 'date'],
  data () {
    return {
      img: img
    }
  }
}
</script>
<style scoped>
.container-box{
    height: 15vh;
    display: flex;
    padding: 5px;
}
.container-box img{
    width: 100%;
    height: 100%;
}
.container-box .left{
    width: 40vw;
    padding-right: 10px;
}
.container-box .left img{
     border-radius: 10px;
}

.container-box .right{
    width: 60vw;
}
.title{
    height: 30px;
    font-size: 12px;
    font-weight: 700;
}
.label{
    display: flex;
    font-size: 8px;
}
.label>div{
    color: orange;
    border: 1px solid orange;
}
.uper,.playNum{
    color: Silver;
    font-size: 10px;
}
.playNum{
    display: flex;
}
.playNum>div{
    flex: 1;
}
</style>