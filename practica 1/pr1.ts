const numeros=[3,6,8,2,4,10,14,18,22]

const quickshort=(n:number[]):number[]=>{
   if(n.length<=1){
    return n
   }

   const pivote=n[0]
   const menores:number[] = []
   const mayores:number[] = []

   n.forEach(item => {
    if(item<pivote){
        menores.push(item)
    }
    else if (item>pivote){
        mayores.push(item)
    }
   })

   return quickshort(menores).concat(pivote).concat(quickshort(mayores))
   
    


}
const medio = numeros[Math.floor(numeros.length / 2)];
console.log(quickshort(numeros))
