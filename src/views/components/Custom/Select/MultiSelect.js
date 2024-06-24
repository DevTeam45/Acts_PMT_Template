import React from "react";
import Select from "react-select";

const CustomClearText = () => "clear all";

const ClearIndicator = (props) => {
   const {
      children = <CustomClearText />,
      getStyles,
      innerProps: { ref, ...restInnerProps },
   } = props;
   return (
      <div
         {...restInnerProps}
         ref={ref}
         style={getStyles("clearIndicator", props)}
      >
         <div style={{ padding: "0px 5px" }}>{children}</div>
      </div>
   );
};

const ClearIndicatorStyles = (base, state) => ({
   ...base,
   cursor: "pointer",
   color: state.isFocused ? "blue" : "black",
});

const MultiSelect = ({
   options,
   defaultValue,
   isMulti = false,
   closeMenuOnSelect = true,
   styles = {},
   components = {},
   onChange,
   className,
   ...props
}) => {
   const handleChange = (selectedOptions) => {
      if (onChange) {
         onChange(selectedOptions ? selectedOptions.map(option => ({ id: option.id, name: option.name })) : []);
      }
   };

   const formattedOptions = options.map(option => ({ value: option.id, label: option.name, ...option }));
   const formattedDefaultValue = defaultValue ? defaultValue.map(option => ({ value: option.id, label: option.name, ...option })) : [];

   return (
      <Select
         className={className}
         closeMenuOnSelect={closeMenuOnSelect}
         components={{ ClearIndicator, ...components }}
         styles={{ clearIndicator: ClearIndicatorStyles, ...styles }}
         defaultValue={formattedDefaultValue}
         isMulti={isMulti}
         options={formattedOptions}
         onChange={handleChange}
         {...props}
      />
   );
};

export default MultiSelect;
