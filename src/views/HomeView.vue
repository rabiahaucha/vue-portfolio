<template>
  <div class="d-flex justify-content-center align-items-center h-100 flex-column">
    <div class="home">
      <p>Welcome to my digital portfolio</p>
    </div>
    <div class="container" style="padding-top:4rem;">
      <div class="row">
        <div class="col-12 col-md-6">
  
          <h5>
             <span> <h2>Hi There, I'm</h2></span><br>
             <span class="name"><h1>Rabia Haucha</h1></span><br>
             <span> A passionate aspiring full-stack developer. I am so excited to learn more about web development and to start creating my own projects. I am determined to become a successful web developer, and I am willing to put in the hard work and dedication it will take to reach my goals. I am constantly pushing myself to learn new things and to improve my skills, and I am confident that I will reach my career objectives.</span>
         </h5>
        </div>
        <div class="col-12 col-md-6">
          <img src="https://i.postimg.cc/c6GSmLPP/something.png" class="w-75" alt="" loading="lazy">
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style scoped>
.name{
  color: #a37477;
}
.rabia{
  font-family: 'Neuemontreal',sans-serif;
  display: flex;
  height: 20rem;
  justify-content: space-between;
  font: 700 12px "Lato", sans-serif;
}

.image{
  width: 40rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image img{
  width: 20rem;
  height: 20rem;
}


.anything{
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home {
  margin-top: 10rem;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  font: 700 12px "Lato", sans-serif;
}

p {
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #a37474, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 7s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
</style>
