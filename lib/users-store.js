const users = []

export function addUser(username, password) {
  const trimmedUsername = username.trim()
  const trimmedPassword = password.trim()
  
  const existingUser = users.find(user => user.username === trimmedUsername)
  if (existingUser) {
    return { success: false, message: 'Username already exists' }
  }

  const newUser = {
    id: users.length + 1,
    username: trimmedUsername,
    password: trimmedPassword,
    createdAt: new Date().toISOString()
  }

  users.push(newUser)
  return { success: true, user: newUser }
}

export function findUser(username, password) {
  if (!username || !password) return null
  
  const trimmedUsername = username.trim()
  const trimmedPassword = password.trim()
  
  const user = users.find(
    u => u.username === trimmedUsername && u.password === trimmedPassword
  )
  return user || null
}

export function getAllUsers() {
  return users
}

export function getUserByUsername(username) {
  return users.find(u => u.username === username) || null
}

