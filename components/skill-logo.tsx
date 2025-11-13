"use client"

interface SkillLogoProps {
  name: string
  size?: number
}

const skillLogos: Record<string, string> = {
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Expo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  Prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  Drizzle: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drizzle/drizzle-original.svg",
  Mongoose: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  WebSockets: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  WebRTC: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
}

export function SkillLogo({ name, size = 30 }: SkillLogoProps) {
  const logoUrl = skillLogos[name]

  if (!logoUrl) {
    return (
      <div
        className="flex items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold"
        style={{ width: size, height: size, fontSize: size / 3 }}
      >
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={logoUrl || "/placeholder.svg"}
      alt={name}
      title={name}
      style={{ width: size, height: size }}
      className="object-contain"
      onError={(e) => {
        e.currentTarget.style.display = "none"
      }}
    />
  )
}
