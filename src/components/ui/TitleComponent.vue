<template>
  <div class="title">
    <div class="title__content">
      <h1>{{headerTitle}}</h1>
      <img :src="headerImg" alt="" />
    </div>
    <div class="g-container">
      <div class="g-row">
        <div class="g-col-12 g-col-md-8 g-m-md-auto">
          <h2>{{ title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleComponent",
  props: {
    title: String,
    headerTitle: String
  },
  data() {
    return {
      headerImg: require("../../assets/batman-bg.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.title__content {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  height: auto;
  min-height: 25vh;
  background-color: $black;
}
h1 {
  display: inline-block;
  width: 85%;
  font-size: 34px;
  color: $white;
  background-color: $black;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 7.5%;
  transform: translateY(-50%);
}
img {
  width: 100%;
}
h2 {
  font-size: 28px;
  color: $white;
}
@media screen and(min-width: 758px){
  h1{
    font-size: 58px;
    width: 50%;
    left: 25%;
  }
}
</style>