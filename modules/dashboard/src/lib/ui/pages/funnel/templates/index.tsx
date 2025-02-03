const template1 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sales Page</title>
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

    * {
      margin: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    .t1_container {
      max-width: 1237px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .t1_nav {
      padding-block: 2rem;
    }

    .t1_header {
      height: 510px;
      background-color: #332b67;
    }
    .t1_header-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 3rem;
      padding-bottom: 16px;
      margin-bottom: 150px;
      width: 100%;
      position: relative;
    }
    .t1_logo {
      display: flex;
      align-items: center;
    }
    .t1_nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .t1_nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .t1_hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }
    .t1_hamburger div {
      width: 25px;
      height: 2px;
      background-color: #fff;
      margin: 6px 0;
      transition: all 0.3s ease;
    }
    .t1_header-nav-items {
      display: flex;
      width: 366px;
      height: 48px;
      gap: 12px;
      color: white;
    }
    .t1_header-nav h1 {
      color: white;
    }
    .t1_header-nav-items p {
      width: 114px;
      border: 1px solid transparent;
      border-radius: 4px;
      padding-top: 12px;
      padding-right: 24px;
      padding-bottom: 12px;
      padding-left: 24px;
      gap: 8px;
    }
    .t1_header-buttons {
      gap: 8px;
    }
    .t1_header-button1 {
      width: 123px;
      height: 48px;
      padding: 12px, 36, 12px, 36px;
      background-color: #332b67;
      color: white;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .t1_header-button2 {
      width: 123px;
      height: 48px;
      padding: 12px, 36, 12px, 36px;
      background-color: #f6c21c;
      color: black;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .t1_hero-section {
      text-align: center;
      gap: 2px;
      margin-top: 68px;
    }
    .t1_hero-section h1 {
      font-weight: 600;
      font-size: 56px;
      color: #ffffff;
      line-height: 78.34px;
      align-items: center;
    }
    .t1_hero-section p {
      max-width: 928.32px;
      margin: 0 auto;
      margin-top: 20px;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      gap: 6px;
      align-items: center;
      color: white;
    }
    .banner-container {
      padding: 0 2rem;
      max-width: 902px;
      margin: 21px auto;
    }
    .banner {
      width: 100%;
      height: 100%;
    }

    .main-wrapper {
      flex: 1;
      margin-top: 55.15px;
    }
    .headline-text h1 {
      font-weight: 600;
      font-size: 56px;
      line-height: 78.34px;
    }
    .headline-text p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #747474;
    }
    .features-section {
      margin-top: 99px;
      display: flex;
      align-items: center;
      gap: 150px;
    }
    .features-list {
      margin-top: 31px;
    }
    .feature-checkbox {
      display: flex;
      align-items: center;
      gap: 20px;
      font-weight: 400;
      font-size: 20px;
      line-height: 25.36px;
      color: #747474;
      margin-bottom: 14px;
    }

    .check-img {
      width: 2rem;
    }

    .form-section {
      flex: 1;
      width: 100%;
      border-radius: 7px;
      padding: 30px;
      color: #ffffff;
      box-shadow: 8px 8px 20px 3px #0000000a;
    }

    .form {
      margin-bottom: 23px;
      width: 100%;
    }
    label {
      display: block;
      align-items: center;
      color: #262528;
    }
    input {
      width: 97%;
      height: 57px;
      margin-top: 8px;
      padding-left: 3%;
      border: 1px solid #00000066;
      border-radius: 4.69px;
      color: #00000066;
    }
    .form-button {
      width: 100%;
      height: 56px;
      background-color: #332b67;
      color: #ffffff;
      border-radius: 8px;
      padding-top: 16px;
      padding-right: 98px;
      padding-bottom: 16px;
      padding-left: 98px;
      margin-top: 23px;
    }
    .t1_footer {
      background-color: #f6f6f6;
      margin-top: 132px;
    }
    .footer-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 66px;
      padding-bottom: 84px;
    }
    .footer-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
      gap: 12px;
    }
    .footer-nav a {
      border-radius: 4px;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      text-decoration: none;
    }
    .footer-nav div a {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: #000000;
      text-decoration: none;
    }

    @media (max-width: 1199.98px) {
      .features-section {
        flex-direction: column;
      }
      .footer-container {
        flex-direction: column;
      }
    }
    @media (max-width: 767.98px) {
      .t1_header-nav {
        flex-direction: column;
        gap: 20px;
      }
    }
    @media (max-width: 575.98px) {
      .headline-text h1 {
        font-size: 48px;
      }
    }

    @media screen and (max-width: 991.98px) {
      .t1_hamburger {
        display: block;
      }

      .t1_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: #332b67;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t1_nav-links.active {
        right: 0;
      }

      .t1_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t1_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .button-container {
        margin: 20px 30px;
      }

      .t1_hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      .t1_hamburger.active div:nth-child(2) {
        opacity: 0;
      }

      .t1_hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }

    nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 20px;
      position: relative;
    }

    .t1_logo {
      display: flex;
      align-items: center;
    }

    .t1_nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .t1_nav-item {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .t1_nav-item p {
      padding-block: 12px;
      padding-inline: 24px;
      color: #fff;
      cursor: pointer;
      transition: color 0.3s ease;
      height: 48px;
      display: flex;
      align-items: center;
    }

    .t1_button-container {
      margin-left: auto;
      display: none;
    }

    .t1_hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }

    .t1_hamburger div {
      width: 25px;
      height: 2px;
      background-color: #fff;
      margin: 6px 0;
      transition: all 0.3s ease;
    }

    @media screen and (max-width: 991.98px) {
      .t1_hamburger {
        display: block;
      }

      .t1_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: #332b67;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t1_nav-links.active {
        right: 0;
      }

      .t1_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t1_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .button-container {
        margin: 20px 30px;
      }

      .t1_hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      .t1_hamburger.active div:nth-child(2) {
        opacity: 0;
      }

      .t1_hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }

    .t1_desktop-buttons {
      display: block;
    }

    .t1_nav-links .button-container {
      display: none;
    }

    @media screen and (max-width: 991.98px) {
      .t1_desktop-buttons {
        display: none;
      }

      .t1_nav-links .button-container {
        display: block;
        margin: 20px 30px;
        width: calc(100% - 60px); /* Account for margins */
      }

      .t1_nav-links .button-container button {
        width: 100%;
        margin-bottom: 10px;
      }

      .t1_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: #332b67;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t1_nav-links.active {
        right: 0;
      }

      .t1_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t1_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
    }

    .button-container button {
      height: 48px;
    }

    .t1_logo h1 {
      color: #ffffff;
    }

    .t1_footer {
      background-color: #f6f6f6;
    }

    .t1_footer-container {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 36px 20px;
      flex-direction: row;
    }

    .t1_footer-logo {
      display: flex;
      align-items: center;
    }

    .t1_footer-navitem {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .t1_footer-navitem p {
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t1_footer-navitem p:hover {
      color: #332b67;
    }

    @media screen and (max-width: 768px) {
      .t1_footer-container {
        flex-direction: column;
        gap: 24px;
        text-align: center;
        padding: 40px 20px;
      }

      .t1_footer-navitem {
        flex-direction: column;
        gap: 16px;
      }

      .t1_footer-logo {
        margin-bottom: 8px;
      }
    }

    @media screen and (min-width: 769px) and (max-width: 991px) {
      .t1_footer {
        padding: 30px 40px;
      }

      .t1_footer-navitem {
        gap: 16px;
      }
    }

    html {
      scroll-behavior: smooth;
    }

    .smooth-scroll {
      text-decoration: none;
    }
  </style>
  <body>
    <header class="t1_header">
      <nav class="t1_container t1_nav">
        <div class="t1_logo">
          <h1>LOGO</h1>
        </div>

        <div class="t1_nav-links">
          <div class="t1_button-container">
            <a href="#form" class="smooth-scroll">
              <button class="t1_header-button2">Get Started</button>
            </a>
          </div>
        </div>

        <div class="t1_button-container t1_desktop-buttons">
          <a href="#form" class="smooth-scroll">
            <button class="t1_header-button2">Get Started</button>
          </a>
        </div>

        <div class="t1_hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <section class="t1_container">
        <div class="t1_hero-section">
          <h1>Hero Section</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat ratione soluta placeat reiciendis, dignissimos, voluptatum cupiditate facere
            doloribus delectus debitis natus suscipit nemo, vel numquam id rerum!
          </p>
        </div>
      </section>
    </header>

    <section class="banner-container">
      <img class="banner" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933331/grape.js/su3byl2ir9hqg07iqsol.png" alt="banner" />
    </section>

    <section class="t1_container features-section">
      <div class="main-wrapper">
        <div class="headline-text">
          <h1>Your Headline</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuer]e in etiam turpis arcu et neque quis.</p>
        </div>

        <section class="features-list">
          <div class="feature-checkbox">
            <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div class="feature-checkbox">
            <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
            <p>Potter ipsum wand elf parchment wingardium</p>
          </div>

          <div class="feature-checkbox">
            <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
            <p>Potter ipsum wand elf parchment wingardium</p>
          </div>

          <div class="feature-checkbox">
            <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
            <p>Potter ipsum wand elf parchment wingardium</p>
          </div>
        </section>
      </div>

      <div class="form-section">
        <form id="form" method="POST">
          <div class="form">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="Full Name" placeholder="Enter Name" required />
          </div>
          <div class="form">
            <label for="email">Email</label>
            <input type="email" id="email" name="Email" placeholder="Enter Email" required />
          </div>

          <div class="form">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="Phone" placeholder="08101234567" required />
          </div>

          <button type="submit" id="submit-button" class="form-button">Submit</button>
        </form>
      </div>
    </section>

    <footer class="t1_footer">
      <div class="t1_footer-container">
        <div class="t1_footer-logo">
          <h1>LOGO</h1>
        </div>

        <div class="t1_footer-navitem">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  </body>
  <script>
    document.getElementById('form').addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission
      document.getElementById('submit-button').textContent = 'Submitting..';
      document.getElementById('submit-button').disabled = true;

      // Collect the form data
      var formData = new FormData(this);
      var keyValuePairs = [];
      for (var pair of formData.entries()) {
        keyValuePairs.push(pair[0] + '=' + pair[1]);
      }

      var formDataString = keyValuePairs.join('&');

      // Send a POST request to your Google Apps Script
      fetch('https://script.google.com/macros/s/AKfycbyWE9sb91qa3MCAps-lfwOqRaevhG5BvGyJ_8ImAElQ9mJMwCu-S5WH_pCgAKE_pkTing/exec', {
        redirect: 'follow',
        method: 'POST',
        body: formDataString,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      })
        .then(function (response) {
          if (response) {
            return response;
          } else {
            throw new Error('Failed to submit the form.');
          }
        })
        .then(function (data) {
          window.location.href = './Feedback.html';
          document.getElementById('submit-button').disabled = false;
          document.getElementById('form').reset();

          setTimeout(function () {
            document.getElementById('submit-button').textContent = 'Get Package';
          }, 2600);
        })
        .catch(function (error) {
          console.error(error);
        });
    });

    const hamburger = document.querySelector('.t1_hamburger');
    const navLinks = document.querySelector('.t1_nav-links');
    const body = document.body;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = 'auto';
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.t1_nav-links a, .t1_nav-item p').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = 'auto';
      });
    });

    // Add smooth scrolling for all links with smooth-scroll class
    document.querySelectorAll('.smooth-scroll').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });
  </script>
