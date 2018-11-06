function fpbkpk(a,b){
var fpb=0;

for(var c=1;c<=a;c++){
    var d=a%c;
    var e=b%c;

    if(d==e && e==0){
        var fpb=c;
    }
}
var kpk=(a*b)/fpb;
console.log('FPB '+a+' & '+b+' = '+fpb)
console.log('KPK '+a+' & '+b+' = '+kpk)
}
fpbkpk(2,3)