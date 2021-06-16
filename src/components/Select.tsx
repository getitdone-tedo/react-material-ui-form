import { FormControl, InputLabel, MenuItem,  Select as MUISelect } from '@material-ui/core';
import React from 'react'
import FormField from './FormField';

const Select = React.forwardRef((props: any, ref: any) => (
    <FormField ref={ref} Component={SelectImpl} {...props} />
));

const SelectImpl = React.forwardRef((props: any, ref: any) => {

    const {
        label,
        name = "",
        variant,
        size,
        value,
        onChange,
        onBlur,
        error,
        helperText,
        style,
        defaultItem,
        items,
        nameField = "name",
        valueField = "value",
        ...restProps
    } = props;

    const inputId = name.replace(".", "-");

    let menuItems: any = [];
    if (items) {
      if (defaultItem) {
        menuItems = [defaultItem, ...items];
      } else {
        menuItems = [...items];
      }
    }

    return (
        <FormControl variant={variant} size={size} error={error} style={style}>
            <InputLabel id={`${inputId}-label`}>{label}</InputLabel>
            <MUISelect
                labelId={`${inputId}-label`}
                id={inputId}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                label={label}
                ref={ref}
            >
                {menuItems.map((item: any) => (
                    <MenuItem key={item[valueField]} value={item[valueField]}>
                        {item[nameField]}
                    </MenuItem>
                ))}
            </MUISelect>
        </FormControl>
    );
});

export default Select;
