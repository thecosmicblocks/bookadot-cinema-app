export const isAddress = (value: string) => {
  return String(value).startsWith("0x");
};
