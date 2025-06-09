import React from "react";
import '../styles/Hero.css'; 

export default function Hero() {
  return (
    <section

      className="w-100 min-vh-100 d-flex align-items-center justify-content-center text-center position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #d8b4fe, #bae6fd)",
      }}
    >
      {/* Decoración de fondo */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.4), transparent 60%)",
          zIndex: 0,
        }}
      ></div>

      <div className="container-fluid position-relative z-1 px-0">
        {/* Avatar */}
        <img
          src="https://res.cloudinary.com/dou90av3v/image/upload/v1749189616/Avatar_Dulce_hn0lbd.png"
          alt="Dulce"
          className="avatar-img rounded-circle shadow mb-4"
          data-aos="fade-down"
          data-aos-delay="100"
        />

        <h1
          className="display-4 fw-bold text-dark mb-2"
          data-aos="fade-down"
          data-aos-delay="200"
        >
           Dulce Ambrosio  
        </h1>
        <h2
          className="h3 text-primary fw-semibold mb-3"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Desarrolladora Junior
        </h2>
        <p
          className="lead text-dark mb-4"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Desarrolladora en proceso en el <strong> Frontend </strong>, <strong> Backend </strong> y <strong>Base de Datos</strong>.
        </p>

        <a
          href="#proyectos"
          className="btn btn-lg btn-primary rounded-pill px-5 shadow"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          Ver mis proyectos
        </a>

        {/* Redes sociales opcionales */}
        <div className="mt-4 d-flex justify-content-center gap-3" data-aos="fade-up" data-aos-delay="1000">
          <a
            href="https://github.com/Dulce2004"
            className="text-dark fs-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/dulce.ambrosio11?igsh=MXd4MTZzcjFwdzl1bw=="
            className="text-reset fs-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="mailto:dulceambrosio2005@gmail.com"
            className="text-reset fs-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
