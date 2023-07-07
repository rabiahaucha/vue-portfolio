<template>
   
    <div class="d-flex justify-content-center align-items-center h-100 flex-column">
        <h1 style="padding-top:7rem;">MY <span style="color:#9f6060;">EDUCATION</span></h1>
    <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-8 offset-lg-2" v-for="data in Education" :key="data.id">
            <article class="education-item">
                <p class="card-text text-muted" ></p>
              <i class="education-icon fa fa-graduation-cap" style="padding-top:3rem;"></i>
              <h3 class="education-date">{{data.year}}</h3>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">
                        {{ data.title }}
                    </h5>
                    {{ data.school }}
         <p class="card-text text-muted"></p>
                  <p class="card-text">
      {{ data.description }} </p>

                </div>
              </div>
            </article>
          </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        computed:{
            Education(){
                return this.$store.state.Education
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation')
        }
    
    }
</script>

<style scoped>

.card{
    border: 2px solid black;
    font: 15 15px "Lato", sans-serif;
}
.card-title{
    color: #9f6060;
}
.education-date{
   color: #ff69b4; 

}
</style>