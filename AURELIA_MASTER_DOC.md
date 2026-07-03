# 🏛️ AURELIA SPA & SALON: ULTIMATE SPECIFICATION MANUAL
## System Architecture, Full-Text Asset Ledger, Interaction Design & Production Blueprint

---

## MODULE 1: CORE SYSTEM ARCHITECTURE & GLOBAL CONFIGURATION

This document serves as the absolute blueprint for the production build of the Aurelia Spa & Salon web platform. Every file path, interaction token, layout grid, text asset, and animation lifecycle defined herein must be parsed and executed precisely by the engineering agent.

### 1.1 Technical Stack & Dependencies

```json
{
  "dependencies": {
    "next": "15.0.0",
    "react": "19.0.0",
    "react-dom": "19.0.0",
    "typescript": "5.0.0",
    "tailwindcss": "4.0.0",
    "@studio-freight/lenis": "^1.0.42",
    "framer-motion": "^11.0.0",
    "gsap": "^3.12.5",
    "@gsap/react": "^2.1.1",
    "lucide-react": "^0.344.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.1",
    "@tanstack/react-query": "^5.28.0",
    "date-fns": "^3.6.0"
  }
}
```

### 1.2 Unified Color Spaces & Custom Core Tokens

The design follows a cohesive **"Cream & Calm Wellness"** approach. Every component must strictly pull color styling from these structural Tailwind definitions:

```ts
// tailwind.config.ts / global design tokens
export const tokens = {
  colors: {
    base: {
      canvas: "#FAF9F6",     // Alabaster Canvas (90% of screen space)
      surface: "#F0EBE1",    // Warm Sand Layer (Alternating blocks)
      contrast: "#E8E2D2",   // Deep Cream Overlay (Borders, masks, blocks)
    },
    text: {
      primary: "#3E3A37",    // Soft Charcoal (High legibility, zero raw black glare)
      muted: "#6E6863",      // Earth Grey (Sub-headers, UI labels)
      light: "#FAF9F6",      // Pure White Contrast
    },
    brand: {
      sage: "#8A9A86",       // Matte Sage (Primary Interactive Actions, Active indicators)
      cashmere: "#D4C4B7",   // Soft Cashmere (Secondary elements, accent rules)
      gold: "linear-gradient(135deg, #E6D5B8 0%, #D4AF37 50%, #B89742 100%)", // True Shimmer
    }
  },
  typography: {
    fontSerif: "Playfair Display, serif", // Display Headers (weight 300 / 400)
    fontSans: "Montserrat, sans-serif"    // UI/Body Matrix (weight 400 / 500 / 600)
  }
}
```

---

## MODULE 2: UNIVERSAL INTERACTIVE LAYER & DESIGN ENGINEERING

### 2.1 The Custom Liquid Cursor System
*   **Static State:** Hide the native system pointer via global CSS (`cursor: none`). Implement a client-side layout component rendering a `div` element configured with a width of `8px`, height of `8px`, rounding of `50%`, and background color set to `#8A9A86`.
*   **Dynamic Tracking:** Attach a window pointer movement listener updating the position via Framer Motion spring vectors (`stiffness: 450`, `damping: 40`).
*   **Interaction States:** When a pointer moves within a 40px bounding box of any element marked with a data attribute (`data-interactive`), trigger a transformation animation: Expand diameter to `44px`, switch the background fill to completely transparent, and apply a `1px` solid border colored `#8A9A86`. Apply a layout lock where the button element subtly glides up to `12px` toward the magnetic center of the cursor vector.

### 2.2 Smooth Scroll Architecture (Lenis Config)
*   **Configuration Object:** 
    *   `lerp: 0.04` (Heavy, liquid deceleration profile).
    *   `smoothWheel: true` (Intercept and smooth native mechanical mouse indexing).
    *   `wheelMultiplier: 0.95` (Dampen sudden rapid scrolling inputs).
*   **CSS Integration:** Intercept the native browser scrolling track. Render a fixed vertical tracker element on the right edge with a custom tracking track (`width: 3px`, color: `rgba(62,58,55,0.05)`). The internal active handle matches `#8A9A86` with an auto-hide opacity function changing from `opacity: 1` during scrolling down to `opacity: 0` when the interface sits motionless for 800ms.

