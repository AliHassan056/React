let favPlayers = [
    "Babar Azam",
    "Babar Azam",
    "Joe Root",
    "ABD",
    "Miller the Killer",
    'Saqib Khan'
  ];

let newArray = favPlayers.map((item)=>{
  return item.toUpperCase() + '123'
})

console.log(newArray)