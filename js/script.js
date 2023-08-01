//CONSTANTES

const autopartes = {

  autopartes : [
    { numero: "1", nombre: "KIT-CAMBIO",valor: 1000 , img: "./img/kitcambio.jpg", tipos: ["Piezas mecanicas"] },
    { numero: "2", nombre: "KIT-MOTOR",valor: 5000 , img: "./img/kitmotor.jpg", tipos: ["Piezas mecanicas"] },
    { numero: "3", nombre: "KIT-FRENOS",valor: 1400 , img: "./img/kitfrenos.jpg", tipos: ["Piezas mecanicas"] },
    { numero: "4", nombre: "KIT-ESCAPE",valor: 1300 , img: "./img/kitescape.jpg", tipos: ["Piezas mecanicas"] },
    { numero: "5", nombre: "KIT-METALES",valor: 3000 , img: "./img/kitmetales.jpg", tipos: ["Piezas mecanicas"] },
    { numero: "6", nombre: "BODY-KIT",valor: 4500 , img: "./img/bodykit.jpg", tipos: ["Piezas esteticas"] },
    { numero: "7", nombre: "KIT-LLANTAS",valor: 1200 , img: "./img/kitllantas.jpg", tipos: ["Piezas esteticas"] },
    { numero: "8", nombre: "KIT-POLARIZADO",valor: 800 , img: "./img/kitpolarizado.jpg", tipos: ["Piezas esteticas"] },
    { numero: "9", nombre: "KIT-CALCOMANIAS",valor: 500 , img: "./img/kitcalcomanias.jpg", tipos: ["Piezas esteticas"] },
    { numero: "10", nombre: "KIT-LUZ-NEON",valor: 900 , img: "./img/kitneon.jpg", tipos: ["Piezas esteticas"] }
    ],
}

const cambioModo = document.getElementById("cambio_modo");
const body = document.body;

const botonTodasPiezas = document.getElementById("todasPiezas_id");
const botonPiezasMec = document.getElementById("piezas_mec_id");
const botonPiezasEst = document.getElementById("piezas_est_id");
const autoPartesContent = document.getElementById("autoPartesContent");
const autoParteBoxConteiner = document.getElementById("autoParteBoxCont");
const listaAgregados = [];
const cajasOcupadas=[];

// CAMBIO DE MODO

const modoActual = localStorage.getItem("modo");
if (modoActual) {
  body.classList.add(modoActual);
}

cambioModo.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("modo", "light-mode");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("modo", "dark-mode");
  }
});

//BOTONES


// GUARDAR LA LISTA EN JSON

function guardarAutopartes() {
  localStorage.setItem("autoPartes_U", JSON.stringify(listaAgregados));
}

// LOCAL STORAGE

window.addEventListener("load", function() {
  const storedAutopartes = localStorage.getItem("autoPartes_U");
  if (storedAutopartes) {
    const parsedAutopartes = JSON.parse(storedAutopartes);
    listaAgregados.push(...parsedAutopartes);
    mostrarAutopartesAgregados();
  }
});


// FUNCION PARA MOSTRAR TODOS LOS PRODUCTOS

botonTodasPiezas.addEventListener("click", function() {
  const autoPartesContent = document.getElementById("autoPartesContent");

  autoPartesContent.innerHTML = '';

  autopartes.autopartes.forEach(function(autoParte) {
    mostrarAutopartes(autoParte, autoPartesContent);
  });
  function mostrarAutopartes(autoParte, container) {
    const tipos = autoParte.tipos.join(', ');
  
    const autoPartesElement = document.createElement("div");
    autoPartesElement.classList.add("autoParte");
    autoPartesElement.innerHTML = `

    <p><b>Número:</b> ${autoParte.numero}</p>
    <p><b>Nombre:</b> ${autoParte.nombre}</p>
    <p><b>Tipos:</b> ${tipos}</p>
    <p><b>Valor:</b> ${autoParte.valor}</p>
    <img class="img-productos" src=${autoParte.img}></img>
    <button id="${autoParte.numero}">Ingresar</button>
	`;
    
  
    container.appendChild(autoPartesElement);

    let agregador = activarBoton(autoParte.numero);
    agregador.addEventListener("click",function(){
      agregarLista(autoParte);
    })
  }
});


// FUNCION PARA MOSTRAR MEC

botonPiezasMec.addEventListener("click", function() {
  const autoPartesContent = document.getElementById("autoPartesContent");

  autoPartesContent.innerHTML = '';

  autopartes.autopartes.forEach(function(autoParte) {
    mostrarAutopartes(autoParte, autoPartesContent);
  });
  function mostrarAutopartes(autoParte, container) {
    const tipos = autoParte.tipos.join(', ');
    if(tipos=="Piezas mecanicas"){

    
    
      const autoPartesElement = document.createElement("div");
      autoPartesElement.classList.add("autoParte");
      autoPartesElement.innerHTML = `

      <p><b>Número:</b> ${autoParte.numero}</p>
      <p><b>Nombre:</b> ${autoParte.nombre}</p>
      <p><b>Tipos:</b> ${tipos}</p>
      <p><b>Valor:</b> ${autoParte.valor}</p>
      <img class="img-productos" src=${autoParte.img}></img>
      <button id="${autoParte.numero}">Ingresar</button>
    `;
      
    
      container.appendChild(autoPartesElement);

      let agregador = activarBoton(autoParte.numero);
      agregador.addEventListener("click",function(){
        agregarLista(autoParte);
    })
  }
}
});

