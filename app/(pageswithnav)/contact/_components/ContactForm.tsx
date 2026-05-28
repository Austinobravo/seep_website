"use client"

import React from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  email: z
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),

  contact: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => {
        if (!value) return true

        return /^[+]?[\d\s\-()]{7,20}$/.test(value)
      },
      {
        message: "Please enter a valid phone number",
      }
    ),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [successMessage, setSuccessMessage] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      contact: "",
      message: "",
    },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setIsSubmitting(true)

      setSuccessMessage("")
      setErrorMessage("")

      await axios.post("/api/contact", values, {
        timeout: 15000,
      })

      setSuccessMessage(
        "Your message has been sent successfully. We'll get back to you shortly."
      )

      reset()
    } catch (error: any) {
      console.error("CONTACT_FORM_ERROR", error)

      if (axios.isAxiosError(error)) {
        // timeout
        if (error.code === "ECONNABORTED") {
          setErrorMessage(
            "The request timed out. Please try again."
          )

          return
        }

        // network
        if (!error.response) {
          setErrorMessage(
            "Network error. Please check your internet connection."
          )

          return
        }

        const status = error.response.status

        switch (status) {
          case 400:
            setErrorMessage(
              error.response.data?.message ||
                "Invalid form data."
            )
            return

          case 401:
            setErrorMessage(
              "You are not authorized to perform this action."
            )
            return

          case 403:
            setErrorMessage(
              "Access denied. Please try again later."
            )
            return

          case 404:
            setErrorMessage(
              "Service unavailable. Please try again later."
            )
            return

          case 409:
            setErrorMessage(
              "Duplicate request detected."
            )
            return

          case 422:
            setErrorMessage(
              error.response.data?.message ||
                "Validation failed."
            )
            return

          case 429:
            setErrorMessage(
              "Too many requests. Please slow down."
            )
            return

          default:
            if (status >= 500) {
              setErrorMessage(
                "Server error. Please try again later."
              )
              return
            }
        }

        setErrorMessage(
          error.response.data?.message ||
            "Failed to send message."
        )

        return
      }

      if (error instanceof Error) {
        setErrorMessage(error.message)
        return
      }

      setErrorMessage(
        "An unexpected error occurred."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#F8F9FB] p-8 md:p-12 rounded-[2.5rem] shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 leading-tight">
        Leave us a message — we'll get back to you.
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FieldGroup>
          {/* NAME */}
          <Field>
            <FieldLabel className="text-slate-700 font-medium text-base">
              Name*
            </FieldLabel>

            <FieldContent>
              <Input
                placeholder="Enter full name"
                {...register("name")}
                className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#335CFF] shadow-sm"
              />

              {errors.name && (
                <FieldError>
                  {errors.name.message}
                </FieldError>
              )}
            </FieldContent>
          </Field>

          {/* EMAIL */}
          <Field>
            <FieldLabel className="text-slate-700 font-medium text-base">
              Email*
            </FieldLabel>

            <FieldContent>
              <Input
                type="email"
                placeholder="Enter your mail here"
                {...register("email")}
                className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#335CFF] shadow-sm"
              />

              {errors.email && (
                <FieldError>
                  {errors.email.message}
                </FieldError>
              )}
            </FieldContent>
          </Field>

          {/* CONTACT */}
          <Field>
            <FieldLabel className="text-slate-700 font-medium text-base">
              Contact (optional)
            </FieldLabel>

            <FieldContent>
              <Input
                placeholder="Enter your phone number here"
                {...register("contact")}
                className="h-14 bg-white border-none rounded-xl px-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#335CFF] shadow-sm"
              />

              {errors.contact && (
                <FieldError>
                  {errors.contact.message}
                </FieldError>
              )}
            </FieldContent>
          </Field>

          {/* MESSAGE */}
          <Field>
            <FieldLabel className="text-slate-700 font-medium text-base">
              Message*
            </FieldLabel>

            <FieldContent>
              <Textarea
                placeholder="Leave us a message..."
                {...register("message")}
                className="min-h-[180px] bg-white border-none rounded-xl p-6 text-slate-900 placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-[#335CFF] shadow-sm resize-none"
              />

              <FieldDescription className="text-xs">
                Please provide as much detail as possible.
              </FieldDescription>

              {errors.message && (
                <FieldError>
                  {errors.message.message}
                </FieldError>
              )}
            </FieldContent>
          </Field>
        </FieldGroup>

        {/* SUCCESS */}
        {successMessage && (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMessage}
          </div>
        )}

        {/* ERROR */}
        {errorMessage && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {errorMessage}
          </div>
        )}

        {/* SUBMIT */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-14 bg-[#335CFF] hover:bg-[#2647D9] text-white rounded-xl text-lg font-semibold transition-all duration-300 disabled:opacity-70"
        >
          {isSubmitting ? (
            <Loader2 className="size-5 animate-spin" />
          ) : (
            "Send Us a Message"
          )}
        </Button>
      </form>
    </div>
  )
}