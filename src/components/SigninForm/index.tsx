import { Button, Input } from "@nextui-org/react";
import React from "react";

const SigninForm = () => {
  return (
    <form className="flex flex-col justify-between h-[250px] gap-4">
      <div className="flex flex-col gap-4">
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
