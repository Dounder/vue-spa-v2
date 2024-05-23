import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

const IsAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const user = localStorage.getItem('user') as { userId: string; username: string } | null
  localStorage.setItem('last_path', to.path)

  if (!user) return next({ name: 'login' })

  return next()
}

export default IsAuthenticatedGuard
