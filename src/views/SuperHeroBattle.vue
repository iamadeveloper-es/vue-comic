<template>
  <div class="battle">
      <title-component :headerTitle="'Vue-Battle'" :title="'Vue Battle'"></title-component>
      <div class="g-container">
        <div class="g-row">
          <div class="g-col-12 g-col-md-8 g-m-md-auto">
            <ul>
              <li v-for="(hero, index) in heros" :key="index">
                  {{hero.item.name}}
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import TitleComponent from '../components/ui/TitleComponent.vue'
export default {
    name: 'Battle',
    components: {
    TitleComponent
  },
  computed : {
    heros () {
      return this.$store.state.selectedHeroes
   }
  }
}
</script>

<style>

</style>