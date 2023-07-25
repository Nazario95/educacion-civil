import tablaLibros from "../db-Json/tabla-libros.json" assert{type:"json"}

window.addEventListener('DOMContentLoaded',()=> {    
    
    var btnBuscar = document.querySelector('a.realizar-busqueda'); 
    
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
    btnBuscar.addEventListener('click',()=>{
        var valoresEncontrados = 0;
        var capturarValorinput = document.querySelector('input').value;

        for(var i=0;i<tablaLibros.length;i++){
            
            var nombreLibro = tablaLibros[i].nombreLibro;
            var enlaceLibro = tablaLibros[i].enlace;
            console.log(enlaceLibro);

            if(capturarValorinput === nombreLibro){
                var agregarLibroEncontrado = document.querySelector('.card');

                var crearEnlaceNombreLibro = document.createElement('A');
                crearEnlaceNombreLibro.href = enlaceLibro;
                crearEnlaceNombreLibro.style = "text-decoration: none; color: black;";
                
                crearEnlaceNombreLibro.textContent = nombreLibro;

                agregarLibroEncontrado.appendChild(crearEnlaceNombreLibro);
            }
        }
    })
    
});
