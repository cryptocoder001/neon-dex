import { ChainId } from '@pancakeswap/sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://testnet.neonlink.io',
  [ChainId.TESTNET]: 'https://testnet.neonlink.io',
}

export default NETWORK_URLS
