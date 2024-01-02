import React from "react";

import { Box,Text, useAccordion } from "@chakra-ui/react";

const object1 = () => {

    // object literals  hosce normally nicha jah vabe object define kora hoyca eta 

    // singleton object hosce Object.Construtor diye jate kora hoy etai 


    // intiali symble define kora thekn eta object er modde print kora 

    const  mySymbal = Symbol("key1")

    const UserInfo = {
        name : 'sumon ',
        "full name" : "Md.Sumon Fakir ",
        age: 25,
        job: 'Mir info System ',
        email: 'sumonfakir1997@gmail.com',
        [mySymbal] : 'My key 1 '
        

    }

    //  so full name ki vabe accesss korbo ?
    // UserInfo.full name ay vabe access kora jabe nah 
    // ay khane ei problem face hoy 
    //  ay problem solved korar jonno UserInfo["full name"]  used koira lage 
 
    // obeject er key by defult string ei hoy like ey khane name asa actually "name " : "sumon "

    //  old way to access r etai sobay beshi used kore UserInfo.name
    // r o ekta way asa seta hosce UserInfo["name"]



    console.log("UserInfo",UserInfo.name)// eta normally sobay used kore old way 
    console.log("UserInfo Update style ",UserInfo["name"]) // ay vabe o object ka access kora hoy 
    console.log("full name ",UserInfo["full name"]) // "object key value sas ei "" dite hba na hoy undefine asbe "

    //  ********************** Object destructure o korte pare like 

    const {name,"full name": fullName,job,email} = UserInfo // eta hosce obejct destructure kora practice korlam 

    console.log(`this is my  ${name} and my full name is${fullName} and my gmail is ${email} and my job is ${job}`) // try korlam ek line e Temple literal syntex diye obejct desturce kore value used kora 
    console.log(fullName)// ay khane object desturture kore sofu fullname niye obejct er full name access korce 


    // ++++++++++++++++++++++  Biare symbal used kore ki vabe object er modde symbal print korabo  ++++++++++++++++++++++ 

//  symbol ki vabe dakbo actully print hoyca kina 
console.log(UserInfo.mySymbal) // ay khabe MY key 1 print hosce ekn jodi type dakhi then dakbo string but ami to symbol korci 
console.log("typeof UserInfo.mySymbal is ",typeof UserInfo.mySymbal) // so ay khane string dakhaca tobe ami to object er baire symbol used kori kaj kintu kore nai 

// so symbol dakte hole mySymbal ka [ er modde dite hba ] like [mySymbal]

//  ekn jodi full object ta dakhe tahole bujte parbo ja se actullly symbol ei nisce 
console.log("try to check Symbol asce kina Objcet er modde  ",UserInfo) // ekn ki show kortece console e like try to check Symbol asce kina Objcet er modde   {
//     name: 'sumon ',
//     'full name': 'Md.Sumon Fakir ',
//     age: 25,
//     job: 'Mir info System ',
//     email: 'sumonfakir1997@gmail.com',
//     [Symbol(key1)]: 'My key 1 '
//   }

// mane [] breket diye symbol ka reffer kori  

//  mysymbol ka console kora jonno  
console.log("unser info Symbol accesss " ,UserInfo[mySymbal]) // my key 1 chole asce 

// __________ object ka changes na korte caile freeze method asa eta used korle r object ka changes kora jabe na 

// Object.freeze(UserInfo)

// UserInfo.job = " upcoming " // Object. freeze korar jonno error disce type eoopr 

































    return (
        <>
        <Text> Object practice part 1 </Text>
        </>
    )
}

export default object1;