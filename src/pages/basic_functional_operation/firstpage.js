import React, { useReducer } from "react";
import { Box, Text, Flex, Button } from "@chakra-ui/react";

const initialState = 0;
const reducer = (state,action) => {

    // if (action.type == "increment") {
    //     return state + 1;
    // }
    // if (action.type == "decrement") {
    //     return state - 1;
    // }
    switch (action.type) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        default:
            return state;

    }
}

// useReducer hooks 1st works

const FistPage = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <>
            <Box w='500px' h='500px' mx='auto' bg='lightblue' py='200px'>
                <Flex justifyContent='space-between' align='center' px='50px'>
                    <Button bg='green' onClick={() => dispatch({ type: 'increment' })} w='100px' color='white' _hover='none' _active='none'>
                        +
                    </Button>
                    <Text fontSize='24px' fontWeight='700' color='white'> {state}</Text>
                    <Button bg='red' onClick={() => dispatch({ type: 'decrement' })} w='100px' color='white' _hover='none' _active='none'>
                        -
                    </Button>
                </Flex>

            </Box>
        </>
    )
}

export default FistPage;