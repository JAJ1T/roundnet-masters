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
        <a href="#" className={styles.anuncioBoton}>mas detalles</a>

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
   <h3 className={styles.titulo}>Paquetes </h3>

   <div className={styles.productosContainer}>

      <div className={styles.producto} data-name="p-1">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-2">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>



      <div className={styles.producto} data-name="p-3">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas profesionales de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-4">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro profesional de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-5">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolsa de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-6">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Malla de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>

   </div>

</div>


{/*Productos 2*/}
<div className={styles.container}>

   <h3 className={styles.titulo}>Insumos deportivos </h3>

   <div className={styles.productosContainer}>

      <div className={styles.producto} data-name="p-1">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-2">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>



      <div className={styles.producto} data-name="p-3">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas profesionales de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-4">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro profesional de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-5">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolsa de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-6">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Malla de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>

   </div>

</div>


{/*Productos 3*/}
<div className={styles.container}>

   <h3 className={styles.titulo}>Ropa y uniformes </h3>

   <div className={styles.productosContainer}>

      <div className={styles.producto} data-name="p-1">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-2">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>



      <div className={styles.producto} data-name="p-3">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolas profesionales de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-4">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Aro profesional de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-5">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Bolsa de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>


      <div className={styles.producto} data-name="p-6">
           <Image
             src="/images/spikebrite1.png"
             alt="hola"
             width={100}
             height={500}
             layout="responsive"
             className={styles.image}
           />
         <h3>Malla de roundnet</h3>
         <div className={styles.precio}>₡1.000</div>
      </div>

   </div>

</div>



        </>
     );
}
 
export default Content;