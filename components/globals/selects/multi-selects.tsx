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
}
const animatedComponents = makeAnimated();
const MultiSelects: FC<MultiSelectPropsI> = ({
  optionData,
  id,
  instanceId,
  selectedOptions,
  isMultiSelect,
  setSelectedOptions,
  animation,
}) => (
  <Select
    id={id}
    instanceId={instanceId}
    isMulti={isMultiSelect}
    defaultValue={selectedOptions}
    onChange={setSelectedOptions}
    components={animation && animatedComponents}
    options={optionData}
  />
);
export default MultiSelects;
