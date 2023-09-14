<template>
  <div class="container">
    <div class="logo">
      <span>ChatGPT</span>
    </div>
    <div class="search"></div>
    <div class="list">
      <div v-for="(item, index) in 100" :key="index">
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatList",
  data() {
    return {
      chatText: "hello world",
    };
  },
});
</script>
<style lang="less" scoped>
.container {
  height: 100%;

  .logo {
    height: 6%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: red;
    min-height: 60px;
    position: relative;

    span {
      font-size: 30px;
      color: #0e0e0e;
      font-weight: bold;
      position: absolute;
      bottom: 10px;
      left: 10px;
    }
  }

  .search {
    height: 6%;
    width: 100%;
    min-height: 60px;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;
  }

  .list {
    height: 88%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;
    overflow-y: scroll;

    .item {
      border-style: solid;
      border-width: 1px;
      border-color: #e86dbd;
      height: 60px;
    }

    .item:hover {
      background-color: #d2e087;
    }
  }

  .list::-webkit-scrollbar {
    display: none;
  }
}
</style>
