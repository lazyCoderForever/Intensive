document.addEventListener('DOMContentLoaded', function () {
    //получения инфо
    let product = document.querySelectorAll(".product"),
        button = document.getElementsByTagName("button"),
        open = document.querySelector(".open"),
        shop = document.querySelector(".shop");

        for (let i=0; i<button.length; i++) {
            button[i].classList.add('buyButton');
        }

        let buttons = document.querySelectorAll('.buyButton');
    //создание объектов для корзины
    function creatModal() {
        let cart = document.createElement("div"),
            field = document.createElement("div"),
            heading = document.createElement("h2"),
            close = document.createElement("div");
    
        cart.classList.add("cart");
        field.classList.add("cart-field");
        close.classList.add("close");
    
        heading.textContent = "Корзина";
        close.textContent = "Закрыть";
        
        document.body.appendChild(cart);// Создали объект в конце body
        cart.appendChild(heading);// Заполняем объект
        cart.appendChild(field);
        cart.appendChild(close);
    
    };
    
    creatModal();
    
    let cart = document.querySelector(".cart"),
        field = document.querySelector(".cart-field"),
        close = document.querySelector(".close");

    
    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", function (){
            if (buttons[i].textContent == 'Купить!') {
            buttons[i].textContent = 'Убрать';
            field.appendChild(product[i]);
            }else {
                buttons[i].textContent = 'Купить!';
                shop.appendChild(product[i]);
            }
        });
    }
    

    
    
    
    function closeBtn () {
        cart.style.display = "none";
    };
    
    function openBtn () {
        cart.style.display = "block";
    };
    
    open.addEventListener("click", openBtn);
    close.addEventListener("click", closeBtn);
    
    });
