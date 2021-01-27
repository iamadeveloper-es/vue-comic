<template>
  <div class="header">
      <top-nav-component></top-nav-component>
  </div>
</template>

<script>
import TopNavComponent from '../ui/TopNavComponent.vue'

export default {
  components: { TopNavComponent },
    name: 'HeaderComponent',
    
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        overflow: hidden;
        background-color: $black;
    }
</style>