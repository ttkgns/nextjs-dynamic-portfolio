# 🧑‍💻 Dynamic Portfolio with Next.js, JavaScript & Tailwind CSS

This is a dynamic and responsive portfolio web application built using **Next.js**, **JavaScript**, and **Tailwind CSS**. It showcases personal information, projects, services, tools, and contact functionality, with all the content managed via structured JavaScript files for ease of customization.

---

## 🚀 Features

- ⚡ Built with Next.js for fast performance and server-side rendering
- 🎨 Styled using Tailwind CSS for responsive and modern design
- 🔄 Dynamically rendered content from a central JavaScript file
- 🌙 Light/Dark mode support
- 🧰 Icons and assets handled via a centralized `assets.js` file
- 📬 Functional contact form powered by Web3Forms

---

## 📦 Data Configuration: `assets.js`

All portfolio content (images, project data, service information, personal details, etc.) is imported and managed through `assets.js`. This file acts as a central content manager for:

- 👤 Personal details (`personalData`)  
- 🧳 Work/projects (`workData`)  
- 🛠 Services (`serviceData`)  
- 🧾 Education and skills (`infoList`)  
- 🧰 Tools & technologies (`toolsData`)  
- 🖼 All static images and icons (exported via `assets` object)  

> This modular structure allows for easy updates without touching the core components or JSX code.

## 🛠 Example: Customize personalData

Edit `assets.js` to update your personal info:

```js
export const personalData = {
  name: "Name",
  fullName: "Full Name",
  jobTitle: "web developer",
  introduction:
    "I am a frontend developer from California, USA with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.",
  resumeName: "/sample-resume.pdf", // Add your resume file to public folder
  aboutIntroduction:
    "I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
  servicesIntroduction:
    "I am a frontend developer from California, USA with 10 years of experience in multiple  companies like Microsoft, Tesla and Apple.",
  workIntroduction:
    "Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.",
  contactAccessKey: "YOUR ACCESS KEYE HERE", // Create an access key on Web3Forms and paste it here
  emailAddress: "emailaddress@mail.com",
  githubLink: "https://github.com/",
  linkedinLink: "https://www.linkedin.com/",
};
```

### Installation

Clone the repository:

```bash
git clone https://github.com/ttkgns/nextjs-dynamic-portfolio.git
cd nextjs-dynamic-portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
