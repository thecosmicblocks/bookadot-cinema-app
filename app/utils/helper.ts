export const shortenWalletAddress = (address: string, length = 4) => {
    return `${address.slice(0, length)}...${address.slice(-length)}`
}