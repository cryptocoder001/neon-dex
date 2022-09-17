import { ChainId } from '@pancakeswap/sdk';
import tokens from './tokens'
import { FarmConfig } from './types'
import ContractAddress from './contracts';

const priceHelperLps: FarmConfig[] = [
  /**
   * These LPs are just used to help with price calculation for MasterChef LPs (farms.ts).
   * This list is added to the MasterChefLps and passed to fetchFarm. The calls to get contract information about the token/quoteToken in the LP are still made.
   * The absense of a PID means the masterchef contract calls are skipped for this farm.
   * Prices are then fetched for all farms (masterchef + priceHelperLps).
   * Before storing to redux, farms without a PID are filtered out.
   */
  {
    pid: 1,
    lpSymbol: 'PCN-NEON LP',
    lpAddresses: {
      [ChainId.MAINNET]: String(ContractAddress.neonPcnLp[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.neonPcnLp[ChainId.TESTNET]),
    },
    token: tokens.pcn,
    quoteToken: tokens.wneon,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-NEON LP',
    lpAddresses: {
      [ChainId.MAINNET]: String(ContractAddress.neonBusdLp[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.neonBusdLp[ChainId.TESTNET]),
    },
    token: tokens.busd,
    quoteToken: tokens.wneon,
  },
]

export default priceHelperLps
