import React  from "react";

const Arrays = () => {
  
    const heros_name = ["sarok","sakib","jambo"]
    const num_arrays = [0,1,2,3,4,5,6]

    // const new_num_array = new Array(1,2,3,7,9) // ay vabe o array define kora jai 

    // console.log("num_arrays is ",num_arrays[1])
    // console.log("new_num_array",new_num_array)

    // array method

    heros_name.push("sumon");// heros_name er array te sumon element last e add hoye galo 
    // console.log("heros_name add array is " ,heros_name )
    heros_name.pop() // eta mane heros_name.pop() heros_name array er last element delete kore dibe ay khane value dite hoy nah 
    // console.log("heros_array_ delete used pop method",heros_name)

    heros_name.shift(); // shift er kaj holo heros_name array er first element ta ka removed kore dao 
    // console.log("heros_name shift",heros_name)

    heros_name.unshift("fakir") // heros_name.unshift() method er modee ja value dibo oi ta direct array er 1st element er bosha jabe tbe ay jonno jeta hoy seta hosce array er sob element er refference changes hoye jasce eta time and memonry comziming er o baper 

    // console.log("heros_name unshift ",heros_name)


    // js e qus type true or false ans dai 

    // console.log("heros_name includes ",heros_name.includes("sumon")) // mane hole heros_name er array er modde sumon mane e kono element nai 


    // console.log("num_arrays indexof isss",num_arrays.indexOf(2)) // array er indexof method er modde ekta value dibo then eta check kore bolbo jodi thake tahole index diye dibe r jodi nah thake tahole -1 dibe 
  
    const slicearr = num_arrays.slice(1,4) //slice er kaj holo slice(1,4) mane holo index 1 thake start korbe index 4num er ag porjonoto + slice maiin array ka changes kore nah 
    // console.log("my slice array is ",slicearr)
    // console.log("num_arrays",num_arrays) // slice main array ka changes kore nah 

    // const splicearr = num_arrays.splice(1,4) // splice er kaj holo (paramter ja thake e thake like 1,4 asa mane index 1 to 4 porjonoto sob niye nibe and main array ka changes kore dai )
    // console.log("splicearr",splicearr)

    // console.log("num_arrays",num_arrays)

//   const  myarr = num_arrays.join() // join gole 

//   console.log("myarr", myarr)

/****** true or false er jonno  */

// indexof() method er kaj holo kono array  er element e indexof(er modde ja sonka ta dibo oita asa kina khuje bair kora koto number index e asa r jodi nah thake tahole - 1 dibe ) index e oi 

// console.log("index of ",num_arrays.indexOf(4))// indexof er modde 4diye check korlam koto number index e eta asa ? dakhailo 4 then nicha print kore check korlam jah asa kina 
console.log("index of ",num_arrays[4]) // ay khane num_arrays[4] dice mane ans 4 ei asa 


// ***************************************************//

//  ekn check korbo array include methods diye ami ja element ta array te khujtece seta array te asha ki na ? jodi thake tahole true r jodi nah thake thaole false asbe  

// console.log("num_arrays incloude check kora ", num_arrays.includes(6)) // se 10 khuje pai nah tai false dice  abr  includes er value 6 diye try korci sa true dice mane ja khuje paice 


// console.log("every ",num_arrays.every())


















    return (
        <>
        </>
    )
}
export default Arrays;