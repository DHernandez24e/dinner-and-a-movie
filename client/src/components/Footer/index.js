import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 py-5">
            <div class="mb-5 flex-center">
              {/* Facebook */}
              <a href="https://www.facebook.com">
                <img src="../images/facebook.svg" height="60" width="60"/>
                
                {/* <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i> */}
              </a>
              {/* Twitter */}
              <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>

              {/* Instagram */}
              <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                  {" "}
                </i>
              </a>
              {/* Pinterest */}
              <a class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
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
