import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Calculadora Web",
      description:
        "Calculadora funcional desarrollada con HTML, CSS y JavaScript.",
      link: "https://github.com/Dulce2004/calculadora_web",
      source: "GitHub",
      image:
        "https://res.cloudinary.com/dou90av3v/image/upload/v1749079758/calculadora_wxvam1.png",
    },
    {
      title: "Login con Endpoints",
      description:
        "Sistema de login que utiliza endpoints para autenticación de usuarios.",
      link: "https://github.com/Dulce2004/login_web",
      source: "GitHub",
      image:
        "https://res.cloudinary.com/dou90av3v/image/upload/v1749080948/login_i6ftrw.png",
    },
    {
      title: "Simulación de Reservas (Grupo)",
      description:
        "Proyecto grupal que simula un sistema de reservas usando bases de datos.",
      link: "https://github.com/Dulce2004/BD1-Proyecto2",
      source: "GitHub",
      image:
        "https://res.cloudinary.com/dou90av3v/image/upload/v1749080592/bd_f1hvoz.jpg",
    },
  ];

  return (
    <section id="proyectos" className="py-5 bg-light dark-bg text-dark dark-text">
      <div className="container">
        <h2
          className="display-5 fw-bold mb-5 text-center"
          data-aos="fade-up"
        >
          Proyectos
        </h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="card h-100 shadow-sm border-0 dark-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top project-img"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mt-3 d-flex justify-content-between align-items-center">
                    <span className="badge bg-secondary">{project.source}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Ver proyecto 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
