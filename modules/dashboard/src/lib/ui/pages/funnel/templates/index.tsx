export const template1 = `<!DOCTYPE html>
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

    .container {
      max-width: 1237px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .header {
      height: 510px;
      background-color: #332b67;
    }
    .header-nav {
      height: 48px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 3rem;
      padding-bottom: 16px;
      margin-bottom: 150px;
      width: 100%;
    }
    .header-nav-items {
      display: flex;
      width: 366px;
      height: 48px;
      gap: 12px;
      color: white;
    }
    .header-nav h1 {
      color: white;
    }
    .header-nav-items p {
      width: 114px;
      border: 1px solid transparent;
      border-radius: 4px;
      padding-top: 12px;
      padding-right: 24px;
      padding-bottom: 12px;
      padding-left: 24px;
      gap: 8px;
    }
    .header-buttons {
      gap: 8px;
    }
    .header-button1 {
      width: 123px;
      height: 48px;
      padding: 12px, 36, 12px, 36px;
      background-color: #332b67;
      color: white;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .header-button2 {
      width: 123px;
      height: 48px;
      padding: 12px, 36, 12px, 36px;
      background-color: #f6c21c;
      color: black;
      border: 1px solid transparent;
      border-radius: 4px;
    }
    .hero-section {
      text-align: center;
      gap: 2px;
    }
    .hero-section h1 {
      font-weight: 600;
      font-size: 56px;
      color: #ffffff;
      line-height: 78.34px;
      align-items: center;
    }
    .hero-section p {
      max-width: 928.32px;
      margin: 0 auto;
      font-weight: 400px;
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
      height: 198px;
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

    .modal {
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

    .modal h1 {
      font-size: 24px;
    }

    .modal h1,
    .modal p {
      margin-block: 1rem;
    }

    .modal-content {
      background-color: #fdfbf6;
      margin: 15% auto;
      padding: 50px;
      border-radius: 8px;
      max-width: 700px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .close-button {
      margin-top: 20px;
      background-color: #332b67;
      color: white;
      border: none;
      padding: 15px 60px;
      border-radius: 4px;
      cursor: pointer;
    }

    .close-button:hover {
      background-color: #f6c21c;
      color: black;
    }

    @media (max-width: 1199.98px) {
      /* .modal h1 {
        font-size: 24px;
      } */

      .features-section {
        flex-direction: column;
      }
      .footer-container {
        flex-direction: column;
      }
    }
    @media (max-width: 767.98px) {
      .header-nav {
        flex-direction: column;
        gap: 20px;
      }
    }
    @media (max-width: 575.98px) {
      .headline-text h1 {
        font-size: 48px;
      }
    }
  </style>
  <body>
    <header class="header">
      <nav class="container">
        <div class="header-nav">
          <div>
            <h1>LOGO</h1>
          </div>
          <div class="header-nav-items">
            <p>Navitem</p>
            <p>Navitem</p>
            <p>Navitem</p>
          </div>

          <div class="header-buttons">
            <button class="header-button1">Button</button>
            <button class="header-button2">Button</button>
          </div>
        </div>
      </nav>

      <section class="container">
        <div class="hero-section">
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

    <section class="container features-section">
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
      <section class="container">
        <div class="footer-container">
          <div>
            <h1>LOGO</h1>
          </div>
          <div class="footer-nav">
            <div>
              <a href="#">Terms and Conditions</a>
            </div>

            <div>
              <a href="#">Privacy Policy</a>
            </div>

            <div>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </section>
    </footer>

    <!-- Modal -->
    <div id="thankyou-modal" class="modal">
      <div class="modal-content">
        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1732777197/productize/zmddmfcyfw7ieia4qpup.svg" alt="check" />
        <h1>Thank You for Signing Up</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        <button class="close-button" onclick="closeModal()">Close</button>
      </div>
    </div>
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
          showModal();
          console.log('submit successfully');
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
    // Function to show the modal
    function showModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'block'; // Show the modal
    }

    // Function to close the modal
    function closeModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'none'; // Hide the modal
    }

    // Close the modal if the user clicks outside the modal content
    window.onclick = function (event) {
      const modal = document.getElementById('thankyou-modal');
      if (event.target === modal) {
        closeModal();
      }
    };
  </script>
</html>
`;

