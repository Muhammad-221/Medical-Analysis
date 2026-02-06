import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.
  string()
  .nonempty("Email is required")
  .email("Please enter a valid email address"),

  phone: z.string().min(10, "Phone number must be at least 10 digits"),

  dateOfBirth: z
  .string()
  .nonempty("Date of birth is required")
  .refine(
    (date) => new Date(date) <= new Date(),
    "Date of birth cannot be in the future"
  ),

  gender: z.enum(["Male", "Female"],{
    required_error: "Please select gender",
    invalid_type_error: "Please select gender",
  }),

  address: z.string().min(5, "Address must be at least 5 characters"),
});
