# WORKFLOW.md --- Shubhi Awasthi Portfolio

## 1. Project objective

Build a polished, responsive, single-page personal portfolio for
**Shubhi Awasthi**, a first-year B.Tech Computer Science Engineering
student at GLA University, Mathura. The site should feel like a premium,
modern developer portfolio: a blend of premium minimalism and modern
tech aesthetics.

The portfolio must be honest and suitable for an early-career student.
Do not invent work experience, projects, awards, grades, skill
proficiency levels, metrics, testimonials, or career goals.

## 2. Confirmed personal information

-   Name: Shubhi Awasthi
-   Display title: Emerging Computer Science Engineer and Software
    Developer
-   University: GLA University, Mathura
-   Degree: B.Tech, Computer Science Engineering
-   Current stage: First year
-   Expected graduation: 2030
-   Class 12 school: Brilliant Public School --- passing year 2026
-   Class 10 school: Brilliant Public School --- passing year 2024
-   CGPA: Not available; omit.
-   Class 10/12 percentages: Not provided; omit.
-   Email: awasthishubhi70@gmail.com
-   GitHub: https://github.com/shubhiawasthi11
-   LinkedIn: https://www.linkedin.com/in/shubhi-awasthi-265061411
-   Resume: User is working on it. Do not create a fake resume or show a
    non-functional download button.

### About copy --- starting draft

"I'm a first-year B.Tech student in Computer Science Engineering at GLA
University, Mathura, graduating in 2030. I'm interested in machine
learning, Python, and modern web technologies, and I enjoy collaborative
problem-solving and exploring how technology can drive innovation."

The user also describes herself as: - Always ready to learn - Innovative
in her thinking - Focused on efficient problem-solving

Use these traits naturally, without exaggerated claims. Do not imply
advanced expertise solely from interest.

## 3. Skills and interests

Display skills as names/tags only. **Do not show proficiency levels,
progress bars, percentages, stars, or skill ratings.**

### Programming and web

-   C
-   Python
-   Java
-   React.js
-   JavaScript
-   HTML
-   CSS

### Areas of interest

-   Web Development
-   Data Structures and Algorithms
-   Artificial Intelligence
-   Machine Learning
-   Database Management Systems (DBMS)

### Tools and platforms

-   Visual Studio Code
-   Git
-   GitHub
-   MySQL
-   MongoDB
-   SQLite
-   Power BI
-   Jupyter Notebook

Do not infer that every listed tool or technology has been used in a
production project.

## 4. Education

Create a clear education timeline or cards: 1. B.Tech --- Computer
Science Engineering, GLA University, Mathura; First Year; expected
graduation 2030. 2. Class XII --- Brilliant Public School; passed 2026.
3. Class X --- Brilliant Public School; passed 2024.

Do not invent board, stream, marks, CGPA, or dates beyond the supplied
years.

## 5. Projects

The user currently has no completed projects to list, but explicitly
wants a Projects section included.

Create a visually attractive, honest empty state: - Heading:
"Projects" - Intro such as "I'm building and exploring new ideas.
Projects will appear here as I turn what I learn into practical work." -
Use a tasteful empty-state visual or a single "Coming soon" panel. - Do
not invent project names, descriptions, screenshots, repositories, or
demo links. - Structure project data so real projects can be added later
without redesigning the section.

## 6. Certification

One verified certificate was supplied: **Certificate of Excellence ---
Full Stack Development with MERN**. - Program: thingQbator program -
Shown partner organizations: Nasscom Foundation (CSR Partner) and
Zikshaa (Training Partner) - Signatories shown: Jyoti Sharma, CEO,
Nasscom Foundation; Rakesh Kumar Behera, Chief Mentor, Zikshaa - The
certificate states the thingQbator Program is part of Cisco's CSR
commitments from 2018--2026. - Do not infer a completion date, duration,
grade, credential ID, or verification URL. - Add a certification card
and, if the PDF is placed in the project assets, a "View certificate"
link that opens it in a new tab. - Suggested asset location:
`public/certificates/full-stack-development-mern.pdf`. - If the file is
not present, render the card without a broken link and make the missing
asset easy to add.

## 7. Personal interests

Include a compact interests section: - Reading - Photography - Public
Speaking

## 8. Contact

Show: - Email: awasthishubhi70@gmail.com - GitHub profile link -
LinkedIn profile link

Include a contact form UI only if it can be implemented honestly.
Preferred safe implementation: - Use client-side validation and a
`mailto:` submission fallback that opens the visitor's email client with
the form details addressed to the supplied email. - Clearly explain that
the form opens the visitor's email app; do not claim messages are stored
or sent by a backend. - Do not add a fake success state or pretend a
backend exists. - Do not display a phone number.

## 9. Visual design system

### Palette

Use this exact starting palette: - Ice Silver: `#E8E8E8` (primary page
background) - Deep Aubergine: `#321B36` (primary text, dark surfaces,
navigation accents) - Marigold: `#F4B942` (accent, highlights, buttons
and small decorative details)

Supporting neutrals may be added sparingly for readable contrast, such
as white/off-white surfaces and muted gray text. Keep the three
requested colors dominant.

### Style direction

Blend: - Premium minimalist: generous whitespace, clear hierarchy, clean
layouts, refined typography. - Modern tech: expressive but restrained
gradients, tasteful motion, interactive cards, subtle decorative
details.

Avoid a generic template look, excessive gradients, clutter, oversized
glassmorphism, or distracting effects. Maintain strong contrast and
accessible text sizes.

### Typography and layout

