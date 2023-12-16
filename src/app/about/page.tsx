"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
export default function About() {
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

      <div className="flex justify-center mx-8">
        <h1 className="text-4xl font-bold mb-10">Meet the Team...</h1>
      </div>
      <div className="mx-52">
        <Card isBlurred shadow="sm">
          <CardBody>
            <div className="flex justify-between items-center">
              <div className="m-4 mt-0">
                <img className="rounded-lg" src="./sriknamb.jpg"></img>
              </div>
              <div>
                <div className="flex flex-col">
                  <p className="text-4xl mt-4 font-extralight ">
                    Srikar Namburi
                  </p>
                  <p className="mb-0 text-small text-default-500">
                    Software Engineer
                  </p>
                </div>
                <h3 className="font-normal mt-8">
                  I am highly driven by the pursuit of efficiency. My passion
                  lies in streamlining complex tasks by employing concise lines
                  of code and leveraging my creative thinking abilities, which
                  serves as a primary motivation for my aspiration to become a
                  software engineer. As a goal-oriented, responsible, and
                  dedicated engineer, I approach every project with meticulous
                  planning, utilizing design documents and pre-existing models
                  to explore new concepts, gain fresh perspectives, and
                  proactively anticipate potential challenges. Additionally, I
                  thrive in collaborative team environments, consistently
                  demonstrating a supportive mindset towards my colleagues.
                </h3>
                <ul className="list-disc"></ul>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card isBlurred shadow="sm" className="mt-10">
          <CardBody>
            <div className="flex justify-between items-center">
              <div className="m-4 mt-0">
                <img
                  className="rounded-lg"
                  src="https://media.licdn.com/dms/image/C4E03AQGQShbuP7Jruw/profile-displayphoto-shrink_800_800/0/1580063948895?e=2147483647&v=beta&t=HVfnwVBPk1VR2KnoKt5cZaFJYI1zYey34jHQ10HQXuI"
                ></img>
              </div>
              <div>
                <div className="flex flex-col">
                  <p className="text-4xl mt-4 font-extralight ">
                    Arvind Krishnan
                  </p>
                  <p className="mb-0 text-small text-default-500">
                    Computer Engineer
                  </p>
                </div>
                <h3 className="font-normal mt-8">
                  I am highly driven by the pursuit of efficiency. My passion
                  lies in streamlining complex tasks by employing concise lines
                  of code and leveraging my creative thinking abilities, which
                  serves as a primary motivation for my aspiration to become a
                  software engineer. As a goal-oriented, responsible, and
                  dedicated engineer, I approach every project with meticulous
                  planning, utilizing design documents and pre-existing models
                  to explore new concepts, gain fresh perspectives, and
                  proactively anticipate potential challenges. Additionally, I
                  thrive in collaborative team environments, consistently
                  demonstrating a supportive mindset towards my colleagues.
                </h3>
                <ul className="list-disc"></ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
