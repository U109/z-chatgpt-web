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
          <div class="chatTool-one">
            <img src="../assets/images/setup.png" alt="" />
          </div>
<!--          <div class="chatTool-two">-->
<!--            <img src="../assets/images/setup.png" alt="" />-->
<!--          </div>-->
<!--          <div class="chatTool-three">-->
<!--            <img src="../assets/images/setup.png" alt="" />-->
<!--          </div>-->
<!--          <div class="chatTool-four">-->
<!--            <img src="../assets/images/setup.png" alt="" />-->
<!--          </div>-->
        </div>
        <div class="chatInput">
          <textarea class="chatInputText" placeholder="Ctrl + Enter 发送，/ 触发补全" rows="3"></textarea>
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
      height: 78%;
      width: 100%;
      border-style: solid;
      border-width: 1px;
      border-color: #f5d8a7;
      color: #0e0e0e;
      overflow-y: scroll;

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
              box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);

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
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);

          text {
            font-size: 15px;
            line-height: 25px;
          }
        }

      }
    }

    .chatEdit {
      padding: 10px 20px 20px;
      .chatTool {
        display: flex;
        width: 100%;

        .chatTool-one {
          display: flex;
          border-style: solid;
          border-width: 1px;
          border-color: #dddddd;
          border-radius: 20px;
          align-items: center;
          transition: all .3s ease;
          margin-bottom: 10px;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);

          img {
            align-items: center;
            padding: 4px 10px;
            width: 20px;
            height: 20px;
          }
        }

        //.chatTool-two {
        //  margin-top: 3px;
        //  margin-left: 10px;
        //  margin-right: 10px;
        //  display: flex;
        //  img {
        //    width: 35px;
        //    height: 35px;
        //  }
        //}
        //
        //.chatTool-three {
        //  margin-top: 3px;
        //  margin-left: 10px;
        //  margin-right: 10px;
        //  display: flex;
        //  img {
        //    width: 35px;
        //    height: 35px;
        //  }
        //}
        //
        //.chatTool-four {
        //  margin-top: 3px;
        //  margin-left: 10px;
        //  margin-right: 10px;
        //  display: flex;
        //  img {
        //    width: 35px;
        //    height: 35px;
        //  }
        //}
      }

      .chatInput {

        .chatInputText {
          height: 100%;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 -2px 5px rgba(0,0,0,.03);
          //background-color: var(--white);
          color: #0e0e0e;
          font-family: inherit;
          font-size: 16px;
          padding: 10px 90px 10px 14px;
          resize: none;
          outline: none;
          min-height: 100px;
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

  .chatTool-one:hover {
    background-color: #e3e7e5;
  }

  //.chatText::-webkit-scrollbar-track {
  //  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  //  border-radius: 10px;
  //  background: #EDEDED;
  //}
}
</style>
