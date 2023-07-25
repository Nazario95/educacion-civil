$(function(){    
    //variables
    $imagenActual = 0;
    
    //captura de elementos HTML
    $boton = $('button');
    $imgContainer = $('div.cantainer-img > img');
    $errorPagina = $('a');
    $saltarPagina = $('.saltar-pagina');
    $imgLibro = $('.imagen-libro');

// ------------------FUNCIONLIDAD DE CAMBIO DE PAGINA AL HACER CLIC EN EL PAGINADO--------------------
    //FUNCIONES:      
    //cambiar valor de la imagen actual
   function posicionActual($boton){  

        if($boton == 'delante') {
            $imagenActual++
           mostrarImagenActual();
        }  
        if($boton == 'atras') {

            //solucionar error de bucle al pulsar boton atras cuando $imagenActual = 4-3
            if($imagenActual == 4){
                $imagenActual  = 1;
            }else{
                $imagenActual--
            }           
            mostrarImagenActual();
        }        
   }

   function mostrarImagenActual(){
        // manter el rango de imagenes
        $boton.prop("disabled", false);     
        if($imagenActual > 21) {$imagenActual = 0}
        if($imagenActual < 0) {$imagenActual = 21}    
        if($imagenActual == 2 || $imagenActual == 3){$imagenActual = 4}    
        $imgContainer.attr('src', `img/pag ${$imagenActual}.jpg`);   
   }
// EVENTOS: 
    //cambiando imagen al hacer click
   $boton.on('click', e => {
        e.preventDefault();

        // determinar a que boton le hemos hecho clic
        if(e.target.value == 'delante'){           
            posicionActual('delante');
        }

        if(e.target.value == 'atras'){
            posicionActual('atras');
        }
    });

    //saltar de pagina la hacer clic en un paginador
    $saltarPagina.on('click', e=>{
        e.preventDefault();
        $imagenActual = e.target.textContent;
        mostrarImagenActual();        
    });

      //cambiar pagina al hacer clic en la imagen
      $imgLibro .on('click', e=>{
        e.preventDefault();        
        $imagenActual++;
        mostrarImagenActual();        
    });  
});