</html>
`;
const template2 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webinar</title>
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

    * {
      margin: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    .t2_header {
      background-color: #fbe69a;
      padding-bottom: 67px;
    }

    .t2_nav {
      max-width: 1240px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      padding: 26px 20px;
      position: relative;
    }

    .t2_nav-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .t2_navitem {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
    }

    .t2_button {
      background-color: #2f40d5;
      padding-block: 12px;
      padding-inline: 36px;
      border-radius: 4px;
    }
    .t2_text {
      color: #f3f2fb;
      font-weight: 500;
    }

    .t2_line {
      background-color: lightgray;
      height: 1px;
    }
    .t2_hero {
      max-width: 1084px;
      margin: 0 auto;
    }
    .t2_hero h1 {
      font-weight: 600;
      font-size: 20px;
      color: #262528;
      text-align: center;
      padding-inline: 41.84px;
      margin-top: 70px;
    }
    .t2_hero p {
      font-size: 16px;
      text-align: center;
      margin-inline: 14.13px;
      margin-top: 22px;
    }

    .t2_button2 {
      width: fit-content;
      margin: 0 auto;
      background-color: #2f40d5;
      text-align: center;
      padding-block: 19px;
      padding-inline: 77px;
      border-radius: 5px;
      margin-top: 22px;
    }

    .t2_text2 {
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
    }

    .t2_section1 {
      max-width: 1066px;
      margin: 0 auto;
      padding-bottom: 63px;
      padding-inline: 32px;
    }

    .t2_section1 h1 {
      color: #292d32;
      font-weight: 600;
      font-size: 35px;
      text-align: center;
      margin-top: 57px;
    }

    .t2_image {
      margin-top: 61px;
    }

    img {
      width: 100%;
    }

    .t2_blue {
      background-color: #2f40d5;
      padding-block: 65px;
      padding-inline: 16px;
    }

    .t2_headline h1 {
      font-weight: 600px;
      font-size: 30px;
      color: #ffffff;
    }

    .t2_headline p {
      font-size: 16px;
      color: #ffffff;
    }

    .t2_fill {
      padding-top: 31px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding-right: 20.02px;
    }
    .t2_pic {
      width: fit-content;
    }
    .t2_pic img {
      width: fit-content;
    }

    .t2_p-text p {
      font-size: 11px;
      color: #ffffff;
    }

    .t2_form {
      background-color: #ffffff;
      margin-block: 53px;
      border-radius: 7px;
    }

    .t2_formfill {
      padding: 30px;
    }
    .t2_name {
      margin-top: 23px;
    }
    label {
      display: block;
      align-items: center;
      color: #262528;
    }

    input {
      margin-top: 8px;
      color: #878789;
      padding-top: 17.83px;
      padding-right: 326.36;
      padding-left: 20.64px;
      padding-bottom: 16.17px;
      width: 100%;
      border-radius: 4.69px;
      border: 0.94px solid #00000066;
    }
    .t2_package {
      background-color: #2f40d5;
      color: #ffffff;
      padding-inline: 60px;
      padding-block: 17px;
      font-size: 18px;
      margin-top: 59px;
      border-radius: 5px;
      border: 0;
      width: 100%;
    }

    .t2_section3 {
      max-width: 968px;
      margin: 0 auto;
    }

    .t2_section3 h1 {
      margin-top: 73px;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
    }

    .t2_section3 p {
      font-size: 16px;
      text-align: center;
      margin-top: 21px;
      margin-bottom: 53px;
      padding-inline: 30px;
    }

    .t2_section4 {
      max-width: 1239.91px;
      margin: 0 auto;
      padding-inline: 30px;
      padding-bottom: 73px;
      display: flex;
      flex-wrap: wrap;
      /* flex-flow: row; */
      gap: 38px;
    }
    .t2_subsec1 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .t2_subsec1 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .t2_subsec1 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }
    .t2_subsec2 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .t2_subsec2 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .t2_subsec2 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }
    .t2_subsec3 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .t2_subsec3 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .t2_subsec3 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }

    .t2_subsec4 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .t2_subsec4 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .t2_subsec4 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }

    .t2_section5 {
      background-color: #fbe69a;
      padding-block: 50px;
      padding-inline: 30px;
    }

    .t2_mainsec5 {
      max-width: 1236px;
      margin: 0 auto;
    }
    .t2_submain {
      text-align: center;
      /* margin-inline: 136.4px; */
    }
    .t2_submain h1 {
      font-size: 50px;
      font-weight: 600;
    }

    .t2_submain p {
      font-size: 16px;
      margin-top: 21px;
      line-height: 29.05px;
    }

    .t2_flexsec {
      margin-block: 61px;
    }

    .t2_min-flex1 {
      background-color: #ffffff;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
      /* height: 561px; */
    }
    .t2_min-flex {
      background-color: #ffffff;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
      /* height: 561px; */
    }

    .t2_button- {
      background-color: #ffd828;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
    }
    .t2_butt- {
      color: #1e1e1e;
      font-size: 11.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .t2_lorem {
      font-size: 11.78px;
      color: #292d32;
      margin-top: 16.68px;
      line-height: 20.61px;
    }

    .t2_naira {
      padding-top: 11.78px;
      font-weight: 600;
      color: #292d32;
      font-size: 30.07px;
    }

    .t2_general {
      display: flex;
      align-items: center;
      margin-top: 21.59px;
    }

    .t2_image1 {
      width: fit-content;
    }

    .t2_image1 img {
      width: fit-content;
    }
    .t2_image1 P {
      font-size: 13.74px;
      font-weight: 500;
    }

    .t2_line2 {
      width: 100%;
      margin-top: 62px;
      border: 0.98px solid #00000026;
    }
    /* .line3{
    width: 100%;
    margin-top: 62px;
    border: 0.98px solid #00000026;
} */

    /* .pack1 {
    width: 100%;
    margin-top: 120.51px;
    color: #2f40d5;
    border: 1.18px solid #2f40d5;
    padding-block: 16.68px;
    padding-inline: 59.31px;
} */
    .t2_pack {
      width: 100%;
      margin-top: 25.51px;
      color: #2f40d5;
      border: 1.18px solid #2f40d5;
      padding-block: 16.68px;
      padding-inline: 59.31px;
      /* background-color: #f3f4ff; */
    }

    .t2_min-flex2 {
      background-color: #2f40d5;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
    }

    .t2_button3 {
      background-color: #ffffff;
      border-radius: 20.61px;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
    }
    .t2_butt3 {
      color: #767676;
      font-size: 17.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .t2_lorem2 {
      font-size: 11.78px;
      color: #ffffff;
      margin-top: 16.68px;
      line-height: 20.61px;
    }

    .t2_naira2 {
      padding-top: 11.78px;
      font-weight: 600;
      color: #ffffff;
      font-size: 30.07px;
    }
    .t2_image1 img {
      width: fit-content;
      color: #ffffff;
    }

    .t2_pack2 {
      width: 100%;
      background-color: #2f40d5;
      border: 1.18px solid #ffffff;
      margin-top: 25.51px;
      padding-block: 16.68px;
      padding-inline: 59.31px;
      color: #ffffff;
    }

    .t2_ptag {
      color: #ffffff;
    }

    .t2_general2 {
      display: flex;
      align-items: center;
      margin-top: 21.59px;
    }

    .t2_line3 {
      width: 100%;
      margin-top: 62px;
      border: 0.98px solid #ffffff3d;
    }

    .t2_button4 {
      background-color: #000000;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
      color: #ffffff;
    }
    .t2_butt4 {
      font-size: 11.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .t2_t2_footer {
      background-color: #fdfbf6;
    }
    .t2_footer-nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 36px 20px;
    }

    .t2_footer-logo {
      display: flex;
      align-items: center;
    }

    .t2_footer-navitem {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .t2_footer-navitem p {
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t2_footer-navitem p:hover {
      color: #2f40d5;
    }

    .t2_footer-end {
      margin-top: 8px;
    }

    .t2_footer-end p {
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t2_footer-end p:hover {
      color: #2f40d5;
    }

    html {
      scroll-behavior: smooth;
    }

    .smooth-scroll {
      text-decoration: none;
    }

    @media screen and (max-width: 768px) {
      .t2_footer-nav {
        flex-direction: column;
        gap: 24px;
        text-align: center;
        padding: 40px 20px;
      }

      .t2_footer-navitem {
        flex-direction: column;
        gap: 16px;
      }

      .t2_footer-logo {
        margin-bottom: 8px;
      }

      .t2_footer-end {
        margin-top: 8px;
      }
    }

    @media screen and (min-width: 769px) and (max-width: 991px) {
      .t2_footer-nav {
        padding: 30px 40px;
      }

      .t2_footer-navitem {
        gap: 16px;
      }
    }

    .t2_modal {
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .t2_modal h1 {
      font-size: 24px;
    }

    .t2_modal p {
      font-size: 16px;
    }

    .t2_modal h1,
    .t2_modal p {
      margin-block: 1rem;
    }

    .t2_modal-content {
      background-color: #fdfbf6;
      margin: 15% auto;
      padding: 50px;
      border-radius: 8px;
      max-width: 700px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .t2_modal-content img {
      width: 220px;
    }

    .t2_close-button {
      margin-top: 20px;
      background-color: #332b67;
      height: 60px;
      width: 264px;
      color: white;
      font-size: 1.3rem;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }

    .t2_close-button:hover {
      background-color: #f6c21c;
      color: black;
    }

    @media (min-width: 320px) {
    }

    @media (min-width: 375px) {
      .t2_hero h1 {
        padding-inline: 42.84px;
      }
      .t2_p-text p {
        font-size: 15px;
        color: #ffffff;
      }
      .t2_package {
        background-color: #2f40d5;
        color: #ffffff;
        padding-inline: 83px;
      }
    }
    @media (min-width: 425px) {
      .t2_hero h1 {
        font-size: 25px;
      }
    }
    @media (min-width: 576px) {
      .t2_nav {
        flex-direction: row;
      }
      .t2_hero h1 {
        font-size: 45px;

        padding-inline: 80.84px;
      }
      .t2_section1 h1 {
        color: #292d32;
        font-weight: 600;
        font-size: 50px;
        text-align: center;
        margin-top: 57px;
      }

      .t2_section3 {
        max-width: 968px;
        margin: 0 auto;
      }

      .t2_section3 h1 {
        margin-top: 73px;
        text-align: center;
        font-size: 50px;
        font-weight: 600;
      }

      .t2_section3 p {
        font-size: 24px;
        text-align: center;
        margin-top: 21px;
        margin-bottom: 53px;
      }
      .t2_footer-nav {
        flex-direction: row;
      }
    }

    @media (min-width: 768px) {
      .t2_hero h1 {
        font-size: 68px;
      }
      .t2_hero p {
        font-size: 24px;
        text-align: center;
        margin-inline: 58.13px;
        margin-top: 22px;
      }

      .t2_button2 {
        width: fit-content;
        margin: 0 auto;
        background-color: #2f40d5;
        text-align: center;
        padding-block: 19px;
        padding-inline: 77px;
        border-radius: 5px;
        margin-top: 22px;
      }

      .t2_text2 {
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
      }
      .t2_section4 {
        max-width: 1239.91px;
        margin: 0 auto;
        padding-inline: 40px;
        display: flex;
        align-items: center;
        padding-bottom: 73px;
        gap: 38px;
      }
      .t2_subsec1 {
        background-color: #f3f4ff;
        padding: 22.22px;
        flex: 1;
      }
      .t2_subse1 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec1 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .t2_subsec2 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec2 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec2 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_subsec3 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec3 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec3 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .t2_subsec4 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec4 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec4 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_submain {
        margin-inline: 70px;
      }
      .t2_submain p {
        font-size: 16px;
        margin-top: 21px;
      }

      .t2_blue {
        background-color: #2f40d5;
      }

      .t2_headline h1 {
        font-weight: 600;
        font-size: 56px;
        color: #ffffff;
      }

      .t2_headline p {
        font-size: 20px;
        color: #ffffff;
      }

      .t2_fill {
        padding-top: 31px;
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .t2_pic {
        width: fit-content;
      }
      .t2_pic img {
        width: fit-content;
      }

      .t2_p-text p {
        font-size: 20px;
        color: #ffffff;
      }

      .t2_flexsec {
        display: flex;
        align-items: center;
        gap: 27px;
      }
    }
    @media (min-width: 992px) {
      .t2_hero h1 {
        padding-inline: 105.84px;
      }
      .t2_section4 {
        max-width: 1239.91px;
        margin: 0 auto;
        padding-inline: 102px;
        display: flex;
        align-items: center;
        padding-bottom: 73px;
        gap: 38px;
      }
      .t2_subsec1 {
        background-color: #f3f4ff;
        padding: 22.22px;
        flex: 1;
      }
      .t2_subse1 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec1 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .t2_subsec2 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec2 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec2 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_subsec3 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec3 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec3 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .t2_subsec4 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .t2_subsec4 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .t2_subsec4 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_submain p {
        font-size: 24px;
      }

      .t2_submain {
        margin-inline: 102px;
      }

      .t2_flexsec {
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 27px;
      }

      .t2_modal h1 {
        font-size: 40px;
      }

      .t2_modal-content {
        background-color: #fdfbf6;
        margin: 15% auto;
        padding: 50px;
        border-radius: 8px;
        max-width: 700px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      }
    }
    @media (min-width: 1024px) {
      .t2_head {
        display: flex;
        align-items: center;
        gap: 10rem;
        max-width: 1240px;
        margin: 0 auto;
      }
      .t2_blue {
        padding-block: 163px;
      }
      .t2_head-sub {
        width: 100%;
        /* margin-right: 105px; */
        /* margin-left: 107px; */
      }
      .t2_form {
        width: 100%;
        /* margin-right: 107px; */
      }
    }
    @media (min-width: 1049px) {
      .t2_subsec1 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_subsec2 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_subsec3 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .t2_subsec4 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
    }

    .t2_hamburger {
      display: none;
      cursor: pointer;
    }

    .t2_hamburger span {
      display: block;
      width: 25px;
      height: 2px;
      background-color: #333;
      margin: 5px 0;
      transition: 0.3s;
    }

    @media (max-width: 575px) {
      .t2_hamburger {
        display: block;
      }

      .t2_nav {
        grid-template-columns: 1fr auto;
      }

      .t2_navitem,
      .t2_button {
        display: none; /* Hide by default */
      }

      .t2_navitem.active,
      .t2_button.active {
        display: flex; /* Show when active */
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #fbe69a;
        padding: 20px;
        z-index: 1000;
      }

      .t2_navitem.active {
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .t2_button.active {
        justify-content: center;
        margin-top: -1px; /* Remove gap between nav items and button */
      }

      /* Hamburger animation */
      .t2_hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .t2_hamburger.active span:nth-child(2) {
        opacity: 0;
      }

      .t2_hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
      }
    }

    nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      padding-block: 26px;
      position: relative;
    }

    .t2_logo {
      display: flex;
      align-items: center;
    }

    .t2_nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .t2_nav-item {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .t2_nav-item p {
      padding-block: 12px;
      padding-inline: 24px;
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t2_nav-item p:hover {
      color: #2f40d5;
    }

    .t2_button-container {
      margin-left: auto;
    }

    .t2_button-1 {
      background-color: #2f40d5;
      color: #f3f2fb;
      padding-block: 12px;
      padding-inline: 28px;
      border-radius: 4px;
      font-weight: 500;
    }

    .t2_hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }

    .t2_hamburger div {
      width: 25px;
      height: 2px;
      background-color: #333;
      margin: 6px 0;
      transition: all 0.3s ease;
    }

    @media screen and (max-width: 991.98px) {
      .t2_hamburger {
        display: block;
      }

      .t2_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: #fbe69a;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t2_nav-links.active {
        right: 0;
      }

      .t2_button-container {
        margin: 20px 30px;
      }

      .t2_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t2_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }

      .t2_button-container {
        display: none;
      }

      .t2_nav-links .t2_button-container {
        display: block;
      }

      .t2_hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      .t2_hamburger.active div:nth-child(2) {
        opacity: 0;
      }

      .t2_hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  </style>
  <body>
    <header class="t2_header">
      <nav>
        <div class="t2_logo">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750172/productize/dk3ikhtl6rmfahp3i0yy.png" alt="" />
        </div>

        <div class="t2_nav-links">
          <div class="t2_nav-item">
            <p>Navitem</p>
            <p>Navitem</p>
            <p>Navitem</p>
          </div>
        </div>

        <div class="t2_button-container smooth-scroll">
          <a href="#form" class="t2_button-1">Get Package</a>
        </div>

        <div class="t2_hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div class="t2_line"></div>

      <section class="t2_hero">
        <h1>Your Hero Headline Goes Right Here</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        <div class="t2_button2">
          <a href="#form" class="t2_text2 smooth-scroll">Get Package</a>
        </div>
      </section>
    </header>
    <section class="t2_section1">
      <h1>The Product</h1>

      <div class="t2_image">
        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750250/productize/knsnegea71wsuvkp47k4.png" alt="" />
      </div>
    </section>

    <section class="t2_blue">
      <div class="t2_head">
        <div class="t2_head-sub">
          <div class="t2_headline">
            <h1>Your Headline</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis.</p>
          </div>

          <div class="t2_fill">
            <div class="t2_pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="t2_p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="t2_fill">
            <div class="t2_pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="t2_p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="t2_fill">
            <div class="t2_pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="t2_p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="t2_fill">
            <div class="t2_pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="t2_p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        <form id="form" method="POST" class="t2_form">
          <div class="t2_formfill">
            <div class="t2_name">
              <label for="first_name">First Name</label>
              <input type="text" id="first_name" name="first_name" placeholder="Enter First Name" required />
            </div>
            <div class="t2_name">
              <label for="last_name">Last Name</label>
              <input type="text" id="last_name" name="last_name" placeholder="Enter Last Name" required />
            </div>
            <div class="t2_name">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Email" required />
            </div>
            <div class="t2_name">
              <label>
                <input type="checkbox" id="maillist_permission" name="maillist_permission" checked />
                Subscribe to mailing list
              </label>
            </div>

            <button type="submit" id="submit-button" class="t2_form-button t2_package">Get package</button>
          </div>
        </form>
      </div>
    </section>

    <section class="t2_section3">
      <h1>Feature</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
    </section>

    <section class="t2_section4">
      <div class="t2_subsec1">
        <h1>Feature1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="t2_subsec2">
        <h1>Feature2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="t2_subsec3">
        <h1>Feature3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="t2_subsec4">
        <h1>Feature</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
    </section>

    <section class="t2_section5">
      <div class="t2_mainsec5">
        <div class="t2_submain">
          <h1>Pricing</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        </div>
      </div>

      <section class="t2_flexsec">
        <article class="t2_min-flex1 p-card">
          <button class="t2_button-">Package 1</button>

          <p class="t2_lorem">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="t2_naira">#100,00</p>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_line2"></div>

          <button class="t2_pack">Get Package</button>
        </article>

        <article class="t2_min-flex2 p-card">
          <button class="t2_button3">Package 2</button>

          <p class="t2_lorem2">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="t2_naira2">#250,000</p>

          <div class="t2_general2">
            <div class="t2_image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="t2_ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general2">
            <div class="t2_image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="t2_ptag">Lrem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general2">
            <div class="t2_image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="t2_ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general2">
            <div class="t2_image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="t2_ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general2">
            <div class="t2_image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="t2_ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_line3"></div>

          <button class="t2_pack2">Get Package</button>
        </article>

        <article class="t2_min-flex p-card">
          <button class="t2_button4">Package 3</button>

          <p class="t2_lorem">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="t2_naira">#500,00</p>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_general">
            <div class="t2_image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="t2_line2"></div>
          <button class="t2_pack">Get Package</button>
        </article>
      </section>
    </section>

    <section class="t2_t2_footer">
      <div class="t2_footer-nav">
        <div class="t2_footer-logo">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750172/productize/dk3ikhtl6rmfahp3i0yy.png" alt="" />
        </div>

        <div class="t2_footer-navitem">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>

        <div class="t2_footer-end">
          <p>Nav item</p>
        </div>
      </div>
    </section>
  </body>
  <script>
    document.getElementById('form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      // Update button state
      const submitButton = document.getElementById('submit-button');
      submitButton.textContent = 'Submitting..';
      submitButton.disabled = true;

      // Get form data
      const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        maillist_permission: document.getElementById('maillist_permission').checked
      };

      try {
        // Extract funnel ID from subdomain
        const hostname = window.location.hostname;
        const funnelId = hostname.split('.')[0];

        const response = await fetch("https://api-dev.trybytealley.com/api/funnels/" + funnelId + "/email", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          // If successful, redirect to feedback page
          window.location.href = './Feedback.html';
        } else {
          // Handle error response
          const errorData = await response.json();
          alert('Error: ' + (errorData.message || 'Something went wrong'));
          submitButton.textContent = 'Get Package';
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
        submitButton.textContent = 'Get Package';
        submitButton.disabled = false;
      }
    });

    const hamburger = document.querySelector('.t2_hamburger');
    const navLinks = document.querySelector('.t2_nav-links');
    const body = document.body;

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      // Prevent scrolling when menu is open
      body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = 'auto';
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.t2_nav-links a, .t2_nav-item p').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = 'auto';
      });
    });
  </script>
</html>`;

