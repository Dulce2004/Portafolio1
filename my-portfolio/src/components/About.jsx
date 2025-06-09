import React from "react";
import '../styles/About.css'; 

export default function About() {
  return (
    <section
      id="about"
      className="py-5 bg-light dark-bg text-dark dark-text"
    >
      <div className="container">
        <h2
          className="display-5 fw-bold mb-5 text-center"
          data-aos="fade-down"
        >
          Sobre mí
        </h2>

        <div
          className="card shadow-lg border-0 bg-white dark-card overflow-hidden"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <div className="row g-0">
            <div
              className="col-md-5 d-none d-md-block"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src="https://res.cloudinary.com/dou90av3v/image/upload/v1749274860/Dulce_skjjzh.jpg"
                alt="Dulce desarrolladora"
                className="img-fluid h-100 w-100 object-fit-cover rounded-start"
              />
            </div>

            <div className="col-md-7">
              <div className="card-body p-5">
                <p
                  className="lead mb-4"
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  ¡Hola! Soy <strong>Dulce</strong>, una desarrolladora web en formación,
                  apasionada por el aprendizaje constante y la creatividad digital.
                </p>
                <p
                  className="lead"
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  🌱 Me interesan temas como el desarrollo frontend, diseño UI/UX y experiencias de usuario accesibles. Además, disfruto el cuidado de plantas y experimentar en la cocina como un escape creativo.
                </p>
                <p
                  className="lead"
                  data-aos="fade-left"
                  data-aos-delay="900"
                >
                  💡 Busco siempre mejorar, colaborar y aportar valor a cada proyecto en el que participo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
