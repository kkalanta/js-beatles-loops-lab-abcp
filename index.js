// First Function
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
        }
        return array;
      }

// Second Function
function johnLennonFacts(facts){
  var NewArray = [];
  var i = 0
  while (i < facts.length){
    i = i + 1;
    NewArray.push(`${facts}!!!`)
  }

    return NewArray;
}

// Third Function
function iLoveTheBeatles(number) {
  var NewArray2 = []
  do {
    NewArray2.push("I love the Beatles!")
    number++
  } while (number < 15)
    return NewArray2;
}
