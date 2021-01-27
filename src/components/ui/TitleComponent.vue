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
}
h1 {
  display: inline-block;
  width: 50%;
  font-size: 58px;
  color: $white;
  background-color: $black;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
}
img {
  width: 100%;
}
h2 {
  font-size: 28px;
  color: $white;
}
</style>