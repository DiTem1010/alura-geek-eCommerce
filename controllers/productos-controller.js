import { productoServices } from "../servicios/productos-servicios.js";    

const nuevoProducto = (name,price,imageUrl) =>{  
    const card = document.createElement("div");

    const contenido = 
    ` <div>
    <img src="${imageUrl}" alt="">
    <p>${name}</p>
    <p>${price}</p>
    <a href="">Ver Producto</a>
    </div>
     `
     
     card.innerHTML = contenido;      
    card.classList.add("produto");      
    return card;                    
}

const producto = document.querySelector("[datos-productos]"); 
const consolas = document.querySelector("[datos-consolas]");
const diversos = document.querySelector("[datos-diversos]")

const render = async () =>{
    try{
        const listaProductos = await productoServices.listaProductos(); 
        listaProductos.forEach(elemento => {
            if(elemento.section== "Star Wars")
            producto.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));
           
            else if(elemento.section === "Consolas")
            consolas.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));
            
            else if(elemento.section === "Diversos")
            diversos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl));

        });
    }
    catch(erro){console.log(erro);}
}

render();
