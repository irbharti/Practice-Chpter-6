// modeling a dog

const dog = {
  name: "Fang",
  species: "boarhound",
  size: 75,
  sound: "Grrr, Grrr!",


  bark(){
    return this.sound;
  },
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);








