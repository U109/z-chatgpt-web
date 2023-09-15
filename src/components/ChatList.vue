<template>
  <div class="container">
    <div class="logo">
      <span>ChatGPT</span>
    </div>
    <div class="search">
      <div class="search-one">
        <img src="../assets/images/search.png" alt="" />
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div class="list">
      <div v-for="(item, index) in 100" :key="index">
        <div class="item">
          <div class="item-avatar">
            <img src="../assets/images/chatLogo.jpg" alt="" />
          </div>
          <div class="item-message">
            <div class="message-title">
              <span>聊天主题 ：{{ index }}</span>
            </div>
            <div class="message-content">
              <span>总共 {{ index }} 条对话</span>
            </div>
          </div>
          <div class="item-time">
            <div class="time">16:24</div>
            <div class="item-operate">
              <img class="delete" src="../assets/images/delete.png" alt="" />
            </div>
          </div>
        </div>
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
      chatText: "hello world"
    };
  }
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

    .search-one {
      height: 80%;
      width: 94%;
      margin-left: 10px;
      margin-top: 5px;
      background-color: #ececed;
      border-radius: 10px;
      align-items: center;
      display: flex;
      border-color: #dddddd;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);

      img {
        width: 30px;
        height: 30px;
        margin-left: 5px;
        margin-right: 5px;
      }

      input {
        height: 30px;
        width: 80%;
        font-size: 30px;
        line-height: 30px;
        //border: 0;  // 去除未选中状态边框
        //outline: none; // 去除选中状态边框
        //background-color: rgba(0, 0, 0, 0);// 透明背景
      }
    }
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
      display: flex;
      //margin-bottom: 5px;

      .item-avatar {
        width: 20%;
        height: 100%;
        border-style: solid;
        border-width: 1px;
        border-color: #e1c875;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
      }

      .item-message {
        height: 100%;
        width: 60%;
        color: #0e0e0e;
        border-style: solid;
        border-width: 1px;
        border-color: #e1c875;
        text-align: left;
        position: relative;

        .message-title {
          position: absolute;
          top: 8px;
          left: 5px;
          width: 100%;
          font-size: 15px;
          font-weight: 600;
          overflow: hidden; /*超出的部分隐藏起来。*/
          white-space: nowrap; /*不显示的地方用省略号...代替*/
          text-overflow: ellipsis; /* 支持 IE */
        }

        .message-content {
          position: absolute;
          top: 35px;
          left: 5px;
          width: 100%;
          font-size: 12px;
          color: darkgray;
          overflow: hidden; /*超出的部分隐藏起来。*/
          white-space: nowrap; /*不显示的地方用省略号...代替*/
          text-overflow: ellipsis; /* 支持 IE */
        }
      }

      .item-time {
        height: 100%;
        width: 20%;
        text-align: center;
        position: relative;

        .time {
          position: absolute;
          top: 10px;
          left: 15px;
          font-size: 12px;
          color: darkgray;
        }

        .item-operate {
          position: absolute;
          top: 32px;
          //left: 20px;
          right: -25px;

          .delete {
            width: 20px;
            height: 20px;
            display: flex;
            //transition: transform 0.3s ease;
          }
        }
      }
    }

    .item:hover {
      background-color: #d2e087;
    }

    .item:hover .delete {
      transform: translateX(-47px);
      transition: transform 0.3s ease; /* 过渡持续时间为0.5秒，缓动函数为ease */
    }
  }

  .list::-webkit-scrollbar {
    display: none;
  }
}
</style>
