<template>
  <div class="search-heros g-container">
      <div class="g-row">
        <div class="g-col-8 g-col-md-6 g-m-auto">
            <form action="" class="g-form">
              <label for="">{{labelName}}</label>
              <input type="text" name="" id=""
                :value="herosSearch"
                @input="filteredHeros"
              >
            </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SearchHero',
    props:{
      labelName: String,
    },
    data(){
      return{
        herosSearch: ''
      }
    },
    methods:{
      filteredHeros(e){
        this.herosSearch = e.target.value
        this.$emit('search', this.herosSearch)
      }
    }
}
</script>

<style lang="scss" scoped>
  .search-heros{
    color: $white;
  }
</style>