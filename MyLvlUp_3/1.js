






    document.addEventListener('DOMContentLoaded', function () {
        //получения инфо
        let product = document.querySelectorAll(".product"),
            button = document.getElementsByTagName("button"),
            open = document.querySelector(".open"),
            shop = document.querySelector(".shop");
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
        
        
        for (let i=0; i<button.length; i++) {
            button[i].addEventListener("click", function (){
                let item = product[i].cloneNode(true),
                    btn = item.querySelector("button");
                
                btn.classList.add("delete-btn");
                item.classList.add("product-bouth");
                btn.textContent = "Удалить";
                field.appendChild(item);
                product[i].remove();
        
            });
        }
        
        open.addEventListener("click", function () {
           
                let bouthProduct = field.querySelectorAll(".product");
                    removeBtn = field.querySelectorAll(".delete-btn");
        
        
                for (let j=0; j<removeBtn.length; j++) {
                    removeBtn[j].addEventListener("click", function() {
                        let item = bouthProduct[j].cloneNode(true),
                            removeBtn = item.querySelector(".delete-btn");
        
                            removeBtn.classList.add("dj");
                            removeBtn.textContent = "Купить";
                            shop.appendChild(item);
                            bouthProduct[j].remove();
                    });
                }
            
        
           
        });
        
        
        
        function closeBtn () {
            cart.style.display = "none";
            
        };
        
        function openBtn () {
            cart.style.display = "block";
        };
        
        open.addEventListener("click", openBtn);
        close.addEventListener("click", closeBtn);
        
        });