import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const validators = {
  getTestFormValidator: () => {
    const TestFormValidator = z.object({
      test_1: z.string().min(1, { message: "test_1 is required" }),
      test_2: z.string().min(1, { message: "test_2 is required" })
    });

    const TestFormResolver = zodResolver(TestFormValidator);

    const defaultTestFormValues: z.infer<typeof TestFormValidator> = {
      test_1: "",
      test_2: ""
    };

    return {
      validator: TestFormValidator,
      resolver: TestFormResolver,
      defaultValues: defaultTestFormValues
    };
  },

  getSignUpFormValidator: () => {
    const SignUpFormValidator = z.object({
      email: z.string().email(),
      password: z.string().min(1, { message: "Password is required" })
    });

    const SignUpFormResolver = zodResolver(SignUpFormValidator);

    const defaultSignUpFormValues: z.infer<typeof SignUpFormValidator> = {
      email: "",
      password: ""
    };

    return {
      validator: SignUpFormValidator,
      resolver: SignUpFormResolver,
      defaultValues: defaultSignUpFormValues
    };
  }
};
