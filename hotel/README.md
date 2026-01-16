🏨 Hotel SPA React Project

A responsive single-page application (SPA) for a hotel website built with React, React Router, and Bootstrap.
The project demonstrates modern SPA architecture, reusable components, layouts, routing, and polished styling with CSS and Bootstrap.

📂 Project Structure

src/
├── components/
│ ├── Header.jsx # Responsive top navigation bar
│ ├── Footer.jsx # Footer with links and social icons
│ └── Header.css / Footer.css # Custom styling
├── layouts/
│ └── MainLayout.jsx # Layout wrapper with <Outlet />
├── pages/
│ ├── Home.jsx # Landing page with hero section
│ ├── Rooms.jsx # Rooms overview
│ ├── Services.jsx # Hotel services
│ ├── Events.jsx # Events page
│ ├── Gallery.jsx # Image gallery
│ └── Blog.jsx # Travel blog and tips
├── App.jsx # React Router routes
├── index.css # Global styles
└── main.jsx # Entry point

🎨 Design Highlights

Header

Dark background with subtle shadow

Responsive navigation with collapsible menu on mobile

Brand logo prominently displayed

Footer

Matching dark theme for consistency

Social media links with hover effect (#ffc107 accent color)

Flexible layout using Bootstrap flex utilities

Pages & Layout

Clean container-based layout

Responsive cards, grids, and image galleries

Consistent spacing using Bootstrap utilities (mt-4, py-4)

Footer always at the bottom with flex-column and min-vh-100

Color & Typography

Primary colors: deep blue (#1e3a8a) for header/footer, white text

Accent color: Bootstrap yellow (#ffc107) for hover states

Smooth font spacing and weight for headings

⚡ Features

Fully responsive SPA

Reusable Header & Footer components

Navigation with React Router for seamless page transitions

Custom CSS + Bootstrap utilities for polished styling

Static SPA: no backend required

Easy to extend with nested routes (e.g., specific room details)
