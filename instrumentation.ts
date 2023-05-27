import { registerOTel } from '@vercel/otel'

export function register() {
  console.log('instrumentation register call')

  registerOTel('next-app')
}
