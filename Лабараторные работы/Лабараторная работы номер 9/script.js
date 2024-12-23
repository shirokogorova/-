function firstZd(){
let user={
    name:"ivan",
    surname:"ivanov",
    age:"18",
    country:"Russia",
    phonenumber:"+7-(968)-523-22-65",

    sayInf() {
        alert(this.name);
        alert(this.surname);
        alert(this.age);
    }
};

user.sayInf();
}

function secondZd(){
    let order={
        date:"14.12.2024",
        sum:"1500 руб",
        rest:"Rostics",

        sayInfo(){
            alert(this.date);
            alert(this.sum);
            alert(this.rest); 
        }
    };
order.sayInfo();
}

function thirdZd(){
    let rests={
        firstRest:"The Бык",
        secondRest:"Белуга",
        thirdRest:"Rostics",

        sayRest(){
            alert(this.firstRest);
            alert(this.secondRest);
            alert(this.thirdRest);
        }
    }
rests.sayRest();
}


function fourthZd(){
function User(name) {
    this.name = name;
}

User.prototype.sayName = function() {
    alert(this.name);
};

let member1 = new User("Иван");
let member2 = new User("Марина");
let member3 = new User("Сергей");

member1.sayName();
member2.sayName();
member3.sayName();
}
