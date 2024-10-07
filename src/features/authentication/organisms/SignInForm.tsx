import { formHooks } from "@/shared/hooks";
import { useStyleResolver } from "@/tw-styled/tools";
import { Children, DefaultStyleProps } from "@/tw-styled/types";

export const SignInForm = () => {
  const { FormProvider, submitHandler, methods } = formHooks.useTestForm();

  return (
    <FormProvider>
      <Form
        submitHandler={submitHandler}
        style={{
          formStyles: {
            border: "sm",
            rounded: "md",
            padding: "lg",
            flex: "col",
            gap: "lg",
            width: "md"
          },
          buttonStyles: {
            className: "btn-primary"
          },
          inputWrapperStyles: {
            flex: "col",
            gap: "md"
          }
        }}
      >
        <input {...methods.register("test_1")} />
        <input {...methods.register("test_2")} />
      </Form>
    </FormProvider>
  );
};

type FormProps = {
  children?: Children;
  submitHandler: (e?: React.BaseSyntheticEvent) => Promise<void>;
  style?: {
    formStyles?: DefaultStyleProps;
    buttonStyles?: DefaultStyleProps;
    inputWrapperStyles?: DefaultStyleProps;
  };
};

function Form(props: FormProps) {
  const { children, submitHandler, style } = props;

  const { formStyles, buttonStyles, inputWrapperStyles } = useStyleResolver({ ...style });

  return (
    <form
      onSubmit={submitHandler}
      className={formStyles}
    >
      <div className={inputWrapperStyles}>{children}</div>

      <button
        type="submit"
        className={buttonStyles}
      >
        Submit
      </button>
    </form>
  );
}
