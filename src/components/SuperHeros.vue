<template>
  <div class="superheros">
    <search-hero
      :labelName="'Search A Super Hero'"
      :heros="heros"
      @search="heroFilter = $event"
      v-if="heroBattle.length < 2"
    ></search-hero>
    <div class="g-container" v-if="heroBattle.length < 2">
      <ul class="g-row ul-nopadding">
        <li
          class="g-col-12 g-md-col-6 g-col-lg-4 g-col-xl-3"
          v-for="(hero, index) in heroSearch"
          :key="index"
        >
          <router-link
            :to="{ name: 'details', params: { heroSelected: hero.id, heroPath: hero.name} }"
          >
            <div class="hero">
              <div class="hero__header">
                <h5>{{ hero.name }}</h5>
              </div>
              <div class="hero__img">
                <img :src="hero.images.sm" alt="" />
              </div>
              <div class="hero__stats">
                <h4>Stats</h4>
                <ul class="ul-nopadding">
                  <li>
                    General:
                    <div class="stats__bar d-block">
                      <div
                        class="span stats__progress"
                        :style="
                          'width:' +
                          (hero.powerstats.combat +
                            hero.powerstats.durability +
                            hero.powerstats.intelligence +
                            hero.powerstats.power +
                            hero.powerstats.speed + hero.powerstats.strength) /
                            6 +
                          '%'
                        "
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </router-link>
          <!-- <div class="hero__btn">
            <button class="g-btn-small" :class="battleSelected ? clSelected: clNoSelected" @click="selectedheroBattle(hero)">Select</button>
          </div> -->
        </li>
      </ul>
    </div>
    <!-- <div class="g-container">
      <div class="g-row">
        <div class="g-col-12 g-md-col-6 g-text-center">
          <div class="btn-start-battle">
            <router-link to="/battle">
              <div class="g-btn-fake">Start battle</div> 
            </router-link>
          </div>
          <div class="btn-go-back">
            <div class="g-btn-fake" @click="goBack">Go Back</div>
          </div> 
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import SearchHero from "./SearchHero.vue";
export default {
  components: { SearchHero },
  name: "SuperHeros",
  props: {
    msg: String,
  },
  data() {
    return {
      url: "https://akabab.github.io/superhero-api/api",
      all: "/all.json",
      heros: [],
      heroFilter: "",
      stats: 100,
      clSelected: 'selected',
      clNoSelected: 'no-selected',
      battleSelected: false,
      heroBattle: []
    };
  },
  methods: {
    getHeros(heros) {
      this.heros = heros;
    },
    selectedheroBattle(item){
      
      if(this.heroBattle.length < 2){
        this.heroBattle.push(item)
        console.log(item)
      }
      this.$store.commit('setHeroes', {
        item
      })
    },
    goBack(){
      return this.heroBattle = []
    }
  },
  computed: {
    heroSearch() {
      return this.heros.filter((hero) => {
        return hero.name.toLowerCase().match(this.heroFilter.toLowerCase());
      });
    },
  },
  created() {
    axios.get(`${this.url}${this.all}`).then((reults) => {
      this.getHeros(reults.data);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.g-btn-fake{
    border: 0;
    border-radius: 3px;
    min-width: 80px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: $white;
    text-align: center;
    color: $orange;
    cursor: pointer;
}
.hero {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  .hero__header {
    padding: 15px;
    text-align: center;
  }
  h5 {
    font-size: 20px;
  }
}
.hero__btn{
    margin-bottom: 25px;
    text-align: center;
    .g-btn-small{
      width: 100%;
    }
    .no-selected{
      background-color: $white;
    }
    .selected{
      background-color: yellow;
    }
  }
</style>
