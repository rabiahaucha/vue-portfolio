<template>

        <div class="mt-5 container " >
         <div class="row gap-2">
             <h1 style="padding-top:3rem;">Testimonials</h1>
             <div class="col-12 col-md-6" v-for="data in Testimonials" :key="data.id">
    <div class="card" style="border:3px solid black;">
        <div class="row">
            <div class="col-4">
                <img :src="data.image" style="width:12rem; margin-top:1rem;margin-bottom:1rem;" class="card-img-top" loading="lazy">
            </div>
            <div class="col-8">
                <div class="card-body">
                <p>{{data.name}}</p>
                <p>{{data.description}}</p>
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
            Testimonials(){
                return this.$store.state.Testimonials
            }
        },
        mounted(){
            this.$store.dispatch('fetchTestimonials')
        }
    
    }
</script>

<style scoped>

</style>