import React from "react";
import { Link } from "react-router-dom";
import footerVic1 from "../assets/images/footer_vic-1.svg";
import footerVic2 from "../assets/images/footer_vic-2.svg";
import footerVic3 from "../assets/images/footer_vic-3.svg";
import footerResThumb from "../assets/images/footer_res-thumb.png";
import footerLogo from "../assets/images/desenredandofootlog.svg";

const FooterOne = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="footer_pos_thumb_main">
              <div className="footer_pos_thumb">
                <img src={footerVic1} alt="thumb" />
              </div>
              <div className="footer_pos_thumb-two">
                <img src={footerVic2} alt="thumb" />
              </div>
              <div className="footer_pos_thumb-three">
                <img src={footerVic3} alt="thumb" />
              </div>
              <div className="footer_res_thumb">
                <img src={footerResThumb} className="w-100" alt="thumb" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-4 pd-left">
            <div className="footer_logo">
              <Link to="#">
                <img src={footerLogo} alt="logo" />
              </Link>
            </div>

            <div className="footer_txt">
              <p className="text_lg">
                Creamos espacios seguros donde el bienestar emocional florece.
              </p>
              <p className="text_lg">
                Nuestro compromiso es acompañarte con empatía, profesionalismo
                y atención personalizada en cada paso de tu proceso terapéutico.
              </p>
            </div>

            <ul className="footer_social_icon">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://bd.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-instagram"></i>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <i className="fa-brands fa-tiktok"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-xxl-8">
            <div className="row ml_40px">
              <div className="col-6 col-lg-3">
                <div className="footer_item">
                  <h3 className="text_2xl">Enlaces Rápidos</h3>
                  <ul className="footer_link">
                    <li>
                      <Link to="/" className="text_lg">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link to="/pricing" className="text_lg">
                        Precios
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text_lg">
                        Quines somos
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text_lg">
                        Tipos de consulta
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/blog-grid" className="text_lg">
                        Blog
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-6 col-lg-3 ml_10px res-ml">
                <div className="footer_item">
                  <h3 className="text_2xl">Soporte</h3>
                  <ul className="footer_link">
                    <li>
                      <Link to="/blog-details" className="text_lg">
                        Solicitar Cita
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="text_lg">
                        Preguntas Frecuentes
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="text_lg">
                        Sugerencias
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/blog-details" className="text_lg">
                        Live
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              <div className="col-6 col-lg-3 ml_10px res-mt">
                <div className="footer_item">
                  <h3 className="text_2xl">Servicios</h3>
                  <ul className="footer_link">
                    <li>
                      <Link to="/blog-details" className="text_lg">
                        Terapia Individual
                      </Link>
                    </li>
                    <li>
                      <Link to="/contuct-us" className="text_lg">
                        Orientación Familiar
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" className="text_lg">
                        Evaluaciones Psicológicas
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-grid" className="text_lg">
                        Reclutamiento de Talento
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details" className="text_lg">
                        Atención a Niñez y Adolecencia
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-6 col-lg-3 ml_10px res-ml res-mt">
                <div className="footer_item">
                  <h3 className="text_2xl">Contacto</h3>
                  <ul className="footer_link two">
                   {/*  <li>
                      <Link to="#" className="text_lg">
                        11910 Clyde Rapid Suite 210, United States
                      </Link>
                    </li> */}
                    <li>
                      <a href="mailto:hello@saramail.com" className="text_2xl">
                        desenredandopsic@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+17077970462" className="text_2xl">
                        +502 7894 1235
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy_write">
        <div className="container">
          <div className="row copy_write_border_top">
            <div className="col-md-6 col-xxl-6">
              <div className="copy_write_txt">
                <h4 className="text_lg">
                  2025 © Todos los derechos reservados a
                  <span>
                    <Link to="#"> Desenredando psicología. </Link>
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-xxl-6">
              <ul className="copy_write_link">
                <li>
                  <Link to="/blog-details" className="text_lg">
                    Politica de Pricacidad
                  </Link>
                </li>
                <li>
                  <Link to="/blog-details" className="text_lg">
                    Terminos y Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