### 2.3 Navigation Architecture (The Translucent Veil)
*   **Default State:** Fix the global header to `top: 0`, spanning a width of `100%`, height of `80px`, background layer set to `rgba(250,249,246,0.6)`, and a structural blur value of `backdrop-filter: blur(16px)`. Border bottom is configured to a thin `1px solid rgba(62,58,55,0.05)`.
*   **Scroll Intercept Rules:**
    *   **Scroll Direction - Down:** Translate the header along the Y-axis to `-100%` at a speed profile of `duration: 0.4s` using a `cubic-bezier(0.16, 1, 0.3, 1)` transition matrix.
    *   **Scroll Direction - Up:** Instantly translate back to `Y: 0%` using an ultra-smooth ease-out function.
*   **Structure Elements:**
    *   **Left Vector:** Render the Aurelia typography signature logo with precise layout tracking (`letter-spacing: 0.25em`).
    *   **Center Vector:** Inline layout navigation links: *Rituals*, *The Salon Menu*, *Sanctuary Locations*, *Our Artisans*.
    *   **Right Vector:** The main action button containing the `data-interactive` attribute: "Request Reservation".

### 2.4 Structural Page Transitions (The Warm Sand Curtain)
*   **Lifecycle:** Intercept all layout anchor click events. Before the target route initializes, render a full-screen masking component (`fixed inset-0 z-50 bg-[#F0EBE1]`).
*   **Animation Array:**
    *   *Route Exit:* Slide the sand curtain vertically from `translateY(100%)` up to `translateY(0%)` over a sequence of `1.2s` using an explicit cubic curve layout: `[0.76, 0, 0.24, 1]`.
    *   *Route Initialization:* When the DOM updates successfully, drop the sand curtain down from `translateY(0%)` to `translateY(-100%)` while simultaneously executing a staggered fade-in mask on the incoming viewport components.

---

## MODULE 3: THE GLOBAL ASSET & MEDIA LEDGER

Every asset specified below must be mapped directly inside the public assets directories. Keep all media files optimized and highly compressed to ensure instant loading times.

### 3.1 Cinema Video Assets
1.  **`hero-fluid-stone.mp4`**: A looping 4K background video (length: 24 seconds, target size: < 1.8MB). Low-contrast capture tracking warm morning sunlight shifting over cream river stones covered by an ultra-thin layer of rippling water. No human profiles.
2.  **`hair-spa-fluidity.mp4`**: Micro-loop macro video (length: 5 seconds). Captures a single section of long, healthy, natural hair sliding down a soft linen fabric background in hyper-slow motion.
3.  **`incense-smoke-elevation.mp4`**: Vertical format loop (length: 12 seconds). Tracked capture of fine white incense smoke curling upwards against a solid `#F0EBE1` colored background plate.

### 3.2 High-Fidelity Static Visuals (Pre-converted to WebP)
1.  **`eucalyptus-minimalist.webp`**: Minimalist composition. Vertical arrangement of sun-dried eucalyptus leaves casting long, soft shadows against an alabaster concrete surface.
2.  **`massage-oil-botanical.webp`**: Mid-action shot. Warm massage oil dropping from a small glass pitcher onto extended fingers. Desaturated color styling, deep shadows.
3.  **`bridal-glow-portrait.webp`**: Portrait format. Close-up photo of a bride with highly natural, soft makeup styling. Model has eyes closed, face tilted upward toward light pouring from a window.
4.  **`clay-bowl-botanical.webp`**: Top-down composition. A rustic cream ceramic bowl containing a pale sage-green herbal mask mix, alongside a raw wooden paste applicator.
5.  **`hot-stones-towel.webp`**: Composition of three smooth basalt stones warming on a thick, white linen towel layout.
6.  **`salon-interior-arches.webp`**: Panoramic shot. Interior perspective of the spa's central corridor showing clean plaster arches, minimalist hidden lighting, and micro-cement flooring.
7.  **`serum-dropper-capture.webp`**: High-speed snapshot tracking a golden facial serum droplet suspended directly below a glass dropper tip.
8.  **`towel-steam-scalp.webp`**: Close-up showing steam rising from a thick, warm white cloth wrapped around a client's head during treatment.
9.  **`manicure-sandstone.webp`**: Minimalist styling showing clean, natural hands resting gently on a coarse piece of natural cream sandstone.
10. **`cantonment-facade.webp`**: Architecture shot capturing the sleek exterior profile of the Cantonment hub during the early evening golden hour.
11. **`thillai-nagar-lounge.webp`**: Interior shot of the Thillai Nagar lounge showing curved cream couches, low-slung oak tables, and architectural stone accents.
12. **`kk-nagar-sanctuary.webp`**: Atmospheric shot of a private treatment suite in KK Nagar showing a soft glowing wall wash, minimalist linens, and timber sliding panels.
13. **`artisan-avatar-1.webp`** through **`artisan-avatar-6.webp`**: High-contrast, clean black-and-white portraits of the design team. Uniform lighting profiles with model eyes looking straight ahead.