// FUNCION PARA MOSTRAR EST

botonPiezasEst.addEventListener("click", function() {
  const autoPartesContent = document.getElementById("autoPartesContent");

  autoPartesContent.innerHTML = '';

  autopartes.autopartes.forEach(function(autoParte) {
    mostrarAutopartes(autoParte, autoPartesContent);
  });
  function mostrarAutopartes(autoParte, container) {
    const tipos = autoParte.tipos.join(', ');
    if(tipos=="Piezas esteticas"){

    
    
      const autoPartesElement = document.createElement("div");
      autoPartesElement.classList.add("autoParte");
      autoPartesElement.innerHTML = `

      <p><b>Número:</b> ${autoParte.numero}</p>
      <p><b>Nombre:</b> ${autoParte.nombre}</p>
      <p><b>Tipos:</b> ${tipos}</p>
      <p><b>Valor:</b> ${autoParte.valor}</p>
      <img class="img-productos" src=${autoParte.img}></img>
      <button id="${autoParte.numero}">Ingresar</button>
    `;
      
    
      container.appendChild(autoPartesElement);

      let agregador = activarBoton(autoParte.numero);
      agregador.addEventListener("click",function(){
        agregarLista(autoParte);
    })
  }
}
});
// ACTIVADOR DE BOTON

function activarBoton(id){
  const btnID = document.getElementById(id)
  return btnID
}

// FUNCIÓN PARA AGREGARLOS A LA LISTA

function agregarLista(autoParte) {
  listaAgregados.push(autoParte);
  mostrarAutopartesAgregados();
  guardarAutopartes();
  
  
}

// FUNCION PARA MOSTRAR LOS PRODUCTOS DE LA LISTA

function mostrarAutopartesAgregados() {
  autoParteBoxConteiner.innerHTML = '';
  
 
    for (x in listaAgregados) {
      let auto = "piezaCaja" + listaAgregados[x].numero.toString();

      const autoParteBoxElement = document.createElement("div");
      autoParteBoxElement.id = auto;
      autoParteBoxElement.classList.add(auto);

      const content = document.createElement("div");
      content.innerHTML = `
      
	      <p><b>Número:</b> ${listaAgregados[x].numero}</p>
        <p><b>Nombre:</b> ${listaAgregados[x].nombre}</p>
        <button id=${listaAgregados[x].nombre} class="boton-eliminar eliminar-${auto}">Eliminar</button><br>`;
      
      autoParteBoxElement.appendChild(content);
      autoParteBoxConteiner.appendChild(autoParteBoxElement);
      cajasOcupadas.push(auto);
    }
  

  const eliminarAutopartess = document.querySelectorAll(".boton-eliminar");
  eliminarAutopartess.forEach(btn => {
    btn.addEventListener('click', function() {

      const nombreAutoParte = btn.id;
      
      eliminarAutopartes(nombreAutoParte);
      const divAutoparte = btn.parentNode.parentNode;
      divAutoparte.remove();
    });
  });
  guardarAutopartes();
}

// FUNCIÓN PARA BOTON ELIMINAR

function eliminarAutopartes(nombreAutoParte) {
  for (x in listaAgregados){
    if(listaAgregados[x].nombre==nombreAutoParte){
    
      listaAgregados.splice(x,1)
    }

  }
  const index = listaAgregados.findIndex(autoParte => autoParte.nombre === nombreAutoParte);

  if (index !== -1) {
  
    listaAgregados.splice(index, 1);
  }
  
  guardarAutopartes();

}


// FUNCION PARA MOSTRAR EL PRODUCTO BUSCADO

function mostrarAutopartes(autoParte) {
  
  if (autoParte){
    const tipos = autoParte.tipos.join(', ');

    const autoPartesElement = document.createElement("div");
    autoPartesElement.classList.add("autoParte");
    autoPartesElement.innerHTML = `
    
    <p><b>Número:</b> ${autoParte.numero}</p>
    <p><b>Nombre:</b> ${autoParte.nombre}</p>
    <p><b>Tipos:</b> ${tipos}</p>
    <button id="${autoParte.numero}">Ingresar</button>
    `;

    autoPartesContent.innerHTML = '';

    autoPartesContent.appendChild(autoPartesElement);

    let agregador = activarBoton(autoParte.numero);
    agregador.addEventListener("click",function(){
      agregarLista(autoParte);
    })
  }

  else{
    const autoPartesElement = document.createElement("div");
    autoPartesElement.classList.add("autoParte");
    autoPartesElement.innerHTML = `

    <p>NO EXISTE</p>
    <p></p>`;

    autoPartesContent.innerHTML = '';
    autoPartesContent.appendChild(autoPartesElement);
  }
}