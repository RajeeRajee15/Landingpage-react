import './style.css'
import './bootstrap/css/bootstrap.min.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/swiper/swiper-bundle.min.css'

function Hero() {
  return (
    <div className="Hero">
      <section id="hero" class="d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Grow your business with Vesperr</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are team of talented designers making websites with Bootstrap</h2>
              <div data-aos="fade-up" data-aos-delay="800">
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
              <img src={require("./assets/img/hero-img.png")} class="img-fluid animated" alt="" />
            </div>
          </div>
        </div>

      </section>

      {/* Brand Start -------------------------------------------*/}
      <section id="clients" class="clients clients">
        <div class="container">

          <div class="row">

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-1.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-2.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-3.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-4.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-5.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

            <div class="col-lg-2 col-md-4 col-6">
              <img src={require("../src/assets/img/clients/client-6.png")} class="img-fluid" alt="" data-aos="zoom-in" />
            </div>

          </div>

        </div>
      </section>
      {/* Brand End--------------------------------------------------------------------------------------------------------- */}

      {/* AboutStart------------------------------------------------------------------ */}
      <section id="about" class="about">
        <div class="container">

          <div class="section-title" data-aos="fade-up">
            <h2>About Us</h2>
          </div>

          <div class="row content">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="234" class="btn-learn-more">Learn More</a>
            </div>
          </div>

        </div>
      </section>

      {/* About End ---------------------------------------------------------------- */}


      {/* Counts Start ----------------------------------------------------------- */}


      <section id="counts" class="counts">
        <div class="container">

          <div class="row">
            <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
              <img src={require("../src/assets/img/counts-img.svg")} class="img-fluid" alt="" />
            </div>

            <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
              <div class="content d-flex flex-column justify-content-center">
                <div class="row">
                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-emoji-smile"></i>
                      <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut.</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-journal-richtext"></i>
                      <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-clock"></i>
                      <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel</p>
                    </div>
                  </div>

                  <div class="col-md-6 d-md-flex align-items-md-stretch">
                    <div class="count-box">
                      <i class="bi bi-award"></i>
                      <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" class="purecounter"></span>
                      <p><strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CountsEnd ------------------------------------------------------- */}


      {/* Services Start ------------------------------------------------ */}


      <section id="services" class="services">
        <div class="container">

          <div class="section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit eius consequatur ex aliquid fug</p>
          </div>

          <div class="row">
            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h4 class="title"><a href="123">Lorem Ipsum</a></h4>
                <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4 class="title"><a href="123">Sed ut perspiciatis</a></h4>
                <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div class="icon"><i class="bx bx-tachometer"></i></div>
                <h4 class="title"><a href="123">Magni Dolores</a></h4>
                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
              <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div class="icon"><i class="bx bx-world"></i></div>
                <h4 class="title"><a href="123">Nemo Enim</a></h4>
                <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Services End --------------------------------------------------- */}


      {/* Features Start --------------------------------------------------- */}
      <section id="features" class="features">
        <div class="container">

          <div class="section-title" data-aos="fade-up">
            <h2>Features</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
          </div>

          <div class="row" data-aos="fade-up" data-aos-delay="300">
            <div class="col-lg-3 col-md-4">
              <div class="icon-box">
                <i class="ri-store-line" style={{color: '#ffbb2c'}}></i>
                <h3><a href="123">Lorem Ipsum</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
                <h3><a href="123">Dolor Sitema</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
              <div class="icon-box">
                <i class="ri-calendar-todo-line" style={{ color: '#e80368' }}></i>
                <h3><a href="123">Sed perspiciatis</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <div class="icon-box">
                <i class="ri-paint-brush-line" style={{ color: '#e361ff' }}></i>
                <h3><a href="123">Magni Dolores</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-database-2-line" style={{ color: '#47aeff' }}></i>
                <h3><a href="123">Nemo Enim</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-gradienter-line" style={{ color: '#ffa76e' }}></i>
                <h3><a href="123">Eiusmod Tempor</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-file-list-3-line" style={{ color: '#11dbcf' }}></i>
                <h3><a href="123">Midela Teren</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
                <h3><a href="123">Pira Neve</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-anchor-line" style={{color: 'b2904f'}}></i>
                <h3><a href="123">Dirada Pack</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-disc-line" style={{ color: '#b20969' }}></i>
                <h3><a href="123">Moton Ideal</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-base-station-line" style={{ color: '#ff5828' }}></i>
                <h3><a href="123">Verdo Park</a></h3>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 mt-4">
              <div class="icon-box">
                <i class="ri-fingerprint-line" style={{ color: '#29cc61' }}></i>
                <h3><a href="123">Flavor Nivelanda</a></h3>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Features End ----------------------------------------------------- */}
    </div>
  )
}

export default Hero