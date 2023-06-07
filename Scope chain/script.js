

function a()
{
    var x=10;
    b();
    function b()
    {
        console.log(x); // output: 10
    }
}

a();
console.log(x); // x is not defined 

// lexical environment: local memory of function + lexical env of parent
// chain of lexical environment is scope chain


