import React, { useReducer, useState } from "react";
import {
    Box, Text, FormControl,
    FormLabel,
    FormErrorMessage, Input, Button, Flex, ListItem, UnorderedList
} from "@chakra-ui/react";


const initialState = [{
    id: Date.now(),
    name: "sumon",
    email: "sumonfakir1997@gmail.com"
}]

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state,action.payload];
    }
}

const Form = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    console.log("state ===" , state)

    const addtoSubmit = () => {
        setName("");
        setEmail("");

        const contact = () => {
            id: data.now();
            name: name
            email: email
            
        }
        dispatch({type:'add',payload: contact})

    }

    return (
        <>
            <Box bg='lightcyan' w='500px' h='700px' mx='auto' py='50px' px='16px' mt='100px'>
                <Text fontWeight='700' fontSize='34px' lineHeight='42px' textAlign='center' mb='24px' color='red'>
                    Form using Reducer Hooks
                </Text>
                {/* <Form onSubmit={addtoSubmit}> */}
                <FormControl mb='24px'>
                    <FormLabel pb='16px'>Enter your Name</FormLabel>
                    <Input type="text" placeholder="enter your name " value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>

                <FormControl mb='24px'>
                    <FormLabel mb='16px'>Enter your Email</FormLabel>
                    <Input type="text" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormControl>

                <Flex justifyContent='center'>
                    <Button mx='auto' onSubmit={addtoSubmit} bg='white'>
                        submit form
                    </Button>
                </Flex>

                <Box>
                    <UnorderedList>
                        {state.map((value, index) => {
                            return (
                                <ListItem key={index}>
                                    {value.name}
                                </ListItem>
                            )
                        })}
                    </UnorderedList>
                </Box>

            </Box>
        </>
    )
}

export default Form;