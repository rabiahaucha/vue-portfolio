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
        <img src="https://i.postimg.cc/Y9mJg9ZD/Screenshot-2023-05-09-134800.png" alt="me">
      </div>
    </div>
  </section>
  <section class="graybg" >
    <div class="width-wrapper p-0">
      <h2 class="slash-deco">QUICK FACTS</h2>
      <ul>
        <li>I’ve been born and bred in South Africa and willing to relocate.</li>
        <li>I’m 20 years old, Born on the 21st of May 2003 .</li>
        <li>I’m obsessed with nature and animals  ! .</li>
        <li>I write creative poems and read books in my free time for entertainment .</li>
        <li>I’m passionate about life so i try new things and enjoy most of life .</li>
        <li> I can truly say I’m a people's person and get along with the unknown well ! .</li>
        <li> I’m passionate about coding because it lets me use my brain to figure out errors .</li>
        <li> I’m a fast-learner that is eager to learn and upskill in the IT field </li>
      </ul>
    </div>
  </section>
  <section class="p-0">
    <div class="width-wrapper container" >
      <h3 class="gray2">ABOUT ME</h3>

      <p class="px-0" style="margin-top:2rem;">HI I'm Rabia Ramadhani Haucha ,I come from a small area but I have big dreams.I am currently studying at Lifechoices to pursue my career in coding.I am really hard working,dedicated and a driven individual. I am a quick learner and strive to  always do things right the first time and perfect . I love doing things my way because hard work always pay off . I am very independent and manage to do most of the things i can on my own.I believe having a skill is useful if you can benefit from it . I am <span style="color:#a37477;">GRATEFUL</span> for all the opportunities there are now a days to beable to be on your own two feet and make your life meaningful . My coding experiences have been both exciting and challenging. I enjoy the process of writing out the code and seeing the results of my hard work. It is especially exciting to solve a problem that I was stuck on for some time. Although coding can be difficult at times, I find that it often comes down to understanding the problem and finding the best way to solve it. With practice and patience, I'm able to find the right solution and move forward. Overall, coding is a fun and rewarding experience that I'm glad to be a part of .
  </p>
      <p class="note graybg" style="  margin-top: 3rem;"><b>*RH NOTE:</b><br> Here's a pdf to my CV if interested in contacting or connecting with me.
        <br><br>
         <a href="https://drive.google.com/uc?export=download&id=1gvhf_vaQ1E2BLA-PJmwQZ2Lgrlr3Jh_e" class="btn btn-primary">
          Download My CV
        </a>
        </p>
    </div>
  
    <div class="container">
        <h1 class="display-4 text-center m-3">WHY HIRE ME</h1>
        <div class="card mb-4">
            <div class="row">
                <div class="col-12 col-md-2">
                    <img style="width:10rem;" src="https://p.kindpng.com/picc/s/171-1718046_javascript-programming-language-logo-hd-png-download.png" alt="">
                </div>
                <div class="col-12 col-md-10">
                    <div class="card-body">
                        <p class="card-text px-5">
                          I am passionate about my work and strive to be the best I can be. I have a strong work ethic and have been told that I am a team player. I am an excellent communicator and can easily adapt to different working environments. My knowledge of the industry is extensive, and I have a creative and innovative approach to problem-solving. I am reliable and organized, and I'm always willing to take on new challenges. I am confident that I can bring a unique perspective to your team and contribute to its success</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  </section>

</template>

<script>
  export default {

  }



</script>

<style scoped>

body{
  background-color:lightblue;
  
}
  .vertical .card:hover{
      transform: scale(1.1);
      box-shadow: 0 10px 20px grey, 0 4px 8px grey;
  }
  .vertical .btn:hover{
      background-color: blue;
      color:white;
  }
p {
  line-height: 1.5;
  font-family: "Lato", sans-serif;
}

section {
  padding: 80px 20px;
}

ul { 
  margin: 0;
  padding-left: 20px;
  line-height: 1.5;
  font-family: "Lato", sans-serif;
}

li { 
  margin-bottom: 5px;
  font-family: "Lato", sans-serif;
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
  outline: solid 2px #FF87A3;
}
</style>