import { Box } from "@chakra-ui/react";
import React from "react";

const loop = () => {


    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for (let i = 0; i <= array.length; i++) {
        // console.log(i)
    }

    // eta hosce normal for loop 

    // now for of loop used pratice korbo 


    const my_name = "sumon fakir"

    for (const name of my_name) {
        if (name === " ") {
            continue; // continue dile jet condtion er sathe mile oi ta skib kore baki gola print kore 
            //  r jodi break used kortam tahole condition mile gale loop thake bair hoye jabe 
        }
        // console.log(name)
    }
    const map = new Map() // map hosce uniqe value  
    map.set('in', 'india')
    map.set('bd', 'bangladesh')
    map.set('usa', 'usa')
    map.set('usa', 'usa')

    console.log("map", map)

    for (const [key, value] of map) { //[key] ay vabe korle map er key value gola dakha jabe {key} e undefine asbe cuz map ekta object  **** for of e map array te convert hoye jai 
        // console.log(`key value ${key} and value ${value}`)
    }


    const myid = {
        name: 'sumon',
        id: 124652
    }

    // for (const ip of myid) {
    //     // console,log('my ${ip}') //eta for of e kaj korbe nah cuz eta object for of loop e array hote hba 
    // }
































    return (
        <Box>

        </Box>
    )
}

export default loop;