<template>
  <div class="d-flex justify-content-center align-items-center h-100 flex-column">
    <span class="row" style="margin-top: 6rem">
      <h1>MY<span style="color:#a37474;"> PROJECTS</span></h1>
  
  </span>
    <div class="container scroll-1 pt-5 m-auto" >
      <div class="card" v-for="data in Projects" :key="data.id">
              <div class="card__image" >
              <img :src="data.image" alt="" style="width:30rem;" loading="lazy">
            </div>
            <div class="card__content">
              <span class="card-title" >{{data.title}}</span>
                <p class="card__describe">
                  {{data.text}}
                </p>
                <div class="d-flex1">
  
                  <a :href="data.github" class="btn w-25 mx-3" target="_blank" id="button">Github</a>
                  <a :href="data.netlify" class="btn w-25 mx-3" target="_blank" id="button">Netlify</a>
                </div>
            </div>
  </div>
  
  <!-- Mobile Cards -->
  </div>
  <div class="container1">
    <div class="row gap-3">
      <div class="col-12" v-for="data in Projects" :key="data.id">
        <div class="card mobile-cards m-auto" style="width: 18rem;">
          <img class="card-img-top" :src="data.image" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ data.title }}</h5>
            
            <p class="card-text">{{data.text}}</p>
            <div class="d-flex gap-3 ">
              <a :href="data.github" class="btn w-25 mx-5" target="_blank" id="button"><i class="bi bi-github"></i></a>
              <a :href="data.netlify" class="btn w-25 mx-5" target="_blank" id="button"><i class="bi bi-box-arrow-up-right"></i></a>
            </div>
          </div>
        </div>
      </div>
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
    background-color:white;
    font: 700 12px "Lato", sans-serif;
   
  }
  
  h3{
    font: 700 12px "Lato", sans-serif;
  }
  .d-flex1{
    gap:15rem;
  }
  .btn{
    border: 3px solid white;
  }
  .btn:hover{
    background-color: #bb7873;
  }
  .scroll-1::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  .scroll-1::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: black;
  }
  
  .container * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color:white;
  
    
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
   margin-left: 32rem;
   font: 700 10px "Lato", sans-serif;
  
  }
  
  .container .card {
    flex: 0 0 100%;
    overflow: hidden;
    border-radius: 8px;
    background-color:black;
    scroll-snap-align: start;
    border: 5px solid #a37474;

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
  .card .card__content .card__describe {
    color: #fff;
    font-size: 16px;
  }

  .mobile-cards{
    display: none;
  }

  @media (width <= 37rem) {
    .scroll-1{
      display: none;
    }

    .mobile-cards{
      display: block;
    }
  }
</style>