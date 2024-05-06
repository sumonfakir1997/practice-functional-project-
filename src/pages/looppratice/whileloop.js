import React from "react";

import { Box } from "@chakra-ui/react";

const home = () => {

    // while loop e first e initall value set kore dite hoy pore while loop er modde condition set korte hoy then loop ta cholar jonno increment / decrement er dite hoy note increment derecment sara loop gurbe na 

    let index = 0;
    while (index < 10) {
        // console.log(`value of index is ${index}`);
        index = index + 2;
    }


    const myArry = ['hi', 'hello', 'hehehehe', 'chupkoro']

    let arr = 0;

    while (arr < myArry.length) {
        // console.log(`myarr arr value is ${arr}  and  ${myArry[arr]}`);
        arr = arr + 1;
    }


    const arrayName = ['sumon ', 'fakir ', 'dhaka', 'mokhali', 'office ']


    // ay khane only while loop diye try kora hoyca code ki vabe kaj kore 

    let arry = 0;

    while (arry < arrayName.length) {
        // console.log(`value of arry ${arry} and value of arrayName is ${arrayName[arry]}`);
        arry = arry + 1;
    }

    //  for loop diye try kora hoyca 
    for (let i = 0; i < arrayName.length; i++) {
        // console.log(`value of for loop i is ${i} and arrayName value is ${arrayName[i]}`)
    }


    // ay khane er for each er 3ta para metar niyer try kora hoyca 
    arrayName.forEach((items, index, fullarray) => {
        // console.log(`value of for each items is ${items} and index is ${index} full array is ${fullarray}`)
    })


    // const myName = arrayName.filter((name) => {
    //     return name === 'sumon'
    // })

    // console.log(`name ${myName} `)

    const myNumber = [10, 2, 3, 5, , 7, 100, 134]

    const rr = myNumber.filter((num) => {
        return num >= 7
    })
    // console.log(rr)

    const newArry = [];

    for (let i = 0; i < myNumber.length; i++) {
        if (myNumber[i] >= 100) {
            // console.log(` ${myNumber[i]}`) // ay avbe korle array format e hba na 
            newArry.push(myNumber[i]);
        }
    }

    console.log(`newarry is ${newArry}`)

    const findnumber = myNumber.find((num) => {
        return num > 100;
    })

    // console.log(`findnumber is ${findnumber}`)




    const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9] //do while loop er first e ekta kaj sa kore then condition check korbe mane starting e sa ekta kaj korbei 
    let i = 0;
    do {

        console.log(sum[i])
        i++;
    } while (i < sum.length);



    const name = "sumon" // ay khane try kora hoyca string er modde do while loop used kora jasce kina 
    let j = name.length - 1;

    do {
        console.log(name[j])
        j--;
    } while (j >= 0)


    const nams = ['sumon', 'fakir', 'js', 'react', 'next js'] // ay khane ekta array niye try kora hoyca 

    let k = nams.length - 1;

    do {
        console.log(nams[k])
        k--;
    } while (k >= 0)










    return (
        <>
            <Box>
                while loop pratice
            </Box>
        </>
    )
}

export default home;