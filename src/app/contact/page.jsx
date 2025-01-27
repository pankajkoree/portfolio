"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 mt-4">
      <div className="relative flex flex-col xl:p-4 xl:mx-auto justify-center border border-blue-200 xl:hover:shadow-md xl:hover:shadow-green-300 max-w-full xl:max-w-4xl rounded-xl p-4 xl:m-16 text-gray-700 dark:text-white">
        <h2 className="text-xl xl:text-2xl font-bold text-center mb-4 sm:mb-6">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-white mb-2 sm:mb-8">
          Feel free to reach out if you have any questions or would like to
          collaborate!
        </p>

        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <Label
              htmlFor="name"
              className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
            >
              Name:
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="h-[45px] sm:h-[50px] rounded-xl border border-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="email"
              className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
            >
              Email:
            </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-[45px] sm:h-[50px] rounded-xl border-blue-300"
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="message"
              className="text-base sm:text-xl font-semibold text-gray-600 dark:text-white mb-1"
            >
              Message:
            </Label>
            <Textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="h-[90px] xl:h-[120px] rounded-xl border-blue-300"
            ></Textarea>
          </div>

          <div className="text-center">
            <Button variant="submit" type="submit" className="w-full sm:w-auto">
              Send Message
            </Button>
          </div>
        </form>

        {status && <p className="text-center mt-4">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
