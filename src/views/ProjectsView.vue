<template>
    <div class="container scroll-1">
        <div class="card" v-for="data in Projects" :key="data.id">
          <div class="card__image">
            <img :src="data.image" alt="" style="width:38rem;">
          </div>
          <div class="card__content">
              <span class="card__title">Hello</span>
              <p class="card__describe">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
          </div>
</div>
      </div>
</template>

<script>
    export default {
        computed:{
            Projects(){
                return this.$store.state.Projects
            }
        },
        mounted(){
            this.$store.dispatch('fetchProjects')
        }
    }
    
</script>

<style scoped>
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }
  html,
  body {
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #212121;
    font-family:arial;
   
  }
  .scroll-1::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .scroll-1::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #888;
  }
  
  .container * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #fff;
    
  }
  
  .container {
    display: flex;
    overflow-x: scroll;
    padding: 24px;
    width: 300px;
    scroll-snap-type: x mandatory;
    scroll-padding-top: 24px;
    border-radius: 8px;
    gap: 20px;
   padding-top: 20rem;
   width: 40rem;
   height: 50rem;
   margin-left: 32rem;
  }
  
  .container .card {
    flex: 0 0 100%;
    overflow: hidden;
    border-radius: 8px;
    background-color: #141414;
    scroll-snap-align: start;
  }
  
  .card .card__image {
    flex: 1;
    height: 140px;
  }
  
  .card .card__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
  }
  
  .card .card__content .card__title {
    font-size: 32px;
    color: #fff;
    text-transform: capitalize;
  }
  
  .card .card__content .card__describe {
    color: #fff;
    font-size: 16px;
  }
</style>