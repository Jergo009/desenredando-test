import React from "react";
import check from "../assets/images/check.svg";
import check2 from "../assets/images/check2.svg";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-6">
            <div className="pricing_head">
              <h2 className="main_titel">
                Elije el <span> tipo de ataención </span> que necesitas
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  aria-label="Name"
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Individual
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  aria-label="Name"
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Grupal
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xxl-12">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div className="row mg_top_20px g-4">
                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Atención Psicologica</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">Q.</span> 275.00
                          <span>/Por Sesion</span>
                        </h3>
                        <p>1 Sesion/Por Semana</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Diagnostico inicial
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Planes de apoyo
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Evaluaciones Adhoc
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          Tratamiento del estres
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          Sesiones especificas
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          24/7 Asistencia de emergencia
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn sara-btn_black">
                        Solicitar Ahora
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item pricing_item--black">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Premium</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">$</span> 25.00
                          <span>/Per Month</span>
                        </h3>
                        <p>Features Description</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          10 Social Media Account
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Free Platform Access
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Report analytics
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Keyword research
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Premium consulting
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn">
                        Get Started
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Premium Plan</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">$</span> 40.00
                          <span>/Per Month</span>
                        </h3>
                        <p>Features Description</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          10 Social Media Account
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Free Platform Access
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Report analytics
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Keyword research
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Premium consulting
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn sara-btn_black">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div className="row mg_top_20px g-4">
                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Starter</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">$</span> 5.00
                          <span>/Per Month</span>
                        </h3>
                        <p>Features Description</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          10 Social Media Account
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Free Platform Access
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Report analytics
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          Keyword research
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          Premium consulting
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check2} alt="icon" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn sara-btn_black">
                        Get Started
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item pricing_item--black">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Premium</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">$</span> 25.00
                          <span>/Per Month</span>
                        </h3>
                        <p>Features Description</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          10 Social Media Account
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Free Platform Access
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Report analytics
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Keyword research
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Premium consulting
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn">
                        Get Started
                      </Link>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xxl-4">
                    <div className="pricing_item">
                      <div className="pricing_item_top">
                        <h6 className="text_xl">Premium Plan</h6>
                        <h3 className="text_3xl">
                          <span className="dollor_sign">$</span> 40.00
                          <span>/Per Month</span>
                        </h3>
                        <p>Features Description</p>
                      </div>

                      <ul className="pricing_item_list">
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          10 Social Media Account
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Free Platform Access
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Report analytics
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Keyword research
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          Premium consulting
                        </li>
                        <li className="text_lg">
                          <span>
                            <img src={check} alt="icon" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>

                      <Link to="/pricing" className="sara-btn sara-btn_black">
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
