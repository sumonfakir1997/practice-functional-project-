import React from "react";
import { Box } from "@chakra-ui/react";

const loop= () => {

    // for(let i= 0;i<= 10;i++) {
    //     console.log(`value of i ${i}`)
    // }

//    for(let i = 0; i< 5 ; i++){
//     console.log(i)
//     for(let j =0; j<=5; j++){
//         console.log(`value of i ${i} = ${j}`)
//     }
//    }


// %%%%%%%%%%%%%%%%%  loop er ka ekta somay er por fully off kora ba ekta value skip kore abr start korar jonno break,continue used korri, break mane loop thake bair hoye jabe r continue mane oi condition saticesfy korle oi ta skip kore baki gola contunou korbe 
// for(let i = 0;i<=10; i++) { 
//     // console.log(`value of ${i}`)
//     const element = i ;
//     if (element === 5 ) {
//         // console.log(`element value 5`)
//         break; // ay khane break mane hosce loop hoto boroi hok nah kano ja condition er age break used korce oita mile gale loop exceuted kora off kore dibe 
//     }
    // console.log(element)
// }



// ------- continoue -----

// for(let i = 0; i< 10;i++){
//     const element = i;
//     console.log(element);
//     if(element === 4) {
//         console.log("element is match");
//     }
//     continue;
//     console.log(element)
// }


// let n = 5; // row or column count
// // defining an empty string
// let string = "";

// for(let i = 0; i < 5; i++) { // external loop
//     console.log(`value i${i}`)
//   for(let j = 0; j < n; j++) { // internal loop
//     string += "*";
//   }
//   // newline after each row
//   string += "\n";
// }
// // printing the string
// console.log(string);



for (let i = 0; i < 10; i++) { // eta hosce basic format 
    const element = i;
    // console.log(`value of element is ${element}`)
    if ( element === 5){
        // console.log("5 is the best number ")
    }
    // console.log(element);
}

for(let i= 1; i<=10; i++){
    // console.log(`   i ${i}`) // ay khane namata print korar hoy tai off comment kora hoyca 
    for(let j= 1; j<= 10; j++){
        // console.log(` inner  j ${j} = outer i ${i}`)// eta ka namata korle kori 
        // console.log(`${i} * ${j} = ${i *j} `)
    }
}


const myArray = ["flash","betman","ironMan","sobahan","sumon"]

// console.log(`my array length is  ${myArray.length}`)
// i<= myArray.length; // eta dile last er ta undefine asbe cuz 4num kono value nai undefine asbe 
// tai <= na diy sob somoy i<array.length used korte hoy 
for (let i = 0; i< myArray.length; i++){
    let names = myArray[i] // eta mane e hosce ekta ekta array er index e jabe then 1 ta kore value print korbe 
    // console.log(`myarray value of ${names}`)
}

for (let i = 0; i< myArray.length; i++){
    
    // console.log(`myarray value of ${myArray}`) // r eta mane hosce ja full myArray tai joto bar loop cholbe eto bar ei print hba 
}

// full loop run na kore ja ekta number selected kore dibo oita pailei loop thake bair hoye jabe eta ki vabe korbo 


// for (let i= 1;i <= 20; i++){
   
//     if( i === 10) {
//         console.log(`element is match so break the loop is 10`)
//         break;
//     }
    

//     console.log(i)
// }











    return (
        <>
        {}
        <Box textAlign='center' fontSize='20' fontWeight='900'>
            this is for loop pratice va
        </Box>
        </>
    )
}

export default loop ;