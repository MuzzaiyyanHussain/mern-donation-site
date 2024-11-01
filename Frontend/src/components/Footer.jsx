import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="div">
        <h4>Support</h4>
        <ul>
          <li>Khandwa, Madhya Pradesh, 450001</li>
          <li>crypto@gmail.com</li>
          <li>+91xxxxxxxxxx</li>
        </ul>
      </div>
      <div>
        <h4>Links</h4>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/donate"}>Donate</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareTwitter />
              </span>
              Twitter<span></span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareYoutube />
              </span>{" "}
              <span>Youtube</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaSquareInstagram />
              </span>{" "}
              <span>Instagram</span>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              {" "}
              <span>
                <FaLinkedinIn />
              </span>{" "}
              <span>Linkedin</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
