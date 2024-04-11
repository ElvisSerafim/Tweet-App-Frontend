import {
  createUserSignInData,
  createUserSignInSchema,
} from "@/validators/userSignValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const SigninForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserSignInData>({
    resolver: zodResolver(createUserSignInSchema),
  });

  const onSubmit = (data: createUserSignInData) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between h-[250px] gap-4"
    >
      <div className="flex flex-col gap-4">
        <div>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Input {...field} />}
          />
          <Input
            isRequired
            label="Email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            {...register("email")}
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
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
      </div>
      <div className="flex gap-2 justify-end">
        <Button fullWidth className="pointer" color="primary">
          Login
        </Button>
      </div>
    </form>
  );
};

export default SigninForm;
