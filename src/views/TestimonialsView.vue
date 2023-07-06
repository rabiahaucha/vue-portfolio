<template>
    
    
    <h1 style="padding-top:3rem;">Testimonials</h1>
    <div class="notepaper">
        <figure class="quote">
      <blockquote class="curly-quotes" >
      "No act of kindness, no matter how small, ever goes to waste."
    </blockquote>
      <figcaption class="quote-by"> -Siyamanga Zweni</figcaption>
    </figure>
  </div>
 <div class="container">
 <div class="testimonial">
       <div class="card" v-for="data in Testimonials" :key="data.id">
         <div class="layer" ></div>
         <div class="content">
           <p>{{data.description}}</p>
           <div class="image"><img :src="data.image" style="width:8rem;"       alt="avatar"> 
           </div>
           <div class="details">
        <p>{{data.name}}</p>
             <span>Web Designer</span>
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


 body {
    font: 12px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
    color:#a37474 ;
    background: #dce1e1;
  }
  
  .notepaper {
    position: relative;
    margin: 30px auto;
    padding: 29px 20px 20px 45px;
    width: 280px;
    line-height: 30px;
    color: black;
    text-shadow: 0 1px 1px white;
    background-color:#e7b6b6;

  }
 
  
  .quote {
    font-family: Georgia, serif;
    font-size: 14px;
  }
  
  .curly-quotes:before, .curly-quotes:after {
    display: inline-block;
    vertical-align: top;
    height: 30px;
    line-height: 48px;
    font-size: 50px;
    opacity: .2;
  }
  
  .curly-quotes:before {
    content: '\201C';
    margin-right: 4px;
    margin-left: -8px;
  }
  
  .curly-quotes:after {
    content: '\201D';
    margin-left: 4px;
    margin-right: -8px;
  }
  
  .quote-by {
    display: block;
    padding-right: 10px;
    text-align: right;
    font-size: 13px;
    font-style: italic;
    color:black;
  }
  
  .lt-ie8 .notepaper {
    padding: 15px 25px;
  }
  
body{
    margin:0;
    padding:0;
    width:100%;
    height:100%;
    background:#262626;
    color:#fff;
    font-family:sans-serif;
  }
  .testimonial{
    margin-top: 5rem;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(350px, 1fr));
    grid-gap:20px;
  }
  .testimonial .card{
    position:relative;
    margin:0 auto;
    width:350px;
    background:white;
    padding:20px;
    box-sizing:border-box;
    text-align:center;
    box-shadow:0 10px 40px rgba(0,0,0,.5);
    overflow:hidden;
  }
  .testimonial .card .layer{
    position:absolute;
    top:calc(100% - 2px);
    left:0;
    height:100%;
    width:100%;
    background:linear-gradient(#a37474,#897470
    );
    z-index:1;
    transition:0.5s;
  }
  .testimonial .card:hover .layer{
    top:0;
  }
  .testimonial .card .content{
    position:relative;
    z-index:2;
  }
  .testimonial .card .content p{
    font-size:18px;
    line-height:24px;
  }
  .testimonial .card .content .image{
    width:128px;
    height:128px;
    margin:0 auto;
    border-radius:50%;
    overflow:hidden;
    border:4px solid #fff;
    box-shadow:0 10px 20px
      rgba(0,0,0,.2);
  }
  .testimonial .card .content .details h2{
    font-size:18px;
  }
  .testimonial .card .content .details span{
    color:#64476c;
    font-size:18px;
    transition:0.5s;
  }
  .testimonial .card:hover .content .details span{
    color:#fff;
  }
  
.card{
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
      transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}
.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>