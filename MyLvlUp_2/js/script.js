let modal = document.querySelector(".modal"),
    receiveBtn = document.querySelectorAll(".main_btn")[0],
    close = document.querySelector(".close"),
    modalName = document.getElementsByName("name")[0];
    modalPhone = document.getElementsByName("phone")[0];
    modalEmail = document.getElementsByName("mail")[0];
    modalDescription = document.getElementsByName("message")[0];

const openModal = () => {
   modal.style.display = "block";
};

const closeModal = () => {
    modal.style.display = "none";
};

const getInfo = () => {
    var name = modalName.value,
        phone = modalPhone.value,
        mail = modalEmail.value;
       /*  massega = modalDescription.value; */
        
        if (name == "" && phone =="" && mail == "") {
            return modalDescription.value = "Нужно заполнить хотя бы одно поле!";
        }
        else if ((name != "") && phone == "" && mail =="") {
            return modalDescription.value = "Здравствуйте, меня зовут " + name + ", я бы хотел задать вопрос";
        }
        else if ((name != "" && phone != "") && mail =="") {
            return modalDescription.value = "Здравствуйте, меня зовут " + name +  ". Мой телефон: " + phone + ", я бы хотел задать вопрос";
        }
        else if ((name != "" && mail != "") && phone ==""){
            return modalDescription.value = "Здравствуйте, меня зовут " + name +  ". Моя почта: " +  mail + " , я бы хотел задать вопрос";
        }
        else {
            return modalDescription.value = "Здравствуйте, меня зовут " + name + ". Мой телефон: " + phone + ". Моя почта: " +  mail + " , я бы хотел задать вопрос";
        }
    
};




modal.addEventListener("input", getInfo);

receiveBtn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);

