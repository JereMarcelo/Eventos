const products = [
    { id: 0, name: 'Mancuernas', price: 5000, category: "Productos", img: 'https://http2.mlstatic.com/D_NQ_NP_984611-MLA31466353739_072019-O.webp'},
    { id: 1, name: 'Zapatillas nike', price: 15000, category: "Indumentaria", img: 'https://i0.wp.com/elplanetaurbano.com/wp-content/uploads/2017/04/Nike-Metcon-3.jpg?fit=663%2C364&ssl=1' },
    { id: 2, name: 'Barras', price: 6000, category: "Productos", img: 'https://http2.mlstatic.com/D_NQ_NP_822704-MLA31032027672_062019-O.jpg'},
    { id: 3, name: 'Remeras', price: 4000, category: "Indumentaria", img:'https://http2.mlstatic.com/D_NQ_NP_659804-MLA45548924743_042021-O.webp'},
];
let cart = [];

function renderProducts() {
  let html = "";
  for (let i = 0; i < products.length; i++) {
    html = html + 
      `
    <div onclick="addToCart(${products[i].id});" style='border: 1px solid green;margin: 10px;'>
      <p>id: ${products[i].id}</p>
      <p>nombre: ${products[i].name}</p> 
      <p>precio: ${products[i].price}</p>
      <p>categoria: ${products[i].category}</p>
      <p>
        <img style= "width:200px;height:200px;" src="${products[i].img}" />
      </p>
    </div>
    `;
  }
  document.getElementById('div-products').innerHTML = html;
}

function renderCart() {
    let html = "";
    for (let i = 0; i < cart.length; i++) {
      html = html + 
      `
      <div style="border: 1px solid green;margin: 10px">
        <p>id: ${cart[i].id}</p>
        <p>nombre: ${cart[i].name}</p> 
        <p>precio: ${cart[i].price}</p>
        <p>categoria: ${cart[i].category}</p>
        <p>
          <img style="width:200px;height:200px;" src="${cart[i].img}" />
        </p>
        <span style="cursor:pointer;" onclick=removeFromCart(${cart[i].id});">🛒</span>
      </div>
      `;
    }
    document.getElementById("div-cart").innerHTML = html;
}
function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
  cart.push(foundProduct);
  
  renderCart();
  
}

function removeFromCart(id) {
  cart.splice(id, 1); 
 
 renderCart();
}
renderProducts();


let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    
    e.preventDefault();
    
    let formulario = e.target
    
    console.log(formulario.children[0].value); 
     
    console.log(formulario.children[1].value);  
}
