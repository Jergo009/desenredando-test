import React from "react";
import aboutThumb from "../assets/images/abouyus-thumb.webp";
import pos1 from "../assets/images/about-pos-1.svg";
import pos2 from "../assets/images/about-pos-2.svg";
import pos3 from "../assets/images/about-pos-3.svg";
import pos4 from "../assets/images/about-pos-4.svg";
import pos5 from "../assets/images/about-pos-5.svg";
import pos6 from "../assets/images/about-pos-6.svg";
import heroUnion from "../assets/images/hero-union.png";
import checkIcon from "../assets/images/check.svg";

const AboutUs = () => {
  return (
    <section className="about_us">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6">
            <div className="about_us_thumb_main">
              <div className="about_us_thumb">
                <img src={aboutThumb} alt="thumb" />
              </div>

             {/*  <div className="about_pos_thumb">
                <img src={pos1} alt="thumb" />
              </div>
              <div className="about_pos_thumb_two">
                <img src={pos2} alt="thumb" />
              </div> */}
              <div className="about_pos_thumb_three">
                <img src={pos3} alt="thumb" />
              </div>
              <div className="about_pos_thumb_four">
                <img src={pos4} alt="thumb" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 about_pl">
            <div className="text_pos_thumb_main">
              <div className="text_pos_thumb_one">
                <img src={pos5} alt="thumb" />
              </div>
              <div className="text_pos_thumb_two">
                <img src={pos6} alt="thumb" />
              </div>
              <div className="text_pos_thumb_three">
                <img src={heroUnion} alt="thumb" />
              </div>
            </div>

            <div className="about_head">
              <h2 className="main_titel">
                Soluciones en Reclutamiento y <span> Talento Humano </span>
              </h2>

              <p className="text_lg">
                En <i><b>Desenredando Psicología</b></i>, apoyamos a empresas en la selección de personal idóneo, evaluando competencias, estabilidad emocional y adaptación al entorno laboral. Nuestro enfoque combina herramientas psicológicas, entrevistas especializadas y criterios éticos para fortalecer equipos de trabajo saludables y productivos.
              </p>
            </div>

            <ul className="about_list">
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Evaluaciones psicométricas y clínicas.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Perfiles por competencias y cultura organizacional.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Asesoría en clima laboral y bienestar emocional.
              </li>
            </ul>

            {/* <div className="about_us_btn">
              <a href="/about" className="sara-btn__border">
                Explorar servicios para empresas
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
