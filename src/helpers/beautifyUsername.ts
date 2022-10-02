export const beautifyUsername = (input?: string) => {
    return input?.split("@")[0];
}