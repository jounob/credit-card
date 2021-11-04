// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

//const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
// Add your functions below:


const validateCred = array => {
    let sumNum = 0;
    for(let i = 0; i <= array.length-1; i++){
        let num = 0;
        if(i % 2 === 0){
            num = array[i]*2;
            if(num > 9){
                num -= 9;
                sumNum += num;
            }
            else {
                sumNum += num;
            }
        }
        else{
            sumNum += array[i];
        }
    }
    if(sumNum % 10 === 0){
        return true;
    }
    else {
        return false;
    }
}
     
const findInvalidCards = arr =>{
 let newArr = [];
 for(let i = 0; i < arr.length; i++){
    let validateCard = arr[i];
    if(!validateCred(validateCard)){
      newArr.push(validateCard);
    }
  }

 return newArr;
}

const invalidCardCompanies = invalidCard => {
  let invalidCompaniesCard = [];
  for(let i = 0; i < invalidCard.length; i++){
    switch(invalidCard[i][0]){
      case 3:
        if(!invalidCompaniesCard.includes('Amex(AmericanExpress)')){
          invalidCompaniesCard.push('Amex(AmericanExpress)')
        }
  break;        
      case 4:
        if(!invalidCompaniesCard.includes('Visa')){
          invalidCompaniesCard.push('Visa')
        }
   break;     
      case 5:
        if(!invalidCompaniesCard.includes('MasterCard')){
          invalidCompaniesCard.push('MasterCard')
        }
      break;  
      case 6:
        if(!invalidCompaniesCard.includes('Discover')){
          invalidCompaniesCard.push('Discover')
        }
      break;  
      default:
        if(!invalidCompaniesCard.includes('Compagnie Not Found')){
          invalidCompaniesCard.push('Compagnie No found');
        }
    }
  }
  return console.log(invalidCompaniesCard);
}
const convertString = (cardToString) => {
  let newArray = [];
  for (let i = 0; i < cardToString.length; i++){
      newArray.push(Number(cardToString[i]));
  }
  return newArray;
}
invalidCardCompanies(findInvalidCards(batch))
console.log(validateCred(convertString('4024007162486608')))





