const getTokenLogoURL = (address: string) =>
  `https://raw.githubusercontent.com/Neon-Blockchain/token-icons/main/icons/${address.toLocaleLowerCase()}.svg`

export default getTokenLogoURL
