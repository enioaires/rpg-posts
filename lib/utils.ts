import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, PUT, POST, OPTIONS, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export const timeAgo = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const seconds = Math.round((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const months = Math.round(days / 30);
  const years = Math.round(months / 12);

  if (seconds < 60) return 'Agora mesmo';
  else if (minutes < 60) return `${minutes} minuto${minutes > 1 ? 's' : ''} atrás`;
  else if (hours < 24) return `${hours} hora${hours > 1 ? 's' : ''} atrás`;
  else if (days < 30) return `${days} dia${days > 1 ? 's' : ''} atrás`;
  else if (months < 12) return `${months} mês${months > 1 ? 'es' : ''} atrás`;
  else return `${years} ano${years > 1 ? 's' : ''} atrás`;
};