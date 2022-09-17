import { ChainId } from '@pancakeswap/sdk';
import tokens from './tokens';
import { FarmConfig } from './types';
import ContractAddress from './contracts';

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
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
    lpSymbol: 'USDT-NEON LP',
    lpAddresses: {
      [ChainId.MAINNET]: String(ContractAddress.neonBusdLp[ChainId.MAINNET]),
      [ChainId.TESTNET]: String(ContractAddress.neonBusdLp[ChainId.TESTNET]),
    },
    token: tokens.busd,
    quoteToken: tokens.wneon,
  }
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */

]

export default farms
