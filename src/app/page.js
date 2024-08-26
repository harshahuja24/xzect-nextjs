// src/app/page.js
export default function Home() {
  return (
    <div className="App">
      <nav className="nav-elements">
        <a href="/">
          <img src="https://landing.zytheme.com/magma/assets/images/logo/logo-dark.svg" alt="Logo" />
        </a>
        <ul id="nav-pages">
          <li><a href="/">Home</a></li>
          <li><a href="#about-us">About</a></li>
          <li><a href="#facts">Facts</a></li>
          <li><a href="#pricing-table">Pricing</a></li>
          <li><a href="#testimonial">Testimonial</a></li>
          <li><a href="#subscribe">Subscribe</a></li>
          <li><span>|</span></li>
          <li><a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a></li>
          <li><a href="/" className="icon"><i className="fa-brands fa-instagram"></i></a></li>
          <li><a href="/" className="icon"><i className="fa-brands fa-twitter"></i></a></li>
        </ul>
      </nav>

      <header className="hero">
        <p>The Best in Market</p>
        <h3>Online Services from leading experts in Market</h3>
        <a href="#" className="btn">Start Your Service</a>

        <div className="cards">
          <div className="card">
            <i className="fa-regular fa-clipboard fa-2xl" style={{marginTop: '15px', marginBottom: '15px'}}></i>
            <h4>Data Analysis</h4>
            <p>This Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-pencil-ruler"></i>
            <h4>Graphic Design</h4>
            <p>This should. Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <i className="fa-solid fa-camera-retro"></i>
            <h4>Photography</h4>
            <p>This should be Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </header>

      <section id="about-us" className="our-future">
        <div className="head">
          <p style={{paddingTop: '80px', textAlign: 'center', color: '#999'}}>Our Future</p>
          <h1>Grow up your Business</h1>
        </div>
        
        <div className="products d-flex">
          <div className="d-flex iproduct">
            <img src="https://landing.zytheme.com/magma/assets/images/services/1.png" alt="" />
            <h2>Search Engines</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, accusantium.</p>
            <div className="d-flex">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> 
            <a href="" className="btn btn-success">Checkout Now!</a>
          </div>

          <div className="d-flex iproduct">
            <img src="https://landing.zytheme.com/magma/assets/images/services/2.png" alt="" />
            <h2>Magic Touch</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dignissimos.</p>
            <div className="d-flex">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> 
            <a href="" className="btn btn-success">Checkout Now!</a>
          </div>

          <div className="d-flex iproduct">
            <img src="https://landing.zytheme.com/magma/assets/images/services/3.png" alt="" />
            <h2>Collect Ideas</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, eligendi?</p>
            <div className="d-flex">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> 
            <a href="" className="btn btn-success">Checkout Now!</a>
          </div>
        </div>
      </section>

      <div className="emp"></div>

      <section id="facts" className="facts">
        <div className="overlay-content">
          <p className="small-heading">Some Facts</p>
          <h1>We always ready for a challenge</h1>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-icon">👥</div>
              <div className="stat-number">1035</div>
              <div className="stat-label">Clients Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">958</div>
              <div className="stat-label">Great Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">🏆</div>
              <div className="stat-number">435</div>
              <div className="stat-label">Awards Won</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">⏰</div>
              <div className="stat-number">1236</div>
              <div className="stat-label">Spend Time</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-table" className="our-future">
        <div className="head">
          <p style={{paddingTop: '80px', textAlign: 'center', color: '#999'}}>Pricing Table</p>
          <h1>without Hidden Charges</h1>
        </div>
        <div className="pricing-table">
          <div className="plan">
            <h2>Basic Plan</h2>
            <div className="price">$ <span>15</span></div>
            <p>per month</p>
            <ul>
              <li><i className="fa fa-check"></i> Amazing Features</li>
              <li><i className="fa fa-check"></i> 4 Gb Storage</li>
              <li><i className="fa fa-check"></i> Domain Included</li>
              <li><i className="fa fa-times"></i> Unlimited Users</li>
              <li><i className="fa fa-times"></i> Unlimited Support</li>
            </ul>
            <button>Start your services</button>
          </div>
          <div className="plan">
            <h2>Medium Plan</h2>
            <div className="price">$ <span>25</span></div>
            <p>per month</p>
            <ul>
              <li><i className="fa fa-check"></i> Amazing Features</li>
              <li><i className="fa fa-check"></i> 4 Gb Storage</li>
              <li><i className="fa fa-check"></i> Domain Included</li>
              <li><i className="fa fa-times"></i> Unlimited Users</li>
              <li><i className="fa fa-times"></i> Unlimited Support</li>
            </ul>
            <button>Start your services</button>
          </div>
          <div className="plan">
            <h2>Professional Plan</h2>
            <div className="price">$ <span>35</span></div>
            <p>per month</p>
            <ul>
              <li><i className="fa fa-check"></i> Amazing Features</li>
              <li><i className="fa fa-check"></i> 4 Gb Storage</li>
              <li><i className="fa fa-check"></i> Domain Included</li>
              <li><i className="fa fa-times"></i> Unlimited Users</li>
              <li><i className="fa fa-times"></i> Unlimited Support</li>
            </ul>
            <button>Start your services</button>
          </div>
        </div>
      </section>

      <section id="testimonial" className="container">
        <div className="image-bg">
          <div className="overlay-head">
            <div className="our-future">
              <div className="heading">
                <p style={{paddingTop: '80px', textAlign: 'center', color: '#999'}}>Testimonial</p>
                <h1>what our users say</h1>
              </div>
              <div className="user-card">
                <div className="image-container"></div>
                <div className="note-container">
                  <div className="testimonial">
                    <div className="profile-quote">
                      <img src="https://landing.zytheme.com/magma/assets/images/testimonials/quote-left.png" alt="" className="quotes" />
                      <img src="https://landing.zytheme.com/magma/assets/images/testimonials/model-min.png" className="profile-pic" alt="Profile" />
                      <img src="https://landing.zytheme.com/magma/assets/images/testimonials/quote-right.png" alt="" className="quotes" />
                    </div>
                    <div className="quote-container">
                      <div className="name">Mark Smith</div>
                      <div className="company">Envato Inc</div>
                      <div className="quote">"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"</div>
                      <div className="rating">
                        <i className="star">★</i>
                        <i className="star">★</i>
                        <i className="star">★</i>
                        <i className="star">★</i>
                        <i className="star">★</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty"></div>
      </section>

      <div className="emp" id="subscribe"></div>

      <section className="container1">
        <h1>Get Offers</h1>
        <h1>Subscribe to our newsletter</h1>
        <input type="email" placeholder="Enter Your E-Mail" />
        <button>Start your services</button>
        <div className="info">
          <i></i> Give it a try: it only takes a click to unsubscribe
        </div>
      </section>

      <div className="emp"></div>

      <footer className="foot">
        <div className="logo">
          <a href="/">
            <img src="https://landing.zytheme.com/magma/assets/images/logo/logo-dark.svg" alt="Logo" />
          </a>
        </div>

        <div className="contact-details">
          <div className="first">
            <p>795 south park, wonderlan, australia</p>
            <p>Magmasite@Envato.com</p>
            <p>Mon. -Fri. 8am to 5pm</p>
          </div>
          <div className="second">
            <p>+(123)456-789-102</p>
            <p>www.Envato.com</p>
            <p>sat. 8am to 11pm</p>
          </div>
        </div>

        <hr />

        <div className="social">
          <p>@2024 All CopyWrite Reserved</p>
          <div className="final-ico">
            <a href="/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="/" className="icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="/" className="icon"><i className="fa-brands fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
