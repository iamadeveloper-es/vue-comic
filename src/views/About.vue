<template>
  <div class="about">
    <title-component :headerTitle="'About'" :title="'About this Project'"></title-component>
    <about-me></about-me>
  </div>
</template>

<script>
import AboutMe from '../components/AboutMe.vue'
import TitleComponent from '../components/ui/TitleComponent.vue'
export default {
  components: { TitleComponent, AboutMe },

}
</script>

<style>

</style>
