import OutroStyles from './Outro.module.css';
import img1 from './imagenes/img1.jpeg';
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
          <img src={img1} alt="Misión" />
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
          <img src={img2} alt="Visión" />
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
          <h3>Lourdes Fernández</h3>
        </div>
        <div className={OutroStyles.face + ' ' + OutroStyles.back}>
          <img src={img3} alt="Lourdes Fernández" />
          <h3>Lourdes Fernández</h3>
          <p>
            “Uniendo atletas en toda Costa Rica por medio del deporte y la
            diversión”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Outro;
