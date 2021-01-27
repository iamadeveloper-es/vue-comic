<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from './components/layout/FooterComponent.vue'
import HeaderComponent from './components/layout/HeaderComponent.vue'

export default {
  components: {HeaderComponent, FooterComponent}
}
</script>

<style lang="scss">
@import './scss/main.scss';

</style>
