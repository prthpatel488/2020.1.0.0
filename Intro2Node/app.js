var seeder = require("faker");

console.log("~~~Welcome to MyShop~~~");

for(i=0;i<=10;i++){
  console.log(seeder.commerce.productName() + " - $" +seeder.commerce.price());
}

