"use server"

import { SignupFormSchema } from '@/lib/definitions'
import { addUser, findUser } from '@/lib/users-store'
import { createSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
 
export async function signup(prevState, formData) {
  const validatedFields = SignupFormSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  const { username, password } = validatedFields.data

  const result = addUser(username, password)
  
  if (!result.success) {
    return {
      errors: {
        username: [result.message]
      }
    }
  }
 
  redirect('/login')
}

export async function login(prevState, formData) {
  const usernameInput = formData.get('username')?.toString()
  const passwordInput = formData.get('password')?.toString()

  if (!usernameInput || !passwordInput) {
    return {
      errors: {
        _form: ['Username and password are required']
      }
    }
  }

  const username = usernameInput.trim()
  const password = passwordInput.trim()

  const user = findUser(username, password)

  if (!user) {
    return {
      errors: {
        _form: ['Invalid username or password']
      }
    }
  }

  await createSession(user.id, user.username)
  redirect('/dashboard')
}

export async function logout() {
  const { deleteSession } = await import('@/lib/auth')
  await deleteSession()
  redirect('/login')
}

export async function checkSession() {
  const { getSession } = await import('@/lib/auth')
  const session = await getSession()
  return session
}