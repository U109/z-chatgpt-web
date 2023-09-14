<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/images/chatLogo.jpg" alt="" />
    </div>
    <div class="operate"></div>
    <div class="setUp"></div>
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
  }

  .setUp {
    height: 30%;
    width: 100%;
    border-style: solid;
    border-width: 1px;
    border-color: #e86dbd;
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
