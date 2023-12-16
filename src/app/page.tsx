"use client";
import { Button, ButtonGroup } from "@nextui-org/react";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <div>
      <div className="flex justify-between mx-8 items-center mt-3">
        <img className="object-cover w-16 h-16" src="./triagezone.png"></img>
        <div className="flex">
          <h2 className="mx-8">Features</h2>
          <h2 className="mx-8">About Us</h2>
          <h2 className="mx-8">Blog</h2>
        </div>
      </div>

      <div className="flex items-center flex-col justify-center mt-52">
        <h1 className="text-8xl font-medium">TRIAGE ZONE</h1>
        <h3 className="mt-10 text-2xl font-light font-sans ">
          <Typewriter
            options={{
              strings: [
                "AN AI TOOL TO HELP NURSES CATEGORIZE PATIENTS BASED ON SYMPTOMS",
                "AN AI TOOL TO HELP DOCTORS TREAT THE PATIENTS IN DIRE NEED OF CARE FIRST",
                "AN AI TOOL TO HELP PATIENTS IN CRITICAL CONDITIONS FIRST",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <div className="mt-10">
          <Button color="primary" variant="shadow" className="mr-10">
            Login
          </Button>
          <Button color="primary" variant="bordered">
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
}
