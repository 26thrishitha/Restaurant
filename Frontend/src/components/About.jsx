import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Tinnara?, the only restaurant that checks on you like your amma does!
                Whether you're starving or just bored and hungry (we don’t judge), we’ve got your back and your plate!

                <br />
                <br />

                From spicy sambar that slaps harder than your cousin's Wi-Fi password…
                To crispy dosas thinner than your patience in traffic 🚗💨
                Our food is made with love, laughs, and just the right amount of karam! 🌶 ✨ 

                <br />
                <br />

                Pull up a chair, unbutton that top jeans button (we won’t tell),
                and let’s turn your hunger into happy tears.

                Because here, it’s never just food… it's full-on <span style={{ color: "#5cb85c"}}>Vindu Bhojanam!</span>
            </p>
            {/* <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link> */}
            
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;