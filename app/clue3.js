// Time to locate the plates of the getaway car!

// We know within the system that the getaway cars plate has 7 characters, lets start by reducing all the plates in the system to only include ones with 7 characters, and while we are at it, lets optimize the process in case we ever need it again, so it can take in any plate length

// 1. Write a function that will take in an array and return an array where all of the strings have 7 characters. (hint: filter)
// Example: 
// input: 
/*
  [
    'IBSTOLEN',
    'NOTMINE',
    'DRIVNFAST',
    'GETAWAY',
    'HEIST',
    'CARGOFAST',
    'ETMYDST'
  ]
*/
// output: 
/*
  [
    'NOTMINE', 
    'GETAWAY', 
    'ETMYDST'
  ]
*/

function platesByCharacters(arr) {
  return arr.filter(a => a.length == 7)
}

// --------------------------------

// This car has been used in several crimes before, we need to be able to look at the plates that have multiple citations, the more citations the more likely its our car.

// 2. Write a function that will take in an array of objects and filter OUT to KEEP all plates that have at least the total numberOfCitations.

// Example:
// input: 
/* 
  [
    {plate: 'IBSTOLEN', citations: 2 },
    {plate: 'NOTMINE', citations: 1 },
    {plate: 'DRIVNFAST', citations: 3 },
    {plate: 'GETAWAY', citations: 6 },
    {plate: 'HEIST', citations: 0 },
    {plate: 'CARGOFAST', citations: 1 },
    {plate: 'ETMYDST', citations: 7 }
  ],
  3
*/
// output: 
/* 
  [
    {plate: 'DRIVNFAST', citations: 3 }, 
    {plate: 'GETAWAY', citations: 6 }, 
    {plate: 'ETMYDST', citations: 7 }
  ]
*/

function filterPlatesByCitations(plates, numberOfCitations) {
  return plates.filter(p => p.citations >= numberOfCitations)
}

// --------------------------------

// Alright time to hit the streets! To best break up the team lets have them take each plate alphabetically.

// 3. Write a function that will take in an array and return its contents sorted alphabetically. (hint: use the sort method)
// Example:
// input: ['NOTMINE','GETAWAY','ETMYDST']
// output: ['ETMYDST','GETAWAY','NOTMINE']

function sortPlates(arr) {
  return arr.sort()
}

// --------------------------------

// We might have found it, lets see all those bad drivers in order to cross-reference the plates with the citations.

// 4. Write a function that will sort plates by number of citations they have received.

// Example:

// input: 
/* 
  [
    {country: 'CAN', plate:'NOTMINE', citations: 2},
    {country: 'USA', plate:'GETAWAY', citations: 1},
    {country: 'AUS', plate:'ETMYDST', citations: 13}
  ]
*/
// output: 
/*
  [
    {country: 'AUS', plate:'ETMYDST', citations: 13},
    {country: 'CAN', plate:'NOTMINE', citations: 2}, 
    {country: 'USA', plate:'GETAWAY', citations: 1}
  ]
*/

function sortPlatesByCitations(arr) {
  return arr.sort((a, b) => b.citations - a.citations)
}

// --------------------------------

// Hmm... upon further investigation it looks like we have plates from all over the world here, might be easier if we ordered them by their Country.

// 5. Write a function that will take in an array of objects and sort them by the value of their country property. 

// hint: Sorting by strings JavaScript

// Example:
// input: 
/* 
  [
    { country: 'AUS', plate: 'NOTMINE' },
    { country: 'USA', plate: 'GETAWAY' },
    { country: 'CAN', plate: 'ETMYDST' }
  ]
*/
// output: 
/*
  [
    { country: 'AUS', plate: 'NOTMINE' },
    { country: 'CAN', plate: 'ETMYDST' },
    { country: 'USA', plate: 'GETAWAY' },
  ]
*/

function sortPlatesByCountry(arr) {
  arr.sort((a, b) => {
    if (a.country < b.country) {
      return -1
    } else if (a.country > b.country) {
      return 1
    }
  })
  return arr
}