<template>
  <div class="outside-border">
    <h6 class="header">记事本</h6>
    <div class="main">
      <input type="text" v-model="mytext" @keyup.enter="add" class="context" />
      <ul>
        <li v-for="(data, index) in datalist" :key="index" class="listyle">
          <hr class="hrstyle" />
          <span>{{ index + 1 }}.{{ data }}</span>
          <span>
            <button class="deletebtn" @click="deletebtn(index)">
              <i class="el-icon-close"></i>
            </button>
          </span>
        </li>
      </ul>
    </div>
    <footer class="footer">
      <hr />
      <a>It has {{ datalist.length }} items now!</a>
      <span>
          <button class="clearcontext" @click="clearcontext">清空items</button>
        </span>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      datalist: ["吃饭", "睡觉", "写代码"],
      mytext: "请输入内容......",
    };
  },
  methods: {
    add() {
      this.datalist.push(this.mytext);
    },
    deletebtn(index) {
      this.datalist.splice(index, 1);
    },
    clearcontext() {
      this.datalist = [];
    },
  },
};
</script>
<style lang="stylus" scoped>
.outside-border {
  border: 1px solid rgb(194, 188, 188);
  box-shadow: 0 0 9px 3px #999;
  min-width: 100%;
  max-width: 100%;
  color: #4d4d4d;
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #fff;
}

.header {
  left: center;
  width: 100px;
  margin: 0 auto;
  font-size: 30px;
  text-shadow: 3px 5px 5px #656b79;
}

.main {
  left: center;
  width: 100%;
  margin: 0 auto;
}

.context {
  width: 99.5%;
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 20px;
  color: #4d4d4d;
  border-width: 0;
  height: 40px;
  background: #ffffff;
  outline: none;
}

ul {
  margin: 0;
  padding: 0;
  text-align: left;

  .listyle {
    list-style-type: none;
    font-size: 18px;
  }
}

.deletebtn {
  border-width: 0;
  background: #ffffff;
  float: right;
  outline: none;
  cursor: pointer;
}

.footer {
  float: bottom;
}

.hrstyle {
  border: solid 1px #e5e5e5;
}

.clearcontext {
  border-width: 0;
  background: #ffffff;
  float: right;
  outline: none;
  cursor: pointer;
  font-size: 10px;
  font: 10px 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
</style>