# Product Requirements Document: Vannoord Property Maintenance Website

## 1. Executive Summary

This document outlines the requirements for developing a professional website for Vannoord Property Maintenance, a family-owned property maintenance business based in Aylmer, Ontario. The website will serve as the company's primary online presence, showcasing their services, previous work, and facilitating customer inquiries through a contact form.

## 2. Product Overview

### 2.1 Product Vision
Create a professional, user-friendly website that effectively communicates Vannoord Property Maintenance's services to potential customers in Aylmer and surrounding areas, ultimately generating new business leads through the contact form.

### 2.2 Target Audience
- Homeowners in Aylmer and surrounding communities
- Local businesses requiring property maintenance services
- Property managers and real estate professionals
- Seasonal residents needing regular property care

### 2.3 Business Goals
1. Increase local brand awareness for Vannoord Property Maintenance
2. Generate qualified leads through the contact form
3. Showcase the company's expertise and quality of work
4. Build trust with potential customers through testimonials and before/after examples
5. Provide clear information about available services

## 3. Website Features & Requirements

### 3.1 Site Structure
The website will follow a single-page design with anchor links to different sections:
- Header/Navigation
- Hero Section
- Features/Benefits
- Services
- Before & After Gallery
- Service Area
- About Us
- Testimonials
- Call-to-Action
- Contact Section
- Footer

### 3.2 Detailed Section Requirements

#### 3.2.1 Header/Navigation
- **Logo**: Vannoord Property Maintenance logo 
- **Navigation**: Links to all main sections of the page
- **Contact Information**: Phone number visible in header
- **Social Media Links**: Facebook and Instagram icons
- **CTA Button**: "Get a Quote" prominent button
- **Requirements**: Sticky header that remains visible while scrolling

#### 3.2.2 Hero Section
- **Content**: Image carousel featuring high-quality photos of properties serviced by Vannoord
- **Implementation**: HeroSlider component
- **Message**: Clear value proposition and service area information

#### 3.2.3 Features/Benefits Section
- **Content**: Three key value propositions with icons
  - Locally Owned & Operated
  - Prompt Service
  - Satisfaction Guaranteed
- **Design**: Card-based layout with icons and brief descriptions

#### 3.2.4 Services Section
- **Content**: Grid display of all services offered with images
  - Weekly Mowing
  - Trimming & Edging
  - Tree Pruning
  - Mulching
  - Junk Removal
  - Window & Gutter Cleaning
  - Pressure Washing
- **Design**: Cards with image, title, description, and "Learn more" link
- **Requirements**: Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)

#### 3.2.5 Before & After Gallery
- **Content**: Showcase of transformation projects with before/after images
- **Information**: For each project:
  - Project title
  - Brief description of work completed
  - Before image
  - After image
  - Services used (tagged)
- **Design**: Grid layout with side-by-side comparison

#### 3.2.6 Service Area Section
- **Content**: Highlight of all communities served
- **Design**: Grid of location names with accent background
- **Communities**: Aylmer, St. Thomas, Tillsonburg, Port Stanley, Belmont, Springfield, Vienna, Port Burwell

#### 3.2.7 About Section
- **Content**: Company story, values, and unique selling points
- **Design**: Two-column layout with text and image
- **Key Points**: Family-owned business, years of experience, eco-friendly practices, etc.

#### 3.2.8 Testimonials Section
- **Content**: Customer reviews with names, locations, and avatars
- **Design**: Card-based layout with star ratings
- **Requirements**: Minimum of 3 testimonials displayed

#### 3.2.9 CTA Section
- **Content**: Clear call-to-action encouraging site visitors to reach out
- **Design**: Full-width banner with contrasting button
- **Message**: "Ready to Improve Your Property?"

#### 3.2.10 Contact Section
- **Content**: Contact information and inquiry form
- **Design**: Two-column layout (contact details + form)
- **Contact Information**:
  - Phone number
  - Email address
  - Physical address
  - Business hours
  - Social media links
