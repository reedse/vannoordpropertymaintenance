"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
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
          service: "",
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
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submitStatus && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
        <div className="space-y-2">
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
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Service Interested In
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">Select a service</option>
          <option value="mowing">Weekly Mowing</option>
          <option value="trimming">Trimming & Edging</option>
          <option value="pruning">Tree Pruning</option>
          <option value="mulching">Mulching</option>
          <option value="junk-removal">Junk Removal</option>
          <option value="window-gutter">Window & Gutter Cleaning</option>
          <option value="pressure-washing">Pressure Washing</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="space-y-2">
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
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        ></textarea>
      </div>
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
} 