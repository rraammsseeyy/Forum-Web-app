import React from 'react'
import AdsDisplay from './AdsDisplay'
import Landing from './Landing'
import MarqueeImages from './MarqueeImages'
import Socials from './Socials'
import { TelegramAds } from './TelegramAds'

const HomePage = () => {
  return (
    <div>
        
        <Landing />
        <MarqueeImages  />
        <Socials  />
        <TelegramAds  />
          
        
    </div>
  )
}

export default HomePage