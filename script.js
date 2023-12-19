import { showSection } from './UI/Section.js'
import { Product  } from './Data/Product.js'

const listLink = document.getElementById('listLink')
const newLink = document.getElementById('newLink')
const productTableBody = document.getElementById('productTableBody')


const baseApi = 'https://fakestoreapi.com/products' 

newLink.addEventListener("click",()=>{ 
    showSection("sectionNew")
})

listLink.addEventListener("click",()=>{ 
    showSection("sectionList")
})

function renderTr(product){
    // jsCall = editProduct(18)
    // jsCall = editProduct(19)
    let template = `<tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.color}</td>
                        <td><a href="#">EDIT</td>
                    </tr>`
    productTableBody.innerHTML = productTableBody.innerHTML + template;
} 

function refreshItems(){
    productTableBody.innerHTML = '';    
    //  THEN är som "addEventListener" dvs det är en eventHandler som anropas senare - vid ett tillfälle
    // JSON och Javascript OBJECT är SAMMA SAK
    fetch(baseApi)
        .then( response => response.json() )
        .then( array=>{
            array.forEach(prod=>{
                let p = new Product(prod.id,
                    prod.title,
                    prod.price,
                    prod.category)                    
                renderTr(p)
            });
        } );
    let x = 12            
}


refreshItems()

showSection("sectionList")


