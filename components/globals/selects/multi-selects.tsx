import React, { FC } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
interface MultiSelectPropsI {
  id: string;
  instanceId: string;
  optionData: Array<string>[];
  isMultiSelect?: boolean;
  animation?: any;
}
const animatedComponents = makeAnimated();
const MultiSelects: FC<MultiSelectPropsI> = ({
  optionData,
  id,
  instanceId,
  isMultiSelect,
  animation,
}) => (
  <Select
    id={id}
    instanceId={instanceId}
    isMulti={isMultiSelect}
    components={animation && animatedComponents}
    options={optionData}
  />
);
export default MultiSelects;
