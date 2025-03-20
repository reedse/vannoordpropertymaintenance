"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Check, 
  Facebook, 
  Instagram, 
  Menu, 
  X,
  Scissors,
  TreePine as Tree,
  Trash2,
  Droplets,
  SprayCanIcon as Spray,
  Wind,
  Tractor,
  Shovel
} from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { ImagesSlider } from "@/components/images-slider"
import { BentoCard, BentoGrid } from "@/components/bento-grid"
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogImage,
} from "@/components/morphing-dialog"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Hero section images
  const heroImages = [
    "/hero/1.webp",
    "/hero/2.webp",
    "/hero/3.webp",
    "/hero/4.webp",
    "/hero/5.webp",
    "/hero/6.webp",
    "/hero/7.webp",
    "/hero/8.webp",
  ]

  const heroImagesFallback = [
    "/hero/1.jpg",
    "/hero/2.jpg",
    "/hero/3.jpg",
    "/hero/4.jpg",
    "/hero/5.jpg",
    "/hero/6.jpg",
    "/hero/7.jpg",
    "/hero/8.jpg",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className={`sticky top-0 z-40 w-full border-b transition-all duration-200 ${scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm" : "bg-background"}`}>
        <div className="container flex h-28 items-center justify-between">
          {/* Logo Container */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-20 w-[140px] sm:w-[140px] md:w-[140px] px-2 py-1">
                <picture>
                  <source srcSet="/logo.webp" type="image/webp" />
                  <img
                    src="/logo.PNG"
                    alt="Vannoord Property Maintenance Logo"
                    className="object-stretch h-full w-full"
                  />
                </picture>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#before-after" className="text-sm font-medium transition-colors hover:text-primary">
              Before & After
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          
          {/* Contact & Social Links */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/1APxdMiKkv/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/vannoordpropertymaintenance/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">(226) 980-8113</span>
              </div>
            </div>
            
            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  Get a Quote
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden flex items-center justify-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="container py-4 space-y-4 bg-background border-t">
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="#" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="#services" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="#before-after" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Before & After
                </Link>
                <Link 
                  href="#about" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="#testimonials" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link 
                  href="#contact" 
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-4 pt-3 border-t">
                <Link
                  href="https://www.facebook.com/share/1APxdMiKkv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/vannoordpropertymaintenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <div className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">(519) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <ImagesSlider 
            className="h-[85vh]" 
            images={heroImages} 
            fallbackImages={heroImagesFallback}
            autoplay={true} 
            direction="down"
            overlay={true}
            overlayClassName="bg-black/70"
            usePicture={true}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 container relative flex flex-col items-center text-center justify-center py-24 md:py-32"
            >
              <div className="max-w-2xl space-y-4">
                <motion.h1 
                  className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Complete Property Maintenance Services
                </motion.h1>
                <motion.p 
                  className="text-xl text-white/90 md:text-2xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  From weekly mowing to pressure washing, we keep your property looking its best year-round.
                </motion.p>
                <motion.div 
                  className="hidden sm:flex flex-wrap gap-3 mt-6 justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {services.map((service, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {service.title}
                    </span>
                  ))}
                </motion.div>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 pt-4 justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    <Link href="#contact">
                      Free Consultation
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white backdrop-blur hover:bg-white/20">
                    <Link href="#services">
                      Our Services
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </ImagesSlider>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive property maintenance services for Aylmer homes and businesses.
              </p>
            </div>
            
            <BentoGrid className="lg:grid-rows-3">
              {services.map((service, index) => (
                <MorphingDialog
                  key={index}
                  transition={{
                    type: "spring",
                    bounce: 0.05,
                    duration: 0.25,
                  }}
                >
                  <MorphingDialogTrigger className="h-full w-full block">
                    <BentoCard
                      name={service.title}
                      description={service.description}
                      Icon={service.icon}
                      href="#services"
                      cta="Learn more"
                      className={cn(
                        service.className
                      )}
                      background={
                        <div className="absolute inset-0 z-0">
                          <picture>
                            <source 
                              srcSet={service.image ? service.image.replace('.jpg', '.webp') : "/placeholder.webp"} 
                              type="image/webp" 
                            />
                            <img
                              src={service.image || "/placeholder.svg"}
                              alt={service.title}
                              className="object-cover absolute inset-0 w-full h-full"
                            />
                          </picture>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
                        </div>
                      }
                    />
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent
                      className="pointer-events-auto relative flex h-auto w-full max-w-3xl max-h-[90vh] flex-col overflow-hidden border border-zinc-950/10 bg-background rounded-lg shadow-lg"
                      style={{ borderRadius: "0.75rem" }}
                    >
                      <div className="relative h-[200px] w-full">
                        <MorphingDialogImage
                          src={service.image || "/placeholder.svg"}
                          webpSrc={service.image ? service.image.replace('.jpg', '.webp') : "/placeholder.webp"}
                          alt={service.title}
                          className="h-full w-full object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                      <div
                        className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-200px)]"
                        id={`dialog-content-${service.title.replace(/\s+/g, "-").toLowerCase()}`}
                      >
                        <MorphingDialogTitle className="text-2xl md:text-3xl font-bold mb-2">
                          {service.title}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className="text-muted-foreground text-lg mb-4">
                          {service.description}
                        </MorphingDialogSubtitle>
                        <MorphingDialogDescription
                          disableLayoutAnimation
                          variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 20 },
                          }}
                          className="space-y-4"
                        >
                          {service.fullDescription &&
                            service.fullDescription.map((paragraph, i) => (
                              <p key={i} className="text-muted-foreground">
                                {paragraph}
                              </p>
                            ))}

                          {service.features && (
                            <div className="mt-6">
                              <h4 className="text-lg font-semibold mb-3">Service Features</h4>
                              <ul className="space-y-2">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                    <Check className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="pt-4 mt-6 border-t">
                            <Button 
                              className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              onClick={() => {
                                // Find and click the dialog close button
                                const closeButton = document.querySelector(".absolute.right-4.top-4") as HTMLElement;
                                if (closeButton) closeButton.click();
                              }}
                            >
                              <Link href="#contact">
                                Request This Service
                              </Link>
                            </Button>
                          </div>
                        </MorphingDialogDescription>
                      </div>
                      <MorphingDialogClose
                        className="absolute right-4 top-4 text-white bg-primary/40 hover:bg-primary/60 backdrop-blur-sm rounded-full p-2 z-10"
                        variants={{
                          initial: { opacity: 0, scale: 0.8 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.8 },
                        }}
                      />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              ))}
            </BentoGrid>

          </div>
        </section>

        {/* Before & After Section */}
        <section id="before-after" className="py-16 bg-muted md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Before & After</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                See the difference our services make with these real transformations.
              </p>
            </div>

            <div className="grid gap-12">
              {beforeAfterProjects.map((project, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-5 gap-6 items-center bg-background rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 md:col-span-3">
                    <div className="space-y-3 w-full h-full">
                      <p className="text-base font-medium text-muted-foreground">Before</p>
                      <div className="relative overflow-hidden rounded-md w-full h-[350px] sm:h-[400px] md:h-[500px] transform hover:scale-105 transition-transform duration-300 shadow-md">
                        <picture>
                          <source 
                            srcSet={project.before ? project.before.replace('.jpg', '.webp') : "/placeholder.webp"} 
                            type="image/webp" 
                          />
                          <img
                            src={project.before || "/placeholder.svg"}
                            alt={`${project.title} Before`}
                            className="object-cover absolute inset-0 w-full h-full"
                          />
                        </picture>
                      </div>
                    </div>
                    <div className="space-y-3 w-full h-full">
                      <p className="text-base font-medium text-muted-foreground">After</p>
                      <div className="relative overflow-hidden rounded-md w-full h-[350px] sm:h-[400px] md:h-[500px] transform hover:scale-105 transition-transform duration-300 shadow-md">
                        <picture>
                          <source 
                            srcSet={project.after ? project.after.replace('.jpg', '.webp') : "/placeholder.webp"} 
                            type="image/webp" 
                          />
                          <img
                            src={project.after || "/placeholder.svg"}
                            alt={`${project.title} After`}
                            className="object-cover absolute inset-0 w-full h-full"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 md:col-span-2">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-5 text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span key={i} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="bg-primary text-primary-foreground py-16 md:py-20">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Proudly Serving Aylmer & Surrounding Areas
              </h2>
              <p className="mx-auto mt-4 max-w-[700px] text-primary-foreground/90 md:text-xl">
                Our service area includes Aylmer, St. Thomas, Tillsonburg, and other nearby communities in Elgin County.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-medium text-lg">{area}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Vannoord Property Maintenance
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  As a family-owned business based in Aylmer, Ontario, we've been providing exceptional property
                  maintenance services to our local community.
                </p>
                <ul className="mt-6 space-y-2">
                  {aboutPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#contact">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
              <div className="relative overflow-hidden rounded-lg h-[600px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23429.28983292953!2d-80.99824367910156!3d42.77012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee7e7a1337c1%3A0x6e53cd2e5cb4e4f0!2sAylmer%2C%20ON!5e0!3m2!1sen!2sca!4v1716240000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aylmer, Ontario Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Improve Your Property?
                </h2>
                <p className="mt-4 text-primary-foreground/90 md:text-xl">
                  Contact us today for a free consultation and estimate. Let us handle all your property maintenance
                  needs.
                </p>
              </div>
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                <Link href="#contact">
                  Get Started Today
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  Have questions or ready to get started? Reach out to us using any of the methods below.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start">
                    <PhoneCall className="mr-4 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">(226) 980-8113</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">vannoordpm@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="mr-4 h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-muted-foreground">Monday - Saturday: 7am - 6pm</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 pt-2">
                    <Link
                      href="https://www.facebook.com/share/1APxdMiKkv/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary"
                    >
                      <Facebook className="h-6 w-6 mr-2" />
                      <span>@vannoordpm</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/vannoordpropertymaintenance/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary"
                    >
                      <Instagram className="h-6 w-6 mr-2" />
                      <span>@vannoordpm</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-8 shadow-lg border-primary/20 bg-primary/5">
                <h3 className="mb-4 text-xl font-bold">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-muted py-8 md:py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center">
                <picture>
                  <source srcSet="/logo.webp" type="image/webp" />
                  <img
                    src="/logo.PNG"
                    alt="Vannoord Property Maintenance Logo"
                    width={180}
                    height={60}
                    className="h-auto w-[120px] md:w-[180px] pl-0 md:pl-2"
                  />
                </picture>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Professional property maintenance services for Aylmer and surrounding communities in Ontario.
              </p>
              <div className="mt-4 flex space-x-4">
                <Link
                  href="https://www.facebook.com/share/1APxdMiKkv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/vannoordpropertymaintenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#before-after" className="text-muted-foreground hover:text-foreground">
                    Before & After
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Weekly Mowing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Trimming & Edging
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Tree Pruning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Gutter Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Pressure Washing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <PhoneCall className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">(226) 980-8113</span>
                </li>
                <li className="flex items-start">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">vannoordpm@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Vannoord Property Maintenance. All rights reserved.</p>
            <p className="mt-2">Proudly serving Aylmer and surrounding communities in Ontario.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const services = [
  {
    title: "Weekly Mowing",
    description:
      "Regular lawn mowing service to keep your grass at the ideal height and your property looking neat and well-maintained.",
    image: "/services/mowing.jpg",
    icon: Tractor,
    className: "lg:col-span-2 lg:row-span-1",
    fullDescription: [
      "Our weekly mowing service is designed to keep your lawn looking its best throughout the growing season. We use professional-grade equipment to ensure a clean, even cut every time.",
      "Our team follows a consistent schedule, so you'll know exactly when to expect us. We also adjust our mowing height seasonally to promote healthy grass growth and drought resistance.",
    ],
    features: [
      "Consistent weekly schedule",
      "Professional equipment for clean cuts",
      "Clipping removal or mulching options",
      "Edge trimming included",
      "Seasonal height adjustments",
      "Post-mowing cleanup of all walkways and driveways",
    ],
  },
  {
    title: "Trimming & Edging",
    description:
      "Precise trimming and edging to create clean, defined borders between your lawn, walkways, and garden beds.",
    image: "/services/trimming.jpg",
    icon: Scissors,
    className: "lg:row-span-2",
    fullDescription: [
      "Our trimming and edging service gives your property that professionally maintained look. We create crisp, clean lines along sidewalks, driveways, and garden beds that make your entire landscape look more polished.",
      "Using professional-grade string trimmers and edgers, we can reach areas that mowers can't, ensuring your entire property looks neat and well-maintained.",
    ],
    features: [
      "Crisp, defined edges along walkways and driveways",
      "Careful trimming around obstacles and tight spaces",
      "Clean borders between lawn and garden beds",
      "Removal of all trimmings and debris",
      "Attention to detail around trees, posts, and fences",
      "Optional string trimming on slopes and hard-to-reach areas",
    ],
  },
  {
    title: "Tree Pruning",
    description:
      "Professional tree pruning to maintain tree health, improve appearance, and prevent potential hazards.",
    image: "/services/pruning.jpg",
    icon: Tree,
    className: "lg:row-span-1",
    fullDescription: [
      "Our tree pruning service helps maintain the health, safety, and appearance of your trees. Proper pruning removes dead or diseased branches, improves structure, and enhances the natural form of your trees.",
      "Our trained professionals understand the specific pruning needs of different tree species and use proper techniques to minimize stress and promote healthy growth.",
    ],
    features: [
      "Removal of dead, damaged, or diseased branches",
      "Structural pruning for young trees",
      "Crown thinning to increase light penetration",
      "Clearance pruning for buildings and utilities",
      "Aesthetic shaping and maintenance",
      "Complete cleanup and debris removal",
    ],
  },
  {
    title: "Mulching",
    description:
      "Quality mulch installation to enhance the appearance of your garden beds while helping retain moisture and prevent weeds.",
    image: "/services/mulching.jpg",
    icon: Shovel,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our mulching service provides both aesthetic and practical benefits for your landscape. Fresh mulch gives your garden beds a clean, finished look while helping to retain soil moisture, suppress weeds, and regulate soil temperature.",
      "We offer various types of mulch to complement your landscape design, including hardwood, cedar, pine, and colored options. Our team ensures proper application depth and keeps mulch away from tree trunks to prevent rot.",
    ],
    features: [
      "Multiple mulch types and colors available",
      "Proper application depth (2-3 inches)",
      "Weed removal before application",
      "Edging of beds for a clean finish",
      "Careful application around plants and trees",
      "Environmentally friendly options available",
    ],
  },
  {
    title: "Pressure Washing",
    description:
      "High-quality pressure washing services for driveways, decks, siding, and other surfaces to remove dirt, grime, and mildew.",
    image: "/services/pwash.jpg",
    icon: Spray,
    className: "lg:col-span-2 lg:row-span-1",
    fullDescription: [
      "Our pressure washing service restores the appearance of your outdoor surfaces by removing built-up dirt, grime, mold, mildew, and stains. This not only improves curb appeal but also extends the life of your surfaces by preventing damage from contaminants.",
      "We use professional-grade equipment with adjustable pressure settings to safely clean various surfaces, including concrete, wood, vinyl, brick, and stone. Our technicians are trained to use the appropriate pressure and techniques for each surface type.",
    ],
    features: [
      "Driveway and walkway cleaning",
      "Deck and patio restoration",
      "House siding washing",
      "Fence cleaning and brightening",
      "Roof moss and algae removal",
      "Environmentally friendly cleaning solutions",
    ],
  },
  {
    title: "Gutter Cleaning",
    description:
      "Thorough cleaning of gutters to prevent water damage and maintain your home's exterior integrity.",
    image: "/services/gutter.jpg",
    icon: Wind,
    className: "lg:col-span-1 lg:row-span-2",
    fullDescription: [
      "Our gutter cleaning service helps prevent potential water damage to your home. Clear gutters ensure proper water drainage away from your foundation, protecting your property from water-related issues.",
      "Our professional team uses specialized equipment to safely remove all debris from gutters and downspouts, ensuring proper water flow and preventing clogging.",
    ],
    features: [
      "Complete gutter debris removal",
      "Downspout flushing",
      "Minor gutter repairs when needed",
      "Inspection for potential issues",
      "Proper disposal of all gutter debris",
      "Protection of landscaping during service"
    ],
  },
  {
    title: "Junk Removal",
    description: "Efficient removal of yard waste, old furniture, and other unwanted items from your property.",
    image: "/services/removal.jpg",
    icon: Trash2,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our junk removal service helps you reclaim your space by efficiently removing unwanted items from your property. Whether it's yard waste, old furniture, appliances, or general debris, we handle the heavy lifting and disposal.",
      "We prioritize responsible disposal methods, including recycling and donation when possible, to minimize environmental impact. Our team works quickly and leaves your property clean and clear.",
    ],
    features: [
      "Removal of yard waste, furniture, and appliances",
      "Responsible disposal and recycling",
      "Same-day service often available",
      "No hidden fees - upfront pricing",
      "Heavy lifting and labor included",
      "Property left clean after removal",
    ],
  },
]

const beforeAfterProjects = [
  {
    title: "Pressure Washing",
    description:
      "Our pressure washing service restored it to like-new condition.",
    before: "comparisons/pwash-before.jpg",
    after: "comparisons/pwash-after.jpg",
    services: ["Pressure Washing"],
  },
  {
    title: "Overgrown Lawn Transformation",
    description:
      "We provided a complete lawn makeover with mowing, edging, and debris removal.",
    before: "comparisons/removal-before.jpg",
    after: "comparisons/removal-after.jpg",
    services: ["Weekly Mowing", "Trimming & Edging", "Junk Removal"],
  },
]

const aboutPoints = [
  "Locally owned and operated business in Aylmer, Ontario",
  "Experienced property maintenance professionals",
  "Eco-friendly practices and sustainable solutions",
  "Comprehensive services for residential and commercial properties",
  "Customized maintenance plans to fit your needs and budget",
]

const serviceAreas = [
  "Aylmer",
  "St. Thomas",
  "Tillsonburg",
  "Port Stanley",
  "Belmont",
  "Springfield",
  "Dorchester",
  "And More...",
]

