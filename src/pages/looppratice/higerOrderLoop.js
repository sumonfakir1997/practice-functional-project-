import { Box } from "@chakra-ui/react";

const higerOrderLoop = () => {



    const arr = [1, 2, 3, 34, 4, 5, 6, 7] // for of loop used kore try kora hoyca ki vabe kaj kore num and string 

    for (const r of arr) {
        // console.log(`value of array ${r}`)
    }

    const name = 'sumon fakir officee ' // ki vcabe space bad bao jai eta try kora hoyca continou dile jeta contion mile jabe oi ta skip kore porer ta print korbe 

    for (const nam of name) {
        if (nam === ' ') {
            continue;
        }
        // console.log(`full name of string ${nam}`)
    }


    // try to set map 

    const map = new Map()

    map.set('in', 'india')
    map.set('bd', 'bangladesh')
    map.set('uk', 'englend')
    map.set('usa', 'usaa')
    // map.set('in','india')

    // console.log(map)

    for (const [key, value] of map) {

        console.log(`${key} => and value ${value}`)

    }

    //   array of  object itreable korar jonno map used korte hoy  etar jonno for in loop used kora hoy only of object iterated kora jonno  ay khane for in loop used kora object itereat5d kora parce 
    const myobj = {
        office: 'mokhali',
        title: 'web ',
        phone: '01749651289'
    }

    for (const key in myobj) {
        console.log("key of for in used or object iterated ",key) //etai sodu key gola dakhace full obj dakanor jonno 
        console.log('ay khane object er value show asbe ',myobj[key])
    }




    // try to practice  for for in loop  kaj kore kintu array er element na asha index astece 

    const pa = ['sumon','fakir','office']

    for (const key in pa) {
       console.log('for in loop for in',key) //output 012
    //    key ante caile 
    console.log('for in loop for in',pa[key]) //ekn array er element ta asbe 
    }

    const kvArray = [                   // ay khane try kora hoyca ja array of object e map used kora hoyca 
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 },
    ];
    kvArray.map((itme) => {
        return (
            console.log(itme.key)
        )
    })



    // for ( const my of myobj) { // for of loop object ka iterabale korte pare nah 
    //     console.log("my ",my)
    // }









    return (
        <>
            <Box>
                higerOrderLoop Pratice
            </Box>
        </>
    )
}

export default higerOrderLoop;