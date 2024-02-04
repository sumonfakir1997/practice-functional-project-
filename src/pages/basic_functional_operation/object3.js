import React from "react";
import { Box,Text } from "@chakra-ui/react";

const obj3 = () => {
   
    function addTwoNum (number1,number2) {
        console.log(number1+ number2)
    }
    addTwoNum() // function e argument e kichu na dibar jonno asce NaN

  const addTwoNums = (number1,number2) => {
    console.log(number1,number2)
  }
  addTwoNums() // es6 e afunction call diye argument sara direct undefine asa  









    return (
        <>
        <Box>
            <Text>Object 3</Text>
        </Box>
        </>
    )
}
export default obj3;