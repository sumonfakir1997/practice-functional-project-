import React from "react";
import { Box } from "@chakra-ui/react";

const string = () => {

    const name = "Sumon";
    const lastName = "Fakir"

    // console.log(`my name is ${name} and my surname is ${lastName}`)

    // console.log(name.length)


    const gameName = new String("  Need for Speed   ")
    // another type of string define 

    // console.log(gameName)
    // console.log(gameName[0])// string ka [0]  element diye o access kora jai 
    // console.log(gameName.length-1)

    // console.log(gameName.__proto__) // output {} mane object 

    // string er modde toLocaleUpperCase() function apply korle string er all element upper case hoye jai 
    // string origin value ka changes kore nah stack er jonno 
    // console.log(gameName.toLocaleUpperCase())


    // trim() er kaj hosce string er first and last e space bad dibe trimfirst and trimlast o function asa 
    // console.log(gameName.trim())

    // string er posstion check korar jonno charAt(2) => mane stri ng er 2num position er charature ta dakte casce 

    // string er index 0 thake start hoy like array 
    console.log(name.charAt(2))

    // indexOf() diye character kon position thake astece eta chcek kora jai like 

    console.log("position of m ",name.indexOf('m'))




    return (
        <>
            <Box>
                string
            </Box>
        </>
    )
}
export default string ;