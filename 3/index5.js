var a=prompt("Nhập a:")
var b=prompt("Nhập b:")
var ucln
while (a%b!=0) {
    var r=a%b
    a=b
    b=r
}
ucln=b
console.log(ucln)
var a=prompt("Nhập a:")
var b=prompt("Nhập b:")
var bcnn
for(var i=1;i<=a*b;i++){
    if(i%a==0&&i%b==0){
        bcnn=i
        break
    }
}
console.log(bcnn)