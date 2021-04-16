var a=[1,2,4,53,3,5,75,32,54,23,87,43]
for(var i=0;i<a.length-1;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            var temp=a[i]
            a[i]=a[j] 
            a[j]=temp
        }
    }
}
console.log(a)