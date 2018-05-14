// Code your solution in this file
function findMatching(drivers, string){
  return drivers.filter(function (driverName){
    return driverName.toLowerCase() === string.toLowerCase()
  });
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driverLetter){
    return driverLetter.slice(0, string.length) === string
  })
}

function matchName(drivers, string){
  return drivers.filter(function(driverObj){
    return driverObj.name.toLowerCase() === string.toLowerCase() 
  })
}
