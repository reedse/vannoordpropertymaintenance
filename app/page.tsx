"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import {
  Check,
  Clock,
  Facebook,
  Instagram,
  Layers,
  Mail,
  Menu,
  PhoneCall,
  Scissors,
  Shovel,
  Tractor,
  TreePine as Tree,
  Wind,
  X
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import { BentoCard, BentoGrid } from "@/components/bento-grid"
import { ContactForm } from "@/components/contact-form"
import { ImagesSlider } from "@/components/images-slider"
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from "@/components/morphing-dialog"
import { Button } from "@/components/ui/button"

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
        <div className="container flex h-32 items-center justify-between">
          {/* Logo Container */}
          <div className="flex items-center">
            <Link href="/" className="block size-28 sm:size-28 md:size-28 shrink-0">
              <picture className="block size-full">
                <source srcSet="/logo.webp" type="image/webp" />
                <img
                  src="/logo.PNG"
                  alt="Vannoord Landscaping Logo"
                  className="size-full object-contain"
                />
              </picture>
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
            <Link href="#our-work" className="text-sm font-medium transition-colors hover:text-primary">
              Our Work
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
                href="https://www.instagram.com/vannoordlandscaping/"
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
                  href="#our-work"
                  className="text-sm font-medium hover:text-primary py-2 px-3 rounded-md hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Work
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
                  href="https://www.instagram.com/vannoordlandscaping/"
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
                  Complete Landscaping Services
                </motion.h1>
                <motion.p
                  className="text-xl text-white/90 md:text-2xl"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  From weekly mowing to hardscaping (building retaining walls, interlocking patios and walkways), we keep your property looking its best year-round.
                </motion.p>
                <motion.div
                  className="hidden sm:flex flex-wrap gap-3 mt-6 justify-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {heroServices.map((service, index) => (
                    <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {service}
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
                Comprehensive landscaping services for Aylmer homes and businesses.
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

        {/* Our Work Section */}
        <section id="our-work" className="py-16 bg-muted md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Work</h2>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                A glimpse at our recent projects and transformations.
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

            <div className="mt-16 space-y-16">
              <div>
                <h3 className="text-2xl font-bold mb-6">Mulch installation</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {["/work/front1.webp", "/work/front2.webp", "/work/front3.webp"].map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-md w-full h-[350px] sm:h-[400px] transform hover:scale-105 transition-transform duration-300 shadow-md bg-background"
                    >
                      <picture>
                        <source srcSet={src} type="image/webp" />
                        <img
                          src={src}
                          alt={`Mulch installation ${i + 1}`}
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </picture>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Hardscaping</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["/work/walkway.webp", "/work/walkway2.webp"].map((src, i) => (
                    <div
                      key={i}
                      className="relative overflow-hidden rounded-md w-full h-[350px] sm:h-[400px] transform hover:scale-105 transition-transform duration-300 shadow-md bg-background"
                    >
                      <picture>
                        <source srcSet={src} type="image/webp" />
                        <img
                          src={src}
                          alt={`Hardscaping ${i + 1}`}
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      </picture>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  About Vannoord Landscaping
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
                  Contact us today for a free consultation and estimate. Let us handle all your landscaping
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
                      <p className="text-muted-foreground">josh@vannoordlandscape.com</p>
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
                      <span>vannoordlandscaping</span>
                    </Link>
                    <Link
                      href="https://www.instagram.com/vannoordlandscaping/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary"
                    >
                      <Instagram className="h-6 w-6 mr-2" />
                      <span>vannoordlandscaping</span>
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
                    alt="Vannoord Landscaping Logo"
                    width={180}
                    height={60}
                    className="h-auto w-[120px] md:w-[180px] pl-0 md:pl-2"
                  />
                </picture>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Professional landscaping services for Aylmer and surrounding communities in Ontario.
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
                  href="https://www.instagram.com/vannoordlandscaping/"
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
                  <Link href="#our-work" className="text-muted-foreground hover:text-foreground">
                    Our Work
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
                    Hardscaping
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
                  <span className="text-muted-foreground">josh@vannoordlandscape.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Vannoord Landscaping. All rights reserved.</p>
            <p className="mt-2">Proudly serving Aylmer and surrounding communities in Ontario.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const heroServices = [
  "General Landscaping",
  "Lawn Care",
  "Hardscaping",
  "Seasonal Cleanups",
]

const services = [
  {
    title: "Hardscaping",
    description:
      "Building retaining walls, interlocking patios and walkways to enhance your outdoor space.",
    image: "/services/hardscaping.webp",
    icon: Layers,
    className: "lg:col-span-2 lg:row-span-1",
    fullDescription: [
      "Our hardscaping service adds structure and lasting value to your property with professionally built retaining walls, interlocking patios, and walkways. We work with quality materials to create durable, attractive outdoor living spaces.",
      "From design to installation, we handle site preparation, proper drainage, and finishing details so your hardscape looks great and performs for years.",
    ],
    features: [
      "Retaining walls",
      "Interlocking patios",
      "Walkways and pathways",
      "Site preparation and drainage",
      "Quality materials and installation",
      "Custom design to fit your space",
    ],
  },
  {
    title: "Weekly Mowing",
    description:
      "Regular lawn mowing service to keep your grass at the ideal height and your property looking neat and well-maintained.",
    image: "/services/mowing.webp",
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
    title: "Tree Pruning",
    description:
      "Professional tree pruning to maintain tree health, improve appearance, and prevent potential hazards.",
    image: "/services/pruning.webp",
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
    title: "Garden Maintenance",
    description:
      "Comprehensive garden care including plant pruning, weeding, mulching, and seasonal planting to keep your gardens healthy and beautiful.",
    image: "/services/garden.webp",
    icon: Shovel,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our garden maintenance service provides comprehensive care for your flower beds, shrubs, and garden areas. We focus on plant health, aesthetic appeal, and seasonal care to ensure your gardens thrive year-round.",
      "From regular weeding and deadheading to seasonal planting and soil preparation, our team has the expertise to maintain your garden's beauty and health throughout all seasons.",
    ],
    features: [
      "Regular weeding and plant care",
      "Seasonal planting and transplanting",
      "Mulch installation and refresh",
      "Pruning of shrubs and perennials",
      "Soil preparation and amendment",
      "Plant health monitoring and advice",
    ],
  },
  {
    title: "Seasonal Cleanups",
    description: "Comprehensive spring and fall cleanup services to prepare your property for the changing seasons.",
    image: "/services/cleanup.webp",
    icon: Scissors,
    className: "lg:col-span-2 lg:row-span-1",
    fullDescription: [
      "Our seasonal cleanup services help transition your property between seasons with thorough maintenance tasks. Spring cleanups prepare your landscape for the growing season, while fall cleanups protect your property through winter.",
      "Each seasonal cleanup is customized to your property's specific needs and includes debris removal, plant care, and preparation tasks to ensure your landscape stays healthy year-round.",
    ],
    features: [
      "Leaf removal and debris clearing",
      "Pruning of dormant plants and shrubs",
      "Garden bed preparation and cleanup",
      "Drainage clearing",
      "Lawn preparation for seasonal changes",
      "Property inspection and maintenance recommendations",
    ],
  },
  {
    title: "Sod Installation",
    description: "Professional sod installation service to create an instant, lush green lawn for your property.",
    image: "/services/sod.webp",
    icon: Tractor,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our sod installation service provides you with an instant, beautiful lawn. We handle everything from soil preparation to sod selection and installation, ensuring your new lawn has the best foundation for long-term success.",
      "We work with premium sod suppliers to provide healthy, disease-free grass that's well-suited to our local climate. Our installation process includes proper soil preparation, grading, and post-installation care instructions.",
    ],
    features: [
      "Professional soil preparation and grading",
      "Premium quality sod selection",
      "Expert installation techniques",
      "Immediate watering and care",
      "Post-installation maintenance guidance",
      "Guaranteed sod quality and establishment",
    ],
  },
  {
    title: "Lawn Rolling",
    description: "Professional lawn rolling service to smooth out uneven areas and improve the overall appearance of your lawn.",
    image: "/services/rolling.webp",
    icon: Tractor,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our lawn rolling service helps create a smooth, even lawn surface while improving seed-to-soil contact after overseeding. This service is particularly beneficial in spring after winter frost heaving or for newly seeded areas.",
      "We use professional-grade lawn rollers with the appropriate weight for your lawn conditions, ensuring effective results without soil compaction damage.",
    ],
    features: [
      "Smooths out minor lawn imperfections",
      "Improves seed germination rates",
      "Enhances overall lawn appearance",
      "Spring frost heave correction",
      "Professional equipment for optimal results",
      "Timing coordinated with weather conditions",
    ],
  },
  {
    title: "Aerating",
    description: "Core aeration service to improve soil compaction, enhance root growth, and promote healthier grass.",
    image: "/services/aerating.webp",
    icon: Shovel,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our core aeration service relieves soil compaction by removing small plugs of soil, allowing air, water, and nutrients to penetrate deeper into the root zone. This promotes stronger, healthier grass growth.",
      "Aeration is particularly beneficial for high-traffic lawns, clay soils, or lawns that haven't been aerated in several years. We recommend combining aeration with overseeding for maximum lawn improvement.",
    ],
    features: [
      "Core aeration with professional equipment",
      "Improved water and nutrient absorption",
      "Enhanced root development",
      "Reduced soil compaction",
      "Better air circulation to roots",
      "Preparation for overseeding success",
    ],
  },
  {
    title: "Dethatching",
    description: "Power rake service to remove thatch buildup and promote healthy grass growth and better water penetration.",
    image: "/services/dethatching.webp",
    icon: Wind,
    className: "lg:col-span-1 lg:row-span-1",
    fullDescription: [
      "Our dethatching service removes the layer of dead grass, roots, and debris that can build up between the soil and living grass. Excessive thatch prevents water, air, and nutrients from reaching the grass roots.",
      "Using professional power raking equipment, we carefully remove thatch buildup while protecting healthy grass. This service is typically performed in early spring or fall for optimal results.",
    ],
    features: [
      "Professional power raking equipment",
      "Removal of excessive thatch layer",
      "Improved water and nutrient penetration",
      "Enhanced grass root health",
      "Complete debris removal and cleanup",
      "Optimal timing for lawn recovery",
    ],
  },
]

const beforeAfterProjects = [
  {
    title: "Overgrown Lawn Transformation",
    description:
      "We provided a complete lawn makeover with mowing, edging, and debris removal.",
    before: "/comparisons/removal-before.jpg",
    after: "/comparisons/removal-after.jpg",
    services: ["Weekly Mowing", "Trimming & Edging"],
  },
  {
    title: "Sod Installation",
    description:
      "Professional sod installation for an instant, lush green lawn. We handle soil preparation, sod selection, and installation for lasting results.",
    before: "/comparisons/3-before.webp",
    after: "/comparisons/3-after.webp",
    services: ["Sod Installation", "Lawn Care"],
  },
]

const aboutPoints = [
  "Locally owned and operated business in Aylmer, Ontario",
  "Experienced landscaping professionals",
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
