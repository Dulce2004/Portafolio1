import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top">
      <div className="container text-center">
        <div data-aos="fade-up">
          <h5 className="mb-3 fw-bold">Conectemos</h5>
          <div className="d-flex justify-content-center gap-4 mb-4">
            <a
              href="https://github.com/Dulce2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.instagram.com/dulce.ambrosio11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="mailto:dulceambrosio2005@gmail.com"
              className="text-light fs-5"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>

        <p className="small mb-0 text-white-50" data-aos="fade-up" data-aos-delay="200">
          © {new Date().getFullYear()} Dulce Ambrosio
        </p>
      </div>
    </footer>
  );
}
