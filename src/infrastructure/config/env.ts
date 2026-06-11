const requiredEnvVars = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
}

for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
}

export const env = {
  apiUrl: requiredEnvVars.VITE_API_URL,
} as const