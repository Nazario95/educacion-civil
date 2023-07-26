window.addEventListener('DOMContentLoaded', function(){
    inyectarHead();
    inyectarMenu();
    inyecFooter();
    //leyendo pagina actual
    let nombrepaginaActual  = location.pathname;
    //inyectando codigo segun pagina actual
    if(nombrepaginaActual === '/educacion-civil/guia-justicia.html'){inyectarMenu(); inyectarEnlibros();}
});

//GLOBALES PARA TODAS LAS PAGINAS
//HEAD
function inyectarHead(){
    const cargarHead = document.querySelector('head');
    cargarHead.innerHTML = `
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="icon/icon-sm.png" type="image/png">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/estilos.css">
        <title>Guinea-Libros</title>
    `;
}

// MENU HEADER
function inyectarMenu(){
    const cargarMenu = document.querySelector('header.cargar-menu');
    cargarMenu.innerHTML = `<br><nav class="navbar navbar-expand-lg bg-dark">    
                    <div class="container-fluid">    
                      <a class="btn btn-light btn-negro separar" href="index.html">Inicio</a>    
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>    
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">    
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                              <li class="nav-item dropdown">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Ver Libros
                                </a>
                                <ul class="dropdown-menu menu-encabezado"></ul>
                              </li>    
                          </ul>    
                          <form class="d-flex" role="search">
                            <input class="form-control me-2 buscar" type="search" aria-label="Search">

                            <a class="btn btn-secondary realizar-busqueda" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Buscar</a>>

                          </form>              
                      </div>
                    </div>   
                </nav>`;
}

//FOOTER
function inyecFooter(){
    const cargarFooter = document.querySelector('footer.cargar-footer');

    cargarFooter.innerHTML = `
            <div class="centrar">
            <a class="btn" style="color: aliceblue;" href="https://www.instagram.com/nazza_reg95/" target="_blank">Dev. @NazzaReg</a>
            </div>
        `;
}

//CODIGO SECCION LIBRO
function inyectarEnlibros(){
    //PAGINADOR DEL LIBRO
    const cargarFooter = document.querySelector('div.estilo-footer');
    cargarFooter.innerHTML = `
            <button type="button" class="btn btn-outline-secondary" value="atras"> << </button>
            <div class="btn-toolbar">
              <div class="btn-group">
                <button type="button" class="btn btn-outline-secondary  saltar-pagina">5</button>
                <button type="button" class="btn btn-outline-secondary  saltar-pagina">10</button>
                <button type="button" class="btn btn-outline-secondary  saltar-pagina">15</button>
                <button type="button" class="btn btn-outline-secondary  saltar-pagina">20</button>
              </div>
            </div>            
            <button type="button" class="btn btn-outline-secondary" value="delante"> >> </button>    
    `;
    //IMAGENES DEL LIBRO
    const cargandoContenido = document.querySelector('div.cargar-contenido');
    cargandoContenido.innerHTML = `<img  class="img-fluid img-small imagen-libro" src="img/pag 0.jpg">`;
}


