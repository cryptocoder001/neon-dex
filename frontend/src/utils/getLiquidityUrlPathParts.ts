// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
import { getWbnbAddress } from './addressHelpers';
import ContractAddress from '../config/constants/contracts';

const getLiquidityUrlPathParts = ({ quoteTokenAddress, tokenAddress }) => {
  const chainId = ContractAddress.networkId;
  const wBNBAddressString = getWbnbAddress()
  const quoteTokenAddressString: string = quoteTokenAddress ? quoteTokenAddress[chainId] : null
  const tokenAddressString: string = tokenAddress ? tokenAddress[chainId] : null
  const firstPart =
    !quoteTokenAddressString || quoteTokenAddressString === wBNBAddressString ? 'NEON' : quoteTokenAddressString
  const secondPart = !tokenAddressString || tokenAddressString === wBNBAddressString ? 'NEON' : tokenAddressString
  return `${firstPart}/${secondPart}`
}

export default getLiquidityUrlPathParts
