<template>
  <div class="hero-detail">
    <title-component v-if="hero" :headerTitle="hero.name" :title="hero.name + ' ' + hero.biography.publisher"></title-component>
    <div class="g-container" v-if="hero">
      <div class="g-row">
        <div class="g-col-12">
          <div class="hero">
            <div class="flex-container">
              <div class="flex-item hero__img">
                <img :src="hero.images.lg" alt="" />
              </div>
              <div class="flex-item hero__body">
                <p>
                  <span class="big-text d-block">Info:</span>
                  {{ hero.connections.groupAffiliation }}
                </p>
                <div class="hero__stats">
                  <span class="big-text d-block">Stats</span>
                  <ul class="ul-nopadding">
                    <li>
                      Combat:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.combat + '%'"
                        ></div>
                      </div>
                    </li>
                    <li>
                      Durability:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.durability + '%'"
                        ></div>
                      </div>
                    </li>
                    <li>
                      Intelligence:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.intelligence + '%'"
                        ></div>
                      </div>
                    </li>
                    <li>
                      Power:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.power + '%'"
                        ></div>
                      </div>
                    </li>
                    <li>
                      Speed:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.sped + '%'"
                        ></div>
                      </div>
                    </li>
                    <li>
                      Strenght:
                      <div class="stats__bar d-block">
                        <div
                          class="span stats__progress"
                          :style="'width:' + hero.powerstats.strength + '%'"
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="hero__aparence">
                  <span class="big-text mr"
                    >Race:
                    <span>{{ hero.appearance.race }}</span>
                  </span>
                  <span class="big-text mr"
                    >Height:
                    <span>{{ hero.appearance.height[1] }}</span>
                  </span>
                  <span class="big-text mr"
                    >Weight:
                    <span>{{ hero.appearance.weight[1] }}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="g-container" v-else>
      <div class="g-row">
        <div class="g-col-6 g-m-auto g-text-center">
          <img class="preload" :src="imgPreload" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TitleComponent from "./ui/TitleComponent.vue";
export default {
  components: { TitleComponent },
  props: {heroSelected: null},
  name: "SuperHeroDetail",
  data() {
    return {
      url: "https://akabab.github.io/superhero-api/api/id/",
      hero: null,
      imgPreload: require("../assets/preload.gif"),
    };
  },
  methods: {
    getHero() {
          axios.get(`${this.url}${this.heroSelected}.json`)
          .then((results) => {
          this.hero = results.data
          }).catch((e) => console.log(e)) 
    },
  },
  created() {
    this.getHero()
  },
};
</script>

<style lang="scss" scoped>
/* .flex-container {
  
} */
p {
  font-size: 18px;
}
.mr {
  margin-right: 10px;
}
.big-text {
  font-size: 22px;
}
.hero {
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 100%;
  }
  .hero__body {
    padding: 15px;
  } 
  .hero__stats {
    padding: 0;
    margin-top: 25px;
    margin-bottom: 25px;
  }
  .hero__aparence {
    display: flex;
    flex-direction: column;
    span{
      margin-bottom: 15px;
    }
  }
}
@media screen and(min-width: 991px){
  .flex-container{
    display: flex;
    justify-content: center;
  }
  .hero{
    max-width: 100%;
    img{
      height: 100%;
      width: auto;
    }
    .hero__img {
      width: 40%;
    }
    .hero__body {
      width: 60%;
      padding: 20px 50px;
    }
    .hero__aparence {
      flex-direction: row;
    }
  }
}
</style>