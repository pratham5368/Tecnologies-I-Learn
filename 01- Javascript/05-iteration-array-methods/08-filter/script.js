const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
// console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);




// Problem-1 Filter even numbers

let numberArray = [1,2,3,4,5,6,7,8,9,10];

let evenNumber = [];

for (let i = 0; i < numberArray.length; i++) {
	if (numberArray[i] % 2 === 0) {
		evenNumber.push(numberArray[i]);
	}
}
// console.log(evenNumbers);

let evenNumbersWithFilter = numberArray.filter((item) => (item % 2 === 0));

// console.log(evenNumbersWithFilter);


// Problem 2:- Filter objects with tags javascript

var persons = [
  {id : 1, name : "John", tags : "javascript"}, 
  {id : 2, name : "Alice", tags : "javascript"}, 
  {id : 3, name : "Roger", tags : "java"},
  {id : 4, name : "Adam", tags : "javascript"},
  {id : 5, name : "Alex", tags : "java"}
];

let jsTags = persons.filter((item) => (item.tags === "javascript"))

// console.log(jsTags);

// Problem 2 with indexOf
let jsTags2 = persons.filter((item) => (item.tags.indexOf("javascript") > -1));

// console.log(jsTags2);

// Other example - traverses an array and inserts non-duplicate elements into a new array. That is, if an element is duplicated, then only insert that element once into the final newArray

function findNonDuplicates (array) {
	let models = [];
	for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
   		 }
	}
	return models;
}

let arr = [1, 2, 3, 4.4, 2];
// console.log(findNonDuplicates((arr)));

// using filter
function findNonDuplicatesFilter (array) {
	return array.filter((elem, index, arr) => {
		return array.indexOf(elem) === index;
	})
}

// console.log(findNonDuplicatesFilter(arr));

// Write a function that returns the number of zeros in a given array?
noOfZeros = arr => {
	return arr.filter(zero => (zero === 0)).length 
}

console.log(noOfZeros([1, 2, 0, 0, 5]));
