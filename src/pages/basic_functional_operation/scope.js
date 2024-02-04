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


  if(true) {

    const my_name = 'sumon'
    if(my_name === 'sumon'){
        console.log(`${my_name}`)
    }

  }


  return (
    <>
      <Box>hello</Box>
    </>
  );
};   
export default Scope;
