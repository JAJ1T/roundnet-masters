import style from './style.css'
import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer>
        {/*Banner*/}
				<div class="banner-final" id="banner-final">
					
				</div>



			   <section class="footer" id="footer">

                {/*Footer de informacion del contacto*/}
				    <div class="box-container">

				        <div class="box">
				            <h5>Informacion del contacto</h5>
				            <a href="#"> <i class="fas fa-envelope"></i> info.roundnetmasters@gmail.com </a>
				            <a href="#"> <i class="fas fa-phone"></i> Roundnet Masters Costa Rica: +506-7254-4097  </a>
				        </div>
				    </div>


                    {/*Footer redes sociales*/}
				    <div class="share">
				   		<h1>Siguenos en nuestras redes!!!</h1>
				   		<br/>
						<a href="#" class="fab fa-facebook-f" onclick="window.open('https://es-la.facebook.com/', '_blank')"></a>
						<a href="#" class="fab fa-instagram" onclick="window.open('https://www.instagram.com/roundnetmasters', '_blank')"></a>
						<a href="#" class="fab fa-youtube"onclick="window.open('https://www.youtube.com/@RoundnetMasterscr', '_blank')"></a>
						<a href="#" class="fab fa-tiktok"onclick="window.open('https://www.tiktok.com/', '_blank')"></a>
				    </div>


                    {/*Creditos finales*/}
				        <div class="credit"> Pagina web Oficial de Roundnet Masters Costa Rica | Todos los derechos están reservados!!! </div>

				</section>
			</footer>

     );
}
 
export default Footer;