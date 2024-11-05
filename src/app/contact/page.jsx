import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-12 px-4 md:px-6 lg:px-20">
        <div className="max-w-4xl mx-auto shadow-lg p-6 md:p-10">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>

          <form className="space-y-6">
            <div className="flex flex-col">
              <Label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Name:
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Email:
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 mb-1"
              >
                Message:
              </Label>
              <Textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></Textarea>
            </div>

            <div className="text-center">
              <Button variant="outline" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
