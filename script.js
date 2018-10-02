function firstLast6(array){
    var six = "";
    var length = array.length;
    if(array[0] == 6 || array[length - 1] == 6){
        six = true;
    }else{
        six = false;
    }
    return six;
}

function has23(array){
    var twoOrThree = false;
    for(var i = 0; i < 2; i++){
        if(array[i] == 2 || array[i] == 3){
            twoOrThree = true;
        }
    }
    return twoOrThree;
}

function fix23(array){
    for(var i = 0; i < 3; i++){
        if(array[i] == 2 && array[i + 1] == 3){
            array[i + 1] = 0
        }
    }
    return array;
}

function countYZ(string){
    var length = string.length;
    var count = 0;
    for(var i = 0; i < length; i++){
        if((string[i] == "y" || string[i] == "z") && string[i + 1] == " "){
            count++
        }
    }
    if(string[length - 1] == "y" || string[length - 1] == "z"){
        count++
    }
    for(var j = 0; j < length; j++){
        if((string[i] == "Y" || string[i] == "Z") && string[i + 1] == " "){
            count++
        }
    }
    if(string[length - 1] == "Y" || string[length - 1] == "Z"){
        count++
    }
    return count;
}

function endOther(strOne, strTwo){
    var lowStrOne = strOne.toLowerCase();
    var lowStrTwo = strTwo.toLowerCase();
    var lengthOne = strOne.length;
    var lengthTwo = strTwo.length;
    var end = false;
    if(lengthOne > lengthTwo){
        var endOne = lowStrOne.substring(lengthOne - lengthTwo, lengthOne);
        if(endOne == lowStrTwo){
            end = true;
        }
    }else{
        var endTwo = lowStrTwo.substring(lengthTwo - lengthOne, lengthTwo);
        if(endTwo == lowStrOne){
            end = true;
        }
    }
    return end;
}

function starOut(string){
    var str = string;
    var newStr = "";
    for(var i = 0; i < string.length; i++){
        if(str[i] != "*" && str[i + 1] != "*" && str[i - 1] != "*"){
            newStr += str[i];
        }
    }
    return newStr;
}

function getSandwich(string){
    var firstBread = string.indexOf("bread");
    var secondBread = string.lastIndexOf("bread");
    var newStr = "";
    if(string.includes("bread") == false){
        newStr = "";
    }else{
        newStr = string.slice(firstBread + 5, secondBread);
    }
    return newStr;
}

function canBalance(array){
    var leftSide = 0;
    var rightSide = 0;
    var result = false;
    for(var i = 0; i < array.length; i++){
        rightSide += array[i];
    }
    for(var j = 0; j < array.length; j++){
        leftSide += array[j];
        rightSide -= array[j];
        if (leftSide == rightSide) {
            result = true;
        }
    }
    return result;
}

function countClumps(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == array[i - 1] && array[i] != array[i + 1]){
            count++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    var result = false;
    if(a < b && b < c){
        if(c - b == b - a){
            result = true;
        }
    }else if(a < c && c < b){
        if(b - c == c - a){
            result = true;
        }
    }else if(b < a && a < c){
        if(c - a == a - b){
            result = true;
        }
    }else if(b < c && c < a){
        if(a - c == c - b){
            result = true;
        }
    }else if(c < a && a < b){
        if(b - a == a - c){
            result = true;
        }
    }else if(c < b && b < a){
        if(a - b == b - c){
            result = true;
        }
    }else{
        if(a == b && b == c){
            result = true;
        }
    }
    return result;
}