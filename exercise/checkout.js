
let buttonMin1 = document.getElementById('button-minus1');
let buttonPlus1 = document.getElementById('button-plus1');
let quantity = document.getElementById('product-quantity')

buttonMin1.addEventListener('click',()=>{
    if (quantity.innerHTML > 0) {
        quantity.innerHTML -= 1
    }
    
});