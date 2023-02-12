let didBoghtTesla = false;
const yearOfTeslaPurchase = 2014;
let isUSCitizen = false;
let currentYear = 2017;

if (didBoghtTesla && isUSCitizen) {
  const howManyYears = currentYear - yearOfTeslaPurchase;
  if (howManyYears >= 4) {
    console.log("Would you like an upgrade?")
  } 
  else {
    console.log("Are you sastified with your current car?")
  }
} 
else if (didBoghtTesla && !isUSCitizen) {
  console.log("Would you like to move to US?")
}
 else {
  console.log("Are you interested to buy a Tesla?")
}
