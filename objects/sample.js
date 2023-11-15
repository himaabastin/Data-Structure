const instructor = {
  name: "Hima",
  isActive: true,
  age: 22,
};
console.log(Object.keys(instructor)); // O(n)
console.log(Object.values(instructor)); // O(n)
console.log(Object.entries(instructor)); // O(n)

// as they should go through each one as n grows

console.log(Object.hasOwnProperty("name")); // O(1)

// Since objects have keys and they can be accessed directly
