"use client";

import React from "react";
import { 
  Workflow, 
  Boxes, 
  ArrowLeftRight, 
  RefreshCw, 
  Layers, 
  Cpu, 
  Radio, 
  Activity 
} from "lucide-react";

interface SkillLogoProps {
  name: string;
  size?: number;
  className?: string;
}

// Inline custom SVGs/Icons for concepts that don't have single vendor logos
function SystemDesignIcon({ size = 24 }: { size?: number }) {
  return (
    <div 
      className="flex items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-200/80"
      style={{ width: size, height: size }}
      title="System Design"
    >
      <Workflow size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.2} />
    </div>
  );
}

function MicroservicesIcon({ size = 24 }: { size?: number }) {
  return (
    <div 
      className="flex items-center justify-center rounded-lg bg-violet-50 text-violet-600 border border-violet-200/80"
      style={{ width: size, height: size }}
      title="Microservices"
    >
      <Boxes size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.2} />
    </div>
  );
}

function RestApiIcon({ size = 24 }: { size?: number }) {
  return (
    <div 
      className="flex items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-200/80"
      style={{ width: size, height: size }}
      title="REST APIs"
    >
      <ArrowLeftRight size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.4} />
    </div>
  );
}

function AsyncProcessingIcon({ size = 24 }: { size?: number }) {
  return (
    <div 
      className="flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/80"
      style={{ width: size, height: size }}
      title="Asynchronous Processing"
    >
      <RefreshCw size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.4} />
    </div>
  );
}

function GeminiIcon({ size = 24 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z"
        fill="url(#gemini_sparkle_grad)"
      />
      <defs>
        <linearGradient id="gemini_sparkle_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1BA1E3" />
          <stop offset="0.5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CachingIcon({ size = 24 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-200/80"
      style={{ width: size, height: size }}
      title="Caching"
    >
      <Layers size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.2} />
    </div>
  );
}

function DistributedSystemsIcon({ size = 24 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-200/80"
      style={{ width: size, height: size }}
      title="Distributed Systems"
    >
      <Radio size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.2} />
    </div>
  );
}

function ObservabilityIcon({ size = 24 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg bg-rose-50 text-rose-600 border border-rose-200/80"
      style={{ width: size, height: size }}
      title="Observability"
    >
      <Activity size={Math.max(12, Math.round(size * 0.65))} strokeWidth={2.2} />
    </div>
  );
}

// Concept icon component registry
const conceptIconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "system design": SystemDesignIcon,
  "systemdesign": SystemDesignIcon,
  sd: SystemDesignIcon,
  microservices: MicroservicesIcon,
  microservice: MicroservicesIcon,
  "rest apis": RestApiIcon,
  "rest api": RestApiIcon,
  restapis: RestApiIcon,
  restapi: RestApiIcon,
  "asynchronous processing": AsyncProcessingIcon,
  "asynchronous-processing": AsyncProcessingIcon,
  "async processing": AsyncProcessingIcon,
  asyncprocessing: AsyncProcessingIcon,
  caching: CachingIcon,
  "distributed systems": DistributedSystemsIcon,
  "distributed system": DistributedSystemsIcon,
  observability: ObservabilityIcon,
  gemini: GeminiIcon,
  "google gemini": GeminiIcon,
};

// Actual vendor/technology logo URLs
const skillLogos: Record<string, string> = {
  // Programming & Core
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "c++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "c#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",

  // Frontend
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "react.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  tailwindcss: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  html5: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",

  // Mobile
  "react native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
  "react-native": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
  expo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",

  // Backend
  "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "asp.net core": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
  "spring boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",

  // Databases & Caching
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  postgis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  sqlite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",

  // Machine Learning & Data Science
  "scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  scikitlearn: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
  pandas: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
  numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
  tensorflow: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  mlflow: "https://cdn.simpleicons.org/mlflow/0194E2",
  xgboost: "https://cdn.simpleicons.org/xgboost",
  shap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
  elevenlabs: "https://cdn.simpleicons.org/elevenlabs",

  // DevOps, Messaging & Infrastructure
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  k8s: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  bitbucket: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  nginx: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  grafana: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  "apache kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",

  vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "vs code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "visual studio": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  "socket.io": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
  socketio: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
};


// Icons that are black/dark by default: slightly tint them for light backgrounds
const darkSvgIcons = new Set(["github", "socket.io", "socketio", "expo", "next.js", "nextjs"]);

export function SkillLogo({ name, size = 30, className = "" }: SkillLogoProps) {
  const skillName = (name || "").trim();
  const normalizedKey = skillName.toLowerCase();

  // 1. Check for custom concept icon (System Design, Microservices, REST APIs, Async Processing, Gemini)
  const ConceptIcon = conceptIconMap[normalizedKey];
  if (ConceptIcon) {
    return <ConceptIcon size={size} />;
  }

  // 2. Check for technology logo URL
  const logoUrl = skillLogos[normalizedKey];
  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={skillName}
        title={skillName}
        style={{
          width: size,
          height: size,
          filter: darkSvgIcons.has(normalizedKey) ? "invert(0.3) brightness(0.6)" : undefined,
        }}
        className={`object-contain transition-transform duration-300 ${className}`}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    );
  }

  // 3. Fallback placeholder
  return (
    <div
      className={`flex items-center justify-center rounded-lg font-bold border ${className}`}
      style={{
        width: size,
        height: size,
        fontSize: Math.max(9, Math.round(size / 3)),
        background: "rgba(91,76,222,0.08)",
        color: "var(--violet)",
        borderColor: "rgba(91,76,222,0.16)",
      }}
    >
      {skillName ? skillName.substring(0, 2).toUpperCase() : "??"}
    </div>
  );
}



