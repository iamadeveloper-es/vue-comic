<template>
  <div class="home">
    <title-component :headerTitle="'Vue-Heroes'" :title="'Vue Heroes'"></title-component>
    <super-heros></super-heros>
  </div>
</template>

<script>
// @ is an alias to /src
import SuperHeros from '../components/SuperHeros.vue'
import TitleComponent from '../components/ui/TitleComponent.vue'

export default {
  name: 'Home',
  components: {
    SuperHeros,
    TitleComponent
  }
}
</script>