const template3 = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Webinar</title>
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

    :root {
      --primary-color: #17b6ba;
      --text-color: #333;
      --bg-color: #f9f9f9;
      --white: #ffffff;
      --footer-bg: #333;
    }

    * {
      margin: 0;
      padding: 0;
      text-decoration: none;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

    .t3_button {
      background-color: var(--primary-color);
      color: var(--white);
      padding: 12px 28px;
      border-radius: 4px;
      border: none;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .t3_button:hover {
      background-color: #149598;
    }

    .t3_container {
      max-width: 1230px;
      margin: 0 auto;
      padding-inline: 1rem;
    }

    .t3_text-wrapper {
      max-width: 700px;
      margin: 0 auto;
    }

    .t3_nav {
      background: var(--white);
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .t3_nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-block: 1rem;
    }

    .t3_logo h1 {
      font-size: 1.5rem;
      color: var(--primary-color);
    }

    .t3_nav-menu {
      position: fixed;
      top: 60px;
      left: -100%;
      background: var(--white);
      width: 100%;
      height: calc(100vh - 60px);
      padding: 2rem;
      transition: 0.3s ease-in-out;
    }

    .t3_nav-menu.t3_active {
      left: 0;
    }

    .t3_nav-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .t3_nav-item {
      cursor: pointer;
    }

    .t3_nav-link {
      color: var(--text-color);
      font-weight: 500;
    }

    .t3_nav-link:hover {
      color: var(--primary-color);
    }

    .t3_hamburger {
      display: block;
      cursor: pointer;
      padding: 0.5rem;
    }

    .t3_bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      transition: all 0.3s ease-in-out;
      background-color: var(--text-color);
    }

    .section-1,
    .section-4,
    .footer {
      background: #1d1c20;
      color: #fff;
      padding: 10rem 1rem;
      text-align: center;
    }

    .hero-headline h1,
    .hero-headline p {
      margin-block: 1rem;
    }

    .img-1 {
      width: 100%;
      margin-block: 2rem;
    }

    .section-2,
    .section-3,
    .section-5,
    .section-6 {
      text-align: center;
      padding-block: 2rem;
    }

    .section-2 .key-topics {
      margin-block: 2rem;
    }

    .section-2 .topics-group {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-2 .topic {
      background: #f2f2f2;
      padding: 2rem;
    }

    .section-3 .speaker {
      margin-block: 2rem;
    }

    .section-3 .image-group {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-4 .long-headline h1 {
      margin-block: 2rem;
    }
    .section-4 .imageandwords .img-3 {
      width: 100%;
      margin-block: 2rem;
    }

    .section-4 .standtogain,
    .section-4b {
      text-align: start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-4 .benefit {
      margin-top: 0.5rem;
    }

    .section-5 .your-long-headline,
    .your-long-headline p {
      margin-block: 2rem;
    }

    .section-5 .full-event {
      text-align: start;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-5 .event {
      background: #f2f2f2;
      padding: 1.5rem;
    }
    .section-5 .event h1 {
      margin-bottom: 2rem;
    }

    .section-5 .sub-event {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .section-5 .start-time h4 {
      color: #db3e3e;
    }

    .section-6 {
      position: relative;
      background: url(https://res.cloudinary.com/kingsleysolomon/image/upload/v1733559341/grape.js/sah4xbsbsdrnhyhtoa0w.jpg) no-repeat;
      background-size: cover;
      color: #fff;
      text-align: start;
    }

    .section-6::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000050;
    }

    .section-6-wrapper {
      position: relative;
      /* z-index: 999; */
    }

    .form-section {
      /* flex: 1; */
      width: 100%;
      border-radius: 7px;
      padding: 30px;
      color: #ffffff;
      box-shadow: 8px 8px 20px 3px #0000000a;
      background: #fff;
      margin: 2rem auto;
    }

    .form {
      margin-bottom: 23px;
      width: 100%;
    }

    .field {
      margin-bottom: 2rem;
    }

    label {
      display: block;
      align-items: center;
      color: #262528;
    }
    input,
    select {
      width: 100%;
      height: 57px;
      margin-top: 8px;
      padding-left: 3%;
      border: 1px solid #00000066;
      border-radius: 4.69px;
      color: #00000066;
    }
    .form-button {
      width: 100%;
      height: 56px;
      margin-top: 23px;
    }

    .t3_footer {
      background: #333;
      color: #fff;
      padding-block: 2rem;
    }

    .t3_footer .footer-navitem {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .socials {
      margin-top: 1rem !important;
    }

    .check-img {
      width: 1.2rem;
    }

    @media (min-width: 425px) {
    }

    @media (min-width: 768px) {
      .t3_nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        /* height: 98px; */
      }

      .t3_nav-item {
        flex-direction: row;
        gap: 1rem;
        width: auto;
      }

      .hero-headline h1 {
        font-size: 2rem;
      }

      .img-1 {
        width: 50%;
        margin-block: 2rem;
      }

      .section-2 .topics-group,
      .section-3 .image-group,
      .section-5 .full-event {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }

      .section-4 .long-headline h1 {
        font-size: 2rem;
      }
    }

    @media (min-width: 991px) {
      .section-1-wrapper {
        display: flex;
        text-align: start;
        align-items: center;
        gap: 4rem;
        padding-inline: 0;
      }

      .hero-headline h1 {
        font-size: 3rem;
      }
      .hero-headline p {
        font-size: 1rem;
      }

      .hero-btn {
        width: 20rem;
      }

      .img-1 {
        width: 40%;
      }

      .imageandwords {
        display: flex;
        align-items: center;
        gap: 4rem;
        margin-top: 2rem;
      }

      .img-3 {
        flex: 1;
      }

      .section-6-wrapper {
        display: flex;
        align-items: center;
        gap: 4rem;
      }

      .section-6-text,
      .form-section {
        flex: 1;
      }

      .headline-text h1 {
        font-size: 3rem;
      }

      .footer-wrapper,
      .footer-navitem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row !important;
        margin-top: 0 !important;
      }

      .socials {
        margin-top: 0 !important;
      }
    }

    @media (min-width: 1240px) {
      .hero-headline h1 {
        font-size: 4rem;
      }
      .hero-headline p {
        font-size: 1.5rem;
      }
      .section-2 .topics-group,
      .section-3 .image-group {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
      }

      .img-2 {
        width: 100%;
      }

      .section-5 {
        padding-block: 4rem;
        display: flex;
        text-align: start;
        gap: 4rem;
      }

      .your-long-headline h1 {
        font-size: 3rem;
      }

      .full-event,
      .your-long-headline {
        flex: 1;
      }
    }

    /* Footer styles */
    .footer {
      background: var(--footer-bg);
      color: var(--white);
      padding-block: 2rem;
      margin-top: 4rem;
    }

    .footer-wrapper {
      display: grid;
      gap: 2rem;
    }

    .footer-nav {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .footer-link {
      color: var(--white);
      opacity: 0.8;
      transition: opacity 0.3s ease;
    }

    .footer-link:hover {
      opacity: 1;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    /* Responsive styles */
    @media (min-width: 768px) {
      .t3_hamburger {
        display: none;
      }

      .t3_nav-menu {
        position: static;
        width: auto;
        height: auto;
        padding: 0;
        background: none;
      }

      .t3_nav-list {
        flex-direction: row;
        gap: 2rem;
      }

      .footer-wrapper {
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
      }

      .footer-nav {
        flex-direction: row;
        justify-content: center;
      }
    }

    /* Animation classes for hamburger */
    .t3_hamburger.t3_active .t3_bar:nth-child(2) {
      opacity: 0;
    }

    .t3_hamburger.t3_active .t3_bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .t3_hamburger.t3_active .t3_bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  </style>
  <body>
    <nav class="t3_nav">
      <div class="t3_container t3_nav-container">
        <div class="t3_logo">
          <h1>Logo</h1>
        </div>

        <div class="t3_nav-menu">
          <ul class="t3_nav-list">
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Home</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">About</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Services</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <a href="#">
          <button class="t3_button">Get Started</button>
        </a>

        <div class="t3_hamburger">
          <span class="t3_bar"></span>
          <span class="t3_bar"></span>
          <span class="t3_bar"></span>
        </div>
      </div>
    </nav>

    <section class="section-1">
      <section class="t3_container section-1-wrapper">
        <div class="hero-headline">
          <h1>Your Hero Headline Goes Right Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>

          <div>
            <a href="">
              <button class="t3_button hero-btn">CTA Button</button>
            </a>
          </div>
        </div>

        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480714/grape.js/kzeqkjlxq9fgqtfqurs1.png" alt="" class="img-1" />
      </section>
    </section>

    <section class="section-2 t3_container">
      <div class="key-topics text-wrapper">
        <h1>Key Topics</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
      </div>

      <div class="topics-group">
        <div class="topic">
          <h3>Topic 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="topic">
          <h3>Topic 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="topic">
          <h3>Topic 3</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div class="topic">
          <h3>Topic 4</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
      </div>
    </section>

    <section class="section-3 t3_container">
      <div class="speaker text-wrapper">
        <h1>The Speakers</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
      </div>

      <div class="image-group">
        <div class="image-name">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480715/grape.js/ewopl0mr8tc3vyr4taty.png" alt="" class="img-2" />
          <div class="name">
            <p class="first-p">Jane Doe</p>
            <p class="second-p">CEO Jane Doe & Co.</p>
          </div>
        </div>

        <div class="image-name">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480714/grape.js/i6x4lkckircc0fiymlhj.png" alt="" class="img-2" />

          <div class="name">
            <p class="first-p">John Doe</p>
            <p class="second-p">CEO Jane Doe & Co.</p>
          </div>
        </div>

        <div class="image-name">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480714/grape.js/opp9nhdtgrfdo4awp9o2.png" alt="" class="img-2" />

          <div class="name">
            <p class="first-p">John Doe</p>
            <p class="second-p">CEO Jane Doe & Co.</p>
          </div>
        </div>

        <div class="image-name">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480715/grape.js/kxxtd7zlpx9kq77yno9g.png" alt="" class="img-2" />
          <div class="name">
            <p class="first-p">Jane Doe</p>
            <p class="second-p">CEO Jane Doe & Co.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-4">
      <div class="sub-section-4 t3_container">
        <div class="long-headline text-wrapper">
          <h1>Your Long Headline Goes Right Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        </div>
        <div class="imageandwords">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480715/grape.js/djm3s9ahnlyappgztpyv.png" alt="" class="img-3" />

          <div class="standtogain">
            <div class="stand-text">
              <h1>What you stand to gain</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
              </p>
            </div>

            <section class="section-4b">
              <div class="check-1">
                <div class="checkbox-word">
                  <div>
                    <img
                      class="check-img"
                      src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480718/grape.js/cnjzh1x6na3i4slzvtvt.png"
                      alt=""
                      class="checkbox"
                    />
                  </div>
                  <h3 class="benefit">Benefits</h3>
                </div>
                <p class="check-1p">
                  Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
                </p>
              </div>
              <div class="check-2">
                <div class="checkbox-word">
                  <div>
                    <img
                      class="check-img"
                      src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480718/grape.js/cnjzh1x6na3i4slzvtvt.png"
                      alt=""
                      class="checkbox"
                    />
                  </div>
                  <h3 class="benefit">Benefits</h3>
                </div>
                <p class="check-1p">
                  Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
                </p>
              </div>
              <div class="check-3">
                <div class="checkbox-word">
                  <div>
                    <img
                      class="check-img"
                      src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480718/grape.js/cnjzh1x6na3i4slzvtvt.png"
                      alt=""
                      class="checkbox"
                    />
                  </div>
                  <h3 class="benefit">Benefits</h3>
                </div>
                <p class="check-1p">
                  Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>

    <section class="section-5 t3_container">
      <div class="your-long-headline text-wrapper">
        <h1>Your Long Headline Goes Right Here</h1>
        <p>
          Hipster ipsum tattooed brunch I'm baby. Scenester post-ironic LaCroix single-origin migas charcoal. Denim mukbang microdosing hexagon them edison.
          Bushwick ramps chicken gastropub hell echo. Plant heard chambray poke cloud before crucifix.
        </p>
        <div>
          <a href="">
            <button class="t3_button hero-btn">CTA Button</button>
          </a>
        </div>
      </div>

      <div class="full-event">
        <div class="event">
          <h1>Event 1</h1>
          <div class="sub-event">
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
          </div>
        </div>

        <div class="event">
          <h1>Event 1</h1>
          <div class="sub-event">
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
            <div class="start-time">
              <h4>Start Time - End Time</h4>
              <p>Hipster ipsum tattooed brunch I'm baby. Fit gochujang umami.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-6">
      <section class="t3_container section-6-wrapper">
        <div class="section-6-text">
          <div class="headline-text">
            <h1>Your Headline</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Posuer]e in etiam turpis arcu et neque quis.</p>
          </div>

          <section class="features-list">
            <div class="feature-checkbox">
              <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480718/grape.js/cnjzh1x6na3i4slzvtvt.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

            <div class="feature-checkbox">
              <img class="check-img" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480718/grape.js/cnjzh1x6na3i4slzvtvt.png" alt="" />
              <p>Potter ipsum wand elf parchment wingardium</p>
            </div>
          </section>
        </div>

        <div class="form-section">
          <form id="form" method="POST">
            <div class="field">
              <label for="name">Full Name</label>
              <input type="text" id="name" name="Full Name" placeholder="Enter Name" required />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" id="email" name="Email" placeholder="Enter Email" required />
            </div>

            <div class="field">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="Phone" placeholder="08101234567" required />
            </div>

            <div class="field">
              <label for="package">Package</label>
              <select id="package" name="package" required>
                <option value="" disabled selected>Select a package</option>
                <option value="package1">Package 1</option>
                <option value="package2">Package 2</option>
                <option value="package3">Package 3</option>
              </select>
            </div>
            <button type="submit" id="submit-button" class="form-button t3_button">Submit</button>
          </form>
        </div>
      </section>
    </section>

    <footer class="footer">
      <div class="t3_container footer-wrapper">
        <div class="footer-logo">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480713/grape.js/jh9cqqkwpesa6aixtjgp.png" alt="Logo" />
        </div>

        <div class="footer-nav">
          <a href="#" class="footer-link">About</a>
          <a href="#" class="footer-link">Services</a>
          <a href="#" class="footer-link">Contact</a>
        </div>

        <div class="social-links">
          <a href="#" class="footer-link">Twitter</a>
          <a href="#" class="footer-link">LinkedIn</a>
          <a href="#" class="footer-link">Instagram</a>
        </div>
      </div>
    </footer>

    <script>
      // Navbar toggle
      const hamburger = document.querySelector('.t3_hamburger');
      const navMenu = document.querySelector('.t3_nav-menu');
      const body = document.querySelector('body');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('t3_active');
        navMenu.classList.toggle('t3_active');
        body.style.overflow = navMenu.classList.contains('t3_active') ? 'hidden' : 'auto';
      });

      document.querySelectorAll('.t3_nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('t3_active');
          navMenu.classList.remove('t3_active');
          body.style.overflow = 'auto';
        });
      });

      document.getElementById('form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        document.getElementById('submit-button').textContent = 'Submitting..';
        document.getElementById('submit-button').disabled = true;

        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + '=' + pair[1]);
        }

        var formDataString = keyValuePairs.join('&');

        // Send a POST request to your Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbyWE9sb91qa3MCAps-lfwOqRaevhG5BvGyJ_8ImAElQ9mJMwCu-S5WH_pCgAKE_pkTing/exec', {
          redirect: 'follow',
          method: 'POST',
          body: formDataString,
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
        })
          .then(function (response) {
            if (response) {
              return response;
            } else {
              throw new Error('Failed to submit the form.');
            }
          })
          .then(function (data) {
            console.log('submit successfully');
            window.location.href = './Feedback.html';
            document.getElementById('submit-button').disabled = false;
            document.getElementById('form').reset();

            setTimeout(function () {
              document.getElementById('submit-button').textContent = 'Get Package';
            }, 2600);
          })
          .catch(function (error) {
            console.error(error);
          });
      });
    </script>
  </body>
