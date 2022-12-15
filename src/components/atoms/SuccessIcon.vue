<template>
  <div class="icon-container">
    <CircleCheckFilled class="icon" />
    <div>{{ message }}</div>
  </div>

</template>
  
<script>

import { CircleCheckFilled } from '@element-plus/icons-vue'

export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  components: {
    CircleCheckFilled
  }
}
</script>

<style lang="scss" scoped>
.icon-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: green;

  .icon {
    width: 2em;
    height: 2em;
    margin-right: 8px;
  }
}
</style>