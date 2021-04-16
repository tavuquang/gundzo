var a=prompt("A=")
var b=prompt("B=")
var operator=prompt("+,-,*,/,%,^")
if(operator=="+"){
    console.log(+a+ +b)
}
if(operator=="-"){
    console.log(+a - +b)
}
if(operator=="*"){
    console.log(+a * +b)
}
if(operator=="/"){
    console.log("+a / +b")
}
if(operator=="%"){
    console.log(+a % +b)
}
if(operator=="^"){
    console.log(a**b)
}