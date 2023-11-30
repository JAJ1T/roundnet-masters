const AboutRoundnet = () => {
  return (
    <section id="about-roundnet">
      <h2>Acerca del Roundnet</h2>
      <p>
        Un resumen del deporte, su historia y por qué está ganando popularidad.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p>
        Información sobre cómo jugar: Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
        <a href="reglas-del-roundnet.html">Leer más sobre las reglas</a>
      </p>
      <div class="infographics">
        <img
          src="path/to/infographic1.jpg"
          alt="Infografía Básica del Roundnet 1"
        />
        <img
          src="path/to/infographic2.jpg"
          alt="Infografía Básica del Roundnet 2"
        />
      </div>
      <div class="video-container">
        <video src="path/to/introductory-video.mp4" controls>
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </section>
  );
};

export default AboutRoundnet;
