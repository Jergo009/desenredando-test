import React from "react";
import workingThumb from "../assets/images/working_thumb.webp";
import workingPos1 from "../assets/images/working-pos-one.svg";
import workingPos2 from "../assets/images/working_pos_thumb-two.svg";
import heroUnion from "../assets/images/hero-union.png";
import scanIcon from "../assets/images/scan.svg";
import graphIcon from "../assets/images/graph.svg";
import paperIcon from "../assets/images/paper.svg";
import arrowLine from "../assets/images/arrow-line.svg";

const Working = () => {
  return (
    <section className="working">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xxl-6">
              <div className="working_head">
                <h2 className="main_titel">
                  Cual es <span>Nuestro</span>, enfoque.
                </h2>

                <p>
                  Nuestro enfoque combina herramientas psicológicas, entrevistas especializadas y criterios éticos para fortalecer equipos de trabajo saludables y productivos.
                </p>

                <h6>¿Quieres saber más?</h6>
              </div>

              <div className="working_btn">
                <a href="/contuct-us" className="sara-btn">
                  Enterate aquí
                </a>
              </div>
            </div>

            <div className="col-xxl-6">
              <div className="working_thumb_main">
                <div className="working_thumb">
                  <img src={workingThumb} alt="thumb" />
                </div>
                <div className="working_pos_thumb">
                  <img src={workingPos1} alt="thumb" />
                </div>
                <div className="working_pos_thumb_two">
                  <img src={workingPos2} alt="thumb" />
                </div>
                <div className="working_pos_thumb_three">
                  <img src={heroUnion} alt="thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row working_mt">
          <div className="col-xxl-12">
            <div className="working_icon_item_main">
              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={scanIcon} alt="icon" />
                      <span className="num">1</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Identify the problem with AI</p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={graphIcon} alt="icon" />
                      <span className="num">2</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">
                      Collect data with our advanced AI.
                    </p>
                  </div>
                </div>
                <div className="arrow_img">
                  <img src={arrowLine} alt="arrow" />
                </div>
              </div>

              <div className="working_icon_item">
                <div className="working_icon_item_df">
                  <div className="working_icon_main">
                    <span className="working_icon">
                      <img src={paperIcon} alt="icon" />
                      <span className="num">3</span>
                    </span>
                  </div>
                  <div className="working_icon_item_txt">
                    <p className="text_2xl">Deliver accurate data solutions.</p>
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

export default Working;
