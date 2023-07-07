<template>
    <div>
    <div class="my-5 container" >
        <div class="row" style="margin-top: 6rem">
    <h1 >MY <span style="color:#9f6060;">SKILLS</span></h1>

            <div class="col-12 col-md-4 p-2" v-for="data in Skills" :key="data.id">
              <img :src="data.image" alt="" style="width:9rem;height:9rem;">
              <p style="margin-top:2rem;">{{data.level}}</p>
              <p>{{ data.description }}</p>
             </div>   
        </div>
    </div>
    </div>   
</template>

<script>
    export default {
        computed:{
            Skills(){
                return this.$store.state.Skills
            }
        },
        mounted(){
            this.$store.dispatch('fetchSkills')
        }
    }
    
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

* {
  box-sizing: border-box;
}

body {
  background-color: #f9fafb;

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
}
.container {
  
  background-color: #fff;
  font: 700 12px "Lato", sans-serif;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  
}
@media all and (max-width: 900px) {
  .container {
    width: auto;
  }
};

@media all and (max-width: 900px) {
  .container {
    padding: 0px 20px;
  }
}


</style>