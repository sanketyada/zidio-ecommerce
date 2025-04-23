import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCard/HomeSectionCarosel'
import { Mens_Kurta } from '../../Data/Mens_Kurta.js';
import { Gouns } from '../../Data/Gouns.js';

function Homepage() {
  return (
    <div>
      <MainCarosel/>
      <div className=' space-y-10 py-20 flex-col  justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={Mens_Kurta} sectionName={"Section1"}/>
        <HomeSectionCarosel data={Gouns} sectionName={"Section2"}/>
      </div>
    </div>
  )
}

export default Homepage
