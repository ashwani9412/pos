'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import CreateableSelectOption from '../../common/selects/createable-select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label'


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
    // copyObj.category = selectedCategories;
    // Do something with the form values.
    console.log("onsubmit===>", values);
  }

  return (
    <div className='grid  p-4'>
      <div className='grid text-2xl place-content-center '>
        Welcome, Create your new Account
      </div>
      <div className='m-10'>
      <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="border p-5 radius-3 rounded-md bg-white "
            >
              <div className="grid grid-cols-2 gap-2">
                <div className="">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Your Business Name <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your business name" {...field} />
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
                        <FormLabel>Business type (select mutiple if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Maggies 20gm" {...field} />
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
                        <FormLabel>M.R.P</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: 150" {...field} />
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
                          <Input placeholder="Ex: Maggies 20gm" {...field} />
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
                          Item Type <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="product" id="product" />
                              <Label className="border border-gray-200 rounded-md p-3 w-200 -pl-32 -ml-5">
                                Product
                              </Label>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem
                                  value="services"
                                  id="services-two"
                                />
                                <Label className="border border-gray-200 rounded-md p-3 w-200 -pl-32 -ml-5">
                                  Service
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
                <div className="">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Category <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          {/* <CreateableSelectOption
                            id="long-value-select"
                            instanceId="long-value-select"
                            optionsData={categoryOptions}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                          /> */}
                        </FormControl>

                        <FormMessage/>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button className="my-2 bg-blue-500" type="submit">
                SUBMIT
              </Button>
              <Button className="mx-2 bg-yellow-500" type="reset">
                RESET
              </Button>
              <Button className="bg-red-500" type="reset">
                CANCEL
              </Button>
            </form>
          </Form>
      </div>
    </div>
  )
}
