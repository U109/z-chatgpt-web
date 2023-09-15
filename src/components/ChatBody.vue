<template>
  <div class="container">
    <div class="topBar">
      <div class="topBar-avatar">
        <img src="../assets/images/chatLogo.jpg" alt="" />
      </div>
      <div class="topBar-message">
        <div class="message-title">
          <span>聊天主题</span>
        </div>
        <div class="message-model">
          <span>模型：chatgpt-3.5</span>
        </div>
      </div>
      <div class="topBar-operate">
        <div class="item-operate-one">
          <img class="edit" src="../assets/images/edit.png" alt="" />
        </div>
        <div class="item-operate-two">
          <img class="edit" src="../assets/images/edit.png" alt="" />
        </div>
        <div class="item-operate-three">
          <img class="edit" src="../assets/images/edit.png" alt="" />
        </div>
      </div>
    </div>
    <div class="chatBox">
      <div class="chatText">
        <div v-for="(item, index) in 100" :key="index">
          <div class="item-answer" v-if="index % 2 === 0">
            <div class="answer">

              <div class="answer-avatar">
                <img src="../assets/images/chatLogo.jpg" alt="" />
              </div>
              <div class="answer-content">
                <text>你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？
                  你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？
                  你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？
                  你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？
                  你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？你好，我是ChatGPT，使用3.5模型。请问需要什么帮助？
                </text>
              </div>

            </div>

          </div>
          <div class="item-question" v-else>
            <div class="question">
              <text>你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？
                你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？
                你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？
                你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？你是谁？
              </text>
            </div>
          </div>
        </div>
      </div>
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
      chatText: "hello world"
    };
  }
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
    display: flex;

    .topBar-avatar {
      width: 60px;
      height: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: #e1c875;
      //justify-content: center;
      //align-items: center;
      //padding-top: 5px;

      img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        margin-top: 6px;
      }
    }

    .topBar-message {
      height: 100%;
      width: 80%;
      color: #0e0e0e;
      border-style: solid;
      border-width: 1px;
      border-color: #e1c875;
      text-align: left;
      position: relative;
      display: flex;

      .message-title {
        position: absolute;
        top: 8px;
        left: 5px;
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        overflow: hidden; /*超出的部分隐藏起来。*/
        white-space: nowrap; /*不显示的地方用省略号...代替*/
        text-overflow: ellipsis; /* 支持 IE */
      }

      .message-model {
        position: absolute;
        top: 35px;
        left: 5px;
        width: 100%;
        font-size: 12px;
        font-weight: 600;
        color: #4c8a65;
        overflow: hidden; /*超出的部分隐藏起来。*/
        white-space: nowrap; /*不显示的地方用省略号...代替*/
        text-overflow: ellipsis; /* 支持 IE */
      }
    }

    .topBar-operate {
      height: 100%;
      width: 120px;
      text-align: center;
      position: relative;

      .item-operate-one {
        //display: flex;
        position: absolute;
        top: 12px;
        left: 10px;

        .edit {
          width: 30px;
          height: 30px;
          display: flex;
        }
      }

      .item-operate-two {
        //display: flex;
        position: absolute;
        top: 12px;
        left: 50px;

        .edit {
          width: 30px;
          height: 30px;
          display: flex;
        }
      }

      .item-operate-three {
        //display: flex;
        position: absolute;
        top: 12px;
        left: 90px;

        .edit {
          width: 30px;
          height: 30px;
          display: flex;
        }
      }
    }
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
      color: #0e0e0e;
      overflow-y: scroll;

      .item-answer {
        margin-bottom: 5px;

        .answer {
          display: flex;
          text-align: left;

          .answer-avatar {
            max-width: 50px;

            img {
              width: 30px;
              height: 30px;
              border-radius: 50%;

            }
          }

          .answer-content {
            max-width: 70%;
            border-width: 1px;
            border-style: solid;
            border-color: #0a30ec;
            color: #0e0e0e;

            text {
              font-size: 15px;
            }
          }

        }
      }

      .item-question {
        text-align: left;

        .question {
          margin: 0 0 0 auto;
          border-style: solid;
          border-width: 1px;
          border-color: #f5d8a7;
          //float: right;
          max-width: 70%;

          text {
            font-size: 15px;
          }
        }

      }
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

  .chatText::-webkit-scrollbar {
    display: none;
  }
}
</style>
