import { Box } from "@chakra-ui/react";
import React from "react";

const loop = () => {


const array = [1,2,3,4,5,6,7,8,9]

for ( let i = 0 ; i<=array.length ; i++) {
    console.log(i)
}

// eta hosce normal for loop 

// now for of loop used pratice korbo 


const my_name = "sumon fakir" 

for( const name of my_name) {
    if (name === " ") {
        continue; // continue dile jet condtion er sathe mile oi ta skib kore baki gola print kore 
        //  r jodi break used kortam tahole condition mile gale loop thake bair hoye jabe 
    }
    console.log(name)
}































    return(
        <Box>

        </Box>
    )
}

export default loop;