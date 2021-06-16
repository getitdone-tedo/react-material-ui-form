import React from 'react'
import { Controller,  useFormState } from 'react-hook-form';

const FormField = React.forwardRef((props: any, ref: any) => {

    const { Component, rules, name, label, variant="outlined", size="small", ...restProps } = props;

    const formState = useFormState();

    return (
        <Controller
            name={name}
            ref={ref}
            render={({ field: { onChange, onBlur, value, ref } }) => (
                <Component
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    ref={ref}
                    label={label}
                    variant={variant}
                    size={size}
                    error={Boolean(formState.errors && formState.errors[name])}
                    helperText={formState.errors && formState.errors[name]?.message}
                    { ...restProps }
                />
            )}
            rules={rules}
        />
    )
})

export default FormField;
