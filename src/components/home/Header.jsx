import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/image/chair1.png';
import bgBanner from '../../assets/image/cover-landing-bg.png';

const Header = () => {
  return (
    <div className="container m-auto">
      <div className="hero   n-none lg:h-[500px] ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={photo} className="  w-96  " />
          <div className="md:mr-32 mr-0 ">
            <h1 className="md:text-6xl font-bold text-accent  capitalize text-3xl">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Soluta, accusantium quae ad animi nobis qui eveniet quod
              voluptates. Eos, maxime ipsam modi consequatur veniam vel? Et
              vitae obcaecati neque ex!
            </p>
            <Link to={'/appointment'}>
              <button className="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary ">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
