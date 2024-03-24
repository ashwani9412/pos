import { GSTRATE } from "@/constants";
import React, { FC } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
interface MultiSelectPropsI {
  id: string;
  instanceId: string;
  optionData: Array<string>[];
  isMultiSelect?: boolean;
  selectedOptions: any;
  setSelectedOptions: any;
  animation?: any;
  defaultValues?: any;
}
const animatedComponents = makeAnimated();
const MultiSelects: FC<MultiSelectPropsI> = ({
  id,
  instanceId,
  optionData,
  selectedOptions,
  defaultValues,
  isMultiSelect,
  setSelectedOptions,
  animation,
}) => (
  <Select
    id={id}
    instanceId={instanceId}
    isMulti={isMultiSelect}
    options={optionData}
    defaultValue={defaultValues}
    onChange={setSelectedOptions}
    components={animation && animatedComponents}
  />
);
export default MultiSelects;
