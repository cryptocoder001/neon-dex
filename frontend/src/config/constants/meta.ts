import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Neon Dex',
  description:
    'Neon Dex - A next evolution DeFi exchange on Neon Chain',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Neon Dex')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Neon Dex')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Neon Dex')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Neon Dex')}`,
      }
    case '/pools':
      return {
        title: `${t('Staking')} | ${t('Neon Dex')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Neon Dex')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Neon Dex')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Neon Dex')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Neon Dex')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Neon Dex')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Neon Dex')}`,
      }
    default:
      return null
  }
}