export const template2 = `<!DOCTYPE html>
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

    .header {
      background-color: #fbe69a;
      padding-bottom: 67px;
    }

    .nav {
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      padding-block: 26px;
    }

    .navitem {
      display: flex;
      align-items: center;
      gap: 12px;
      padding-block: 12px;
      padding-inline: 24px;
    }

    .button {
      background-color: #2f40d5;
      padding-block: 12px;
      padding-inline: 36px;
      border-radius: 4px;
    }
    .text {
      color: #f3f2fb;
      font-weight: 500;
    }

    .line {
      background-color: lightgray;
      height: 1px;
    }
    .hero {
      max-width: 1084px;
      margin: 0 auto;
    }
    .hero h1 {
      font-weight: 600;
      font-size: 20px;
      color: #262528;
      text-align: center;
      padding-inline: 41.84px;
      margin-top: 70px;
    }
    .hero p {
      font-size: 16px;
      text-align: center;
      margin-inline: 14.13px;
      margin-top: 22px;
    }

    .button2 {
      width: fit-content;
      margin: 0 auto;
      background-color: #2f40d5;
      text-align: center;
      padding-block: 19px;
      padding-inline: 77px;
      border-radius: 5px;
      margin-top: 22px;
    }

    .text2 {
      color: #ffffff;
      font-weight: 700;
      font-size: 18px;
    }

    .section1 {
      max-width: 1066px;
      margin: 0 auto;
      padding-bottom: 63px;
      padding-inline: 32px;
    }

    .section1 h1 {
      color: #292d32;
      font-weight: 600;
      font-size: 35px;
      text-align: center;
      margin-top: 57px;
    }

    .image {
      margin-top: 61px;
    }

    img {
      width: 100%;
    }

    .blue {
      background-color: #2f40d5;
      padding-block: 65px;
      padding-inline: 16px;
    }

    .headline h1 {
      font-weight: 600px;
      font-size: 30px;
      color: #ffffff;
    }

    .headline p {
      font-size: 16px;
      color: #ffffff;
    }

    .fill {
      padding-top: 31px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding-right: 20.02px;
    }
    .pic {
      width: fit-content;
    }
    .pic img {
      width: fit-content;
    }

    .p-text p {
      font-size: 11px;
      color: #ffffff;
    }

    .form {
      background-color: #ffffff;
      margin-block: 53px;
      border-radius: 7px;
    }

    .formfill {
      padding: 30px;
    }
    .name {
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
    .package {
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

    .section3 {
      max-width: 968px;
      margin: 0 auto;
    }

    .section3 h1 {
      margin-top: 73px;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
    }

    .section3 p {
      font-size: 16px;
      text-align: center;
      margin-top: 21px;
      margin-bottom: 53px;
      padding-inline: 30px;
    }

    .section4 {
      max-width: 1239.91px;
      margin: 0 auto;
      padding-inline: 30px;
      padding-bottom: 73px;
      display: flex;
      flex-wrap: wrap;
      /* flex-flow: row; */
      gap: 38px;
    }
    .subsec1 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .subsec1 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .subsec1 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }
    .subsec2 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .subsec2 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .subsec2 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }
    .subsec3 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .subsec3 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .subsec3 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }

    .subsec4 {
      background-color: #f3f4ff;
      padding: 22.22px;
      border-radius: 7.41px;
    }
    .subsec4 h1 {
      font-size: 22.22px;
      font-weight: 700;
    }

    .subsec4 p {
      font-size: 10.81px;
      line-height: 22.2px;
      margin-top: 22.22px;
    }

    .section5 {
      background-color: #fbe69a;
      padding-block: 50px;
      padding-inline: 30px;
    }

    .mainsec5 {
      max-width: 1236px;
      margin: 0 auto;
    }
    .submain {
      text-align: center;
      /* margin-inline: 136.4px; */
    }
    .submain h1 {
      font-size: 50px;
      font-weight: 600;
    }

    .submain p {
      font-size: 16px;
      margin-top: 21px;
      line-height: 29.05px;
    }

    .flexsec {
      margin-block: 61px;
    }

    .min-flex1 {
      background-color: #ffffff;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
      /* height: 561px; */
    }
    .min-flex {
      background-color: #ffffff;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
      /* height: 561px; */
    }

    .button- {
      background-color: #ffd828;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
    }
    .butt- {
      color: #1e1e1e;
      font-size: 11.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .lorem {
      font-size: 11.78px;
      color: #292d32;
      margin-top: 16.68px;
      line-height: 20.61px;
    }

    .naira {
      padding-top: 11.78px;
      font-weight: 600;
      color: #292d32;
      font-size: 30.07px;
    }

    .general {
      display: flex;
      align-items: center;
      margin-top: 21.59px;
    }

    .image1 {
      width: fit-content;
    }

    .image1 img {
      width: fit-content;
    }
    .image1 P {
      font-size: 13.74px;
      font-weight: 500;
    }

    .line2 {
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
    .pack {
      width: 100%;
      margin-top: 25.51px;
      color: #2f40d5;
      border: 1.18px solid #2f40d5;
      padding-block: 16.68px;
      padding-inline: 59.31px;
      /* background-color: #f3f4ff; */
    }

    .min-flex2 {
      background-color: #2f40d5;
      margin-top: 61px;
      padding-inline: 16.68px;
      padding-block: 33.37px;
      border-radius: 11px;
      flex: 1;
    }

    .button3 {
      background-color: #ffffff;
      border-radius: 20.61px;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
    }
    .butt3 {
      color: #767676;
      font-size: 17.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .lorem2 {
      font-size: 11.78px;
      color: #ffffff;
      margin-top: 16.68px;
      line-height: 20.61px;
    }

    .naira2 {
      padding-top: 11.78px;
      font-weight: 600;
      color: #ffffff;
      font-size: 30.07px;
    }
    .image1 img {
      width: fit-content;
      color: #ffffff;
    }

    .pack2 {
      width: 100%;
      background-color: #2f40d5;
      border: 1.18px solid #ffffff;
      margin-top: 25.51px;
      padding-block: 16.68px;
      padding-inline: 59.31px;
      color: #ffffff;
    }

    .ptag {
      color: #ffffff;
    }

    .general2 {
      display: flex;
      align-items: center;
      margin-top: 21.59px;
    }

    .line3 {
      width: 100%;
      margin-top: 62px;
      border: 0.98px solid #ffffff3d;
    }

    .button4 {
      background-color: #000000;
      width: fit-content;
      border-radius: 20.61px;
      height: 30px;
      padding-inline: 1rem;
      border: none;
      color: #ffffff;
    }
    .butt4 {
      font-size: 11.66px;
      padding-block: 7.85px;
      padding-inline: 20.61px;
    }

    .t2_footer {
      background-color: #fdfbf6;
    }
    .footer-nav {
      max-width: 1239px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 36.07px;
      padding-left: 100px;
      padding-right: 101px;
      padding-bottom: 35.93px;
      flex-direction: column;
    }

    .nav-image {
      width: fit-content;
    }
    .nav-image img {
      width: fit-content;
    }

    .footer-navitem {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .footer-navitem p {
      padding-inline: 12px;
      padding-block: 24px;
    }

    .modal {
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

    .modal h1 {
      font-size: 24px;
    }

    .modal p {
      font-size: 16px;
    }

    .modal h1,
    .modal p {
      margin-block: 1rem;
    }

    .modal-content {
      background-color: #fdfbf6;
      margin: 15% auto;
      padding: 50px;
      border-radius: 8px;
      max-width: 700px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .modal-content img {
      width: 220px;
    }

    .close-button {
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

    .close-button:hover {
      background-color: #f6c21c;
      color: black;
    }

    @media (min-width: 320px) {
    }

    @media (min-width: 375px) {
      .hero h1 {
        padding-inline: 42.84px;
      }
      .p-text p {
        font-size: 15px;
        color: #ffffff;
      }
      .package {
        background-color: #2f40d5;
        color: #ffffff;
        padding-inline: 83px;
      }
    }
    @media (min-width: 425px) {
      .hero h1 {
        font-size: 25px;
      }
    }
    @media (min-width: 576px) {
      .nav {
        flex-direction: row;
      }
      .hero h1 {
        font-size: 45px;

        padding-inline: 80.84px;
      }
      .section1 h1 {
        color: #292d32;
        font-weight: 600;
        font-size: 50px;
        text-align: center;
        margin-top: 57px;
      }

      .section3 {
        max-width: 968px;
        margin: 0 auto;
      }

      .section3 h1 {
        margin-top: 73px;
        text-align: center;
        font-size: 50px;
        font-weight: 600;
      }

      .section3 p {
        font-size: 24px;
        text-align: center;
        margin-top: 21px;
        margin-bottom: 53px;
      }
      .footer-nav {
        flex-direction: row;
      }
    }

    @media (min-width: 768px) {
      .hero h1 {
        font-size: 68px;
      }
      .hero p {
        font-size: 24px;
        text-align: center;
        margin-inline: 58.13px;
        margin-top: 22px;
      }

      .button2 {
        width: fit-content;
        margin: 0 auto;
        background-color: #2f40d5;
        text-align: center;
        padding-block: 19px;
        padding-inline: 77px;
        border-radius: 5px;
        margin-top: 22px;
      }

      .text2 {
        color: #ffffff;
        font-weight: 700;
        font-size: 18px;
      }
      .section4 {
        max-width: 1239.91px;
        margin: 0 auto;
        padding-inline: 40px;
        display: flex;
        align-items: center;
        padding-bottom: 73px;
        gap: 38px;
      }
      .subsec1 {
        background-color: #f3f4ff;
        padding: 22.22px;
        flex: 1;
      }
      .subse1 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec1 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .subsec2 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec2 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec2 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .subsec3 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec3 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec3 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .subsec4 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec4 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec4 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .submain {
        margin-inline: 70px;
      }
      .submain p {
        font-size: 16px;
        margin-top: 21px;
      }

      .blue {
        background-color: #2f40d5;
      }

      .headline h1 {
        font-weight: 600;
        font-size: 56px;
        color: #ffffff;
      }

      .headline p {
        font-size: 20px;
        color: #ffffff;
      }

      .fill {
        padding-top: 31px;
        display: flex;
        align-items: center;
        gap: 20px;
      }
      .pic {
        width: fit-content;
      }
      .pic img {
        width: fit-content;
      }

      .p-text p {
        font-size: 20px;
        color: #ffffff;
      }

      .flexsec {
        display: flex;
        align-items: center;
        gap: 27px;
      }
    }
    @media (min-width: 992px) {
      .hero h1 {
        padding-inline: 105.84px;
      }
      .section4 {
        max-width: 1239.91px;
        margin: 0 auto;
        padding-inline: 102px;
        display: flex;
        align-items: center;
        padding-bottom: 73px;
        gap: 38px;
      }
      .subsec1 {
        background-color: #f3f4ff;
        padding: 22.22px;
        flex: 1;
      }
      .subse1 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec1 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .subsec2 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec2 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec2 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .subsec3 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec3 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec3 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }

      .subsec4 {
        background-color: #f3f4ff;
        padding: 22.22px;
        border-radius: 7.41px;
        flex: 1;
      }
      .subsec4 h1 {
        font-size: 22.22px;
        font-weight: 700;
      }

      .subsec4 p {
        font-size: 9.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .submain p {
        font-size: 24px;
      }

      .submain {
        margin-inline: 102px;
      }

      .flexsec {
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 27px;
      }

      .modal h1 {
        font-size: 40px;
      }

      .modal-content {
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
      .head {
        display: flex;
        align-items: center;
        gap: 10rem;
        max-width: 1240px;
        margin: 0 auto;
      }
      .blue {
        padding-block: 163px;
      }
      .head-sub {
        width: 100%;
        /* margin-right: 105px; */
        /* margin-left: 107px; */
      }
      .form {
        width: 100%;
        /* margin-right: 107px; */
      }
    }
    @media (min-width: 1049px) {
      .subsec1 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .subsec2 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .subsec3 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
      .subsec4 p {
        font-size: 10.81px;
        line-height: 22.2px;
        margin-top: 22.22px;
      }
    }
  </style>
  <body>
    <header class="header">
      <nav class="nav">
        <div>
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750172/productize/dk3ikhtl6rmfahp3i0yy.png" alt="" />
        </div>

        <div class="navitem">
          <p>Navitem</p>
          <p>Navitem</p>
          <p>Navitem</p>
        </div>

        <div class="button">
          <a href="https://www.tiktok.com" class="text">Get Package</a>
        </div>
      </nav>
      <div class="line"></div>
      <section class="hero">
        <h1>Your Hero Headline Goes Right Here</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>

        <div class="button2">
          <a href="https://www.tiktok.com" class="text2">Get Package</a>
        </div>
      </section>
    </header>
    <section class="section1">
      <h1>The Product</h1>

      <div class="image">
        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750250/productize/knsnegea71wsuvkp47k4.png" alt="" />
      </div>
    </section>

    <section class="blue">
      <div class="head">
        <div class="head-sub">
          <div class="headline">
            <h1>Your Headline</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis.</p>
          </div>

          <div class="fill">
            <div class="pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div class="fill">
            <div class="pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="fill">
            <div class="pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>

          <div class="fill">
            <div class="pic">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750389/productize/mgxkjgpq00pl062gld9w.png" alt="" />
            </div>
            <div class="p-text">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        <form id="form" method="POST" class="form">
          <div class="formfill">
            <div class="name">
              <label for="fName">Full Name</label>
              <input type=" text" id="name" name="Full Name" placeholder="Enter Name" />
            </div>
            <div class="name">
              <label for="fName">Email</label>
              <input type=" text" id="email" name="Email" placeholder="Enter Email" />
            </div>
            <div class="name">
              <label for="fName">Phone Number</label>
              <input type=" text" id="phone number" name="Phone" placeholder="Enter phone number" />
            </div>
            <!-- <div class="name">
                            <label for="fName"> Package</label>
                            <input type=" text" id="Package" name="Package" placeholder="Select Package" />
                        </div> -->

            <button type="submit" id="submit-button" class="form-button package">Get package</button>
          </div>
        </form>
      </div>
    </section>

    <section class="section3">
      <h1>Feature</h1>
      <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
    </section>

    <section class="section4">
      <div class="subsec1">
        <h1>Feature1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="subsec2">
        <h1>Feature2</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="subsec3">
        <h1>Feature3</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>

      <div class="subsec4">
        <h1>Feature</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      </div>
    </section>

    <section class="section5">
      <div class="mainsec5">
        <div class="submain">
          <h1>Pricing</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        </div>
      </div>

      <section class="flexsec">
        <article class="min-flex1 p-card">
          <button class="button-">Package 1</button>

          <p class="lorem">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="naira">#100,00</p>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="line2"></div>

          <button class="pack">Get Package</button>
        </article>

        <article class="min-flex2 p-card">
          <button class="button3">Package 2</button>

          <p class="lorem2">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="naira2">#250,000</p>

          <div class="general2">
            <div class="image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general2">
            <div class="image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="ptag">Lrem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general2">
            <div class="image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general2">
            <div class="image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general2">
            <div class="image3">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p class="ptag">Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="line3"></div>

          <button class="pack2">Get Package</button>
        </article>

        <article class="min-flex p-card">
          <button class="button4">Package 3</button>

          <p class="lorem">
            lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
          </p>
          <p class="naira">#500,00</p>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="general">
            <div class="image1">
              <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750707/productize/obbscovmi9ambw6zumhx.png" alt="" />
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div class="line2"></div>

          <button class="pack">Get Package</button>
        </article>
      </section>
    </section>

    <section class="t2_footer">
      <div class="footer-nav">
        <div class="nav-image">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1731750172/productize/dk3ikhtl6rmfahp3i0yy.png" alt="" />
        </div>

        <div class="footer-navitem">
          <p>Nav item</p>
          <p>Nav item</p>
          <p>Nav item</p>
        </div>

        <div>
          <p>Nav item</p>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div id="thankyou-modal" class="modal">
      <div class="modal-content">
        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1732777197/productize/zmddmfcyfw7ieia4qpup.svg" alt="check" />
        <h1>Thank You for Signing Up</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        <button class="close-button" onclick="closeModal()">Close</button>
      </div>
    </div>
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
          showModal();
          console.log("submit successfully");
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
    // Function to show the modal
    function showModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'block'; // Show the modal
    }

    // Function to close the modal
    function closeModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'none'; // Hide the modal
    }

    // Close the modal if the user clicks outside the modal content
    window.onclick = function (event) {
      const modal = document.getElementById('thankyou-modal');
      if (event.target === modal) {
        closeModal();
      }
    };
  </script>
</html>
`;
export const template3 = `<!DOCTYPE html>
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

    .container {
      max-width: 1230px;
      margin: 0 auto;
      padding-inline: 1rem;
    }

    .text-wrapper {
      max-width: 700px;
      margin: 0 auto;
    }

    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      padding-block: 2rem;
      gap: 1rem;
    }

    .nav h1 {
      font-size: 1.5rem;
    }

    .nav-item {
      display: flex;
      gap: 0.5rem;
    }

    .nav-item p {
      margin: 0;
      cursor: pointer;
      padding: 0.5rem 0;
    }

    .nav-item p:hover {
      text-decoration: underline;
    }

    .button {
      background-color: #17b6ba;
      color: #f3f2fb;
      padding-block: 12px;
      padding-inline: 28px;
      border-radius: 4px;
      border: 1px;
      font-family: 'Inter';
      font-weight: 500;
    }

    .section-1,
    .section-4,
    .footer {
      background: #1d1c20;
      color: #fff;
      padding: 2rem 1rem;
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

    .modal {
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

    .modal h1 {
      font-size: 24px;
    }

    .modal p {
      font-size: 16px;
    }

    .modal h1,
    .modal p {
      margin-block: 1rem;
    }

    .modal-content {
      background-color: #fdfbf6;
      margin: 25% auto;
      padding: 50px;
      border-radius: 8px;
      max-width: 700px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    .modal-content img {
      width: 220px;
    }

    .close-button {
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

    .close-button:hover {
      background-color: #f6c21c;
      color: black;
    }

    @media (min-width: 425px) {
    }

    @media (min-width: 768px) {
      .nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        /* height: 98px; */
      }

      .nav-item {
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

      .modal h1 {
        font-size: 40px;
      }

      .modal-content {
        background-color: #fdfbf6;
        margin: 15% auto;
        padding: 50px;
        border-radius: 8px;
        max-width: 700px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
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
  </style>
  <body>
    <nav class="container nav">
      <div>
        <h1>Logo</h1>
      </div>

      <div class="nav-item">
        <p>Nav item</p>
        <p>Nav item</p>
        <p>Nav item</p>
      </div>

      <div>
        <a href="/feedback">
          <button class="button">CTA Button</button>
        </a>
      </div>
    </nav>

    <section class="section-1">
      <section class="container section-1-wrapper">
        <div class="hero-headline">
          <h1>Your Hero Headline Goes Right Here</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>

          <div>
            <a href="">
              <button class="button hero-btn">CTA Button</button>
            </a>
          </div>
        </div>

        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480714/grape.js/kzeqkjlxq9fgqtfqurs1.png" alt="" class="img-1" />
      </section>
    </section>

    <section class="section-2 container">
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

    <section class="section-3 container">
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
      <div class="sub-section-4 container">
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

    <section class="section-5 container">
      <div class="your-long-headline text-wrapper">
        <h1>Your Long Headline Goes Right Here</h1>
        <p>
          Hipster ipsum tattooed brunch I'm baby. Scenester post-ironic LaCroix single-origin migas charcoal. Denim mukbang microdosing hexagon them edison.
          Bushwick ramps chicken gastropub hell echo. Plant heard chambray poke cloud before crucifix.
        </p>
        <div>
          <a href="">
            <button class="button hero-btn">CTA Button</button>
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
      <section class="container section-6-wrapper">
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
            <button type="submit" id="submit-button" class="form-button button">Submit</button>
          </form>
        </div>
      </section>
    </section>

    <section class="t3_footer">
      <section class="container footer-wrapper">
        <div class="footer-image">
          <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733480713/grape.js/jh9cqqkwpesa6aixtjgp.png" alt="" class="footer-img" />
        </div>

        <div class="footer-navitem">
          <span>Nav item</span>
          <span>Nav item</span>
          <span>Nav item</span>
        </div>
        <p class="socials">Socials</p>
      </section>
    </section>

    <!-- Modal -->
    <div id="thankyou-modal" class="modal">
      <div class="modal-content">
        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1733566356/grape.js/vjeys6u1ybqilbsusbiq.png" alt="check" />
        <h1>Thank You for Signing Up</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.</p>
        <button class="close-button" onclick="closeModal()">Close</button>
      </div>
    </div>
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
          showModal();
          console.log('submit successfully');
          window.location.href = '/feedback';
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
    // Function to show the modal
    function showModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'block'; // Show the modal
    }

    // Function to close the modal
    function closeModal() {
      const modal = document.getElementById('thankyou-modal');
      modal.style.display = 'none'; // Hide the modal
    }

    // Close the modal if the user clicks outside the modal content
    window.onclick = function (event) {
      const modal = document.getElementById('thankyou-modal');
      if (event.target === modal) {
        closeModal();
      }
    };
  </script>
</html>
`;
