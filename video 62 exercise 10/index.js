/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

function generateBusinessName() {
  // Adjectives
  const adjective1 = "Crazy";
  const adjective2 = "Amazing";
  const adjective3 = "Fire";
  
  // Shop Names
  const shopName1 = "Engine";
  const shopName2 = "Foods";
  const shopName3 = "Garments";
  
  // Another Words
  const anotherWord1 = "Bros";
  const anotherWord2 = "Limited";
  const anotherWord3 = "Hub";
  
  // Random selection for each part
  const randomAdjective = Math.floor(Math.random() * 3) + 1;
  const randomShopName = Math.floor(Math.random() * 3) + 1;
  const randomAnotherWord = Math.floor(Math.random() * 3) + 1;
  
  // Select adjective
  let selectedAdjective;
  if (randomAdjective === 1) selectedAdjective = adjective1;
  else if (randomAdjective === 2) selectedAdjective = adjective2;
  else selectedAdjective = adjective3;
  
  // Select shop name
  let selectedShopName;
  if (randomShopName === 1) selectedShopName = shopName1;
  else if (randomShopName === 2) selectedShopName = shopName2;
  else selectedShopName = shopName3;
  
  // Select another word
  let selectedAnotherWord;
  if (randomAnotherWord === 1) selectedAnotherWord = anotherWord1;
  else if (randomAnotherWord === 2) selectedAnotherWord = anotherWord2;
  else selectedAnotherWord = anotherWord3;
  
  // Combine all parts
  return `${selectedAdjective} ${selectedShopName} ${selectedAnotherWord}`;
}

// Generate and display 10 random business names
for (let i = 0; i < 10; i++) {
  console.log(generateBusinessName());
}
