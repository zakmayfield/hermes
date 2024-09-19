import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const TestFormValidator = z.object({
  test_1: z.string().min(1),
  test_2: z.string().min(1)
});

export const TestFormResolver = zodResolver(TestFormValidator);

export type TestFormData = z.infer<typeof TestFormValidator>;

export const defaultTestFormValues: TestFormData = {
  test_1: "",
  test_2: ""
};
