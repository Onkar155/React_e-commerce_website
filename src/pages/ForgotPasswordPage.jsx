import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useQuery,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";

export default function ForgotPasswordPage() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const toast = useToast();
  const { resetPassword } = useAuth();
  const { forgotPassword } = useAuth();
  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Forgot password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={
            async (e) => {
              e.preventDefault();
              //when the email is submit what to do is here
              forgotPassword(email)
                .then((response) => {
                  console.log(response);
                  toast({
                    description:
                      "Password has been changed, you can login now.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                  });
                })
                .catch((e) => {
                  console.log(e.message);

                  toast({
                    description: e.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                });
            }
            // your forgot password logic here
          }
        >
          <Stack spacing="6">
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                alue={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </FormControl>
            <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
              Submit
            </Button>
          </Stack>
        </chakra.form>
        <DividerWithText my={6}>OR</DividerWithText>
        <Center>
          <Button variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
      </Card>
    </Layout>
  );
}
