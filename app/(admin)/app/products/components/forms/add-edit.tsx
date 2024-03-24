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
import { useState } from "react";
import MultiSelects from "@/components/globals/selects/multi-selects";
import { GSTRATE } from "@/constants";
const purchasePricePercentage = 30;

const formSchema = z.object({
  itemType: z.string(),
  category: z.string(),
  itemName: z
    .string()
    .trim()
    .min(1, "Item name is required")
    .max(150, { message: "Maximum limits is 150" }),
  salePrice: z
    .string()
    .min(1, "Sale price is required")
    .max(7, "Maximum 7 digits are allowed"),
  purchasePrice: z
    .string()
    .max(7, { message: "Purchase price max limit is 7 " })
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Purchase price should be a number",
    }),
  purchaseTaxType: z.string(),
  saleTaxType: z.string(),
  mrp: z.string(),
  gstRate: z.string(),
});

export function AddEditProduct() {
  //calculate purchasePricePercentage
  const calculatePurchasePricePercentage = (
    purchasePricePercentage: any,
    salePrice: any
  ) => {
    return (salePrice * purchasePricePercentage) / 100;
  };

  const categoryOptions = [{ label: "General", value: "general" }];
  const [selectedCategories, setSelectedCategories] = useState<any>();
  const [selectedGSTRate, setSelectedGSTRate] = useState<any>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemType: "product",
      itemName: "",
      salePrice: "",
      purchasePrice: "",
      purchaseTaxType: "withGST",
      saleTaxType: "withGST",
      mrp: "",
      gstRate: "",
      category: "",
    },
  });

  function onSubmit(values: any) {
    const copyObj = values;
    copyObj.category =
      selectedCategories?.value === undefined || null
        ? "General"
        : selectedCategories?.value;
    copyObj.gstRate =
      selectedGSTRate?.value === undefined || null
        ? "none"
        : selectedGSTRate?.value;
    copyObj.salePrice = {
      salePrice: Number(values.salePrice),
      gstType: values.saleTaxType,
      tax: values.gstRate,
    };
    let purchasePriceAuto = calculatePurchasePricePercentage(
      Number(copyObj?.salePrice.salePrice),
      purchasePricePercentage
    );
    copyObj.purchasePrice = {
      purchasePrice:
        values.purchasePrice === ""
          ? copyObj?.salePrice.salePrice - purchasePriceAuto
          : Number(values.purchasePrice),
      gstType: values.purchaseTaxType,
      tax: values.gstRate,
    };
    console.log("onsubmit===>", values);
    // alert(JSON.stringify(values, null, 4));
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
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <CreateableSelectOption
                            id="long-value-select-create"
                            instanceId="long-value-select-create"
                            optionsData={categoryOptions}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
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
                          <Input
                            type="text"
                            placeholder="Ex: Maggies 20gm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2">
                  <div className="flex">
                    <FormField
                      control={form.control}
                      name="salePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Sales Price</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Ex: 100"
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
                      name="saleTaxType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tax Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Including Tax" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem
                                value="withGST"
                                defaultValue="withTax"
                              >
                                Including Tax
                              </SelectItem>
                              <SelectItem value="withoutGST">
                                Excluding Tax
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="flex">
                    <FormField
                      control={form.control}
                      name="purchasePrice"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Purchase Price</FormLabel>
                          <FormControl>
                            <Input placeholder="Eg: 90" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="purchaseTaxType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tax Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Including Tax" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem
                                value="withGST"
                                defaultValue="withTax"
                              >
                                Including Tax
                              </SelectItem>
                              <SelectItem value="withoutGST">
                                Excluding Tax
                              </SelectItem>
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="mrp"
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
                    name="gstRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GST Tax Rate(%)</FormLabel>
                        <FormControl>
                          <MultiSelects
                            id="long-value-select"
                            instanceId="long-value-select"
                            optionData={GSTRATE}
                            selectedOptions={selectedGSTRate}
                            defaultValues={GSTRATE[0]}
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
    </>
  );
}
