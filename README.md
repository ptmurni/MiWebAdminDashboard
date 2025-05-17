MiWebAdminDashboard
A modern admin dashboard based on Tailwind CSS and Vite, providing a sleek interface for web applications.
Features
Modern UI Components - Clean, responsive dashboard elements
Tailwind CSS Integration - Utility-first CSS framework for rapid styling
Vite Build System - Fast development server and optimized production builds
Sass Support - Extended styling capabilities with SCSS
Pug Templating - Clean HTML syntax for improved readability
Responsive Design - Fully responsive layout for all device sizes
Prerequisites
Node.js (v16.0 or later recommended)
npm or yarn package manager
Installation
Clone the repository:
bash


git clone https://github.com/yourusername/miwebadmindashboard.git
cd miwebadmindashboard
Install dependencies:
bash


npm install
The postinstall script will automatically initialize Tailwind CSS.
Project Structure
javascript


miwebadmindashboard/
├── assets/
│   ├── pug/
│   │   ├── pages/          # Page templates
│   │   └── components/     # Reusable UI components
│   ├── scss/
│   │   ├── tailwind.css    # Tailwind directives
│   │   └── style.scss      # Main stylesheet
│   ├── css/                # Compiled CSS output
│   ├── js/                 # JavaScript files
│   ├── images/             # Image assets
│   └── fonts/              # Font files
├── template/               # Compiled HTML output
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Project dependencies and scripts
Development
Start the development server with:
bash


npm run dev
This command:
Watches Sass files for changes and compiles them
Processes Tailwind CSS
Starts the Vite development server with network access enabled
You can access your dashboard from:
Local: http://localhost:3000/
Network: http://YOUR-IP-ADDRESS:3000/ (accessible from other devices on your network)
Building for Production
Create a production build with:
bash


npm run build
The optimized output will be in the dist directory.
To preview the production build locally:
bash


npm run preview
Customization
Tailwind Configuration
The Tailwind configuration is in tailwind.config.js. You can modify this file to:
Change color schemes
Update breakpoints
Add plugins
Customize spacing, typography, etc.
Templates
Pug templates are located in assets/pug/. Modify these files to update the HTML structure of your dashboard.
Styling
SCSS files are in assets/scss/. The main styling file is style.scss.
Authors
Trisna Kurniawan
Roki Anjas
License
This project is licensed under the MIT License - see the LICENSE file for details.