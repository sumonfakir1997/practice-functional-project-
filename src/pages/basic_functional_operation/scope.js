import React from "react";
import { Box } from "@chakra-ui/react";

const Scope = () => {
  const one = () => {
    // eta hosce global scope
    const user_name = "sumon";

    const two = () => {
      // eta hosce local scope
      const user_last_name = "fakir";
      console.log(`user name is ${user_name}and${user_last_name}`);
    };
    // two();
    // console.log(`user name is ${user_name}and   ${user_last_name}`)// ay khane two function kaj korbe nah error
    // -------------//
    //  ay khane function er poriborte loop er modde loop etc thakte pare sob kichui same
  };

  //   one();


  if (true) {
    const my_name = 'sumon'
    if (my_name === 'sumon') {
      console.log(`${my_name}`)
    }
  }

  const varr = function (num)  {  // eta ka expression bole 
      return num + 5;
  }

  varr(5); // ay function call sob  somay de3celar er nicha ei korte hba na hoy error show korbe 

  function addOne(number) {
    return number * 5;
  }
  addOne(5) // ay function ami upore nicha  call korle o kono problem nai 



  return (
    <>
      <Box>hello</Box>
    </>
  );
};
export default Scope;
