$(function(){
    //DesabilitarCopiar IMG
    document.oncontextmenu = function(){return false}
    
    //variables
    $imagenActual = 1;

    //captura de elementos
    $boton = $('button');
    $imagen = $('img.img-fluid'); 

    //autollamar funcion para mostrar imagen por primera vez
    mostrarImagenActual();

    //funciones
   function posicionActual($boton){  
        //console.log($boton);

        if($boton == 'delante') {
            //console.log($imagenActual++);
            $imagenActual++
           mostrarImagenActual();
        }  
        if($boton == 'atras') {
            //console.log($imagenActual--);
            $imagenActual--
            mostrarImagenActual();
        } 
       
   }

   function mostrarImagenActual(){ 
    //console.log($imagenActual);

        // manter el rango de imagenes
        if($imagenActual > $imagen.length) {$imagenActual = 1}
        if($imagenActual < 1) {$imagenActual = $imagen.length}

        //ocultando todas las imagenes
        var i;
        for (i = 0; i < $imagen.length; i++) {
            $imagen[i].style.display = "none";  
        }

        // mostrando solo imagen actual
        $imagen[$imagenActual - 1].style.display = "block";  
   }

   // cambiando imagen al hacer click
   $boton.on('click', e => {
        e.preventDefault();

        // determinar a que boton le hemos hecho clic
        if(e.target.value == 'delante'){            
           // console.log('mostrando la imagen siguiente');
            posicionActual('delante');
        }

        if(e.target.value == 'atras'){
           // console.log('mostrando la imagen anterior');
            posicionActual('atras');
        }

    });
});