---

## MODULE 4: PRODUCTION COMPONENT PATHS & FULL-TEXT PAGES SPECIFICATION

### 4.1 PAGE 1: THE HOME CORE (`app/page.tsx`)

#### Section 1: The Ambient Hero Component
*   **Visual Structure:** 100vh viewport container using a fixed relative layout block. Inject a full-bleed child container containing `hero-fluid-stone.mp4`. Apply a structural mask block: `bg-[#FAF9F6] opacity-35 mix-blend-overlay`.
*   **Typography Block Layout:** Centered exactly down the center axis.
    *   `H1 Text`: "Breathe. Restore. Evolve." (Configured via `font-serif`, sizing set to `text-7xl md:text-9xl`, thickness: `font-light`, color: `#3E3A37`).
    *   `Subtitle Text`: "Your private sanctuary in the heart of Trichy." (Configured via `font-sans`, sizing set to `text-lg md:text-2xl`, tracking value: `tracking-widest`, capitalization: `uppercase`, text color: `#6E6863`, spacing top: `mt-8`).
*   **Animation Logic:** On initialization, parse the GSAP SplitText array. Break the H1 string into individual characters. Apply a scroll-linked transformation matrix: As scroll ticks from 0px up to 600px, translate each character vertically up by `40px` while scaling the opacity from 0 to 1, utilizing a soft blur reduction step (`filter: blur(12px) -> blur(0)`). The parent video container smoothly tracks a background scale factor mapping `transform: scale(1.0) -> scale(1.12)` linearly across the viewport window height.

```tsx
// Complete Implementation Draft: Hero.tsx
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current || !videoRef.current) return;

    // Split text simulation for characters
    const text = titleRef.current.innerText;
    titleRef.current.innerHTML = text
      .split("")
      .map((char) => `<span class="inline-block letter">${char === " " ? "&nbsp;" : char}</span>`)
      .join("");

    const letters = titleRef.current.querySelectorAll(".letter");

    gsap.fromTo(
      letters,
      { opacity: 0, y: 80, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.04,
        duration: 1.6,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      }
    );

    gsap.to(videoRef.current, {
      scale: 1.15,
      scrollTrigger: {
        trigger: "#hero-container",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="hero-container" class="relative w-full h-screen overflow-hidden bg-[#FAF9F6]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-multiply"
      >
        <source src="/models/hero-fluid-stone.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAF9F6]/20" />
      <div class="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        <h1 ref={titleRef} class="font-serif text-6xl md:text-9xl font-light text-[#3E3A37] tracking-tight">
          Breathe. Restore. Evolve.
        </h1>
        <p class="font-sans text-sm md:text-md uppercase tracking-[0.3em] text-[#6E6863] mt-8">
          Your private sanctuary in the heart of Trichy
        </p>
      </div>
    </section>
  );
}
```

#### Section 2: The Philosophy Block Component
*   **Visual Structure:** Single layout column centered inside a deep container width limit (`max-w-4xl`), padded heavily on the Y-axis (`py-48`). Background container matches the warm tone of `#F0EBE1`.
*   **Content Assets:**
    *   `Body Text`: "True luxury is born from quiet intervals. At Aurelia, we strip away the noise of the external grid to curate an internal ecosystem of recovery. We do not chase superficial, fast aesthetic transformations; instead, we nurture sustainable wellbeing by honoring the natural rhythm of your skin, hair, and biological self. Every formula is measured, every motion deliberate, every moment designed to anchor you back to complete structural balance."
