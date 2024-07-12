import React from "react";

// function Greet(props){
//     console.log(props.name);
//     return (
//             <div>
//             <h1>Hello {props.name} vous avez {props.age} !</h1>
//                     {props.children}
//             </div>
//     )
// }
function Greet({name, age, children}){

    return (
            <div>
            <h1>Hello {name} vous avez {age} !</h1>
            {children}
            </div>
    )
}

export default Greet;