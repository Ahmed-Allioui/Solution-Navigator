<template>
  <div class="container">
  <div v-if="succeed">
    <SuccessIcon :message="successMsg"/>
  </div>
  <div v-else>
    <ErrorIcon :message="errorMsg"/>
  </div>
  </div>
  
</template>
  
<script>

import SuccessIcon from '../atoms/SuccessIcon.vue'
import ErrorIcon from '../atoms/ErrorIcon.vue'

export default {
  props: {
    succeed: {
      type: Boolean,
      default: true
    },
    successMsg: {
      type: String,
      default: ''
    },
    errorMsg: {
      type: String,
      default: ''
    }
  },
  components: {
    SuccessIcon,
    ErrorIcon
  }
}
</script>

<style lang="scss" scoped>

.container {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>