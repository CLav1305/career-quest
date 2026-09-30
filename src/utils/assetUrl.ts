export function resolveAssetUrl(path?: string) {
  if (!path) return ''

  const trimmed = path.trim()

  if (!trimmed) return ''

  if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed
  }

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')

  if (trimmed.startsWith(baseUrl)) {
    return trimmed
  }

  return `${baseUrl}/${trimmed.replace(/^\/+/, '')}`
}
