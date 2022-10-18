// remove extra spaces between words
// then replace space with a dash

export const beautifyUrl = (input: string) => {
  const output = input.replace(/\s+/g, " ").trim().toLocaleLowerCase();
  return output.replace(/\s/g, "-");
};
