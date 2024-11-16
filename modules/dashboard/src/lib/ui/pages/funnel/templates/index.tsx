export const template1 = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <style>
            * {
                margin: 0;
                padding: 0;
            }

            .container {
                max-width: 1237px;
                margin: 0 auto;
                padding: 0 2rem;
            }

            header {
                height: 510px;
                background-color: #332b67;
            }
            .Nav {
                height: 48px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 32px;
                padding-bottom: 16px;
                margin-bottom: 150px;
            }
            .nav-items {
                display: flex;
                width: 366px;
                height: 48px;
                gap: 12px;
                color: white;
            }
            .Nav h1 {
                color: white;
            }
            .nav-items p {
                width: 114px;
                border: 1px solid transparent;
                border-radius: 4px;
                padding-top: 12px;
                padding-right: 24px;
                padding-bottom: 12px;
                padding-left: 24px;
                gap: 8px;
            }
            .button {
                gap: 8px;
            }
            .button1 {
                width: 123px;
                height: 48px;
                padding: 12px, 36, 12px, 36px;
                background-color: #332b67;
                color: white;
                border: 1px solid transparent;
                border-radius: 4px;
            }
            .button2 {
                width: 123px;
                height: 48px;
                padding: 12px, 36, 12px, 36px;
                background-color: #f6c21c;
                color: black;
                border: 1px solid transparent;
                border-radius: 4px;
            }
            .hero {
                text-align: center;
                gap: 2px;
            }
            .hero h1 {
                font-weight: 600;
                font-size: 56px;
                color: #ffffff;
                line-height: 78.34px;
                align-items: center;
            }
            .hero p {
                max-width: 928.32px;
                margin: 0 auto;
                font-weight: 400px;
                font-size: 20px;
                line-height: 25px;
                gap: 6px;
                align-items: center;
                color: white;
            }
            .banner-wrapper {
                padding: 0 2rem;
                max-width: 902px;
                margin: 21px auto;
            }
            .banner {
                width: 100%;
                height: 100%;
            }

            .wrapper {
                flex: 1;
                margin-top: 55.15px;
            }
            .headline h1 {
                font-weight: 600px;
                font-size: 56px;
                line-height: 78.34px;
            }
            .headline p {
                font-weight: 400px;
                font-size: 20px;
                line-height: 30px;
                color: #747474;
            }
            .section-2 {
                margin-top: 99px;
                display: flex;
                align-items: center;
                gap: 150px;
            }
            .min-section {
                margin-top: 31px;
            }
            .checkbox {
                display: flex;
                align-items: center;
                gap: 20px;
                font-weight: 400px;
                font-size: 20px;
                line-height: 25.36px;
                color: #747474;
                margin-bottom: 14px;
            }
            .sub-section {
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
            .package {
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
            footer {
                background-color: #f6f6f6;
                height: 198px;
                margin-top: 132px;
            }
            .footerner {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-top: 66px;
                padding-bottom: 84px;
            }
            .footerNav {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 48px;
                gap: 12px;
            }
            .footerNav a {
                border-radius: 4px;

                font-weight: 600px;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                text-decoration: none;
            }
            .footerNav div a {
                font-weight: 600px;
                font-size: 16px;
                line-height: 24px;
                color: #000000;
                text-decoration: none;
            }

            /* // X-Large devices (large desktops, less than 1400px) */
            @media (max-width: 1399.98px) {
            }
            /* // Large devices (desktops, less than 1200px) */
            @media (max-width: 1199.98px) {
                .section-2 {
                    flex-direction: column;
                }
                .footerner {
                    flex-direction: column;
                }
            }
            /* // Medium devices (tablets, less than 992px) */
            @media (max-width: 991.98px) {
            }
            /* // Small devices (landscape phones, less than 768px) */
            @media (max-width: 767.98px) {
                .Nav {
                    flex-direction: column;
                    gap: 20px;
                }
            }
            /* // X-Small devices (portrait phones, less than 576px) */
            @media (max-width: 575.98px) {
                .headline h1 {
                    font-size: 48px;
                }
            }
        </style>
    </head>
    <body>
        <header>
            <nav class="container">
                <div class="Nav">
                    <div>
                        <h1>LOGO</h1>
                    </div>
                    <div class="nav-items">
                        <p>Navitem</p>
                        <p>Navitem</p>
                        <p>Navitem</p>
                    </div>

                    <div class="button">
                        <button class="button1">Button</button>
                        <button class="button2">Button</button>
                    </div>
                </div>
            </nav>

            <section class="container">
                <div class="hero">
                    <h1>Hero Section</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quaerat ratione soluta placeat reiciendis, dignissimos, voluptatum
                        cupiditate facere doloribus delectus debitis natus suscipit nemo, vel numquam id rerum!
                    </p>
                </div>
            </section>
        </header>

        <section class="banner-wrapper">
            <img class="banner" src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933331/grape.js/su3byl2ir9hqg07iqsol.png" alt="banner" />
        </section>

        <section class="container section-2">
            <div class="wrapper">
                <div class="headline">
                    <h1>Your Headline</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Posuer]e in etiam turpis arcu et neque quis.</p>
                </div>

                <section class="min-section">
                    <div class="checkbox">
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>

                    <div class="checkbox">
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
                        <p>Potter ipsum wand elf parchment wingardium</p>
                    </div>

                    <div class="checkbox">
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
                        <p>Potter ipsum wand elf parchment wingardium</p>
                    </div>

                    <div class="checkbox">
                        <img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/nbolzi790mahig6jjvrd.png" alt="" />
                        <p>Potter ipsum wand elf parchment wingardium.</p>
                    </div>
                </section>
            </div>

            <section class="sub-section">
                <form class="section3">
                    <div class="form">
                        <label for="fName">Full Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Name" />
                    </div>
                    <div class="form">
                        <label for="fName">Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Email" />
                    </div>

                    <div class="form">
                        <label for="fName">Email</label>
                        <input type="text" id="Email" name="Email" placeholder="janedoe@gmail.com" />
                    </div>

                    <button class="package">Get Package</button>
                </form>
            </section>
        </section>

        <footer>
            <div class="container footerner">
                <a href="/public"><img src="https://res.cloudinary.com/kingsleysolomon/image/upload/v1729933350/grape.js/qfwhpt8s0wcxavkeu9ss.png" alt="logo" /></a>
                <div class="footerNav">
                    <a href="/public">Navitem</a>
                    <a href="/public">Navitem</a>
                    <a href="/public">Navitem</a>
                </div>

                <div>
                    <a href="/public">Navitem</a>
                </div>
            </div>
        </footer>
    </body>
</html>
`;
