var a=10,b=20,c;
console.log("1 For Addition");
console.log("2 For Substraction");
console.log("3 For Multiplication");
console.log("4 For Division");
let n = prompt();

switch(n)
{
    case '1':
        c=a+b;
        console.log("C=",c);
        break;
    case '2':
        c=a-b;
        console.log("C=",c);
        break;
    case '3':
        c=a*b;
        console.log("C=",c);
        break;
    case'4':
        c=a/b;
        console.log("C=",c);
        break;
    default:
        console.log("You have entered wrong value.");

}

