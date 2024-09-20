import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const validators = {
  getTestFormValidator: () => {
    const TestFormValidator = z.object({
      test_1: z.string().min(1, { message: "test_1 is required" }),
      test_2: z.string().min(1, { message: "test_2 is required" })
    });

    const TestFormResolver = zodResolver(TestFormValidator);

    type TestFormData = z.infer<typeof TestFormValidator>;

    const defaultTestFormValues: TestFormData = {
      test_1: "",
      test_2: ""
    };

    return {
      validator: TestFormValidator,
      resolver: TestFormResolver,
      defaultValues: defaultTestFormValues
    };
  }
};
