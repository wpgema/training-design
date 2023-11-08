const ama = new Map([['a', 1], ['b', 2], ["name", "gema"]]);
ama.set('c', 3);
console.log(ama.has("c"));
ama.delete("c");
console.log(ama.size);

console.log(ama.get("name"))

for(const[key, value] of ama){
    console.log(`${key} : ${value}`);
}