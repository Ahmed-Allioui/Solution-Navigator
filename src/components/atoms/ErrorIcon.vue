<template>
  <div class="icon-container">
    <CircleCloseFilled class="icon" />
    <div>{{ message }}</div>
  </div>

</template>
  
<script>

import { CircleCloseFilled } from '@element-plus/icons-vue'

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  components: {
    CircleCloseFilled
  }
}
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: red;

  .icon {
    width: 2em;
    height: 2em;
    margin-right: 8px;
  }
}
</style>