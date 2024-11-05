import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative flex flex-col xl:p-4 xl:mx-auto justify-center xl:border xl:border-blue-200 xl:hover:shadow-md xl:hover:shadow-green-300 xl:max-w-4xl rounded-xl m-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Feel free to reach out if you have any questions or would like to
          collaborate!
        </p>

        <form className="space-y-6">
          <div className="flex flex-col">
            <Label
              htmlFor="name"
              className="xl:text-xl font-semibold text-gray-600 mb-1"
            >
              Name:
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="h-[50px] rounded-xl border border-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="email"
              className="xl:text-xl font-semibold text-gray-600 mb-1"
            >
              Email:
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="h-[50px] rounded-xl border-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="message"
              className="text-xl font-semibold text-gray-600 mb-1"
            >
              Message:
            </Label>
            <Textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              className="h-[146px] rounded-xl border-blue-300"
            ></Textarea>
          </div>

          <div className="text-center">
            <Button variant="submit" type="submit">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
