import Image from "next/image";
import styles from "./content.module.scss"


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




<section class="icons-container">



    <div class="icons">
        <i class="fas fa-lock"></i>
        <div class="content">
            <h3>Metodo de pago seguro</h3>
            <p>Metodo de pago 100% seguro</p>
        </div>
    </div>

    <div class="icons">
        <i class="fas fa-shipping-fast"></i>
        <div class="content">
            <h3>Envio incluido</h3>
            <p>No tendras que pagar doble</p>
        </div>
    </div>    

    <div class="icons">
        <i class="fas fa-paper-plane"></i>
        <div class="content">
            <h3>Contacto sencillo</h3>
            <p>Puedes comunicarte con nosotros y te atenderemos apenas podamos</p>
        </div>
    </div>

    <div class="icons">
        <i class="fas fa-smile"></i>
        <div class="content">
            <h3>Clientes felices</h3>
            <p>Queremos hacer todo lo posible por satisfacer tus necesidades</p>
        </div>
    </div>   



</section>



<section class="anuncio">

    <div class="content">
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







   
<div class="container">

	
   <h2 class="presentacion">Nuestros productos </h2>
   <h3 class="titulo">Paquetes </h3>

   <div class="productos-container">

      <div class="producto" data-name="p-1">
         <img src="/public/images/Aro.jpg" alt=""/>
         <h3>Aro de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-2">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-3">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas profesionales de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-4">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Aro profesional de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-5">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolsa de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-6">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Malla de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

   </div>

</div>




<div class="container">

   <h3 class="titulo">Insumos deportivos  </h3>

   <div class="productos-container">

      <div class="producto" data-name="p-1">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Aro de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-2">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-3">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas profesionales de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-4">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Aro profesional de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-5">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolsa de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-6">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Malla de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

   </div>

</div>




<div class="container">

   <h3 class="titulo">Ropa y uniformes </h3>

   <div class="productos-container">

      <div class="producto" data-name="p-1">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Aro de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-2">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-3">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolas profesionales de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-4">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Aro profesional de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-5">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Bolsa de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

      <div class="producto" data-name="p-6">
         <img src="Imagenes/Aro.jpg" alt=""/>
         <h3>Malla de roundnet</h3>
         <div class="precio">₡1.000</div>
      </div>

   </div>

</div>
        </>
     );
}
 
export default Content;