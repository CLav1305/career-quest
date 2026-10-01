// Normalize image paths so they work both locally and on GitHub Pages.
export function resolveAssetUrl(path?: string) {
  if (!path) return ''

  const trimmed = path.trim()

  if (!trimmed) return ''

  // Leave fully-qualified URLs alone.
  if (/^(https?:)?\/\//i.test(trimmed) || trimmed.startsWith('data:')) {
    return trimmed
  }

  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '')

  // Prevent duplication when the JSON already contains the repo prefix.
  if (trimmed.startsWith(baseUrl)) {
    return trimmed
  }

  return `${baseUrl}/${trimmed.replace(/^\/+/, '')}`
}
