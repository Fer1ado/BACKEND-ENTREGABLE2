

import ProductManager from "./Clases/productManager.js";
import Product from "./Clases/Productos.js";


////////////////////////////////////////////////////////////////////////////////////////
///CREACION DE ITEMS

const producto1 = new Product("manzana", "roja", 550, "http://thumbnail.com", "MM284", 76)
const producto2 = new Product("pera", "verde", 687, "http://thumbnail.com", "MM248", 54)
const producto3 = new Product("mandarina", "naranja", 354, "http://thumbnail.com", "MA275", 206)
const producto4 = new Product("Piña", "dulce", 845, [], "PI265", 126)
const productofallido = new Product("casona de la esquina antigua","","")

const ejecutar = new ProductManager()

//////////////////////// CREAR TODOS LOS PRODUCTOS ////////////////////////////////////

/* ejecutar.addProduct(producto1)
ejecutar.addProduct(producto2)
ejecutar.addProduct(producto3)
ejecutar.addProduct(producto4) // producto con array vacio
ejecutar.addProduct(producto4) // producto ya agregado
ejecutar.addProduct(productofallido) // producto que no cumple con criterio */




//////////////////////////////////////////////////////////////////////////////////////

/////////////////// npm start para correr el programa/////////////////////////////////

/////////// DESCOMENTAR COMANDOS PARA REALIZAR EL TESTING/////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////



console.log(await ejecutar.getProducts()) // DEVUELVE EL LISTADO COMPLETO

//console.log(await ejecutar.getProductById(4)) /// BUSCAR PRODUCTO POR ID

//console.log(await ejecutar.getProductById(18)) /// ID NO ENCONTRADO

//console.log(await ejecutar.updateProduct(1, {tit: "lasagña", des: "bla bla bla", pri: 4541, sto: 56, cod: "MM247", tumb: ""})) // EDITAR PRODUCTO

//console.log(await ejecutar.deleteProduct(3)) // ELIMINAR PRODUCTO