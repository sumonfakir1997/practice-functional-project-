import React from "react";


import { Box, } from "@chakra-ui/react";

const HigerOrderLoop = () => {


    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const nam = nums.filter((item) => { // filter er modde condition dite hoy ja ja value condition er modde porbe oi gola ei sa return korbe jah gola condition er moddde porbe nah oi gola sa return korbe na filter hosce call back function 
        return item > 7
    })

    // console.log("nam ",nam)


    const names = ['sumon', 'fakir', 'hsd', 'fff', 'fmf']

    const myNamne = names.filter((nams) => {
        return nams == 'sumon'
    })

    // console.log("myNamne",myNamne)
    // const anam = []

    // names.forEach((item) =>{
    //     if(item === 'sumon') {
    //         anam.push(item)
    //     }
    // })

    // console.log("anam",anam)


    const books = [
        {
            title: 'book one',
            genra: 'fiction',
            pushlish: 1981,
            edition: 2004
        },
        {
            title: 'book two',
            genra: 'fiction',
            pushlish: 1980,
            edition: 2005
        },

        {
            title: 'book three',
            genra: 'fiction',
            pushlish: 1960,
            edition: 2010
        },

        {
            title: 'book four',
            genra: 'fiction',
            pushlish: 1920,
            edition: 2005
        },

        {
            title: 'book five',
            genra: 'fiction',
            pushlish: 1983,
            edition: 2000
        },
        {
            title: 'book six',
            genra: 'history',
            pushlish: 1990,
            edition: 2001
        },
        {
            title: 'book seven',
            genra: 'non-fiction',
            pushlish: 1999,
            edition: 2011
        },
        {
            title: 'book eight',
            genra: 'science',
            pushlish: 2020,
            edition: 2013
        },
    ]


    const book = books.filter((boi) => { // filter er modde return must  be likte hba e sara kaj data return kore nah 
        return boi.edition === 2013;
    })

    console.log("book",book)
















    return (
        <>
            <Box>
                sumon
            </Box>
        </>
    )
}

export default HigerOrderLoop;