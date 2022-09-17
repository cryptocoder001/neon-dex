import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  max-width: 436px;
  width: 100%;
  z-index: 1;
  border-radius: 0px;
  background: linear-gradient(33.28deg, #12111C 0.32%, #181726 89.33%);
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
