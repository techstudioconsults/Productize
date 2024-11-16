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

export const template2 = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- <link rel="stylesheet" href="./style.css" /> -->
        <title>Document</title>
    </head>
    <style>
        @import url("https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Karla:ital,wght@0,200..800;1,200..800&family=Kumbh+Sans:wght@100..900&family=League+Spartan:wght@100..900&family=Lexend+Deca:wght@100..900&display=swap");

        * {
            margin: 0;
            padding: 0;
            text-decoration: none;
            box-sizing: border-box;
            font-family: "Inter", sans-serif;
        }

        header {
            background-color: #fbe69a;
            padding-bottom: 67px;
        }

        nav {
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
            background-color: red;
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
            box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5);

            /* box-shadow: 0px 4px 6px rgba(255, 255, 255, 0.5); */

            /* box-shadow: 8px 8px 20px 3px #0000000A;

 box-shadow: -8px -8px 20px 3px #0000000A; */
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
            max-width: 1240px;
            margin: 0 auto;
        }

        .min-flex1 {
            background-color: #ffffff;
            margin-top: 61px;
            padding-inline: 16.68px;
            padding-block: 33.37px;
            border-radius: 11px;
            flex: 1;

        }
        .min-flex {
            background-color: #ffffff;
            margin-top: 61px;
            padding-inline: 16.68px;
            padding-block: 33.37px;
            border-radius: 11px;
            flex: 1;

        }

        .p-card {
        height: 100%;
        }

        .button- {
            background-color: #ffd828;
            width: fit-content;
            border-radius: 20.61px;
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
            width: fit-content;
            border-radius: 20.61px;
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
        }
        .butt4 {
            color: #ffffff;
            font-size: 11.66px;
            padding-block: 7.85px;
            padding-inline: 20.61px;
        }

        .footer {
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
            nav {
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
                /* padding-block: 163.65px; */
                /* padding-inline: 16px; */
            }

            .headline h1 {
                font-weight: 600px;
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
                padding-right: 107px;
                padding-right: 150px;
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
                display: flex;
                align-items: center;
                gap: 27px;
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
        <header>
            <nav>
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
                <p>
                    Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent id.
                </p>

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

                <div class="form">
                    <div class="formfill">
                        <div class="name">
                            <label for="fName">Full Name</label>
                            <input type=" text" id="name" name="name" placeholder="Enter Name" />
                        </div>
                        <div class="name">
                            <label for="fName">Email</label>
                            <input type=" text" id="email" name="email" placeholder="Enter Email" />
                        </div>
                        <div class="name">
                            <label for="fName">Phone Number</label>
                            <input type=" text" id="phone number" name="phone number" placeholder="Enter phone number" />
                        </div>
                        <div class="name">
                            <label for="fName"> Package</label>
                            <input type=" text" id="Package" name="Package" placeholder="Select Package" />
                        </div>

                        <button class="package">Get package</button>
                    </div>
                </div>
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
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus praesent
                        id.
                    </p>
                </div>
            </div>

            <section class="flexsec">
                <article class="min-flex1 p-card">
                    <div class="button-">
                        <a href="" class="butt-">Package 1</a>
                    </div>

                    <p class="lorem">
                        lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus
                        praesent id.
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

                <article class="min-flex2  p-card">
                    <div class="button3">
                        <a href="" class="butt3">Package 2</a>
                    </div>

                    <p class="lorem2">
                        lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus
                        praesent id.
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

                <article class="min-flex  p-card">
                    <div class="button4">
                        <a href="" class="butt4">Package 3</a>
                    </div>

                    <p class="lorem">
                        lLorem ipsum dolor sit amet consectetur. Posuere in etiam turpis arcu et neque quis. Eget nisl semper orci pellentesque faucibus
                        praesent id.
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

        <section class="footer">
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
    </body>
</html>`;
