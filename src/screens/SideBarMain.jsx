import "../public/css/SideBarMain.css";
import React, { useRef, useEffect } from "react";
function SideBarMain() {
  const componentRef = useRef();
  useEffect(() => {
    componentRef.current.innerHTML = componentRef.current.firstChild.innerText
      .split("")
      .map(
        (e, i) =>
          `<span style="transform:rotate(${i * 11 - 70}deg)">${e}</span>`
      )
      .join("");
  }, []);
  return (
    <div className="outer-main">
      <div className="icon">
        <i className="fas fa-bars"></i>
        <p>
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
