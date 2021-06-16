import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import MyForm from './MyForm';

function App() {
  const form = useForm({defaultValues: {
    firstName: "",
    lastName: "",
    age: "",
    gender: "male",
    hobbies: ["cooking", "coding"],
  }});

//  console.log(form);

  const onSubmit = (data: any) => console.log(data);
  const onError = (error: any) => console.log(error);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onError)}>
        <MyForm {...form}/>
      </form>
    </FormProvider>
  )
}

export default App
