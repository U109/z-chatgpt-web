<template>
  <div class="container">
    <div class="topBar"></div>
    <div class="chatBox">
      <div class="chatText"></div>
      <div class="chatEdit">
        <div class="charTool"></div>
        <div class="chatInput">
          <div class="chatInputBox"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatBody",
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
  overflow: hidden;

  .topBar {
    height: 6%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: red;
    min-height: 60px;
  }

  .chatBox {
    height: 94%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;

    .chatText {
      height: 70%;
      width: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: #f5d8a7;
    }

    .chatEdit {
      height: 30%;
      width: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: #f5d8a7;

      .charTool {
        height: 15%;
        width: 100%;
        border-style: solid;
        border-width: 1px;
        border-color: #f5d8a7;
      }

      .chatInput {
        height: 85%;
        width: 100%;
        border-style: solid;
        border-width: 1px;
        border-color: #798059;
        position: relative;

        .chatInputBox {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          height: 80%;
          width: 98%;
          border-style: solid;
          border-width: 1px;
          border-color: #86fdb3;
        }
      }
    }
  }
}
</style>
