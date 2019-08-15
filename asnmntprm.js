module.exports.asnprime=(num)=>
{
let i=2
let n=num
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        return("not prime");
        break
    }
    else{
        return("Prime");
        break
    }

}
}