import { Button, Input } from "@nextui-org/react";
import React from "react";

const SignupForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input
        isRequired
        label="Name"
        placeholder="Enter your name"
        type="text"
        variant="bordered"
      />
      <Input
        isRequired
        label="Email"
        placeholder="Enter your email"
        type="email"
        variant="bordered"
      />
      <Input
        isRequired
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />

      <div className="flex gap-2 justify-end">
        <Button fullWidth color="primary">
          Sign up
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
