<template>
  <div class="container">
    <section id="contact">
      <h1 class="section-header">Contact</h1>
      <div class="contact-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <form id="contact-form" class="form-horizontal" role="form" action="https://formspree.io/f/xpzgabrl"
                method="POST">
                <div class="form-group">
                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-12">
                    <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required />
                  </div>
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
                </div>
                <button class="btn btn- send-button" id="submit" type="submit" value="SEND">
                  <div class="alt-send-button">
                    <span class="send-text">SEND</span>
                  </div>
                </button>
              </form>
            </div>
            <div class="col-12 col-md-6">
              <!-- <div class="direct-contact-container">
                <li class="list-item">
                  <span class="contact-text phone" style="margin-right: 5rem"><a href="tel:067 201 8653" title="FULLNAME">RABIA
                       HAUCHA</a></span>
                </li>
                <ul class="contact-list">
                  <li class="list-item">
                    <i class="bi bi-geo-alt-fill" style="color: black"></i><span class="contact-text place">Cape Town,Western
                        Cape</span>
                    <i class="fa fa-map-marker fa-2x"></i>
                  </li>
                  <li class="list-item">
                    <i class="bi bi-telephone" style="color: black"><span class="contact-text phone"><a href="tel:067 201 8653"
                          title="Give me a call">(067) 201 8653</a></span></i>
                  </li>
      
                  <li class="list-item email">
                    <i class="bi bi-envelope-heart" style="color: black"><span class="contact-text gmail"><a href="mailto:#"
                          title="Send me an email">Rabiahaucha9@gmail.com</a></span></i>
                  </li>
                </ul>
              </div> -->
              <div>
                <ul>
                  <li>RABIA HAUCHA</li>
                  <li><i class="bi bi-geo-alt-fill" style="color: black"></i>Cape Town,Western Cape</li>
                  <li><i class="bi bi-geo-alt-fill" style="color: black"></i>Cape Town,Western Cape</li>
                  <li><i class="bi bi-geo-alt-fill" style="color: black"></i>Cape Town,Western Cape</li>
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

body {
  margin: 0;
  padding: 0;
  background-color: #000;
  padding-bottom: 100px;
}


#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 60px "Oswald", sans-serif;
  color: black;
  text-transform: uppercase;
  letter-spacing: 6px;
}



/* Left contact page */
.form-horizontal {
  width: 50%;
  font-family: "Lato";
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form-control,
textarea {
  width: 25rem;
  background-color: black;
  color: #fff;
  letter-spacing: 1px;
}

.send-button {
  margin-top: 15px;
  height: 34px;
  width: 400px;
  overflow: hidden;
}

.alt-send-button {
  width: 400px;
  height: 34px;
}

.send-text {
  display: block;
  margin-top: 5px;
  font: 700 12px "Lato", sans-serif;
  letter-spacing: 2px;
  color: black;
}



span {
  margin: 1rem;
}

.contact-list {
  list-style-type: none;
  margin-left: -30px;
  padding-right: 20px;
}

.list-item {
  line-height: 4;
  color: white;
}

.contact-text {
  font: 300 18px "Lato", sans-serif;
  letter-spacing: 1.9px;
  color: #a37474;
}

.contact-text a {
  color: black;
  text-decoration: none;
}

.contact-text a:hover {
  color: #a37474;
  text-decoration: none;
}

#submit {
  background-color: #a37474;
}
</style>
