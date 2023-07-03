<template>
    <div>

    </div>
</template>

<script>
    export default {
        computed:{
            Skills(){
                return this.$store.state.Education
            }
        },
        mounted(){
            this.$store.dispatch('fetchEducation')
        }
    
    }
</script>

<style scoped>

</style>