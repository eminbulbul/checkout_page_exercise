const taxRate =0.18;
const shippingPrice = 15.0;

window.addEventListener('load',()=>{
    localStorage.setItem('taxRate',taxRate); //burada tutulan veriler string formatindadir.
    localStorage.setItem('shippingPrize',shippingPrice)

    sessionStorage.setItem('taxRate',taxRate);
    sessionStorage.setItem('shippingPrize',shippingPrice)
    //browser kapatilirsa session storage gider local storage kalir.

});

//capturing
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e)=>{
    // console.log(event.target);
    //minus buttons
    if (e.target.classList.contains("fa-minus")) {
        console.log("minusBtn clicked");
    }

    //plus buttons
    else if(e.target.className == "fas fa-plus"){
        console.log("plusBtn clicked");
    }

    //remove buttons
    else if(e.target.className == "remove-product"){
        console.log("removeBtn clicked");

    }
})