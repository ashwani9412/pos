import React from "react";

import CreatableSelect from "react-select/creatable";

interface OptionPropsI {
  optionsData: Array<OptionType>;
}

const CreateableSelectOption = ({ optionsData }: OptionPropsI) => {
  return <CreatableSelect isClearable options={optionsData} />;
};
export default CreateableSelectOption;
