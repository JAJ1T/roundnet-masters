import OutroStyles from './Outro.module.css';
import img1 from './Outro.module.css';
import img2 from './imagenes/img2.jpeg';
import img3 from './imagenes/img3.jpeg';

const Outro = () => {
  return (
    <section className={OutroStyles.Outro}>
      <div className={`${OutroStyles.card} ${OutroStyles.img1}`}>
        <div className={OutroStyles.face + ' ' + OutroStyles.front}>
          <h3>Misión</h3>
        </div>
        <div className={OutroStyles.face + ' ' + OutroStyles.back}>
          <img className={OutroStyles.img1} />
          <h3>Transformando el deporte</h3>
          <p>
            Nuestra misión es generar los espacios que incentiven la práctica
            del Roundnet a nivel competitivo y ser un semillero de atletas de
            alto nivel, que disfruten, rían y compartan la energía que nos trae
            este nuevo deporte.
          </p>
        </div>
      </div>

      <div className={`${OutroStyles.card} ${OutroStyles.img2}`}>
        <div className={OutroStyles.face + ' ' + OutroStyles.front}>
          <h3>Visión</h3>
        </div>
        <div className={OutroStyles.face + ' ' + OutroStyles.back}>
        <img className={OutroStyles.img1} />
          <h3>Camino a los Juegos Olímpicos</h3>
          <p>
            La meta es llevar la disciplina de RoundNet a los Juegos Olímpicos y
            para esto la Federación Internacional de Roundnet y las Federaciones
            de cada país están colaborando y trabajando mano a mano. En RoundNet
            Masters queremos ser parte de este movimiento creando nuestra.
          </p>
        </div>
      </div>

      <div className={`${OutroStyles.card} ${OutroStyles.img3}`}>
        <div className={OutroStyles.face + ' ' + OutroStyles.front}>
          <h3>Valores</h3>
        </div>
        <div className={OutroStyles.face + ' ' + OutroStyles.back}>
        <img className={OutroStyles.img1} />
          <h3>Nuestros valores</h3>
          <p>
          Respeto,

          Trabajo en equipo,

          Diversidad e inclusión,

          Fair Play,

          Pasión y diversión,

          Responsabilidad social,
 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outro;
