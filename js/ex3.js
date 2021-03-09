//modeling circle
const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object her
const circle = {
  radius: r,
  circumference: function(){
    return 2 * Math.PI * this.radius;
  },
  area: function(){
    return this.radius * this.radius * Math.PI;
  },   
};
  
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);