import { Button } from '@material-ui/core';
import React, { useRef } from 'react'
import { Controller, useForm, useFormContext, useFormState } from 'react-hook-form';
import Select from './components/Select';
import TextField from './components/TextField';

function MyForm(props: any) {

   // const ref: any = useRef(null);

   const { control } = props;
 
    return (
        <div>
            <TextField
                control={control}
                name="firstName"
                label="First Name"
                rules={{required: "Required"}}      
            /><br /><br />
            <TextField
                control={control}
                name="lastName"
                label="Last Name"
                rules={{required: "Required"}}      
            /><br /><br />
            <Button variant="contained" color="primary" type="submit">Submit</Button>
            <br />
            <br />
            <Select
                // ref={ref}
                name="age"
                label="Age"
                style={{ width: "120px" }}
                rules={{ required: "Required!" }}
                defaultItem={{ name: "Select", value: "" }}
                items={[
                    { name: "Ten", value: 10 },
                    { name: "Twenty", value: 20 },
                    { name: "Thirty", value: 30 },
                    { name: "Fourty", value: 40 },
                ]}
            />
        </div>
    )
}

export default MyForm
