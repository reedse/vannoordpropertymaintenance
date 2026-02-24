"use client"

import { Button } from "@/components/ui/button"
import React, { useState } from "react"

const SERVICE_OPTIONS = [
  "Hardscaping",
  "Weekly Mowing",
  "Tree Pruning",
  "Garden Maintenance",
  "Seasonal Cleanups",
  "Sod Installation",
  "Lawn Rolling",
  "Aerating",
  "Dethatching",
  "Other",
] as const

interface FormData {
  name: string
  email: string
  phone: string
  services: string[]
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: [],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleServiceChange = (option: string) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(option)
      const nextServices = isSelected
        ? prev.services.filter((s) => s !== option)
        : [...prev.services, option]
      return { ...prev, services: nextServices }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent successfully! We'll be in touch soon.",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: [],
          message: "",
        })
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Something went wrong. Please try again later.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-4 min-w-0 w-full max-w-full" onSubmit={handleSubmit}>
      {submitStatus && (
        <div
          className={`p-3 sm:p-4 rounded-md text-sm sm:text-base ${submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2 min-w-0">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full min-w-0 max-w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring box-border"
          />
        </div>
        <div className="space-y-2 min-w-0">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full min-w-0 max-w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring box-border"
          />
        </div>
      </div>
      <div className="space-y-2 min-w-0">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full min-w-0 max-w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring box-border"
        />
      </div>
      <div className="space-y-3 min-w-0">
        <p className="text-sm font-medium">
          Services interested in (select any)
        </p>
        <div className="grid grid-cols-2 gap-2">
          {SERVICE_OPTIONS.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring min-w-0"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(option)}
                onChange={() => handleServiceChange(option)}
                className="h-4 w-4 shrink-0 rounded border-input"
              />
              <span className="min-w-0">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="space-y-2 min-w-0">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your project"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-w-0 max-w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring box-border resize-y"
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full min-w-0 bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
