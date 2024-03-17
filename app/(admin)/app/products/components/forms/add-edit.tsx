"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
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
import CreateableSelectOption from "@/components/admin/common/selects/createable-select";

const formSchema = z.object({
  itemType: z.string(),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  category: z.array(z.string()),
  itemName: z.string().min(3, {
    message: "Item name shoud min 3 character",
  }),
  salePrice: z.string(),
});

export function AddEditProduct() {
  const categoryOptions = [{ value: "general", label: "General" }];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemType: "product",
      category: [],
      username: "",
      itemName: "",
      salePrice: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log("onsubmit===>", values);
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-3 rounded-sm my-2 p-3 bg-white">
        <div className="col-span-1">Tab</div>
        <div className="col-span-4 ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" border p-5 radius-3 rounded-md bg-white "
            >
              <div className="grid grid-cols-2 gap-2">
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
                          <CreateableSelectOption
                            optionsData={categoryOptions}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-full">
                  <FormField
                    control={form.control}
                    name="itemName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Item Name <span className="text-red-500">*</span>
                        </FormLabel>
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
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name</FormLabel>
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
                    name="salePrice"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sales Price</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Maggies 20gm" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
