import Image from "next/image";
import styles from "./content.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faPaperPlane, faShippingFast, faSmile } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

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



{/*Iconos*/}
<section className={styles.iconsContainer}>

    <div className={styles.icons}>
        <i><FontAwesomeIcon icon={faLock} /></i>
        <div>
            <h3>Metodo de pago seguro</h3>
            <p>Metodo de pago 100% seguro</p>
        </div>
    </div>

    <div className={styles.icons}>
        <i><FontAwesomeIcon icon={faShippingFast} /></i>
        <div>
            <h3>Envio incluido</h3>
            <p>No tendras que pagar doble</p>
        </div>
    </div>    

    <div className={styles.icons}>
        <i><FontAwesomeIcon icon={faPaperPlane} /></i>
        <div>
            <h3>Contacto sencillo</h3>
            <p>Puedes comunicarte con nosotros y te atenderemos apenas podamos</p>
        </div>
    </div>

    <div className={styles.icons}>
        <i><FontAwesomeIcon icon={faSmile} /></i>
        <div>
            <h3>Clientes felices</h3>
            <p>Queremos hacer todo lo posible por satisfacer tus necesidades</p>
        </div>
    </div>   



</section>


{/*Anuncio*/}
<section className={styles.anuncio}>

    <div className={styles.content}>
        <h3>Nuevo producto en la tienda</h3>
        <h1>Spike brite</h1>
        <p>Especial para aquellos que quieran jugar en la noche y disfrutar de las luces que el spike brite tiene, mayor diversion para ti y tus amigos</p>
        <a href="https://www.youtube.com" className={styles.anuncioBoton}>mas detalles</a>

    </div>
    <Image
             src="/images/spikebrite1.png"
             alt=""
             width={1}
             height={1}
             layout="responsive"
             className={styles.imagen}
           />

</section>







{/*Productos 1*/}   
<div className={styles.container}>

   <h2 className={styles.presentacion}>Nuestros productos </h2>
   <h3 className={styles.titulo}>Kits </h3>

   <div className={styles.productosContainer}>

   <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/rookie.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Rookie Kit</h3>
         <div className={styles.precio}>₡42.458</div>
      </a>


      <Link className={styles.producto} href="/vender/Kits/AroStandard">
           <Image
             src="/images/productos/standard.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Standard Kit</h3>
         <div className={styles.precio}>₡63.440</div>
      </Link>


      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/pro.jpeg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Pro kit</h3>
         <div className={styles.precio}>₡84.798</div>
      </a>



      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Spikebrite</h3>
         <div className={styles.precio}>₡76.488</div>
      </a>





     
   </div>

</div>


{/*Productos 2*/}
<div className={styles.container}>

   <h3 className={styles.titulo}>Insumos deportivos </h3>
      
   <div className={styles.productosContainer}>
      
      <a className={styles.producto} href="https://www.youtube.com">
           
           <Image
             src="/images/productos/standard balls.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
           
         <h3>2 Bolas standard</h3>
         <div className={styles.precio}>₡15.240</div>
      </a>

      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/pro balls.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>2 Bolas pro</h3>
         <div className={styles.precio}>₡19.520</div>
      </a>

      <a className={styles.producto} href="https://www.youtube.com">
           
           <Image
             src="/images/productos/dark balls.jpg"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
           
         <h3>2 Bolas Brillantes</h3>
         <div className={styles.precio}>₡22.272</div>
      </a>      

      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/repuestos.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Repuestos de kit</h3>
         <div className={styles.precio}>₡39.780</div>
      </a>

     

   </div>

</div>


{/*Productos 3*/}
<div className={styles.container}>

   <h3 className={styles.titulo}>Ropa y uniformes </h3>

   <div className={styles.productosContainer}>

      <div className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa Sele rojo</h3>
         <div className={styles.precio}>₡15.000</div>
      </div>


      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa sele blanco</h3>
         <div className={styles.precio}>₡15.000</div>
      </a>



      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa blanca 1</h3>
         <div className={styles.precio}>₡10.000</div>
      </a>


      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa blanca 2</h3>
         <div className={styles.precio}>₡10.000</div>
      </a>


      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa negra 1</h3>
         <div className={styles.precio}>₡10.000</div>
      </a>


      <a className={styles.producto} href="https://www.youtube.com">
           <Image
             src="/images/productos/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Camisa negra 2</h3>
         <div className={styles.precio}>₡10.000</div>
      </a>

   </div>

</div>



        </>
     );
}
 
export default Content;