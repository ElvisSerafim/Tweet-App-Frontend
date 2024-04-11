import {
  createUserSignUpData,
  createUserSignUpSchema,
} from "@/validators/userSignValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSignUpData>({
    resolver: zodResolver(createUserSignUpSchema),
  });

  const onSubmit = (data: createUserSignUpData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <Input
          isRequired
          label="Name"
          placeholder="Enter your name"
          type="text"
          variant="bordered"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
          variant="bordered"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
