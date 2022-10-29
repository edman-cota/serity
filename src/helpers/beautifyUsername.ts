export const beautifyUsername = (input?: string | null) => {
  return input?.split("@")[0]
}