*   **Floating Asset Layout:**
    *   *Left Side Frame:* Render `eucalyptus-minimalist.webp` (`w-[280px] h-[400px] absolute -left-[180px] top-[10%] shadow-xl hidden lg:block`).
    *   *Right Side Frame:* Render `massage-oil-botanical.webp` (`w-[240px] h-[360px] absolute -right-[140px] bottom-[5%] shadow-xl hidden lg:block`).
*   **Animation Logic:** Implement a custom GSAP ScrollTrigger timeline tracking word opacity profiles. As the content blocks shift halfway up the screen window, read the text array and fade words seamlessly from an entry opacity value of `0.15` to a final read layout of `1.0`. Link the left and right floaters to separate parallax tracking curves (`speed-left: y * -0.15`, `speed-right: y * 0.22`).

#### Section 3: The Rituals (Horizontal Pan Module)
*   **Visual Structure:** A full screen window pin structure mapping standard vertical mouse inputs to a horizontal viewport translation layout (`flex w-[400vw] h-screen bg-[#FAF9F6]`).
*   **Card Matrix Specification:**
    1.  **Card 1: Bridal Artistry Portfolio**
        *   Asset: `bridal-glow-portrait.webp` (Stretched to fill card boundaries).
        *   Copy Overlays: "01 / The Bridal Artistry Portfolio" (`font-serif`, positioning: top-left corner). "Bespoke beauty alignment designed for timeless elegance. Setting a new premium standard above traditional options like Zazzle and Pretty Queen." (`font-sans`, positioning: bottom-left corner).
    2.  **Card 2: Advanced Hair Formulations**
        *   Asset: `hair-spa-fluidity.mp4` (Embedded inline video loop player).
        *   Copy Overlays: "02 / The Hair Artistry Lab" | "Structural hair correction, organic color restorations, and premium steam-infused botanical conditioning paths."
    3.  **Card 3: Holistic Medi-Facials**
        *   Asset: `clay-bowl-botanical.webp`.
        *   Copy Overlays: "03 / Advanced Skin Formulations" | "Cellular rejuvenation treatments utilizing localized organic raw clays, gold leaf elements, and modern dermal serums."
    4.  **Card 4: The Body Sanctuary**
        *   Asset: `hot-stones-towel.webp`.
        *   Copy Overlays: "04 / Deep Tissue Restoration" | "Therapeutic hot basalt stone layouts combined with intentional lymphatic drainage sequences."
*   **Animation Logic:** Lock the view canvas when the section top reaches `y: 0`. As scroll inputs continue, translate the row container along the X-axis from `translateX(0vw)` down to `translateX(-300vw)`. Provide a hover event listener on each individual frame that triggers a fine image scaling transition (`scale: 1.0 -> 1.06`) running over a smooth `transition: 0.8s cubic-bezier(0.25, 1, 0.5, 1)`.

#### Section 4: The Testimonial Marquee Component
*   **Visual Structure:** Full width text ribbon (`w-full py-16 overflow-hidden bg-[#F0EBE1] border-y border-[#E8E2D2]`).
*   **Content Array:** Repeat this exact sentence loop infinitely: "• AURELIA SETS A HIGHER STANDARD OF COMFORT • REINVENTING HOLISTIC WELLNESS IN TRICHY • AN ABSOLUTE SANCTUARY FROM THE OUTSIDE WORLD • EVERY TREATMENT WAS METICULOUSLY POISED •"
*   **Animation Logic:** Simple continuous marquee loop tracking CSS transformation matrices. If scroll interaction velocity increases down the page, accelerate the layout tracking translation speed dynamically. If scroll inputs switch directions (upward navigation), instantly reverse the marquee direction vector smoothly without structural layout snapping.

---

### 4.2 PAGE 2: THE SALON MENU SELECTION (`app/services/page.tsx`)

#### Section 1: Menu Canvas Header
*   **Structure:** Viewport dimension configured to a fixed height of `60vh`. Background asset layer set to load `salon-interior-arches.webp` modified with a dark color multiply overlay layer (`bg-[#FAF9F6]/30`).
*   **Content:**
    *   Main H2 Title: "The Canvas of Care" (`font-serif`, `text-5xl md:text-7xl`, color: `#3E3A37`).
    *   Subhead Label: "A comprehensive menu of deliberate aesthetic practices."
*   **Animation Logic:** Classic slow vertical parallax matrix tracking background elements. When user scrolls down, translate the image asset vertically downwards at a ratio of 0.35 relative to screen window metrics.

