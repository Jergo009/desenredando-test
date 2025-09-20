import { Link } from "react-router-dom";
import heroPos1 from "../assets/images/hero-pos-1.png";
import heroPos2 from "../assets/images/hero-pos-2.png";
import heroThumbBg from "../assets/images/hero-thumb-bg.png";
import heroThumb from "../assets/images/hero-thumb.webp";
import heroUnion from "../assets/images/hero-union.png";
import heroVic2 from "../assets/images/hero-vic-2.png";
import heroVictor from "../assets/images/hero-victor.png";
import vicArrow from "../assets/images/vic-arrow.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-xxl-7">
            <div className="hero_left_pos_main">
              <div className="hero_left_pos-1">
                <img src={heroVic2} alt="thumb" />
              </div>
              <div className="hero_left_pos-2">
                <img src={vicArrow} alt="thumb" />
              </div>
            </div>

            <div className="hero_txt">
              <h1>
                Hay tres frases que no  <span> nos permiten avanzar</span> :<br />
              </h1>
              <p className="text_lg">
                tengo que <b><i>hacerlo bien</i></b>, tienes que <i><b>tratarme bien</b></i> y el mundo debe ser <b><i>fácil.</i></b><br></br> <b>-Albert Ellis</b>
              </p>
            </div>

            <div className="hero_btn_main">
              <Link to="/pricing" className="sara-btn">
                Solicita tu sesion
              </Link>
              <Link to="/about" className="sara-btn__border">
                Descubre mas
              </Link>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero_thumb_main">
              <div className="hero_thumb_main_thumb">
                <img src={heroThumbBg} alt="thumb" />
              </div>
              <div className="hero_thumb">
                <img src={heroThumb} alt="thumb" />
              </div>
             {/*  <div className="hero_pos_thumb">
                <img src={heroPos1} alt="thumb" />
              </div>
              <div className="hero_pos_thumb_two">
                <img src={heroPos2} alt="thumb" />
              </div> */}
              <div className="hero_pos_thumb_three">
                <img src={heroVictor} alt="vic" />
              </div>
              <div className="hero_pos_thumb_four">
                <img src={heroUnion} alt="vic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
