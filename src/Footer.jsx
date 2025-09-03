import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer_formulario">
          <p>Suscribite para recibir noticias</p>
          <form>
            <input type="text" placeholder="ejemplo@gmail.com" />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
        <div className="footer_accesos">
          <div className="footer_accesos_info">
            <a href="">Sobre Nosotros</a>
            <a href="">Contacto</a>
            <a href="">TyC</a>
            <a href="">Defenza al Consumidor</a>
          </div>
        </div>
      </footer>
    </>
  );
}
