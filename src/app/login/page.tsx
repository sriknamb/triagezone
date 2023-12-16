"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

export default function LoginPage() {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <section className="h-screen">
      <div className="h-full">
        <div className="flex h-full flex-wrap items-center justify-center">
          <div className="w-6/12">
            <img
              src="./doctor-consultation.jpg"
              className="object-cover h-5/6 w-4/5 ml-4"
              alt="Doctor at home"
            />
          </div>
          <div className="w-6/12">
            <div className="flex flex-col justify-start">
              <h1 className="font-bold text-2xl">Login To TriageZone</h1>
              <div className="mt-24">
                <h3>Please enter your email</h3>
                <Input
                  className="w-6/12"
                  type="email"
                  label="Email"
                  isRequired
                />
              </div>
              <div className="mt-10">
                <h3>Please enter your password</h3>
                <Input
                  label="Password"
                  variant="bordered"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="w-6/12"
                />
              </div>
              <div className="mt-10">
                <Button
                  className="w-2/12"
                  radius="full"
                  color="primary"
                  variant="shadow"
                >
                  <h1 className="font-thin text-lg">Login</h1>
                </Button>
                <h5 className="mt-3 font-thin">
                  No account? Create an <Link href="#">account</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
