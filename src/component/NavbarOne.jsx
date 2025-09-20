import { Link } from "react-router-dom";
import headerLogImg from "../assets/images/desenredandolog.png";
import { useEffect } from "react";
import Select from "react-select";
import MobileMenu from "./MobileMenu";

const NavbarOne = () => {
  /* useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const menuBg = document.querySelector(".menu_bg");

      if (menuBg) {
        if (scrollTop > 50) {
          menuBg.classList.add("nav-bg");
        } else {
          menuBg.classList.remove("nav-bg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); */


  const addClass = "navbar-1";

  return (
    <>
      <header className="header">
        
        <div className="menu_bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 col-xl-10 col-xxl-10">
                <div className="menu_bg_left">
                  <div className="header_logo">
                    <Link to="/">
                      <img src={headerLogImg} alt="logo" />
                    </Link>
                  </div>
                  <ul className="menu">
                    <li>
                      <Link to="/services" className="text_base">
                        Tipos de Consulta
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text_base">
                        Quienes somos
                      </Link>
                    </li>
                   
                    <li>
                      <Link to="blog-grid" className="text_base">
                        Tips
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-xxl-2">
                <div className="menu_btn">
                  <Link className="sara-btn" to="/contuct-us">
                    Contactanos Aquí
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu headerLogImg={headerLogImg} addClass={addClass}></MobileMenu>
    </>
  );
};

export default NavbarOne;
