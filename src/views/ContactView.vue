<template>
  <div class="container d-flex justify-content-center align-items-center h-100 flex-column">
    <section id="contact" style="margin-top: 4rem">
      <h1 class="section-header">Contact</h1>
      <div class="contact-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
            
              <form action="https://formspree.io/f/xpzgabrl" method="POST">
                <div class="mb-3">
            
                  <input type="text" class="form-control w-100" id="email" placeholder="NAME" name="name" value="" required>
                </div>
                <div class="mb-3">
              
                  <input type="email" class="form-control w-100" id="email" placeholder="EMAIL" name="email" value="" required>
                </div>
                <div class="mb-3">
            
                  <textarea class="form-control w-100"  rows="9" id="message" placeholder="REASON OF INTEREST" name="message" value="" required></textarea>
                </div>
                <div>
                  <button class="btn custom-btn" id="submit" type="submit">SEND</button>
                </div>
              </form>
            </div>
            <div class="col-sm-12 col-md-6">
            
              <div class="w-100">
                <ul style="list-style: none; height: 50vh;" class="d-flex flex-column align-items-center mt-3 list p-0">
                  <li class="display-6">
                   <h3>

                    RABIA HAUCHA
                   </h3>
                  </li>
                  <li class="hover"><i class="bi bi-geo-alt-fill px-2" style="color: black"></i>Maitland, Cape Town, Western Cape</li>
                  <li class="hover"><i class="bi bi-telephone px-2" style="color: black"></i>(067) 201 8653</li>
                  <li class="hover"><i class="bi bi-envelope-heart px-2" style="color: black"></i>Rabiahaucha9@gmail.com</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
::placeholder {
  color: white;
}

.list{
  line-height: 4;
}

.hover:hover{
  color: #a37474;
  cursor: pointer;
}

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  padding-bottom: 100px;

  

}


#contact {
  width: 100%;
  height: 100%;
  font: 700 16px "Lato", sans-serif;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 50px "Oswald", sans-serif;
  color: black;
  text-transform: uppercase;
  letter-spacing: 6px;
}



.form-control,
textarea {
  width: 25rem;
  background-color: black;
  color: #fff;
  letter-spacing: 1px;
}

.custom-btn{
  background-color: #a37474;
  color: #000;
  margin-bottom: 2rem;
}


.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}


.contact-text li:hover {
  color: #a37474;
  text-decoration: none;
}

#submit {
  background-color: #a37474;
}
</style>