- **Form Fields** (required):
  - Name
  - Email
  - Phone
  - Service interest (dropdown)
  - Message
  - Submit button

#### 3.2.11 Footer
- **Content**: Company information, quick links, service links, contact details
- **Design**: Multi-column layout with organized information
- **Copyright**: Current year with company name

### 3.3 Contact Form Requirements

#### 3.3.1 Form Fields
- **Name** (required): Text input
- **Email** (required): Email input with validation
- **Phone** (required): Tel input with validation
- **Service Interest** (required): Dropdown with all services
- **Message** (required): Textarea for customer inquiries
- **Submit Button**: Clear CTA "Send Message"

#### 3.3.2 Technical Requirements
- Form validation to ensure all required fields are completed
- Email validation to ensure proper format
- Phone number validation
- Successful submission handling:
  - Visual confirmation on page
  - Email notification to business owner
  - Storage of inquiry in database
- Error handling for failed submissions
- Security measures to prevent spam (e.g., honeypot, reCAPTCHA)

#### 3.3.3 Backend Integration
- Form submission handling via serverless function
- Email notification system to alert business of new inquiries
- Database storage of form submissions for follow-up tracking
- Optional CRM integration

## 4. Technical Specifications

### 4.1 Technology Stack
- **Frontend Framework**: Next.js with React
- **Styling**: Tailwind CSS with custom theming
- **Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Form Handling**: React Hook Form
- **Form Validation**: Zod schema validation
- **API Routes**: Next.js API routes for form submission
- **Email Service**: Integration with email service (SendGrid, AWS SES, etc.)

### 4.2 Dependencies
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "motion": "^10.16.4",
    "tailwindcss": "^3.3.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0",
    "lucide-react": "^0.294.0"
  }
}
```

### 4.3 Responsive Design Requirements
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Mobile First Approach**: Design components for mobile first, then scale up
- **Touch Targets**: Minimum 44x44px for all interactive elements on mobile
- **Navigation**: Collapsible menu for mobile devices

### 4.4 Performance Requirements
- Page load time < 3 seconds
- Optimized images (WebP format, responsive sizes)
- Core Web Vitals compliance:
  - Largest Contentful Paint (LCP): < 2.5s
  - First Input Delay (FID): < 100ms
  - Cumulative Layout Shift (CLS): < 0.1

### 4.5 Accessibility Requirements
- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast
- ARIA labels where appropriate

## 5. Design Guidelines

### 5.1 Brand Elements
- **Primary Color**: Green (#4CAF50)
- **Logo**: "V" logo with "Vannoord Property Maintenance" text
- **Typography**: System fonts for optimal performance
- **Imagery**: Professional photos of properties, before/after transformations

### 5.2 Design System
- Use shadcn/ui components for consistent UI
- Button styles:
  - Primary: Green background (#4CAF50), white text
  - Secondary: White background, green border, green text
- Card styles: White background, subtle shadow, rounded corners
- Section spacing: Consistent padding between sections (py-16 md:py-24)

## 6. Analytics & Tracking

- Google Analytics implementation to track:
  - Page views
  - Event tracking for form submissions
  - Button click tracking for CTAs
  - Scroll depth tracking
- Form submission tracking
- Conversion goal setup
- Monthly reporting on website performance

## 7. SEO Requirements

- Page title: "Vannoord Property Maintenance | Professional Property Services in Aylmer, ON"
- Meta description focused on services and location
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Schema markup for local business
- Google Business Profile integration
- Optimization for local search terms

## 8. Legal & Compliance

- Privacy policy page
- Terms of service page
- Cookie consent banner
- CASL compliance for email marketing
- Accessibility statement

## 9. Launch & Post-Launch

### 9.1 Launch Checklist
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile device testing
- Form submission testing
- Loading speed verification
- 404 page implementation
- Favicon implementation
- Social media meta tags

### 9.2 Post-Launch Activities
- Google Search Console setup
- Weekly performance monitoring
- Monthly report generation
- Quarterly content updates
- Regular testimonial additions