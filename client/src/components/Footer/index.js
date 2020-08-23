import React from "react";
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">


              {/* Facebook */}
              <a href="https://www.facebook.com">
                <img src="./../../images/facebook.svg" height="40" width="40" alt="facebook logo" />
              </a>

              {/* Twitter */}
              <a href="https://www.twitter.com">
              <img src="./../../images/twitter.svg" height="40" width="40" alt="twitter logo" />
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com">
              <img src="./../../images/instagram.svg" height="40" width="40" alt="instagram logo" />
              </a>

              {/* Pinterest */}
              <a href="https://www.pinterest.com">
              <img src="./../../images/pinterest.svg" height="40" width="40" alt="pinterest logo" />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div class="footer-copyright text-center bg-light text-primary p-2 h4">
        © 2020 Copyright:
        <a href="https://github.com/DHernandez24e/dinner-and-a-movie">
          {" "}
          Dinner and a Movie
        </a>
      </div>
    </footer>
  );
};

export default Footer;
