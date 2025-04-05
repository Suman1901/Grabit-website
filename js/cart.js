const cardIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart-sec");

const addCartButtons = document.querySelector(".add-cart");

addCartButtons.forEach((button) =>{
    button.addEventlistener("click",(events)=>{
        const productBox = events.target.closest(".deal-img-sec");
        addToCart(productBox);
    })
})

const addToCart = (productBox)=>{
    const productImgSrc = productBox.querySelector("img").src;
    const productTitle = productBox.querySelector(".product-name").textContent;
    const productPrice = productBox.querySelector(".dalar").textContent;

    const cartBox = document.createElement('div');
    cartBox.classList.add("cart-box")
    cartBox.innerHTML = `
        <table class="table cart-box">
                <thead>
                    <tr>
                        <th class="table-head">Image</th>
                        <th class="table-head">Name</th>
                        <th class="table-head">Price</th>
                        <th class="table-head">Quantity</th>
                        <th class="table-head">Total</th>
                        <th class="table-head">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="$(productImgSrc)" width="50"/>
                        </td>
                        <td class="product-name">$(productTitle)</td>
                        <td class="dalar">$70</td>
                        <td class="cart-quantity">
                            <div class="quantity-sec">
                                <button class="decrement">-</button>
                                <span class="number">1</span>
                                <button class="increment">+</button>
                            </div>
                        </td>
                        <td class="dalar">$(productPrice)</td>
                        <td>
                            <div class="cross-btn">
                                <button type="button" class="belet-btn"><i class="far fa-trash-alt"></i></button>
                                
                            </div>
                        </td>
                    </tr>
                </tbody>
    `
}

