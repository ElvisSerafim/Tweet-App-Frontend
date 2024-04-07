"use client";

import React, { Key, useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SignupForm from "@/components/SignupForm";
import SigninForm from "@/components/SigninForm";
import Image from "next/image";

const Login = () => {
  const [selected, setSelected] = useState<string>("login");

  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-10 p-4 py-16">
      <div className="flex flex-col items-center sm:flex-row gap-2">
        <h1 className="text-white font-bold text-xl text-center">
          Welcome to the Tweet App
        </h1>
        <Image
          src={"/star-icon.svg"}
          width={24}
          height={24}
          alt={"star-icon"}
        />
      </div>
      <Card className="min-w-full md:min-w-[500px] h-full">
        <CardBody>
          <Tabs
            fullWidth
            size="lg"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key: Key) => setSelected(key.toString())}
            color="primary"
          >
            <Tab key="login" title="Login">
              <SigninForm />
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <SignupForm />
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