-   Choose a modern, readable sans-serif pairing or one strong
    sans-serif family.
-   Use a consistent spacing scale, rounded corners, restrained shadows,
    and clear section rhythm.
-   Keep the page visually balanced on desktop and mobile.
-   Use a sticky or thoughtfully compact navigation with anchor links to
    sections.
-   Use a single-page scrolling layout.

## 10. Profile photograph

The user supplied a personal photograph in the conversation. Use that
photograph as the profile image. - Put the image at
`public/images/shubhi-profile.jpg` (or another clearly documented public
asset path). - If the image file is not yet in the repository, do not
fabricate a replacement portrait. Use a graceful neutral placeholder and
document exactly where the user should copy the supplied photo. -
Preserve the user's real appearance. Do not apply face replacement, AI
beautification, or identity-altering edits. - Use a responsive crop with
`object-fit: cover` and an intentional focal position; avoid cutting off
the face. - Add meaningful alt text, e.g. "Portrait of Shubhi Awasthi".

## 11. Page sections and recommended order

1.  Header / navigation
2.  Hero --- name, title, concise intro, profile photo, CTA buttons
    (Explore my work / Get in touch)
3.  About
4.  Education
5.  Skills --- grouped by Programming & Web, Areas of Interest, Tools &
    Platforms
6.  Projects --- honest empty state
7.  Certifications
8.  Interests
9.  Contact
10. Footer

The user requested all relevant portfolio sections, but do not create
separate empty sections for Experience, Achievements, or Awards when
there is no confirmed content. These can be added later when real
information is available. If included as navigation anchors, they must
contain truthful "Nothing to showcase yet" copy; preferably omit them
until there is content.

## 12. Motion and interaction

The user wants all suggested visual effects except cursor effects.
Implement tasteful, performance-conscious versions of: - Smooth
scrolling - Typing or rotating text animation beneath the name (keep the
primary title accessible and avoid rapid flashing) - Animated background
details - Interactive project cards (empty state remains
non-clickable) - Scroll-based reveal animations - 3D-inspired elements
only if lightweight and useful; avoid heavy WebGL unless truly
necessary - Subtle hover and focus effects - A short, accessible
loading/intro treatment only if it does not delay access to content

**Do not implement custom cursor effects or hide/replace the native
cursor.** Respect `prefers-reduced-motion`; provide reduced/no-motion
behavior. Ensure keyboard focus states are visible.

## 13. Technology and tooling

-   React
-   Tailwind CSS
-   JavaScript (not TypeScript unless the existing project is already
    TypeScript)
-   Vite is the preferred build tool for a new project.
-   Use Lucide React or simple inline SVG icons if icons are needed.
-   Use semantic HTML and reusable React components.
-   Use Git/GitHub workflow conventions.
-   Target deployment: Vercel.

Do not add unnecessary backend services, databases, authentication, or
API keys for a static portfolio.

## 14. Suggested component structure

Adapt to the existing repository if one exists. Otherwise use a clean
structure similar to:

``` text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Education.jsx
    Skills.jsx
    Projects.jsx
    Certifications.jsx
    Interests.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx
  data/
    portfolio.js
  App.jsx
  index.css
  main.jsx
public/
  images/
    shubhi-profile.jpg
  certificates/
    full-stack-development-mern.pdf
```

Keep content in a central data file where practical so the user can
update skills, links, and projects easily.

## 15. Responsive, accessibility, SEO, and quality requirements

-   Mobile-first responsive behavior; test phone, tablet, laptop, and
    wide desktop layouts.
-   Semantic landmarks, correct heading hierarchy, descriptive links,
    image alt text, keyboard accessibility, visible focus rings, and
    adequate color contrast.
-   Use page title: "Shubhi Awasthi \| Computer Science Engineering
    Student & Developer".
-   Add a concise meta description based only on confirmed information.
-   Add Open Graph basics and a favicon/monogram if practical.
-   Optimize images; lazy-load below-the-fold media.
-   Avoid layout shifts and unnecessary dependencies.
-   Ensure no horizontal overflow, broken links, console errors, or dead
    buttons.
-   Do not expose private information beyond the email the user
    explicitly chose to publish.
-   Do not add fake testimonials, fake statistics, fake GitHub activity,
    fake company logos, or fabricated experience.

## 16. Implementation and testing workflow

1.  Inspect the current repository and package manager before changing
    files.
2.  If an app already exists, preserve useful setup and adapt it rather
    than overwriting blindly.
3.  If empty, scaffold React + Vite + Tailwind using current compatible
    versions.
4.  Implement the design system and responsive page sections.
5.  Add the supplied profile image and certificate only if their files
    are present; otherwise document the expected asset paths.
6.  Run install/build/lint scripts that exist in the project.
7.  Fix errors and warnings caused by the implementation.
8.  Manually review the page at mobile and desktop widths.
9.  Verify all anchors, email actions, social links, certificate link
    (if asset exists), and reduced-motion behavior.
10. Provide a concise README with local run, build, asset placement, and
    Vercel deployment instructions.

## 17. Definition of done

The portfolio is complete when: - It is a polished, single-page React +
Tailwind portfolio. - The chosen palette and design direction are
applied consistently. - Every section contains accurate user-provided
information. - Skills appear without proficiency ratings. - Projects
section exists without fabricated projects. - Certification details
match the supplied certificate. - Contact links work and form behavior
is transparent. - Profile photo and certificate assets are handled
gracefully. - The site is responsive, accessible, performant, and ready
to deploy on Vercel. - Build succeeds and there are no known broken
controls or console errors.
