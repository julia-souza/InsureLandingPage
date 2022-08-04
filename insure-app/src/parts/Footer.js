import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo"></div>
      <div className="footer-content">
        <hr className="hr-footer" />
        <ul>
          <li><a href="/"> HOME </a></li>
          <li><a href="#cadastro"> Cadastre-se </a></li>
          <li><a href="#planosView"> Planos </a></li>
        </ul>
      </div>
      <p>© Insure</p>
      <p>Desenvolvido por Júlia</p>
    </div>
  );
};

export default Footer;
