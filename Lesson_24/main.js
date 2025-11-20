//=============================
//* Part 1: The Grocery List
//=============================

const groceriesList = [ 
  { name: "apple", amount: 5, bought: false },
  { name: "milk", amount: 1, bought: true },
  { name: "bread", amount: 2, bought: true },
  { name: "egg", amount: 10, bought: false }
];
 
function displayGroceries() {
  const sortedList = [...groceriesList].sort((a, b) => a.bought - b.bought);
  return sortedList;
}

function addItem(name, amount) {
  const existingItem = groceriesList.find(item => 
    item.name.toLowerCase() === name.toLowerCase());

  if (existingItem) {
    existingItem.amount += amount;
    existingItem.bought = false;
    return `Increased ${name} quantity by ${amount}, now you have to buy more ${name}`;
  } else {
    groceriesList.push({ name, amount, bought: false });
    return `Added ${name} to grocery list`;
  }
}

function purchaseItem(name) {
  const item = groceriesList.find(item => 
    item.name.toLowerCase() === name.toLowerCase());

  if (item && item.bought === false) {
    item.bought = true;
    return `${name} item is successfully purchased`;
  } else {
    return `Item ${name} is not in a list or already purchased`;
  }
}

//================================
//*Part 2: The Shopping Receipt
//================================

const shoppingReceipt = [
  { name: "Notebook", amount: 3, pricePerItem: 2.99 },
  { name: "Pen", amount: 5, pricePerItem: 1.25 },
  { name: "USB Cable", amount: 2, pricePerItem: 8.99 },
  { name: "Phone Case", amount: 1, pricePerItem: 15.99 },
  { name: "Headphones", amount: 1, pricePerItem: 45.00 },
  { name: "T-shirt", amount: 2, pricePerItem: 12.50 },
  { name: "Socks", amount: 4, pricePerItem: 3.75 }
];

function printReceipt() {
  console.log(`================================
        SHOPPING RECEIPT
================================
           `);

  shoppingReceipt.forEach(item =>{
    const itemTotal = item.amount * item.pricePerItem;

    console.log(`${item.name}
        ${item.amount} x $${item.pricePerItem.toFixed(2)} = $${itemTotal.toFixed(2)}
        `);
  });

  console.log(`================================
        TOTAL: $${calculateTotal().toFixed(2)}
================================`);
}

function calculateTotal() {
  return shoppingReceipt.reduce((total, item) => {
    return total + (item.amount * item.pricePerItem);
  }, 0);
}

function findMostExpensiveItem() {
  return shoppingReceipt.reduce((mostExpensive, current) => {
    const currentTotal = current.amount * current.pricePerItem;
    const mostExpensiveTotal = mostExpensive.amount * mostExpensive.pricePerItem;

    return currentTotal > mostExpensiveTotal ? current : mostExpensive;
  });
}

function calculateAveragePrice() {
  const totalCost = calculateTotal();
  const totalAmount = shoppingReceipt.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  
  return totalCost / totalAmount;
}

//===============================================
//*Part 3: CSS Styling Fun (Optional Challenge)
//===============================================

const cssStyles = [
  {styleName: "color", styleValue: "blue"},
  {styleName: "font-size", styleValue: "16px"},
  {styleName: "font-weight", styleValue: 700}
];

function applyStyles(text, stylesArray) {
  let styleString = "";

  stylesArray.forEach((style) => {
    styleString += `${style.styleName}: ${style.styleValue}; `
  });

  document.body.innerHTML = `
    <p style="${styleString}">
      ${text}
    </p>    
    `;
}

//====================================================
//*Part 4: Classroom Management (Advanced Challenge)
//====================================================

const classrooms = [
  {name: "2A", seats: 15, faculty: "history"},
  {name: "3B", seats: 22, faculty: "math"},
  {name: "4F", seats: 10, faculty: "biology"},
  {name: "2C", seats: 13, faculty: "biology"}
];

function displayClassrooms() {
  return classrooms;
}

function displayClassroomsByFaculty(facultyName) {
  const facultyRooms = classrooms.filter(room =>
    room.faculty.toLowerCase() === facultyName.toLowerCase()
  );
  
  return facultyRooms.length === 0 ? "No classrooms found for this faculty" : facultyRooms;
}

function findSuitableClassrooms(group) {
  const suitableClassroom =  classrooms.filter(room =>
    room.seats >= group.students && 
    room.faculty.toLowerCase() === group.faculty.toLowerCase()
  );

  return suitableClassroom.length === 0 ? 'No suitable classrooms found' : suitableClassroom;
}

function sortBySeats() {
  return [...classrooms].sort((a, b) => b.seats - a.seats);
}

function sortByName() {
  return [...classrooms].sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}