</html>
`;

export const template_1 = {
  pages: [
    {
      id: 'page-1',
      name: 'Home',
      content: template1,
      styles: ``,
    },
    {
      id: 'page-2',
      name: 'Feedback',
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
  </head>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }

    .t1_nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      padding-block: 26px;
      position: relative;
    }

    .t1_logo {
      display: flex;
      align-items: center;
    }

    .t1_nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .t1_nav-item {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .t1_nav-item p {
      padding-block: 12px;
      padding-inline: 24px;
      font-family: 'Neurial Grotesk';
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t1_button-container {
      margin-left: auto;
    }

    .t1_nav-item p:hover {
      color: #2f40d5;
    }

    .t1_hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }

    .t1_hamburger div {
      width: 25px;
      height: 2px;
      background-color: #333;
      margin: 6px 0;
      transition: all 0.3s ease;
    }

    .t1_button-1 {
      background-color: #2f40d5;
      color: #f3f2fb;
      padding-block: 12px;
      padding-inline: 28px;
      border-radius: 4px;
      border: 1px;
      font-family: 'Inter';
      font-weight: 500px;
    }

    .t1_line {
      background-color: #0000001c;
      height: 1px;
    }

    .t1_section-1 {
      max-width: 1086px;
      margin: 0 auto;
      padding-top: 76.93px;
      padding-inline: 2rem;
      padding-bottom: 139.33px;
    }
    .t1_sub-section {
      margin-top: 76.93px;
      margin-bottom: 139.93px;
    }
    .t1_image-1 {
      display: flex;
      justify-content: center;
    }

    .t1_thanks {
      margin-top: 22px;
    }
    .t1_thanks h1 {
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      font-family: 'Schibsted Grotesk';
      margin-inline: 2rem;
    }
    .t1_thanks p {
      text-align: center;
      margin-inline: 2rem;
      margin-block: 22px;
      line-height: 29.05px;
      font-size: 16px;
      color: #3e4144;
      font-family: 'inter';
    }
    .t1_button {
      display: block;
      margin: 0 auto;
      padding-inline: 104px;
      padding-block: 19px;
      background-color: #2f40d5;
      border-radius: 5px;
      border: 0;

      color: #ffffff;
    }
    .t1_section-2 {
      background-color: #f6f7fd;
    }
    .t1_footer {
      max-width: 1237px;
      margin: 0 auto;
      color: #000000;
      display: flex;
      align-items: center;
      padding: 63px 20px 83px;
      gap: 32px;
    }

    .t1_footer-navitem {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .t1_footer-navitem p {
      color: #727272;
      font-family: 'Neurial Grotesk';
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t1_footer-navitem p:hover {
      color: #2f40d5;
    }

    @media (min-width: 768px) {
      .t1_section-1 {
        padding-top: 76.93px;
        padding-right: 189px;
        padding-left: 167px;
        padding-bottom: 139.33px;
      }
      .t1_thanks h1 {
        font-size: 30px;
      }
    }

    @media (min-width: 991.98px) {
      .t1_thanks p {
        text-align: center;
        font-size: 20px;
        margin-inline: 58.13px;
      }

      .t1_nav {
        flex-direction: row;
      }

      .t1_footer {
        flex-direction: row;
        justify-content: space-between;
      }
      .t1_thanks h1 {
        font-size: 38px;
        text-align: center;
        margin-inline: 105.95px;
      }
    }

    @media screen and (max-width: 991.98px) {
      .t1_hamburger {
        display: block;
      }

      .t1_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: white;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t1_nav-links.active {
        right: 0;
      }

      .t1_button-container {
        margin: 20px 30px;
      }

      .t1_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t1_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid #f0f0f0;
      }

      .t1_nav-links .t1_button-1 {
        margin: 20px 30px;
      }

      .t1_hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      .t1_hamburger.active div:nth-child(2) {
        opacity: 0;
      }

      .t1_hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }

    @media screen and (max-width: 991.98px) {
      .t1_footer {
        flex-direction: column;
        text-align: center;
        padding: 40px 20px;
      }

      .t1_footer-navitem {
        flex-direction: column;
        gap: 16px;
      }

      .t1_footer-image {
        margin-bottom: 24px;
      }
    }

    @media screen and (min-width: 992px) {
      .t1_footer {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  </style>
  <body>
    <nav class="t1_nav">
      <div class="t1_logo">
        <h1>Logo</h1>
      </div>

      <div class="t1_nav-links">
        <div class="t1_nav-item">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>
      </div>

      <div class="t1_button-container">
        <a href="">
          <button class="t1_button-1">Get Package</button>
        </a>
      </div>
      <div class="t1_hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>

    <div class="t1_line"></div>

    <section class="t1_section-1">
      <section class="t1_sub-section">
        <div class="t1_image-div">
          <div class="t1_image-1">
            <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1732777197/productize/zmddmfcyfw7ieia4qpup.svg" alt="" class="t1_img-1" />
          </div>
        </div>

        <div class="t1_thanks">
          <h1>Thank you for signing up</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        </div>
        <a
          href="
			/"
        >
          <button class="t1_button">Button</button></a
        >
      </section>
    </section>

    <section class="t1_section-2">
      <div class="t1_footer">
        <div class="t1_footer-image">
          <h1>Logo</h1>
        </div>

        <div class="t1_footer-navitem">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>

        <p>Nav item</p>
      </div>
    </section>

    <script>
      const hamburger = document.querySelector('.t1_hamburger');
      const navLinks = document.querySelector('.t1_nav-links');
      const body = document.body;

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Prevent scrolling when menu is open
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.style.overflow = 'auto';
        }
      });

      // Close menu when clicking a link
      document.querySelectorAll('.t1_nav-links a, .t1_nav-item p').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.style.overflow = 'auto';
        });
      });
    </script>
  </body>
</html>
`,
      styles: '',
    },
  ],
};
export const template_2 = {
  pages: [
    {
      id: 'page-1',
      name: 'Home',
      content: template2,
      styles: ``,
    },
    {
      id: 'page-2',
      name: 'Feedback',
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
  </head>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
    }

    .t2_nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      padding-block: 26px;
      position: relative;
    }

    .t2_logo {
      display: flex;
      align-items: center;
    }

    .t2_nav-links {
      display: flex;
      align-items: center;
      gap: 32px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .t2_nav-item {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .t2_nav-item p {
      padding-block: 12px;
      padding-inline: 24px;
      font-family: 'Neurial Grotesk';
      color: #727272;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t2_button-container {
      margin-left: auto;
    }

    .t2_nav-item p:hover {
      color: #2f40d5;
    }

    .t2_hamburger {
      display: none;
      cursor: pointer;
      padding: 10px;
      z-index: 100;
    }

    .t2_hamburger div {
      width: 25px;
      height: 2px;
      background-color: #333;
      margin: 6px 0;
      transition: all 0.3s ease;
    }

    .t2_button-1 {
      background-color: #2f40d5;
      color: #f3f2fb;
      padding-block: 12px;
      padding-inline: 28px;
      border-radius: 4px;
      border: 1px;
      font-family: 'Inter';
      font-weight: 500px;
    }

    .t2_line {
      background-color: #0000001c;
      height: 1px;
    }

    .t2_section-1 {
      max-width: 1086px;
      margin: 0 auto;
      padding-top: 76.93px;
      padding-inline: 2rem;
      padding-bottom: 139.33px;
    }
    .t2_sub-section {
      margin-top: 76.93px;
      margin-bottom: 139.93px;
    }
    .t2_image-1 {
      display: flex;
      justify-content: center;
    }

    .t2_thanks {
      margin-top: 22px;
    }
    .t2_thanks h1 {
      text-align: center;
      font-weight: 600;
      font-size: 24px;
      font-family: 'Schibsted Grotesk';
      margin-inline: 2rem;
    }
    .t2_thanks p {
      text-align: center;
      margin-inline: 2rem;
      margin-block: 22px;
      line-height: 29.05px;
      font-size: 16px;
      color: #3e4144;
      font-family: 'inter';
    }
    .t2_button {
      display: block;
      margin: 0 auto;
      padding-inline: 104px;
      padding-block: 19px;
      background-color: #2f40d5;
      border-radius: 5px;
      border: 0;

      color: #ffffff;
    }
    .t2_section-2 {
      background-color: #f6f7fd;
    }
    .t2_footer {
      max-width: 1237px;
      margin: 0 auto;
      color: #000000;
      display: flex;
      align-items: center;
      padding: 63px 20px 83px;
      gap: 32px;
    }

    .t2_footer-navitem {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .t2_footer-navitem p {
      color: #727272;
      font-family: 'Neurial Grotesk';
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .t2_footer-navitem p:hover {
      color: #2f40d5;
    }

    @media (min-width: 768px) {
      .t2_section-1 {
        padding-top: 76.93px;
        padding-right: 189px;
        padding-left: 167px;
        padding-bottom: 139.33px;
      }
      .t2_thanks h1 {
        font-size: 30px;
      }
    }

    @media (min-width: 991.98px) {
      .t2_thanks p {
        text-align: center;
        font-size: 20px;
        margin-inline: 58.13px;
      }

      .t2_nav {
        flex-direction: row;
      }

      .t2_footer {
        flex-direction: row;
        justify-content: space-between;
      }
      .t2_thanks h1 {
        font-size: 38px;
        text-align: center;
        margin-inline: 105.95px;
      }
    }

    @media screen and (max-width: 991.98px) {
      .t2_hamburger {
        display: block;
      }

      .t2_nav-links {
        position: fixed;
        left: auto;
        right: -100%;
        top: 0;
        transform: none;
        height: 100vh;
        width: 300px;
        background-color: white;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 80px;
        transition: 0.3s ease;
        box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
        gap: 0;
      }

      .t2_nav-links.active {
        right: 0;
      }

      .t2_button-container {
        margin: 20px 30px;
      }

      .t2_nav-item {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
      }

      .t2_nav-item p {
        width: 100%;
        padding: 15px 30px;
        border-bottom: 1px solid #f0f0f0;
      }

      .t2_nav-links .t2_button-1 {
        margin: 20px 30px;
      }

      .t2_hamburger.active div:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }

      .t2_hamburger.active div:nth-child(2) {
        opacity: 0;
      }

      .t2_hamburger.active div:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }

    @media screen and (max-width: 991.98px) {
      .t2_footer {
        flex-direction: column;
        text-align: center;
        padding: 40px 20px;
      }

      .t2_footer-navitem {
        flex-direction: column;
        gap: 16px;
      }

      .t2_footer-image {
        margin-bottom: 24px;
      }
    }

    @media screen and (min-width: 992px) {
      .t2_footer {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  </style>
  <body>
    <nav class="t2_nav">
      <div class="t2_logo">
        <h1>Logo</h1>
      </div>

      <div class="t2_nav-links">
        <div class="t2_nav-item">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>
      </div>

      <div class="t2_button-container">
        <a href="">
          <button class="t2_button-1">Get Package</button>
        </a>
      </div>
      <div class="t2_hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>

    <div class="t2_line"></div>

    <section class="t2_section-1">
      <section class="t2_sub-section">
        <div class="t2_image-div">
          <div class="t2_image-1">
            <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1732777197/productize/zmddmfcyfw7ieia4qpup.svg" alt="" class="t2_img-1" />
          </div>
        </div>

        <div class="t2_thanks">
          <h1>Thank you for signing up</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        </div>
        <a
          href="
			/"
        >
          <button class="t2_button">Button</button></a
        >
      </section>
    </section>

    <section class="t2_section-2">
      <div class="t2_footer">
        <div class="t2_footer-image">
          <img src="./asset/image 77.png" alt="" class="t2_footer-img" />
        </div>

        <div class="t2_footer-navitem">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>

        <p>Nav item</p>
      </div>
    </section>

    <script>
      const hamburger = document.querySelector('.t2_hamburger');
      const navLinks = document.querySelector('.t2_nav-links');
      const body = document.body;

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Prevent scrolling when menu is open
        body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.style.overflow = 'auto';
        }
      });

      // Close menu when clicking a link
      document.querySelectorAll('.t2_nav-links a, .t2_nav-item p').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          body.style.overflow = 'auto';
        });
      });
    </script>
  </body>
