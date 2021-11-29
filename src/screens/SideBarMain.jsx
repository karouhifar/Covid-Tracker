import "../public/css/SideBarMain.css";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { NavLink } from "react-router-dom";
function SideBarMain() {
  const componentRef = useRef();
  const [state, setstate] = useState(false);

  useEffect(() => {
    componentRef.current.innerHTML = componentRef.current.firstChild.innerText
      .split("")
      .map(
        (e, i) =>
          `<span style="transform:rotate(${i * 11 - 70}deg)">${e}</span>`
      )
      .join("");
  }, []);
  function action() {
    setstate(!state);
  }
  let list__menu = useRef();
  let list__menu_icon = useRef();

  useEffect(() => {
    if (!state) {
      console.log("OFF");
      const tl = new gsap.timeline();
      tl.to(list__menu.current, {
        opacity: 0,
        y: -30,
        duration: 1,
        display: "none",
        zIndex: -1,
      });
    } else {
      console.log("ON");
      const tl = new gsap.timeline();
      tl.to(list__menu.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        display: "flex",
        zIndex: 5,
      });
    }
  }, [state]);

  return (
    <div className="outer-main">
      <div ref={list__menu} className="list__menu">
        <div className="navigation">
          <ul style={{ padding: 0 }}>
            <li className="list">
              <NavLink exact activeClassName="active" to="/">
                <span className="iconList">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="textList">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                <span className="iconList">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span className="textList">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact">
                <span className="iconList">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="textList">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="icon"
        ref={list__menu_icon}
        style={{ cursor: "pointer" }}
        onClick={action}
      >
        <i className="fas fa-bars"></i>
        <p style={{ margin: "0" }}>
          <b>Menu</b>
        </p>
      </div>
      <div className="main-content">
        <div className="outer-logo">
          <div className="logo"></div>
        </div>
        <div
          ref={(node) => (componentRef.current = node)}
          className="text"
          id="textData"
        >
          <p>Kamyab Rouhifar</p>
        </div>
        <div className="sub-text">
          <p>Web Developer</p>
        </div>
      </div>
      <div className="footer">
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
        <i className="fab fa-facebook-square"></i>
      </div>
    </div>
  );
}

export default SideBarMain;
