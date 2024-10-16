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
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    getValues,
  } = useForm<{ fullName: string; email: string; password: string; confirmPassword: string }>();
  const onSubmit = (data: { fullName: string; email: string; password: string; confirmPassword: string }) => {
    axios
      .post("http://localhost:8080/api/register", data)
      .then((res) => {
        if (res.status === 201) {
          console.log("User created");
          console.log(res.data);
        }
      })
      .catch((err) => {
        if (err.response.status && err.response.status === 409) {
          setError("email", {
            type: "manual",
            message: "The user already exists",
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
                Hello!
              </Heading>
              <Text fontSize="lg" lineHeight={7} fontWeight={"medium"}>
                Register to Get Started
              </Text>
            </VStack>
            <VStack spacing={4} w="100%">
            <FormControl
              className="form-control"
              id="fullName"
              isInvalid={!!errors.fullName}
            >
              <FormLabel style={{ fontSize: "14px" }}>Full name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                {...register("fullName", {
                  required: "This field can not be empty",
                })}
                isDisabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.fullName && errors.fullName.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              className="form-control"
              id="email"
              isInvalid={!!errors.email}
            >
              <FormLabel style={{ fontSize: "14px" }}>Email Address</FormLabel>
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
                {errors.email && errors.email.message?.toString()}
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
                disabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.password?.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            <FormControl
              className="form-control"
              id="confirmPassword"
              isInvalid={!!errors.confirmPassword}
            >
              <FormLabel style={{ fontSize: "14px" }}>
                Confirm Password
              </FormLabel>
              <Input
                formNoValidate
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", {
                  required: "This field can not be empty",
                  validate: (value) =>
                    value === getValues("password") ||
                    "Password does not match",
                })}
                disabled={isSubmitting}
              />
              <FormErrorMessage className="form-error-message">
                {errors.confirmPassword && errors.confirmPassword.message?.toString()}
              </FormErrorMessage>
            </FormControl>
            </VStack>
            <VStack spacing={4} w="100%" align="flex-start">
              <Button
                type={"submit"}
                colorScheme="teal"
                style={{ width: "100%" }}
              >
                Register
              </Button>
              <Text
                fontSize="sm"
                lineHeight={5}
                fontWeight={"medium"}
                color="#4A5568"
              >
                Already have an account?{" "}
                <Link href="/login" color="#319795">
                  Login here
                </Link>
              </Text>
            </VStack>
          </VStack>
        </VStack>
      </HStack>
    </form>
  );
}
