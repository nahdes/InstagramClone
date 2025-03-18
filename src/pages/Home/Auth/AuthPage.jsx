import { Container, Flex, Box, VStack, Image } from "@chakra-ui/react";
import AuthForm from "../../../Componets/AuthForm/AuthForm";
import React from "react";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} px={4}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="phone img" />
          </Box>

          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>
              {" "}
              Get The app
              <Flex gap={5} justify={"center"}>
                <Image src="/playstore.png" h={"10"} alt="playstote logo" />
                <Image src="/microsoft.png" h={"10"} alt="microsof logo" />
              </Flex>
            </Box>
          </VStack>
        </Flex>
        login
      </Container>
    </Flex>
  );
};

export default AuthPage;
