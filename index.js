import 'dotenv/config'

export async function getEnv(key) {
  return process.env[key]
}
