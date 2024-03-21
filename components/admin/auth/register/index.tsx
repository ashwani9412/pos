"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { useState } from "react";
import CreateableSelectOption from "../../common/selects/createable-select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import MultiSelects from "@/components/globals/selects/multi-selects";
import { GSTRATE } from "@/constants";
import { Icon } from "@iconify/react/dist/iconify.js";

const formSchema = z.object({
  businessRegistrationType: z.string(),
  category: z.array(z.string()),
  businessName: z.string().min(3, {
    message: "Please enter the item name min 3 character",
  }),
  businessType: z.string(),
  itemType: z.string(),
  industryType: z.number(),
});

export default function RegisterAdminPage() {
  const [selectedGSTRate, setSelectedGSTRate] = useState<any>(GSTRATE);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessRegistrationType: "product",
      category: [],

      businessName: "",
      businessType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const copyObj = values;
    console.log("onsubmit===>", values);
  }

  return (
    <div className="grid p-4">
      <div className="m-10 border p-5 radius-3 rounded-md bg-white">
        <div className="grid text-2xl place-content-center">
          Welcome, Create your new Account
        </div>
        <div className="p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" ">
              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Your Business Name{" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your business name"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Business type (select mutiple if applicable)
                        </FormLabel>
                        <FormControl>
                          <MultiSelects
                            id="long-value-select"
                            instanceId="long-value-select"
                            optionData={GSTRATE}
                            selectedOptions={selectedGSTRate}
                            setSelectedOptions={setSelectedGSTRate}
                            animation={false}
                            isMultiSelect={true}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div>
                  <FormField
                    control={form.control}
                    name="businessRegistrationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Registration Type</FormLabel>
                        <FormControl>
                          <MultiSelects
                            id="long-value-select"
                            instanceId="long-value-select"
                            optionData={GSTRATE}
                            selectedOptions={selectedGSTRate}
                            setSelectedOptions={setSelectedGSTRate}
                            animation={false}
                            isMultiSelect={false}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="industryType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry Type</FormLabel>
                        <FormControl>
                          <MultiSelects
                            id="long-value-select"
                            instanceId="long-value-select"
                            optionData={GSTRATE}
                            selectedOptions={selectedGSTRate}
                            setSelectedOptions={setSelectedGSTRate}
                            animation={false}
                            isMultiSelect={false}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="">
                  <FormField
                    control={form.control}
                    name="itemType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Is your business GST registered?{" "}
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="product" id="product" />
                              <Label className="border border-gray-200 rounded-md p-3 w-[150px] -pl-32 -ml-5">
                                Yes
                              </Label>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="services"
                                  id="services-two"
                                />
                                <Label className="border border-gray-200 rounded-md p-3 w-[150px] -pl-32 -ml-5">
                                  No
                                </Label>
                              </div>
                            </div>
                          </RadioGroup>
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-1/2 p-4 mx-auto text-center ">
                <span className="text-gray-500">
                  By completing registration you accept our
                </span>{" "}
                <span className="font-bold text-blue-400">
                  Terms & Condition & Privacy Policy
                </span>
              </div>
              <div className="grid w-[400px] mx-auto">
                <Button
                  className="my-2 hover:bg-blue-500  bg-blue-800"
                  type="submit"
                >
                  SUBMIT
                </Button>
              </div>
              <div className="w-1/2 p-4 mx-auto text-center ">
                <span className="text-gray-500">
                  Receive account updates and reminders on WhatApp
                </span>
              </div>
              <div className="w-1/2 p-6 mx-auto text-xs text-center ">
                <span className="text-gray-500">
                  100% secure | ISO 27001 certified | Trusted by multiple small
                  businesses
                </span>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
