
function myFunction(num)
{ 
let i=2
let n=num
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        console.log("not prime");
        break
    }
    else{
        console.log("Prime")
        break
    }

}
}
// let num=34
myFunction(34)