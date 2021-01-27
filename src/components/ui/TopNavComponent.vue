<template>
  <div class="top-nav">
    <div id="nav" class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <!-- <router-link to="/battle">Battle</router-link> -->
    </div>
    <div class="nav__logo">
      <router-link to="/">
      <img :src="logo" alt="">
      </router-link> |
    </div>
  </div>
</template>

<script>
export default {
    name: 'TopNavComponent',
    data(){
      return{
        logo: require("../../assets/logo-hero.png"),
      }
    }
}
</script>

<style lang="scss" scoped>
.top-nav{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
}
.nav {

  a {
    font-weight: bold;
    color: $darkBlue;

    &.router-link-exact-active {
      color: $white;
    }
  }
}
.nav__logo{
  width: 50px;
  img{
    width: 100%;
  }
}

</style>