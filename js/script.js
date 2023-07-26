//Importamos el archivos Jsonn
import tablaLibros from "../db-Json/tabla-libros.json" assert{type:"json"}
import librosMasLeidos from "../db-Json/libros-mas-leidos.json" assert{type:"json"}
//leer  nombre de pagina actual
let paginaActual = location.pathname;
console.log(paginaActual);
//Espera que se cargue el DOM para cargar el JS.
window.addEventListener('DOMContentLoaded', cargarContenidoJson);

//FUNCION QUE LEE DATOS DEL JSON Y LOS MUESTRA EN EL NAVEGADOR.
function cargarContenidoJson(){
    //variables seccion nuevos libros
    var idLibro, tituloLibro, fechaSubida, enlace;
    var filatabla = document.querySelector('tbody.elementos-fila');
    var menuEncabezado = document.querySelector('ul.menu-encabezado');
    //variables seccion mas leidos
    var idLibroMasLeido, tituloLibroMasLeido, enlaceLibroMasleido;

    // CARGAR LISTA DE LIBROS EN EL HEADER    
        for(var i=0; i<tablaLibros.length; i++){
            idLibro = tablaLibros[i].id;
            tituloLibro = tablaLibros[i].nombreLibro;
            fechaSubida = tablaLibros[i].fecha;
            enlace = tablaLibros[i].enlace;

            var elmentosLista = document.createElement('LI');
            var enlaceLista = document.createElement('A');
        
            enlaceLista.className = "dropdown-item";
            enlaceLista.href = enlace;
            enlaceLista.textContent = tituloLibro;
        
            elmentosLista.appendChild(enlaceLista);
            menuEncabezado.appendChild(elmentosLista);
        }      

    //ESTO SE EJECUTA SI ESTAMOS EN EL INICIO INDEX.HTML
    if(paginaActual === '/index.html' || paginaActual === '/'){
        //CARGAR CONTENIDO EN LA TABLA DE NUESVOS LIBROS AGREGADOS
        for(var i=0; i<tablaLibros.length; i++){

            idLibro = tablaLibros[i].id;
            tituloLibro = tablaLibros[i].nombreLibro;
            fechaSubida = tablaLibros[i].fecha;
            enlace = tablaLibros[i].enlace;

            //CREAMOS FILAS PARA LA TABLA DE NUEVOS LIBROS
            var fila = document.createElement('TR');
            var colNumID = document.createElement('TH');
            var valorID = document.createElement('A');
            var colNombreLibro= document.createElement('TD');
            var enlaceLibro = document.createElement('A');
            var ColumFecha= document.createElement('TD');

            //CREAMOS LAS PROPIEDADES DE CADA ELEMENTO.
                //propiedad etiqueta ID
                colNumID.scope="row";

                //propiedad etiqueta a de ID
                valorID.classList="nav-link";
                valorID.href="#";
                valorID.textContent = idLibro;

                //propiedad etiqueta a de enlace libro
                enlaceLibro.classList="nav-link";
                enlaceLibro.href = enlace;
                enlaceLibro.textContent = tituloLibro;

                //propiedad etiqueta a columna fecha
                ColumFecha.textContent = fechaSubida;
        
                //EMPAQUETAMOS:
                colNumID.appendChild(valorID);
                colNombreLibro.appendChild(enlaceLibro);

                fila.appendChild(colNumID);
                fila.appendChild(colNombreLibro);
                fila.appendChild(ColumFecha);

                //ENVIAMOS TODO A LA ETIQUETA HTML.
                filatabla.appendChild(fila); 
        }        
        
         //MOSTRAR LOS LIBROS EN LA TABLA DE LIBROS MAS LEIDOS
        for(var i=0; i<librosMasLeidos.length; i++){
            //GENERANDO Y AGREGANDO EL HTML DE A LA TABLA MAS LEIDOS
            idLibroMasLeido = librosMasLeidos[i].id;
            tituloLibroMasLeido = librosMasLeidos[i].nombreLibro;
            enlaceLibroMasleido = librosMasLeidos[i].enlace;

            var tablaLista = document.createElement('TR');
            var idTablaLista = document.createElement('TH');
            var nombrelista = document.createElement('TD');
            var enlaceTablaLista = document.createElement('A');            
        
            idTablaLista.scope = "row";
            idTablaLista.textContent = idLibroMasLeido;

            enlaceTablaLista.className = "nav-link";
            enlaceTablaLista.href = enlaceLibroMasleido;
            enlaceTablaLista.textContent = tituloLibroMasLeido;
        
            nombrelista.appendChild(enlaceTablaLista);
            tablaLista.appendChild(idTablaLista);
            tablaLista.appendChild(nombrelista);
            document.querySelector('tbody.elementos-tabla').appendChild(tablaLista);

        }
    }
    
}
