<template>

 <Navbar/>
  <router-view/>
  <Footer></Footer>
</template>


<script>
import Navbar from '@/components/NavbarComp.vue';
import Footer from '@/components/FooterComp.vue';
export default {
  components:{
    Navbar,
    Footer
  }
}
</script>
<style>
#app {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto minmax(100vh, 1fr) auto;
  font-family: "Merriweather", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color:#ebc0bd;
}

nav a.router-link-exact-active {
  color:white;
}
</style>
