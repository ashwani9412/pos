import React from "react";

import CreatableSelect from "react-select/creatable";

interface OptionPropsI {
  id: any;
  instanceId: any;
  optionsData: any;
  selectedCategories: any;
  setSelectedCategories: any;
}

const CreateableSelectOption = ({
  id,
  instanceId,
  optionsData,
  selectedCategories,
  setSelectedCategories,
}: OptionPropsI) => {
  return (
    <CreatableSelect
      id={id}
      instanceId={instanceId}
      isClearable
      defaultValue={selectedCategories}
      onChange={setSelectedCategories}
      options={optionsData}
    />
  );
};
export default CreateableSelectOption;
