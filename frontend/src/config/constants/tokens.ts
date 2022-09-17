import { ChainId, Token } from '@pancakeswap/sdk';
import ContractAddress from './contracts';

export const PCN: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    ContractAddress.pcn[ChainId.MAINNET],
    18,
    'PCN',
    'Popcorn Token',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    ContractAddress.pcn[ChainId.TESTNET],
    18,
    'PCN',
    'Popcorn Token',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    ContractAddress.busd[ChainId.MAINNET],
    18,
    'USDT',
    'Pegged USDT',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    ContractAddress.busd[ChainId.TESTNET],
    18,
    'USDT',
    'Pegged USDT',
  ),
}

export const WNEON = new Token(ChainId.MAINNET, ContractAddress.wneon[ChainId.MAINNET], 18, 'WNEON', 'Wrapped NEON')


const tokens = {
  neon: {
    symbol: 'NEON',
    projectLink: 'https://neonlink.io/',
  },
  pcn: {
    symbol: 'PCN',
    address: {
      [ChainId.MAINNET]: ContractAddress.pcn[ChainId.MAINNET],
      [ChainId.TESTNET]: ContractAddress.pcn[ChainId.TESTNET],
    },
    decimals: 18,
    projectLink: 'https://dex.neonlink.io/',
  },
  wneon: {
    symbol: 'WNEON',
    address: {
      [ChainId.MAINNET]: ContractAddress.wneon[ChainId.MAINNET],
      [ChainId.TESTNET]: ContractAddress.wneon[ChainId.TESTNET],
    },
    decimals: 18,
    projectLink: 'https://dex.neonlink.io/',
  },
  busd: {
    symbol: 'USDT',
    address: {
      [ChainId.MAINNET]: ContractAddress.busd[ChainId.MAINNET],
      [ChainId.TESTNET]: ContractAddress.busd[ChainId.TESTNET],
    },
    decimals: 18,
    projectLink: 'https://tether.io',
  },
  corn: {
    symbol: 'CORN',
    address: {
      [ChainId.MAINNET]: ContractAddress.corn[ChainId.MAINNET],
      [ChainId.TESTNET]: ContractAddress.corn[ChainId.TESTNET],
    },
    decimals: 18,
    projectLink: 'https://dex.neonlink.io/',
  }
}

export default tokens