#### Section 2: Advanced Skin Formulations (Sub-Menu Row)
*   **Layout:** Responsive columns (`grid grid-cols-1 md:grid-cols-12 gap-16 items-center max-w-7xl mx-auto py-24 px-4`). Text block assigned left side layout tracking columns 1 to 5. Image asset assigned right side tracking columns 7 to 12.
*   **Image Asset Allocation:** `serum-dropper-capture.webp`.
*   **Menu Text & Price Specifications Ledger:**
    ```text
    [CATEGORY HEADER]: ADVANCED SKIN RESTORATIONS
    
    • The Aurelia Signature Facial | 90 Mins | ₹4,500
      Description: Deep dermal infusion using wild botanical serums, manual lymphatic drainage, and customized organic clay masks.
      
    • Gold Leaf Cell Awakening | 75 Mins | ₹6,000
      Description: Rejuvenation therapy utilizing 24k gold leaf elements to accelerate cell turnover and restore illumination.
      
    • Custom Marine Peel Matrix | 60 Mins | ₹3,800
      Description: Targeted alpha-hydroxy resurfacing paths derived from sustainable marine plants.
    ```
*   **Animation Logic:** Apply a reveal effect. As the section shifts into view, cover the image container with a solid blocks overlay matching background tone `#E8E2D2`. Slide this masking layer cleanly off to the right side over `0.9s` to reveal the underneath imagery.

#### Section 3: The Hair Spa Lab (Sub-Menu Row)
*   **Layout:** Invert the prior section layout paradigm. The text data moves to the right side (columns 8 to 12). The image asset is locked down the left side (columns 1 to 6).
*   **Image Asset Allocation:** `towel-steam-scalp.webp`.
*   **Menu Text & Price Specifications Ledger:**
    ```text
    [CATEGORY HEADER]: THERAPEUTIC HAIR & SCALP ARTISTRY
    
    • Botanical Keratin Realignment | 120 Mins | ₹7,500
      Description: Clean plant-derived protein sealing process to eradicate texture damage and establish structural gloss.
      
    • Essential Oil Steam Therapy | 45 Mins | ₹3,000
      Description: High-pressure vapor treatment driving pure rosemary and cedar oil deep into root pathways.
      
    • Sculpted Couture Styling & Cut | 90 Mins | ₹2,500
      Description: Individualized profile assessment, architectural cutting execution, and natural blow-out presentation.
    ```
*   **Interaction Logic:** When pointers pass over a specific menu service row profile, execute an animation setting: Translate text item details `+12px` rightwards horizontally along the layout line while shifting the color value from `#3E3A37` down to the brand accent hue `#8A9A86`. Run transitions over a linear `0.3s` window.

#### Section 4: Nail Sanctuary Matrix (Sub-Menu Row)
*   **Layout:** Standard block layout arrangement matching Section 2 grid vectors (Text on Left, Image on Right).
*   **Image Asset Allocation:** `manicure-sandstone.webp`.
*   **Menu Text & Price Specifications Ledger:**
    ```text
    [CATEGORY HEADER]: INTENTIONAL HAND & FOOT THERAPIES
    
    • Sandstone Mineral Pedicure | 75 Mins | ₹2,800
      Description: Warm mineral water soak, raw volcanic stone scrub, raw honey wrap, and detailed nail shaping.
      
    • Alabaster Hand Sanctuary | 60 Mins | ₹2,200
      Description: Intense exfoliation utilizing organic almond meal followed by an deep moisturizing cashmere wax glove treatment.
    ```

---

### 4.3 PAGE 3: THE SANCTUARY LOCATIONS & TEAM (`app/about/page.tsx`)

#### Section 1: The Trichy Regional Architecture Hubs
*   **Visual Layout Structure:** Define three vertical layout blocks tracking column configurations (`grid grid-cols-1 lg:grid-cols-3 gap-0 w-full min-h-screen bg-[#FAF9F6] border-b border-[#E8E2D2]`). Each column functions as an independent, standalone hub presentation vector.

