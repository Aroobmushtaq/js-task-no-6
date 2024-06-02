// craete an object named car
let car={
    color:"red", model:"500" ,type:"fiat" ,year:"2023"
}
console.log(car)
//Access the model property of the car object
let model=car.model
console.log(`Model of car is ${model}`)
//Modify the year property of the car object
car.year=2024
console.log("updated car",car)
//use loop to print all properties of the car object
for(let pro in car){
    console.log(car[pro])
}
//create an array of car objects and print the detail of each one

let arr=[
    car1={
        color:"red", model:"500" ,type:"fiat" ,year:"2023"
    },
    car2={
        color:"blue", model:"501" ,type:"fiat" ,year:"2022"
    },
    car3={
        color:"green", model:"502" ,type:"fiat" ,year:"2021"
    }

    
]
for(let val in arr){
    console.log(arr[val])
}
//create a person object with a nested address object
let person={
    name:"Ali",age:21,color:"fair",addres:{
        city:"FSD",colony:"model town",houseno:123
    }
    
}
console.log(person)
//add a function to the car object to describe it
car.desc=function(){
    return `This is a ${this.color} ${this.model} ${this.type} from ${this.year}`
}
console.log(car.desc());
//write constructor function to create a person object
function per(name,age ,address){
    this.name=name;
    this.age=age;
    this.address=address;
};
let per1=new per("bilal",21,"lahore")
console.log(per1)