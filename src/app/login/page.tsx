"use client";
import { Link } from "@chakra-ui/next-js";
import LeftBackground from "../components/leftBackground";
import {
  VStack,
  HStack,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/authActions";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<{ email: string; password: string }>();
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (data: { email: string; password: string }) => {
    axios
      .post("http://localhost:8080/api/login", data)
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          console.log(data);
          dispatch(login(data, rememberMe));
        }
      })
      .catch((err) => {
        if (err.response.status && err.response.status === 404) {
          setError("email", {
            type: "manual",
            message: err.response.data.message,
          });
        } else if (err.response.status && err.response.status === 401) {
          setError("password", {
            type: "manual",
            message: err.response.data.message,
          });
        }
      })
      .finally(() => {});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <HStack width="100%" height="100vh">
        <LeftBackground />
        <VStack
          backgroundColor="white"
          width="35%"
          height="100vh"
          align="center"
          justify="center"
          flexGrow={1}
          spacing={10}
        >
          <VStack align="flex-start" justify="center" width="60%" spacing={10}>
            <VStack align="flex-start" spacing={2}>
              <Heading as="h3" size="lg">
                Welcome back!
              </Heading>
              <Text fontSize="lg" lineHeight={7} fontWeight={"medium"}>
                Login to Get Started
              </Text>
            </VStack>
            <VStack spacing={4} w="100%">
              <FormControl
                className="form-control"
                id="email"
                isInvalid={!!errors.email}
              >
                <FormLabel style={{ fontSize: "14px" }}>
                  Email Address
                </FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "This field can not be empty",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "Please enter a valid email address in format: name@example.com",
                    },
                  })}
                  isDisabled={isSubmitting}
                />
                <FormErrorMessage className="form-error-message">
                  {errors.email?.message as string | undefined}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                className="form-control"
                id="password"
                isInvalid={!!errors.password}
              >
                <FormLabel style={{ fontSize: "14px" }}>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter at least 6 characters"
                  {...register("password", {
                    required: "This field can not be empty",
                    minLength: {
                      value: 6,
                      message:
                        "Please enter a valid password. The password is required at least 6 characters",
                    },
                  })}
                  isDisabled={isSubmitting}
                />
                <FormErrorMessage className="form-error-message">
                  {errors.password?.message as string | undefined}
                </FormErrorMessage>
              </FormControl>
            </VStack>
            <VStack spacing={4} w="100%" align="flex-start">
              <Checkbox
                colorScheme="teal"
                isChecked={rememberMe}
                onChange={() => setRememberMe((prevState) => !prevState)}
              >
                <Text fontSize="sm" lineHeight={5} fontWeight={"normal"}>
                  Remember me
                </Text>
              </Checkbox>
              <Button
                type={"submit"}
                colorScheme="teal"
                style={{ width: "100%" }}
              >
                Login
              </Button>
              <Text
                fontSize="sm"
                lineHeight={5}
                fontWeight={"medium"}
                color="#4A5568"
              >
                Don&apos;t have an account?{" "}
                <Link href="/register" color="#319795">Register here</Link>
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </form>
  );
}
