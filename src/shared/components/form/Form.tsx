type TFormProps = {
  children?: React.ReactNode;
  submit(): void;
};

export const Form = (props: TFormProps) => {
  const { children, submit } = props;
  return <form onSubmit={submit}>{children}</form>;
};
