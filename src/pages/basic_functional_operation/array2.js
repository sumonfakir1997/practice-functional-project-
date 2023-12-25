import React from "react";
import { Box, Text } from "@chakra-ui/react";

const array2 = () => {

    const array  = [1,3 ,"sumon", false ,null]

    

    const odo_empoleyee = ["mehedi","chisti","emon", "dipvai"]
    const gp_team = ["argha","salman","sapan","mehedi2"]

    const marge_array = odo_empoleyee.concat(gp_team) // concat array  new array ka return kore concat methode e 2 ba er beshi element dite pari 
    // odo_empoleyee.concat(gp_team)

    // odo_empoleyee.push(gp_team)

    // array marge kora easy and popular way hosce spread operator ... use bellow 

    const allarray = [...odo_empoleyee,...gp_team,...array] // OBJECT  dile properly kaj kore nah  eta popular used kora hoy
    // console.log(allarray)

    //  isArray diye check kore hoy eta array ki nah eta true or false ans dai  eta check korar jonno  Array.isArray(ay khane nam diye dakte hba )

    // console.log(Array.isArray(allarray))  // array ki na test korte caile amra bora hat er array likha then isArray method er modde value pass kore dile ei sa true or false return kore 

    const xarray = [1,2,4,5,6,[9,8,7,[10,66,99],9,10],10,22,23,24, [100,44,11]]

    // console.log(xarray)

    const flatarray = xarray.flat(4)
    // console.log('flatarray',flatarray)

    console.log(Array.isArray("sumon"));

    // Array.from used korle array te convert hoye jabe array te 


    console.log(Array.from("sumon"))

    const value1 = 100;
    const value2 =200;
    const value3 = 300;

    // Array.of( er modde ja value dibo oi tar value ka array banaye dibe) return kore new array 
    const newvalues = Array.of(value1,value2,value3)
    console.log("newvalues",newvalues)





    return (
        <Box>
            <Text>basic array  part 2 </Text>
        </Box>
    )
}

export default array2 ;