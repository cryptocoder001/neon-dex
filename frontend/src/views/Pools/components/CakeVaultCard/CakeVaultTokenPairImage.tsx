import React from 'react'
import { TokenPairImage, ImageProps } from '@pancakeswap/uikit'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `https://raw.githubusercontent.com/Neon-Blockchain/token-icons/main/symbol/pcn.svg`

  return <img src={primaryTokenSrc} alt="pcn token" style={{ border: "1px solid blue", borderRadius: "50%", width: "60px", height: "60px" }} />
}

export default CakeVaultTokenPairImage;
