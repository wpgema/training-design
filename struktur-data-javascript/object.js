const obj = {
    name : "gema",
    age : 20,
    sayName: function(pesan){
        console.log(`${pesan} ${this.name}`);
    }
}

console.log(obj);

obj.hobby = "coding"

console.log(obj["hobby"]);

console.log(obj);

obj.sayName("halo");

delete obj.hobby

console.log(obj.hobby);