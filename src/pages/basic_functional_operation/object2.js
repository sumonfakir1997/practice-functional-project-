import React from "react";
import { Text } from "@chakra-ui/react";

const object2 = () => {

    // singleton object ki vabe kore 

    const cssUser = new Object() // singleton object jeta new r Boro Hat er Object diye korte hoy 
    console.log(cssUser)// output {}

    // const marketInfo = {} // eta multiton object jeta amra sobay somay used kori 
    // console.log(marketInfo)// output {}
    cssUser.name = 'sumon fakir '
    cssUser.id = 124

    console.log(cssUser) // output { name: 'sumon fakir ', id: 124 }

    // 2ta object e marge korte caile Object.assign method used korte pari 

    const obj1 = { 
        name : 'sss',
        gmail: 'x.com',
        id: '0121'
    }
    const obj2 = {
        school: 'www',
        home : 'uuu'
    }

    // now ekn ki vabe 2ta obeject ka ek sathe korbo 

    // const obj3 = Object.assign(obj1,obj2) // eta korle update hoye obj1 e value chole jai tai sob thake idea way hosce ja Object.assign({},obj1,obj2) // eta korle sob gola object ek sathe hoy new object e bosha jabe 
    // console.log(obj3)


    // const obj4 = Object.assign({},obj1,obj2) /// ay khane perfectly kaj kortece 
    // console.log(obj4)

    //  r o easy ekta way asa seta hosce spered operator ...

    const obj5 = {...obj1,...obj2} // ay wat to 90% manous used kore 
    // console.log("obj5",obj5)

    // object er most common used hosce 3ta 

    console.log("Object.keys bujanor jonno ",Object.keys(obj5)) // mane ay khane e object er sob gola keys sodu nibe array return korbe  // output Object.keys bujanor jonno  [ 'name', 'gmail', 'id', 'school', 'home' ]
    console.log("Object.value bujar jonno ",Object.values(obj5)) // mane ay khane object er sodu value gola nibe and array return korbe // output Object.value bujar jonno  [ 'sss', 'x.com', '0121', 'www', 'uuu' ]

    //  Object.entries used kora hoy object er poti ta key r value pair ka alada alada array bananor jonno 

    // console.log("object.entries bujanor joonno ",Object.entries(obj5)) // output object.entries bujanor joonno  [
    //     [ 'name', 'sss' ],
    //     [ 'gmail', 'x.com' ],
    //     [ 'id', '0121' ],
    //     [ 'school', 'www' ],
    //     [ 'home', 'uuu' ]
    //   ]
   


































    return (
        <>
        <Text>Object part 2 </Text>
        </>
    )
}
export default object2

