"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { NewsletterFormSchema } from "@/lib/schema/formSchema"
import CustomizedButton from "@/components/globals/CustomizeButton"



export function NewsletterForm() {
  const form = useForm<z.infer<typeof NewsletterFormSchema>>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof NewsletterFormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "top-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)} className="max-w-150 mx-auto mt-6">
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <div className="relative">
            <div className="flex items-center">
              <div className="relative flex-1">
                <Input
                  {...field}
                  id="form-rhf-demo-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="email@gmail.com"
                  autoComplete="off"
                  className={`min-h-11 bg-white rounded-r-none w-full transition-colors ${
                    fieldState.invalid ? "border-red-500 focus-visible:ring-red-500" : ""
                  }`}
                />
              </div>
              <CustomizedButton 
                title="Subscribe" 
                className="rounded-l-none! rounded-r-lg border min-h-11 shrink-0" 
              />
            </div>

            {/* Tooltip-style Error Message */}
            {fieldState.invalid && (
              <div className="absolute left-0 top-[calc(100%+4px)] z-10 w-max max-w-full animate-in fade-in zoom-in duration-200">
                <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded shadow-lg flex items-center gap-1">
                  {/* Small arrow pointing up */}
                  <div className="absolute -top-1 left-4 w-2 h-2 bg-red-500 rotate-45" />
                  <FieldError errors={[fieldState.error]} className="text-white! p-0" />
                </div>
              </div>
            )}
          </div>
        )}
      />
    </form>

  )
}
