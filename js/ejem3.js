//FIBONACCI
var n,i,a,b,c;
n=parseInt(prompt("numero pal fibonacci: "));
a=-1;b=1;
for(i=1;i<=n;i++){
    c=a+b;
    a=b;
    b=c;
    document.writeln("<font size='30' color='red'>"+c+",</font>");//asi como invocas scrip en html puedes invocar etiquetas en js para darle el flow
}