function  myFirstApp(name, age) {
    alert ("Привет, меня зову " + name + " и это моя первая программа!");

    const showSkills = () => {
        let skills = ["HTML ", " CSS ", " Js в процессе" ];

        for (let i=0; i < skills.length; i++) {
            document.write(skills[i]);
            document.write('<br>');
        }
    };

    showSkills();

    const checkAge = () => {
        if (age > 18) {
            alert ("Да вы уже взрослый, вход открыт!");
        }
        else {
            alert ("Все еще сидишь на шее у родителей?");
        }
    };

    checkAge();

    const calcPow = (num) => {
       return console.log(num * num);
    };

    calcPow(4);

};

myFirstApp("Roman", 12);