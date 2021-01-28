<template>
  <div class="superheros">
    <div class="g-container">
      <div class="g-row">
        <div class="g-col-12 g-col-md-8 g-m-md-auto">
          <p>Over 500 characters, here you can find funny an uncommon characters like: Yoda, Indiana Jones or Mr Incredible, check their stats, click on each to see more details.</p>
          <div class="leyend">
            <p>Character Alignment:</p>
            <div class="leyend__box leyend__good">
              <span>Good: </span>
              <div class="leyend__color"></div>
            </div>
            <div class="leyend__box leyend__bad">
              <span>Bad: </span>
              <div class="leyend__color"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <search-hero
      :labelName="'Search For Your Favorite Super Hero'"
      :heros="heros"
      @search="heroFilter = $event"
      v-if="heroBattle.length < 2"
    ></search-hero>
    <div class="g-container" v-if="heroBattle.length < 2">
      <ul class="g-row ul-nopadding">
        <li
          class="g-col-12 g-col-md-6 g-col-lg-4 g-col-xl-3"
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
                <h4>General Stats</h4>
                <ul class="ul-nopadding">
                  <li>
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
              <div class="hero__alignment">
                <div class="alignment"
                  :class="hero.biography.alignment === 'good' ? aligmentGood : aligmentBad"
                ></div>
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
      heroAligment: '',
      aligmentBad: 'bad',
      aligmentGood: 'good',
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
.leyend{
  margin-top: 30px;
  span{
    color: $white;
    width: 100px;
  }
  .leyend__box{
    margin-top: 15px;
    display: flex;
    .leyend__color{
      height: 25px;
      width: 25px;
    }

  }
  .leyend__good{
    .leyend__color{
      background-color: #15fe15;;
    }
  }
  .leyend__bad{
    .leyend__color{
      background-color: #ba0101;
    }
  }
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
  .hero__alignment{
    height: 20px;
    
  }
  .alignment{
    width: 90%;
    height: 50%;
    transform: translate(5%, -25%);
    &.good{
      background-color: #15fe15;
    }
    &.bad{
      background-color: #ba0101;
    }
    &.unknow{
      background-color: grey;
    }
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
