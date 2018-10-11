'use strict'
//Задание 1
//________________________________________________________
function reverse(str) {
        var newStr = '';
        for (var i = str.length - 1; i >= 0; i--) {
            newStr += str[i];
        }
        return newStr;
}

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function ucWords(str){
    var newStr = '';
    for(var i = 0; i < str.length; i++){
        if(str[i - 1] === ' ' || i === 0){
            newStr += str[i].toUpperCase();
        }
        else{
            newStr += str[i];
        }
    }
    return newStr
}

function isMail(str){
    var checkSub = false;
    var checkDot = false;
    for(var i = 0; i < str.length; i++){
        if(str[i] === '@'){
            var temp = i;
            checkSub = true;
            var strBuff = str.slice(0, i);
            if(strBuff.length < 4){
                return false;
                break;
            }
           
        }
        else if(str[i] === '.'){
            checkDot = true;
            strBuff = str.slice(temp + 1, i)
            if(strBuff.length < 4){
                return false;
                break;
            }
            temp = i;
        }
        else if(i === str.length - 1){
            strBuff = str.slice(temp + 1, i + 1);
             if (checkSub === false || checkDot === false){
                return false;
                break;
            }
            else if(strBuff.length > 2){
                return true;
            }
            else {
                return false;
                break;
            }
        }
    }
}

function isDate(date){ 
    var dateArr = date.split('.');
    for (var i = 0; i < dateArr.length; i++){
        dateArr[i] = Number(dateArr[i]);
    }

    if (typeof(dateArr[2]) != 'number' || typeof(dateArr[1]) != 'number' || typeof(dateArr[0]) != "number") {
      return false; 
    };
    return true;
  }
//_____________________________________________________________________________
//Задание 2
//_____________________________________________________________________________
function fizbaz(){
    var arr = new Array(100);
    for(var i = 0; i < arr.length; i++){
        arr[i] = i + 1;
        if (arr[i] % 3 === 0 && arr[i] % 5 == 0){
            arr[i] =  'fizbaz';
        }
        else if (arr[i] % 3 === 0){
            arr[i] =  'fiz';
        }
        else if (arr[i] % 5 == 0){
            arr[i] =  'baz';
        }
    }
    var out = '';
    for (var i = 0; i < arr.length; i++){
        out += arr[i] + ' '
    }
    console.log(out);
}
//_____________________________________________________________________________
//Задание 3.1
//_____________________________________________________________________________
function findArray (arr1, arr2){
    var rez = '';
    for(var i = 0; i < arr2.length; i++){
    var buff = arr2[i];
    rez += arr1[buff] + ' ';
    }
    console.log(rez);
}
//_____________________________________________________________________________
//Задание 3.2
//_____________________________________________________________________________
function avgLenghtArr (arr){
    var sum = 0;
    var avg = 0;
    var symb;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i].length;
    }
    avg = Math.ceil( sum / (arr.length));
    var rez ='';
    for(var i = 0; i < arr.length; i++){
        if (arr[i].length < avg){
            symb = arr[i].charAt(0);
            arr[i] = '';
            for(var j = 1; j <= avg; j++){
                arr[i] += symb;
            }
        }
        else if (arr[i].length > avg){
            symb = arr[i].charAt(0);
            arr[i] = '';
            for(var j = 1; j <= avg; j++){
                arr[i] += symb;
            }
        }
        rez += arr[i] + ' ';
    }
    console.log(rez);
}
    console.log('Функция reverse');
    console.log(reverse('abcde'));
    console.log('Функция ucFirst');
    console.log(ucFirst('abcde'));
    console.log('Функция ucWords');
    console.log(ucWords('abcde abcde abcde'));
    console.log('Функция isMail');
    console.log(isMail('html@gmail.com'));
    console.log(isMail('h@g.com'));
    console.log(isMail('html@gmail'));
    console.log('Функция isDate');
    console.log(isDate('29.02.2014'));
    console.log(isDate('asdasdasd'));
    console.log('Функция fizbaz');
    fizbaz();
    console.log('Функция findArray');
    findArray(['a','b','c','d'], [0, 2]);
    findArray([0, 1, 5, 2, 1, 8, 9, 1, 5],[1, 4, 7]);
    console.log('Функция avgLenghtArr');
    avgLenghtArr(['aa','bbb','cccc']);
    avgLenghtArr(['u','y']);
    avgLenghtArr(['aa','bb','ddd','eee']);
    