import { cookies } from 'next/headers'

export async function createSession(userId, username) {
  const cookieStore = await cookies()
  cookieStore.set('session', JSON.stringify({ userId, username }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  })
}

export async function getSession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  if (!session) return null
  return JSON.parse(session.value)
}

export async function deleteSession() {
  const cookieStore = await cookies()
  cookieStore.delete('session')
}

