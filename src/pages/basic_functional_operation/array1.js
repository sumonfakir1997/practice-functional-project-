import React  from "react";

const Arrays = () => {
  
    const heros_name = ["sarok","sakib","jambo"]
    const num_arrays = [0,1,2,3,4,5,6]

    const new_num_array = new Array(1,2,3,7,9) // ay vabe o array define kora jai 

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

    console.log("heros_name includes ",heros_name.includes("sumon")) // mane hole heros_name er array er modde sumon mane e kono element nai 


    console.log("num_arrays indexof isss",num_arrays.indexOf(2)) // array er indexof method er modde ekta value dibo then eta check kore bolbo jodi thake tahole index diye dibe r jodi nah thake tahole -1 dibe 
  




















    return (
        <>
        </>
    )
}
export default Arrays;