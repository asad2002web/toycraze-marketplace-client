import { Accordion } from "flowbite-react";
import React from "react";

const FAQuestion = () => {
  return (
    <div className="my-8">
        <div className="text-center">
        <h3 className="text-3xl font-semibold my-2 text-orange-500">Frequently Asked Questions</h3>
        <h5 className="text-md">Find your answer from here</h5>
        </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:gap-8 justify-between">
        <div className="md:w-1/2">
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                What is the age range of toys available in the store ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The age range of toys available in the store is 1 year
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                Do you offer a warranty or return policy for your products ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, We offer a warranty or return policy for our products.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                Can I order toys online or do I need to visit the store ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yes, you can order toys online or purchase directly from the
                  store.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                Do I need to pick them up in Store or delivered at home ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  You can also order from the store or order on our website and
                  take the product home.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                Are your toys environmentally friendly and sustainable ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Yex, Our toys are eco-friendly and durable,
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-orange-500 font-semibold">
                What is range of toys do you have in your Store ?{" "}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Our store has a range of thousands of toys.{" "}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-[80%] h-[80%]"
            src="https://i.ibb.co/TRFpCFY/question.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default FAQuestion;
