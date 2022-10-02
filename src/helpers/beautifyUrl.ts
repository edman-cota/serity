export const beautifyUrl = (input: string) => {
    return input.trim().replace(/\s/g, '-').toLowerCase()
}