<template>
        <div class="foote">
            <footer class="foot">
              <router-link id="links" to="/">Home</router-link>
              <router-link id="links" to="/about">About</router-link>
              <router-link id="links" to="/contact">Contact</router-link>
              <h6 class="copyr text-center">&copy; Rabia Ramadhani Haucha 2023</h6>
            </footer>
          </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.foote {
  border-top: 1px solid black;
  background-color: black;
  margin-top: 2rem;
}

.copyr {
  color: white;
}

#links:hover {
  color: pink;
}

#links {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin: 1rem;
}




</style>