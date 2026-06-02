# Portfolio 

### Hugo Méndez
---

Online Portfolio link: http://35.255.29.219:8085/

---

Welcome to the source code of my interactive developer portfolio. This project is a high-performance, ultra-premium web experience built to showcase my skills as a Full-Stack Software Engineer. 

It features a custom-built 240-frame neural network scrollytelling background, a fully interactive terminal contact form, and a sleek, custom-designed dark-mode glassmorphism aesthetic.

## 🚀 The Tech Stack

This project was built from the ground up focusing on performance, scalability, and seamless deployment:

- **Frontend Core**: React 18, TypeScript, Vite
- **Styling**: Pure Vanilla CSS (Custom Glassmorphism Design System, CSS Modules)
- **Animation Engine**: High-performance HTML5 Canvas synchronized with scroll events (`requestAnimationFrame`), utilizing a pre-rendered 240-frame image sequence for the neural network background.
- **Containerization & Deployment**: Multi-stage Docker builds serving static files via an ultra-fast Nginx container.
- **Icons & Extras**: Lucide React for consistent, scalable iconography.

## 🛠️ How to Run Locally (Production Environment)

The easiest and most reliable way to run this project is using Docker. This ensures you are running the exact same optimized environment as the live production server.

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) installed and running on your machine.
- [Git](https://git-scm.com/) installed.

### Execution Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/hmndzzl/Web_portafolio.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Web_portafolio
   ```

3. **Build and start the Docker container:**
   ```bash
   docker compose up --build -d
   ```

4. **View the live application:**
   Open your browser and navigate to [http://localhost:8085](http://localhost:8085). The app is now running inside a highly optimized Nginx container.

To stop the server later, simply run `docker compose down`.

## 💻 Running in Development Mode

If you wish to modify the code and see real-time updates (Hot Module Replacement), run the application via Node.js instead of Docker.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 🧠 Key Engineering Highlights
- **Zero-Dependency Scroll Animation**: The cinematic background is driven by pure JavaScript math and HTML5 Canvas, completely avoiding heavy animation libraries for maximum FPS.
- **Strict Architecture**: The codebase uses strict TypeScript interfaces and isolated CSS Modules to prevent global style bleeding.
- **Terminal Emulator**: The contact section features a custom-built, functional command-line interface that processes specific commands (like `help`, `skills`, `projects`, and `email`).

