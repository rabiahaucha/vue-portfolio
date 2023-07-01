<template>
    <div class="navbar1">
        <nav class="navbar navbar-dark bg-black fixed-top">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Rabia Haucha</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation ">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">My Digital Portfolio</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                    <li class="nav-item my-4">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/about">About</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/education">Education</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/skills">Skills</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/testimonials">Testimonials</router-link>
                    </li>
                    <li class="nav-item my-4">
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
                </div>
              </div>
            </div>
          </nav>
         </div>
   
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>