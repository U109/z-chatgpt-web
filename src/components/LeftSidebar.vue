<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/chatLogo.jpg" alt="" />
    </div>
    <div class="operate">
      <div class="operate-one">
        <img src="../assets/images/message.png" alt="" />
      </div>
      <hr>
    </div>
    <div class="setUp">
      <div class="setUp-one">
        <img src="../assets/images/setup.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LeftSidebar",
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

    img {
      margin-top: 5px;
      border-radius: 50%;
      height: 50px;
      width: 50px;
    }
  }

  .operate {
    height: 64%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;

    .operate-one {
      height: 50px;
      margin-top: 5px;
      background-color: #50918a;
      margin-bottom: 5px;
      img {
        width: 40px;
        height: 40px;
        margin-top: 5px;
        //background-size: cover;
        //background-repeat: no-repeat center;
      }
    }
  }

  .setUp {
    height: 30%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;

    .setUp-one {

      img {
        width: 50px;
        height: 50px;
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
