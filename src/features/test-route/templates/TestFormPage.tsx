"use client";

import { ContentWrapper, Layout } from "@/shared/components/containers";
import { Form, Input } from "@/shared/components/form";
import { useCustomForm } from "@/shared/hooks";
import {
  defaultTestFormValues,
  TestFormData,
  TestFormResolver
} from "@/shared/validators/TestFormValidator";
import { FormEvent, useEffect } from "react";

export const TestFormPage = () => {
  const { register, handleSubmit, getValues, handleReset, formState } = useCustomForm<TestFormData>(
    {
      resolver: TestFormResolver,
      defaultValues: defaultTestFormValues
    }
  );

  const onSubmit = () => console.log(getValues(), formState.isSubmitSuccessful);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
    handleSubmit(onSubmit);
  };

  return (
    <Layout
      heading="h1"
      title="Test Form Page"
      padding="lg"
      contentPadding="lg"
    >
      <ContentWrapper>
        <Form
          submit={submit}
          className="rounded-md bg-slate-900"
          title="Test Form"
          width="sm"
        >
          <Input
            name="test_1"
            label="Test 1"
            register={register}
          />
          <Input
            name="test_2"
            label="Test 2"
            register={register}
          />
        </Form>
      </ContentWrapper>
    </Layout>
  );
};
