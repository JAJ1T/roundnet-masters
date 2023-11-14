import Image from 'next/image';
import styles from './style.css';



const Header = () => {
  
  return (
    <header>
      
      {/* Logo de la empresa */}
      <a href="/src/app/page.js" className="logo">
        <Image
          id="Logo-normal"
          src="/public/Imagenes/imagen3.png"
          className="Logo1 logo-image"
          width={1}
          height={1}
          style={{ verticalAlign: "middle" }}
        />

        <Image
          id="Logo-dark"
          src="/public/Imagenes/imagen7.png"
          className="Logo1 logo-image"
          width={1}
          height={1}
          style={{ verticalAlign: "middle" }}
        />
      </a>

      {/* boton para movil */}
      <button className="Menu-btn" id="Menu-btn">
        <i className="fas fa-bars"></i>
      </button>

      {/* Menú */}
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#">¿Quienes somos?</a></li>

        <li className="menu">
          <a href="#">Roundnet <i className="fa fa-caret-down"></i></a>
          <ul className="menu-vertical">
            <li><a href="#">Reglas</a></li>
            <li><a href="#">¿Que es Roundnet?</a></li>
            <li><a href="#">Historia</a></li>
          </ul>
        </li>

        <li className="menu">
          <a href="#">Eventos <i className="fa fa-caret-down"></i></a>
          <ul className="menu-vertical">
            <li><a href="#">Eventos Importantes</a></li>
            <li><a href="#">Equipos</a></li>
            <li><a href="#">Ranking</a></li>
          </ul>
        </li>

        <li><a href="#">Productos</a></li>
      </ul>

      {/* Switch de modo oscuro */}
      <button className="switch" id="switch">
        <span><i></i></span>
        <span><i></i></span>
      </button>

      {/* Menu para movil */}
      <div className="Menu-container">

        <div id="close-Menu-btn" className="fas fa-times"></div>

        <div className="menu-telefono">
          <div className="background">
            <ul>
              <li><a href="index.html">Inicio</a></li>
              <li><a href="#">¿Quienes somos?</a></li>

              <li className="menu">
                <a href="#">Roundnet <i className="fa fa-caret-down"></i></a>
                <ul className="menu-vertical">
                  <li><a href="#">Reglas</a></li>
                  <li><a href="#">¿Que es Roundnet?</a></li>
                  <li><a href="#">Historia</a></li>
                </ul>
              </li>

              <li className="menu">
                <a href="#">Eventos <i className="fa fa-caret-down"></i></a>
                <ul className="menu-vertical">
                  <li><a href="#">Eventos Importantes</a></li>
                  <li><a href="Clubes/clubes.html">Equipos</a></li>
                  <li><a href="#">Ranking</a></li>
                </ul>
              </li>

              <li><a href="#">Productos</a></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;