</html>
`,
      styles: '',
    },
  ],
};
export const template_3 = {
  pages: [
    {
      id: 'page-1',
      name: 'Home',
      content: template3,
      styles: ``,
    },
    {
      id: 'page-2',
      name: 'Feedback',
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank You</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap');

      :root {
        --primary-color: #17b6ba;
        --text-color: #333;
        --bg-color: #f9f9f9;
        --white: #ffffff;
        --footer-bg: #333;
      }

      * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
      }

      body {
        background-color: var(--bg-color);
        color: var(--text-color);
        line-height: 1.6;
        overflow-x: hidden;
      }

      .t3_container {
        max-width: 1230px;
        margin: 0 auto;
        padding-inline: 1rem;
      }

      /* Navbar styles */
      .t3_nav {
        background: var(--white);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      .t3_nav-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-block: 1rem;
      }

      .t3_logo h1 {
        font-size: 1.5rem;
        color: var(--primary-color);
      }

      .t3_nav-menu {
        position: fixed;
        top: 60px;
        left: -100%;
        background: var(--white);
        width: 100%;
        height: calc(100vh - 60px);
        padding: 2rem;
        transition: 0.3s ease-in-out;
      }

      .t3_nav-menu.t3_active {
        left: 0;
      }

      .t3_nav-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .t3_nav-item {
        cursor: pointer;
      }

      .t3_nav-link {
        color: var(--text-color);
        font-weight: 500;
      }

      .t3_nav-link:hover {
        color: var(--primary-color);
      }

      .t3_hamburger {
        display: block;
        cursor: pointer;
        padding: 0.5rem;
      }

      .t3_bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        transition: all 0.3s ease-in-out;
        background-color: var(--text-color);
      }

      .t3_button {
        background-color: var(--primary-color);
        color: var(--white);
        padding: 12px 28px;
        border-radius: 4px;
        border: none;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .t3_button:hover {
        background-color: #149598;
      }

      /* Footer styles */
      .t3_footer {
        background: var(--footer-bg);
        color: var(--white);
        padding-block: 2rem;
        margin-top: 4rem;
      }

      .t3_footer-wrapper {
        display: grid;
        gap: 2rem;
      }

      .t3_footer-nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .t3_footer-link {
        color: var(--white);
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }

      .t3_footer-link:hover {
        opacity: 1;
      }

      .t3_social-links {
        display: flex;
        gap: 1rem;
      }

      .t3_heading {
        font-size: 30px;
      }

      /* Responsive styles */
      @media (min-width: 768px) {
        .t3_heading {
          font-size: 70px;
        }

        .t3_heading-desc {
          font-size: 24px;
        }

        .t3_hamburger {
          display: none;
        }

        .t3_nav-menu {
          position: static;
          width: auto;
          height: auto;
          padding: 0;
          background: none;
        }

        .t3_nav-list {
          flex-direction: row;
          gap: 2rem;
        }

        .t3_footer-wrapper {
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
        }

        .t3_footer-nav {
          flex-direction: row;
          justify-content: center;
        }
      }

      /* Animation classes for hamburger */
      .t3_hamburger.t3_active .t3_bar:nth-child(2) {
        opacity: 0;
      }

      .t3_hamburger.t3_active .t3_bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }

      .t3_hamburger.t3_active .t3_bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    </style>
  </head>
  <body>
    <!-- Navbar -->
    <nav class="t3_nav">
      <div class="t3_container t3_nav-container">
        <div class="t3_logo">
          <h1>Logo</h1>
        </div>

        <div class="t3_nav-menu">
          <ul class="t3_nav-list">
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Home</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">About</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Services</a>
            </li>
            <li class="t3_nav-item">
              <a href="#" class="t3_nav-link">Contact</a>
            </li>
          </ul>
        </div>

        <a href="#">
          <button class="t3_button">Get Started</button>
        </a>

        <div class="t3_hamburger">
          <span class="t3_bar"></span>
          <span class="t3_bar"></span>
          <span class="t3_bar"></span>
        </div>
      </div>
    </nav>

    <!-- Main Content Section -->
    <main class="t3_container" style="margin-top: 10rem; text-align: center">
      <h1 class="t3_heading">Your Headline Goes Right Here</h1>
      <p class="t3_heading-desc">
        Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
      </p>
      <div style="margin-block: 4rem">
        <img
          style="width: 100%; height: auto; max-width: 100%; display: block"
          src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733566356/grape.js/vjeys6u1ybqilbsusbiq.png"
          alt="img"
        />
      </div>
      <p class="t3_heading-desc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, pariatur asperiores labore dolores nam, inventore rem sed non itaque aperiam saepe
        reprehenderit ea accusamus quaerat beatae eligendi exercitationem minima eum.
      </p>
    </main>

    <!-- Footer -->
    <footer class="t3_footer">
      <div class="t3_container t3_footer-wrapper">
        <div class="t3_footer-logo">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480713/grape.js/jh9cqqkwpesa6aixtjgp.png" alt="Logo" />
        </div>

        <div class="t3_footer-nav">
          <a href="#" class="t3_footer-link">About</a>
          <a href="#" class="t3_footer-link">Services</a>
          <a href="#" class="t3_footer-link">Contact</a>
        </div>

        <div class="t3_social-links">
          <a href="#" class="t3_footer-link">Twitter</a>
          <a href="#" class="t3_footer-link">LinkedIn</a>
          <a href="#" class="t3_footer-link">Instagram</a>
        </div>
      </div>
    </footer>

    <!-- Scripts -->
    <script>
      // Navbar toggle
      const hamburger = document.querySelector('.t3_hamburger');
      const navMenu = document.querySelector('.t3_nav-menu');
      const body = document.querySelector('body');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('t3_active');
        navMenu.classList.toggle('t3_active');
        body.style.overflow = navMenu.classList.contains('t3_active') ? 'hidden' : 'auto';
      });

      document.querySelectorAll('.t3_nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('t3_active');
          navMenu.classList.remove('t3_active');
          body.style.overflow = 'auto';
        });
      });
    </script>
  </body>
</html>
`,
      styles: '',
    },
  ],
};
