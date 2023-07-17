// Having found everything else we now need to figure out the location of Carmen's hideout


// First we need to access the properties that are known to be hideouts within our complex map system, here is an example of one of the fairly complex objects from that system

const propertyExample = {
  name: 'Maldives',
  location: {
    x: -0.612875,
    y: 73.094959
  },
  amenities: ['pool', 'gym', 'restaurant'],
  details: {
    population: 540542,
    area: 115.8,
    description: {
      history: 'The Maldives is a small country in South Asia, located in the Arabian Sea. It is the southernmost country in the Indian Ocean. It is the only country in the world with a national park.',
      propertyDetails: {
        bathrooms: 2,
        bedrooms: 3,
        escapeTunnel: true
      }
    }
  }
}

// We know Carmen is a slippery one, so she will want to make sure she is hiding somewhere that has an escape tunnel.

// 1. Write a function that will take in a property and return true if the property has an escape tunnel, false otherwise

function hasEscapeTunnel(property) {
  return property.details.description.propertyDetails.escapeTunnel
}


// ----------------------------------------

// Whew that was a lot of work, and I got some bad news from the interns, it looks like they didn't make all of these objects the same, and some of them do not have the the same details, in fact some of the information may be missing entirely..... well we need a way to safely access the escapeTunnel property because what we wrote before keeps crashing.

// 2. Write a function that will take in a property and return the value of the escapeTunnel property, or undefined if the property does not have any of the appropriate property values to get to escapeTunnel (hint: use the optional chaining (elvis) operator)

function hasEscapeTunnelSafe(property) {
  return property?.details?.description?.propertyDetails?.escapeTunnel
}


// ----------------------------------------

// alright we think we have the property we are looking for, but we need to print off all the details about it, and we have reduced them to only the information we need to know. The new property objects look like this:

const simplePropertyExample = {
  name: 'Maldives',
  location: '-0.612875, 73.094959',
  bathrooms: 2,
  bedrooms: 3,
  escapeTunnel: true
}

// Our older printer cant handle this data structure, we need this data converted into a template string. 

// 3. Write a function that takes in a simple property object and returns a template string that is a semi-colon separated list of the property names and values (hint: use a for in loop)
// Example: 
// input: simplePropertyExample
// output: 'name: Maldives; location: -0.612875, 73.094959; bathrooms: 2; bedrooms: 3; escapeTunnel: true;'

function printProperty(property) {
  template = ''
  for (const [key, value] of Object.entries(property)) {
    template += `${key}: ${value}; `
  }
  return template
}