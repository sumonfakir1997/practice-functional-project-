import React from "react";
import { Box } from "@chakra-ui/react";

const iife_function = () => {
  // ----------- note -----------

  // 2ta invoke function er ek sathe run korle must ne ; dite hba na hoy error dakhabe

  // function invoked mane function nije nije ka call kore

  (() => {
    // ay khane function nije nije ka call korar jonnno const variable used korle errors chole asha eta kora jabe nah
    console.log("funcion invoked");
  })();

  //  function er sathe kono value pass korte caile ki korbo ?

  ((number) => {
    console.log(number);
  })(5); // mane hosce ja

  // one()

  (function one(su) {
    console.log(`function one invoked ${su}`);
  })("sumon "); // ay khane abr function + function name o dao jai

  (function one() {
    console.log(`function one invoked`);
  })();

  return (
    <>
      <Box>iife (immediatelty invoked function expression )</Box>
    </>
  );
};

export default iife_function;
