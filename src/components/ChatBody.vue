<template>
  <div class="container">
    <div class="topBar">
      <!--      <div class="topBar-avatar">-->
      <!--        <img src="../assets/images/chatLogo.jpg" alt="" />-->
      <!--      </div>-->
      <div class="topBar-message">
        <div class="message-title">
          <span>聊天主题</span>
        </div>
        <div class="message-model">
          <span>模型：chatgpt-3.5</span>
        </div>
      </div>
      <div class="topBar-operate">
        <div class="item-operate-div">
          <button class="item-operate-button">
            <div class="item-operate-button-div">
              <img class="edit" src="../assets/images/edit.png" alt="" />
            </div>
          </button>
        </div>
        <div class="item-operate-div">
          <button class="item-operate-button">
            <div class="item-operate-button-div">
              <img class="edit" src="../assets/images/edit.png" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="chatText">
      <div v-for="(item, index) in 20" :key="index">
        <div class="item-answer" v-if="index % 2 === 0">

          <div class="answer">
            <div class="answer-avatar">
              <img src="../assets/images/chatLogo.jpg" alt="" />
            </div>
            <div class="answer-content-all">
              <div class="answer-refresh">
                <img src="../assets/images/refresh.png" alt="" />
              </div>
              <div class="answer-content">
                <text>你好，我是ChatGPT，使用3.5模型。</text>
              </div>
              <div class="answer-time"><span>2023/9/15 23:21:34</span></div>
            </div>

          </div>

        </div>
        <div class="item-question" v-else>
          <div class="question">
            <text>在java中断点续传，大文件的分片信息可以存储到Map中吗
            </text>
          </div>
        </div>
      </div>
    </div>
    <div class="chatEdit">
      <div class="chatTool">
        <div class="chatTool-div">
          <button class="chatTool-div-button">
            <div class="chatTool-div-button-div">
              <img class="edit" src="../assets/images/edit.png" alt="" />
            </div>
          </button>

        </div>
        <div class="chatTool-div">
          <button class="chatTool-div-button">
            <div class="chatTool-div-button-div">
              <img class="edit" src="../assets/images/edit.png" alt="" />
            </div>
          </button>
        </div>
      </div>
      <div class="chatInput">
        <textarea class="chatInputText" placeholder="Ctrl + Enter 发送，/ 触发补全" rows="3"></textarea>
        <button class="chatInputButton">
          <div class="chatInputButton-image">
            <img src="../assets/images/setup.png" alt="" />
          </div>
          <div class="chatInputButton-send">发送</div>
        </button>
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
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  .topBar {
    padding: 14px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .topBar-avatar {
      width: 60px;
      height: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: #e1c875;

      img {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        margin-top: 6px;
      }
    }

    .topBar-message {
      max-width: calc(100% - 100px);
      overflow: hidden;

      .message-title {
        font-size: 20px;
        font-weight: bolder;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        max-width: 50vw;
        cursor: pointer;
        color: #0e0e0e;
      }

      .message-model {
        font-size: 14px;
        margin-top: 5px;
        color: #4c8a65;
        //overflow: hidden; /*超出的部分隐藏起来。*/
        //white-space: nowrap; /*不显示的地方用省略号...代替*/
        //text-overflow: ellipsis; /* 支持 IE */
      }
    }

    .topBar-operate {
      display: inline-flex;

      .item-operate-div {
        margin-left: 10px;

        .item-operate-button {
          border: 1px solid #dedede;;
          background-color: #fff;;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          cursor: pointer;
          transition: all .3s ease;
          overflow: hidden;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          outline: none;
          color: #303030;

          .item-operate-button-div {
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;

            .edit {
              width: 16px;
              height: 16px;
              //display: flex;
            }
          }
        }
      }

    }
  }

  .chatText {
    flex: 1 1;
    overflow: auto;
    //padding: 10px 10px 20px;
    position: relative;
    overscroll-behavior: none;

    .item-answer {
      margin-top: 50px;
      //padding-top: 14px;

      .answer {
        display: flex;
        text-align: left;

        .answer-avatar {
          margin-left: 20px;
          max-width: 50px;
          margin-right: 5px;

          img {
            margin-top: 15px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        }

        .answer-content-all {
          max-width: 70%;

          .answer-refresh {
            text-align: right;

            img {
              width: 14px;
              height: 14px;
            }
          }

          .answer-content {
            border-style: solid;
            border-width: 1px;
            border-color: #dddddd;
            color: #0e0e0e;
            border-top-right-radius: 10px; /* 右上角圆角 */
            border-bottom-right-radius: 10px; /* 右下角圆角 */
            border-bottom-left-radius: 10px; /* 左下角圆角 */
            padding: 8px;
            background-color: #f0f0f0;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);

            text {
              font-size: 15px;
              line-height: 25px;
            }
          }

          .answer-time {
            text-align: right;
            color: #aaa;
            padding-top: 5px;
            font-size: 12px;
          }

        }


      }
    }

    .item-question {
      display: flex;
      margin-bottom: 40px;
      margin-top: 50px;
      margin-right: 10px;

      .question {
        color: #0e0e0e;
        text-align: end;
        border-style: solid;
        border-width: 1px;
        border-color: #dddddd;
        margin: 0 10px 0 auto;
        max-width: 70%;
        border-top-right-radius: 10px; /* 右上角圆角 */
        border-top-left-radius: 10px; /* 右下角圆角 */
        border-bottom-left-radius: 10px; /* 左下角圆角 */
        padding: 8px;
        background-color: #f0f0f0;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);

        text {
          font-size: 15px;
          line-height: 25px;
        }
      }

    }
  }

  .chatEdit {
    position: relative;
    width: 100%;
    padding: 10px 20px 20px;
    box-sizing: border-box;
    flex-direction: column;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top: 1px solid #dedede;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);

    .chatTool {
      display: flex;
      flex-wrap: wrap;

      .chatTool-div {
        margin-right: 5px;
        display: flex;
        border-style: solid;
        border-width: 1px;
        border-color: #dddddd;
        border-radius: 20px;
        align-items: center;
        transition: all .3s ease;
        margin-bottom: 10px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .05);

        .chatTool-div-button {
          border: 1px solid #dedede;;
          background-color: #fff;;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          cursor: pointer;
          transition: all .3s ease;
          overflow: hidden;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          outline: none;
          color: #303030;

          .chatTool-div-button-div {
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;

            .edit {
              width: 16px;
              height: 16px;
              //display: flex;
            }
          }
        }

        img {
          align-items: center;
          padding: 4px 10px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .chatInput {

      display: flex;

      .chatInputText {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #dedede;;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, .03);
        background-color: #fff;
        color: #303030;
        font-family: inherit;
        padding: 10px 90px 10px 14px;
        resize: none;
        outline: none;
      }

      .chatInputButton {
        background-color: #1d93ab;
        color: #fff;
        position: absolute;
        right: 30px;
        bottom: 32px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        cursor: pointer;
        transition: all .3s ease;
        overflow: hidden;
        outline: none;
        border: none;

        .chatInputButton-image {
          width: 16px;
          height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 16px;
            height: 16px;
          }
        }

        .chatInputButton-send {
          margin-left: 5px;
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

      }
    }
  }


  .chatText::-webkit-scrollbar {
    //display: none;
    width: 6px;
  }

  .chatText::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(238, 233, 233, 0.16);
    background: rgba(168, 165, 165, 0.76);
  }

  .chatTool-div:hover {
    background-color: #e3e7e5;
  }

  //.chatText::-webkit-scrollbar-track {
  //  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  //  border-radius: 10px;
  //  background: #EDEDED;
  //}
}
</style>
