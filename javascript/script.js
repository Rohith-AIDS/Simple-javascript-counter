function oddnum(a,b)
{
    if(a>b)
    {
        return;
    }
    if(a%2==1)
    {
        console.log(a);
    }
    oddnum(a+1,b);
}
oddnum(1,100)
