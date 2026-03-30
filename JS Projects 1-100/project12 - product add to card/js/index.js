const btnopen = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnclose = document.querySelector('#cart-close');

btnopen.addEventListener('click', () => {
    cart.classList.add('cart-active');
})

btnclose.addEventListener('click', () => {
    cart.classList.remove('cart-active');
})

document.addEventListener('DOMContentLoaded', loadfood);

function loadfood() {
    loadcontent();
}

function loadcontent() {
    let btnremove = document.querySelectorAll('.cart-remove');
    btnremove.forEach((btn) => {
        btn.addEventListener('click', removeitems);
    });

    let qtyElement = document.querySelectorAll('.cart-quantity');
    qtyElement.forEach((input) => {
        input.addEventListener('change', changeqty);
    });

    //product cart

    let cartbtns = document.querySelectorAll('.add-cart');
    cartbtns.forEach((btns) => {
        btns.addEventListener('click', addcart);
    });
    updateTotal();
}

//remove item
function removeitems() {
    if (confirm('Are Your Sure to Remove?')) {
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter((el) => el.title != title)
        this.parentElement.remove();
        loadcontent();

    }
}

//chnage qty
function changeqty() {
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    loadcontent();
}


let itemList = []

//add cart
function addcart() {
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgSrc = food.querySelector('.food-img').src;
    //console.log(title,price,imgsrc)

    let newProduct = { title, price, imgSrc }

    //check product already exist in cart
    if (itemList.find((el) => el.title == newProduct.title)) {
        alert('product already added in cart');
        return;
    }
    else {
        itemList.push(newProduct)
    }

    let newproductElement = createCartContent(title, price, imgSrc)

    let element = document.createElement('div');
    element.innerHTML = newproductElement
    let cartbasket = document.querySelector('.cart-content');
    cartbasket.append(element);
    loadcontent();
}

function createCartContent(title, price, imgSrc) {

    return `
    <div class="cart-box">
    <img src="${imgSrc}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">
    </div>
    <ion-icon class="cart-remove" name="trash"></ion-icon>  
</div>`

}

function updateTotal() {
    const cartItems = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0;

    cartItems.forEach(product => {
        let priceElement = product.querySelector('.cart-price');
        let price = parseFloat(priceElement.innerHTML.replace("Rs.", ""));
        let qty = product.querySelector('.cart-quantity').value;
        total += (price * qty);
        product.querySelector('.cart-amt').innerText = "Rs." + (price * qty);
    });
    totalValue.innerHTML = "Rs." + total;

    // add product count in cart icon

    const cartCount = document.querySelector('#cart-count');
    let count = itemList.length;
    cartCount.innerHTML = count;

    if (count == 0) {
        cartCount.style.display = 'none';
    }
    else {
        cartCount.style.display = 'block';
    }
}