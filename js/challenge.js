

function howManyLightsabersDoYouOwn(name) {
  var lightSabers = [{name: "Zach", lightsabers: 18}, 
                   {name: "anyone else", lightsabers: 0} ];


  for (var i =0; i< lightSabers.length; i++) {
    if (lightSabers[i].name === name) {
      return lightSabers[i].lightsabers;
      //console.log(lightSabers[i].lightsabers);
    } 
    else {
      return 0;
      //console.log(0);
    }
  }
}

// howManyLightsabersDoYouOwn("anyone else"); //should === 0
// howManyLightsabersDoYouOwn("Zach"); //should === 18

//EVENLY DIVIDEABLE?
function evenlyDivide (value) {
  var arr=[];
  for (var i=1; i<=value; i++) {
    if (Number.isInteger(value / i)) {
      arr.push(i);
    }
  }
  return arr;
}
//evenlyDivide(30);

//LAST
function last(arr) {
 
    return arr[arr.length];
 }

// PALINDROME
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward.
// Write a function named "palindrome" that accepts one parameter, a STRING. If the word is a palindrome return true, if not return false.
// EXAMPLE:
// palindrome("Glenn")  #=> false
// palindome("Anna")   #=> true

function palindrome (a) {
    var pal = true;
   for (var i=0; i<a.length/2; i++) {
    if (a[i].toLowerCase() != a[a.length-i].toLowerCase()) {
        pal=false;
    }
   }
   return pal;
}
//palindrome('Anna');

function typing(val) {
  return (typeof val + "=" + val);
}

/**
 * REVERSE STRING
 * Create a function named "reverse" for the String prototype 
 * that will allow the following functionality:
 */
 //(String.prototype.reverse().toLowerCase());
String.prototype.reverse = function(){
    var arr =[];
    for (var i=this.length-1; i>=0; i--) {
      arr.push(this[i].toLowerCase());
    }

    return arr;
};

// "String".reverse();  

function squareRoot(num) {
  if (Math.floor(Math.sqrt(num) ) == Math.ceil(Math.sqrt(num) ))
    return true;
  else 
    return false;
}
//squareRoot(100);
//squareRoot(4096) 

/**
 * SHORT LONG SHORT
 * Given 2 strings, a and b, return a string of the form short+long+short,
 *  with the shorter string on the outside and the longer string on the inside. 
 * The strings will not be the same length, but they may be empty (length0).
 */
function solution(a,b) {
  if (a.length>b.length) 
    return b+a+b;
  
  else 
    return a+b+a;
}

// solution("1", "22"); // returns "1221"
// solution("22", "1"); // returns "1221"

//Return random colors among 4 colors
var ghost = {
    
    color : function() {
        var c = ["white" , "yellow" , "purple" , "red"];
        var i = Math.floor(Math.random() * 4);
        return c[i];
    }
};
 
//ghost.color(); //=> "white" or "yellow" or "purple" or "red"