```tsx
// Complete Implementation Draft: HubsSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const hubs = [
  {
    name: "Cantonment Hub",
    address: "18c, Warners Road, Cantonment, Trichy",
    image: "/models/cantonment-facade.webp",
    hours: "09:00 AM – 09:00 PM"
  },
  {
    name: "Thillai Nagar Hub",
    address: "2nd Floor, PLA Building, Thillai Nagar, Trichy",
    image: "/models/thillai-nagar-lounge.webp",
    hours: "09:00 AM – 09:00 PM"
  },
  {
    name: "KK Nagar Hub",
    address: "SMR Complex, KK Nagar Main Road, Trichy",
    image: "/models/kk-nagar-sanctuary.webp",
    hours: "09:00 AM – 09:00 PM"
  }
];

export default function HubsSection() {
  return (
    <section class="w-full bg-[#FAF9F6] py-12">
      <div class="text-center mb-16 px-4">
        <h2 class="font-serif text-4xl md:text-6xl text-[#3E3A37]">The Regional Sanctuary Hubs</h2>
        <p class="font-sans text-sm tracking-widest text-[#6E6863] uppercase mt-4">Three curated locations across Trichy</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[#E8E2D2]">
        {hubs.map((hub, index) => (
          <motion.div
            key={index}
            class="relative h-[80vh] group overflow-hidden border-r last:border-r-0 border-[#E8E2D2] flex flex-col justify-end p-12"
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div class="absolute inset-0 z-0">
              <Image alt="{hub.name}" class="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-70" fill src="{hub.image}"/>
              <div class="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/40 to-transparent z-10" />
            </div>
            <div class="relative z-20 flex flex-col items-start text-left">
              <span class="font-sans text-xs uppercase tracking-[0.3em] text-[#6E6863] mb-2">Sanctuary 0{index + 1}</span>
              <h3 class="font-serif text-3xl text-[#3E3A37] mb-4">{hub.name}</h3>
              <p class="font-sans text-sm text-[#6E6863] leading-relaxed mb-1">{hub.address}</p>
              <p class="font-sans text-xs tracking-wider text-[#8A9A86]">{hub.hours}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

*   **Animation Logic:** Implement a custom 3D Tilt perspective wrapper on each column grid. Read mouse coordinates `e.clientX` and `e.clientY` positioning relative to column centers. Project transform style vectors: `perspective(1000px) rotateX(deltaY * 0.02deg) rotateY(deltaX * -0.02deg)`. On hover, the background black-and-white asset smoothly removes its grayscale filter over a `1.2s` interval while expanding slightly in scale.

#### Section 2: The Artisan Team Portfolio
*   **Visual Layout Structure:** A structural staggered layout assembly grid (`columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto py-32 px-4`). 
*   **Asset Matrix (Images 13 to 18):** Six high-fashion black-and-white artisan portraits loaded directly into individual masonry modules.
*   **Text Profile Overlays:**
    *   *Artisan 1:* "Ananya Ramachandran" | *Role:* Creative Hair Director
    *   *Artisan 2:* "Meera Krishnan" | *Role:* Lead Bridal Master
    *   *Artisan 3:* "Sarah D’Souza" | *Role:* Advanced Dermal Specialist
    *   *Artisan 4:* "Priya Nadar" | *Role:* Holistic Therapy Expert
    *   *Artisan 5:* "Rohan Alistair" | *Role:* Senior Barber & Texture Stylist
    *   *Artisan 6:* "Nisha Pillai" | *Role:* Color Correction Artisan
*   **Interaction Logic:** When mouse coordinates focus inside a portrait boundary, the image shifts from grayscale to full, warm organic tones. Simultaneously, a clean text block tooltip anchor emerges (`bg-[#FAF9F6] border border-[#E8E2D2] px-4 py-2 text-xs font-sans`), tracking mouse coordinates with a smooth spring physics layout lag.

---

### 4.4 PAGE 4: THE BOOKING SYSTEM PLATFORM (`app/booking/page.tsx`)

#### Section 1: Split-Screen Reservation Interface
*   **Visual Layout Structure:** Splitting screen space evenly into two continuous vertical pillars (`flex flex-col md:flex-row w-full min-h-screen bg-[#FAF9F6]`).

#### Column A: The Visual Anchor (Left Pillar)
*   Width: `w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen bg-[#F0EBE1] overflow-hidden`.
*   Asset Configuration: Embed video `incense-smoke-elevation.mp4` fixed to fill full volume bounds (`object-cover`). Layer a text graphic down the center line: "Reserve Your Session" (`font-serif`, `text-4xl`, tracking a deep vertical stagger pattern).

#### Column B: The Live Engine Framework (Right Pillar)
*   Width: `w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center`.
*   **Step Form Engine Processing Array:**

##### Step 1: Select Curated Ritual
Render a custom Select configuration selector layer built from Radix primitives.
*   *Options Ledger:* "Aurelia Signature Facial (₹4,500)", "Gold Leaf Awakening (₹6,000)", "Botanical Keratin Therapy (₹7,500)", "Sandstone Mineral Pedicure (₹2,800)".

##### Step 2: Define Sanctuary Location
Render a minimalist toggle row component layout.
*   *Interactive Inputs:*
    *   `Input A`: "Cantonment Hub" (Values bound to Database Location Key 01).
    *   `Input B`: "Thillai Nagar Hub" (Values bound to Database Location Key 02).
    *   `Input C`: "KK Nagar Hub" (Values bound to Database Location Key 03).

##### Step 3: Select Date & Time Configuration
*   *Layout Mechanics:* Integrate the customized Shadcn UI `Calendar` module. When date states update, render a horizontal flex row container holding available appointment times.
*   *Time Slot Token Assets:* "09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "07:00 PM".

```tsx
// Complete Implementation Draft: BookingForm.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date undefined |>(undefined);
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div class="w-full max-w-xl mx-auto space-y-12">
      {/* Step 1: Service */}
      <div class={`transition-opacity duration-500 ${step >= 1 ? "opacity-100" : "opacity-30"}`}>
        <label class="block font-sans text-xs uppercase tracking-widest text-[#6E6863] mb-4">01. Select Ritual</label>
        <select
          value={selectedService}
          onChange={(e) => { setSelectedService(e.target.value); if(step === 1) setStep(2); }}
          class="w-full bg-[#FAF9F6] border border-[#E8E2D2] text-[#3E3A37] p-4 font-sans text-sm outline-none focus:border-[#8A9A86] transition-colors"
        >
          <option value="">Choose a treatment...</option>
          <option value="facial">Aurelia Signature Facial — ₹4,500</option>
          <option value="gold">Gold Leaf Cell Awakening — ₹6,000</option>
          <option value="keratin">Botanical Keratin Realignment — ₹7,500</option>
        </select>
      </div>

      {/* Step 2: Location */}
      {step >= 2 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} class="space-y-4">
          <label class="block font-sans text-xs uppercase tracking-widest text-[#6E6863]">02. Select Sanctuary Hub</label>
          <div class="grid grid-cols-3 gap-4">
            {["Cantonment", "Thillai Nagar", "KK Nagar"].map((loc) => (
              <button
                key={loc}
                onClick={() => { setSelectedLocation(loc); if(step === 2) setStep(3); }}
                class={`p-4 border font-sans text-xs uppercase tracking-wider transition-colors ${
                  selectedLocation === loc ? "border-[#8A9A86] bg-[#8A9A86]/5 text-[#3E3A37]" : "border-[#E8E2D2] text-[#6E6863]"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Step 3: DateTime */}
      {step >= 3 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} class="space-y-6">
          <label class="block font-sans text-xs uppercase tracking-widest text-[#6E6863]">03. Date & Available Slots</label>
          <div class="flex flex-col lg:flex-row gap-8 items-start">
            <Calendar class="border border-[#E8E2D2] p-4 bg-[#FAF9F6]" mode="single" onSelect="{setSelectedDate}" selected="{selectedDate}"/>
            {selectedDate && (
              <div class="grid grid-cols-2 gap-3 w-full lg:w-auto">
                {["09:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    class={`px-6 py-3 border font-sans text-xs transition-all ${
                      selectedTime === time ? "bg-[#3E3A37] text-[#FAF9F6] border-[#3E3A37]" : "border-[#E8E2D2] text-[#3E3A37] hover:border-[#8A9A86]"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Submit Action */}
      {selectedTime && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          class="w-full py-5 bg-[#3E3A37] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.2em] hover:bg-[#8A9A86] transition-colors duration-500"
        >
          Confirm Sanctuary Booking
        </motion.button>
      )}
    </div>
  );
}
```

*   **Animation Logic:** When database validations clear, fire an exit animation configuration inside the active step block component. The newly exposed step components glide smoothly upwards from `y: 30px` along the page grid, bringing step parameters to clear opacity models. Clicking time slot keys initiates a dynamic expanding ring asset scaling outward radially from the cursor pointer center vector before settling.

---

### 4.5 STRUCTURAL GLOBAL FOOTER LINK (`components/Footer.tsx`)

*   **Visual Layout Structure & Effect:** This component operates as a layout reveal structure. It sits fixed inside lower viewport depths (`z-0`) positioned behind the primary landing layout block (`relative z-10 bg-[#FAF9F6] mb-screen`). As the viewer processes content to the bottom of the page grid, the main page slide smoothly unmasks the stationary footer anchored below.
*   **Content Configuration Components:**
    *   **Primary Decorative Watermark:** Render an extremely large typographic vector mapping the name string "AURELIA". Spanning the exact screen block scale (`text-[15vw]`, font weighting set to `font-serif`, coloring: `text-[#3E3A37] opacity-[0.03] select-none text-center`).
    *   **Column Array Left (Directory Paths):** Links navigating directly across root paths: *Rituals Portfolio*, *The Salon Treatment Menu*, *Sanctuary About*, *Artisan Crew*, *Secure Reservations*.
    *   **Column Array Center (Contact Core Matrix):** 
        *   `Text String 1`: "Direct Line: +91 431 AURELIA"
        *   `Text String 2`: "Concierge Inbox: sanctuary@aureliasalon.in"
        *   `Text String 3`: "Central Office: 18c, Warners Road, Cantonment, Trichy, Tamil Nadu"
    *   **Column Array Right (Digital Envelope Signup):** Embed a text registration field. The layout consists of an unstyled form entry lane containing a flat placeholder message: "Provide your digital delivery line for inner circle priority notifications". Border layout tracks a raw `1px` base rule matching line color `rgba(62,58,55,0.15)`.
*   **Animation Logic:** Apply a layout filter fade trigger tracking footer entry coordinates. As the curtain shifts revealing the footer area, scale email submission borders from `scaleX(0)` out to `scaleX(1)` relative to the container baseline, utilizing an intentional, elongated custom curve: `duration: 1.4s ease: cubic-bezier(0.19, 1, 0.22, 1)`.

---

## MODULE 5: DEVELOPMENT ASSIGNMENT FRAMEWORK CODE

To accelerate setup, initialize your framework with the core configuration files detailed below.

### 5.1 `app/globals.css`
```css
@import "tailwindcss";

@layer base {
  body {
    background-color: #FAF9F6;
    color: #3E3A37;
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    cursor: none;
  }
  
  h1, h2, h3, h4, .serif-font {
    font-family: 'Playfair Display', serif;
  }
}

/* Base overlay for organic texture */
.grain-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.02;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: overlay;
}

/* Custom scroll bar style tracking Lenis */
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-track {
  background: rgba(62, 58, 55, 0.03);
}
::-webkit-scrollbar-thumb {
  background: #8A9A86;
}
```

### 5.2 `components/providers/SmoothScrollProvider.tsx`
```tsx
"use client";
import { useEffect, createContext, useContext, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

const ScrollContext = createContext<Lenis null |>(null);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <ScrollContext.Provider value="{null}">{children}</ScrollContext.Provider>;
}
```

### 5.3 `components/ui/MagneticWrapper.tsx`
```tsx
"use client";
import { useRef, useState, ReactElement, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function MagneticWrapper({ children }: { children: ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Constrain shift limits tightly to ensure micro-movement profiles
    setPosition({ x: distanceX * 0.3, y: distanceY * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.5 }}
      data-interactive="true"
      class="inline-block"
    >
      {children}
    </motion.div>
  );
}
```

### 5.4 `app/layout.tsx`
```tsx
import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Aurelia Spa & Salon | Sanctuary Trichy",
  description: "Experience absolute structural wellness and advanced salon formulations at Aurelia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div class="grain-overlay" />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
```

---

## EXECUTION DIRECTIVE FOR AGENT

You are commanded to build out the structural single-page experience step-by-step. Map every route component configuration precisely, ensuring the styling assets align completely with the production tokens defined in Module 1. Do not apply placeholder shortcuts or substitute elements. Maintain extreme negative space, clean type scales, and production alignment parameters throughout the implementation lifecycles. Run verification commands to ensure compilation completes without build warning markers. Proceed now.
