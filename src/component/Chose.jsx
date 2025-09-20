import React from "react";
import checkIcon from "../assets/images/check.svg";
import choseThumb from "../assets/images/chose_thumb.webp";
import choseCardOne from "../assets/images/choees_card-one.svg";
import choseCardTwo from "../assets/images/choees_card-two.svg";
import pos3 from "../assets/images/about-pos-3.svg";
import pos4 from "../assets/images/about-pos-4.svg";

const Chose = () => {
  return (
    <section className="chose">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about_head">
              <h2 className="main_titel">
                Soluciones Reales para tu <span> Bienestar Emocional</span>
              </h2>

              <p className="text_lg">
                En <i><b>Desenredando Psicología</b></i>, ofrecemos atención psicológica personalizada, basada en evidencia y adaptada a tu realidad. Nuestro equipo te acompaña en tiempo real, brindando herramientas para transformar el malestar en crecimiento, fortalecer tu salud mental y mejorar tu calidad de vida.
              </p>
            </div>

            <ul className="about_list">
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Evaluaciones clínicas confiables.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Atención virtual y presencial.
              </li>
              <li>
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Orientación psicoeducativa para familias y comunidades.
              </li>
            </ul>

           {/*  <div className="about_us_btn">
              <a href="/about" className="sara-btn__border">
                Explorar todos los servicios
              </a>
            </div> */}
          </div>

          <div className="col-lg-6 col-xxl-6 about_ml">
            <div className="about_us_thumb_main">
              <div className="about_us_thumb">
                <img src={choseThumb} alt="thumb" />
              </div>

             {/*  <div className="about_pos_thumb chose_pos_card">
                <img src={choseCardOne} alt="thumb" />
              </div>
              <div className="about_pos_thumb_two chose_pos_card_two">
                <img src={choseCardTwo} alt="thumb" />
              </div> */}
              <div className="about_pos_thumb_three">
                <img src={pos3} alt="thumb" />
              </div>
              <div className="about_pos_thumb_four">
                <img src={pos4} alt="thumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chose;
