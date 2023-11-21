import Image from "next/image";
import styles from "./content.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPaperPlane, faShippingFast, faSmile } from '@fortawesome/free-solid-svg-icons';

const Content = () => {
    return ( 
        <>
      {/*Introduccion*/}
      <section className={styles.introduccion} id="introduccion">
         <div>
         <h3>Bievenido a la seccion de productos</h3>
         <h2>Para solicitarlos comunicate con este numero</h2>
    	   <h3>+506-7254-4097</h3>
         </div>
      </section>




<section className="icons-container">

    <div className="icons">
        <i><FontAwesomeIcon icon={faLock} /></i>
        <div className="content">
            <h3>Metodo de pago seguro</h3>
            <p>Metodo de pago 100% seguro</p>
        </div>
    </div>

    <div className="icons">
        <i><FontAwesomeIcon icon={faShippingFast} /></i>
        <div className="content">
            <h3>Envio incluido</h3>
            <p>No tendras que pagar doble</p>
        </div>
    </div>    

    <div className="icons">
        <i><FontAwesomeIcon icon={faPaperPlane} /></i>
        <div className="content">
            <h3>Contacto sencillo</h3>
            <p>Puedes comunicarte con nosotros y te atenderemos apenas podamos</p>
        </div>
    </div>

    <div className="icons">
        <i><FontAwesomeIcon icon={faSmile} /></i>
        <div className="content">
            <h3>Clientes felices</h3>
            <p>Queremos hacer todo lo posible por satisfacer tus necesidades</p>
        </div>
    </div>   



</section>



<section className="anuncio">

    <div className="content">
        <h3>Nuevo producto en la tienda</h3>
        <h1>Spike brite</h1>
        <p>Especial para aquellos que quieran jugar en la noche y disfrutar de las luces que el spike brite tiene, mayor diversion para ti y tus amigos</p>
        <a href="#" class="anuncio-boton">mas detalles</a>
    </div>

    <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
</section>







   
<div className="container">

	
   <h2 className="presentacion">Nuestros productos </h2>
   <h3 className="titulo">Paquetes </h3>

   <div className="productos-container">

      <div className="producto" data-name="p-1">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Aro de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>


      <div className="producto" data-name="p-2">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Bolas de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>



      <div className="producto" data-name="p-3">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Bolas profesionales de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>


      <div className="producto" data-name="p-4">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Aro profesional de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>


      <div className="producto" data-name="p-5">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Bolsa de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>


      <div className="producto" data-name="p-6">
      <div className={styles.image}>
           <Image
             src="/public/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
           />
      </div>
         <h3>Malla de roundnet</h3>
         <div className="precio">₡1.000</div>
      </div>

   </div>

</div>



        </>
     );
}
 
export default Content;