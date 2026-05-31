export function sitePath(path: string) {
  const basePath = process.env.PAGES_BASE_PATH || "";

  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
}
