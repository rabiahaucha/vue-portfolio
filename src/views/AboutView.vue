<template>
 
  <section class="landing-hero-wrapper" style="margin-top:2rem;">
    <div class="landinghero">
      <div class="landinghero-bg pinkbg"></div>
      <div class="landinghero-content">
        <h1>RABIA</h1>
        <span>
          <h2>HAUCHA</h2>
        </span>
        <div class="landing-bottomleft_deco"><span></span></div>
        <img src="https://i.postimg.cc/Y9mJg9ZD/Screenshot-2023-05-09-134800.png" alt="Geenay Photo">
      </div>
    </div>
  </section>
  <section class="graybg">
    <div class="width-wrapper">
      <h2 class="slash-deco">QUICK FACTS</h2>
      <ul>
        <li>I’m a born and bred South African that moved to the UK 3 years ago</li>
        <li>I have a very weird obsession with amazing smelling candles</li>
        <li>Every ambition I had as a little girl actually came true, my mom is still in shock</li>
        <li>I write creative scripts and spoken word for a charity I volunteer for</li>
        <li>I’m passionate about life and disrupting the norm</li>
      </ul>
    </div>
  </section>
  <section>
    <div class="width-wrapper">
      <h3 class="gray2">ABOUT ME</h3>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi et ducimus fugit reiciendis voluptas, vitae obcaecati. Sapiente et alias consequuntur ipsum cum expedita, dicta nesciunt illo ducimus itaque, explicabo harum!</p>
  
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa voluptatum consequuntur eum harum, repudiandae minima pariatur reiciendis cumque neque temporibus labore. Nostrum natus perferendis hic sed voluptatem aperiam expedita enim?</p>
  
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur possimus corporis minima reiciendis sint! Saepe, mollitia maxime? Provident distinctio sapiente neque animi, nemo labore debitis ducimus similique inventore, deserunt eaque!
      </p>
  
      <p>Fast forward 3 years to now and I’m proud to call myself a hard-working, creative and driven UX Designer who decided to design an even better version of a cloud storage platform! I wanted to be a designer to inspire change. We live in a day and age
        where an address on a browser or an app on your phone can influence the world. I realised that being a creator is empowering, but it’s important to keep in mind that with great power comes great responsibility. We need to be mindful as we effect
        the change we need in this world. That’s the kind of designer I’m always striving to be. I’m proud to say that going against the grain was exactly the risk I needed to take. I now get to combine my knowledge of a competitive fast-paced industry,
        social media strategy, team building and traditional as well as product design processes to become the best User Experience Designer I can be.</p>
      <p class="note graybg"><b>*JP NOTE:</b><br> Thanks to Geenay for letting us use her awesome layout for a group session! Here's the link to her full portfolio <a href="http://geenay.design/">geenay.design</a>
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1gvhf_vaQ1E2BLA-PJmwQZ2Lgrlr3Jh_e" class="btn btn-primary">
          Download CV
        </a>
    </div>
  </section>

</template>

<script>
  export default {

  }



</script>

<style scoped>

p {
  line-height: 1.5;
}

section {
  padding: 80px 20px;
}

ul { 
  margin: 0;
  padding-left: 20px;
  line-height: 1.5;
}

li { 
  margin-bottom: 5px;
}

.landing-hero-wrapper  {
  padding: 0;
}

.landinghero {
  display: grid;
  grid-template-rows: 3fr 1fr;
}

.landinghero-bg {
  grid-column: 1 / -1;
  grid-row: 1;
}

.landinghero-content {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
    display: grid;
    width: calc(100% - 40px);
    max-width: 900px;
    justify-self: center;
    margin: 50px 0;
}

.landinghero-content h1 {

  font-size: calc(0.5rem + 10vmin);
  margin:0;
  line-height: 0.5;
  grid-row: 1;
}

.landinghero-content h2 {
 
  font-size: calc(0.5rem + 9vmin);
  margin:0;
  font-weight: 200;
  letter-spacing: 5px;
}

.landinghero-content span {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  grid-row: 2;
  margin-bottom: 100px;
}

.landinghero-content h3 {
  /* font-size: 28px; */
  font-size: calc(0.5rem + 2vmin);
  line-height: 0.5;
  font-family: 'Alegreya', serif;
  justify-self: end;
  width:70%;
  text-align: right;
}



.landinghero-content img {
  width: 70%;
  max-width: 400px;
  justify-self: end;
  grid-column: 1;
  grid-row: 3
}


.landing-bottomleft_deco {
    position: relative;
    align-self: end;
    height: 70%;
    width: 20%;
    max-width: 300px;
    border-bottom: 1px solid #000000;
    border-left: 1px solid #000000;
    grid-column: 1;
    grid-row: 3;
}


/* stop paragraphs from growing */
.width-wrapper {
  max-width: 600px;
  margin: auto;
}

.width-wrapper p {
  padding-left: 40px;
}
.pink    { color: #a37474; }
.pinkbg  { background-color: #a37474; }

.note {
  margin: 30px 0;
  padding: 30px;
  outline: solid 1px #FF87A3;
}
</style>