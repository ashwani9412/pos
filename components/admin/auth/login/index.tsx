"use client";
import React, { useState } from "react";
import loginPage from "@/assest/loginimg.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  mobileNumber: z.string().min(2, {
    message: "mobile number is a mandatory field!",
  }),
  otp: z.string().min(2, {
    message: "enter otp for login!",
  }),
});

export const AdminLoginPage = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNumber: "",
      otp: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const handleRegister = () => {
    router.push("/auth/register/companies", { scroll: false });
  };

  return (
    <>
      <div className="container w-[100%] bg-gray-50 h-[100vh] flex grid-rows-none gap-2">
        <div className="col-auto mr-4 px-2 mt-2 py-2 w-[70%]">
          <Image className="rounded-sm h-[95vh]" src={loginPage} alt="" />
        </div>
        <div className="col-auto w-[30%] h-[100vh]">
          <div className="text-xl text-center m-8 font-bold">Login</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your mobile number</FormLabel>
                    <FormControl>
                      <Input placeholder="+91" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter OTP</FormLabel>
                    <FormControl>
                      <Input placeholder="OTP" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button
                  className="w-[100%] hover:bg-blue-600 bg-blue-700"
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </Form>

          <div className="mt-4">
            <span className="text-md text-center text-wrap mt-5 text-gray-400">
              Are you a new user here? <br /> Register yourself here.
            </span>
            <Button
              className="w-[100%] hover:bg-red-200 bg-red-400"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </Button>
            <br />
            <hr />
            <Button className="w-[100%] mt-4" type="submit">
              Login by scanning QR code
            </Button>
          </div>
          <div className="text-md text-center text-wrap mt-5 text-gray-400">
            100% secure & ISO 27001 certified
          </div>
        </div>
      </div>
    </>
  );
};
