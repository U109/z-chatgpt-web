<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/chatLogo.jpg" alt="" />
    </div>
    <div class="operate">
      <button class="operate-button">
        <div class="operate-button-div">
          <img src="../assets/images/setup.png" alt="" />
        </div>
      </button>

      <button class="operate-button">
        <div class="operate-button-div">
          <img src="../assets/images/setup.png" alt="" />
        </div>
      </button>
    </div>
    <div class="content"></div>
    <div class="setUp">
      <div class="setUp-list">
        <div class="setUp-item">
          <button class="setUp-item-button">
            <div class="setUp-item-button-div">
              <img src="../assets/images/setup.png" alt="" />
            </div>
          </button>
        </div>
        <div class="setUp-item">
          <button class="setUp-item-button">
            <div class="setUp-item-button-div">
              <img src="../assets/images/setup.png" alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftSidebar"
});
</script>
<style lang="less" scoped>
.container {

  top: 0;
  width: 75px;
  box-sizing: border-box;
  padding: 20px;
  background-color: #e7f8ff;
  display: flex;
  flex-direction: column;
  box-shadow: inset -2px 0 2px 0 rgba(0, 0, 0, .05);
  position: relative;
  transition: width .05s ease;

  .logo {
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;

    display: flex;
    justify-content: center;

    img {
      margin-top: 5px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }

  .operate {
    flex-direction: column;
    display: flex;
    margin-bottom: 20px;

    .operate-button {
      margin-right: 0;
      margin-bottom: 10px;
      flex-grow: 1;
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
      -moz-user-select: none;
      user-select: none;
      outline: none;
      border: none;
      color: black;
      background-color: #fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      cursor: pointer;
      transition: all .3s ease;
      overflow: hidden;

      .operate-button-div {
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

    }
  }

  .content {
    flex: 1 1;
    overflow: auto;
    overflow-x: hidden;
    display: block;
  }

  .setUp {
    flex-direction: column-reverse;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    .setUp-list {
      flex-direction: column-reverse;
      align-items: center;
      display: inline-flex;

      .setUp-item {
        margin-right: 0;
        margin-top: 15px;

        .setUp-item-button {
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
          background-color: #fff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          cursor: pointer;
          transition: all .3s ease;
          overflow: hidden;
          -moz-user-select: none;
          user-select: none;
          outline: none;
          border: none;
          color: black;

          .setUp-item-button-div {
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
        }
      }
    }
  }
}

@media screen and (max-width: 788px) {
  .tool-recommend {
    font-size: 12px;

    .recommend {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
