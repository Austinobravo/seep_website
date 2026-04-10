import { z } from "zod";
import {  validateForEmptySpaces } from "../utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const AcceptedFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "application/pdf"];
const emojiRegex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-])[A-Za-z\d@$!%*?&._\-]{6,}$/
// Regex to catch basic email patterns and phone numbers (7+ digits)
export const personalDetailsRegex = /([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\+?\d{7,15})/;

export const NewsletterFormSchema = z.object({
   email: z
      .email({ message: "Invalid email" })
      .min(1, { message: "This field is mandatory" })
      .refine((value) => !value || validateForEmptySpaces(value), { message: "No empty spaces" })
      .refine((value) => !value.match(emojiRegex), { message: "No emoji's alllowed." }),
});