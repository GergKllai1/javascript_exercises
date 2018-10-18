const input = 'Hello! My name is Greg and I made this programt to convert the short text I am writing to whale talk! Enjoy!';
const vowels = ['a','e','u','i','o'];
let whaleTalk = [];
for(let i = 0; i < input.length; i++){
  for(let j=0; j< vowels.length; j++){
    if(input[i] === vowels[j]){
      if(vowels[j] === 'e'|| vowels[j] === 'u'){
        whaleTalk.push(input[i].toUpperCase() + input[i].toUpperCase());
      }else{
        whaleTalk.push(input[i].toUpperCase())
      }
      };
    };
  };
console.log(whaleTalk.join(''))
