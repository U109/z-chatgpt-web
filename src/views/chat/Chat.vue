<template>
  <div class="chat-container">
    <div class="chat-leftSidebar">
      <LeftSidebar></LeftSidebar>
    </div>
    <div class="chat-list">
      <ChatList></ChatList>
    </div>
    <div class="chat-body">
      <ChatBody></ChatBody>
    </div>
  </div>
</template>

<script lang="ts">
import LeftSidebar from "@/components/LeftSidebar.vue";
import ChatList from "@/components/ChatList.vue";
import ChatBody from "@/components/ChatBody.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LeftSidebar,
    ChatList,
    ChatBody,
  },
});
</script>

<style lang="less" scoped>
.chat-container {
  border-style: solid;
  border-width: 1px;
  border-color: #42b983;
  font-size: 16px;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 5px;
  overflow: hidden;

  .chat-leftSidebar {
    display: flex;
    flex-direction: column;
    //border-style: solid;
    border-width: 1px;
    border-color: rebeccapurple;
    width: 75px;
    height: 100%;
  }

  .chat-list {
    border-style: solid;
    border-width: 1px;
    border-color: rebeccapurple;
    width: 300px;
    height: 100%;
    //background-color: rgb(0, 0, 0, 0.3);
  }

  .chat-body {
    flex: 1;
    height: 100%;
    background-color: rgba(210, 204, 204, 0.2);
    overflow-y: hidden;
    position: relative;
  }
}

@media screen and (max-width: 768px) {
  .chat-container {
    margin: 0;
    height: 100%;

    .chat-part2 {
      display: none;
    }

    .chat-team {
      display: block !important;
      position: absolute;
      font-size: 25px;
      top: 17px;
      left: 60px;
      z-index: 999;

      &:active {
        color: skyblue;
      }
    }

    .chat-tool {
      display: block !important;
      position: absolute;
      font-size: 25px;
      top: 13px;
      left: 20px;
      z-index: 999;

      &:active {
        color: skyblue;
      }
    }
  }
}
</style>
