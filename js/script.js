import tablaLibros from "../db-Json/tabla-libros.json" assert{type:"json"}

window.addEventListener('DOMContentLoaded',()=> {    
    
    var btnBuscar = document.querySelector('a.realizar-busqueda'); 

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
