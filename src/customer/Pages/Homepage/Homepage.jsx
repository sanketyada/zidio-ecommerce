import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarosel from '../../components/HomeSectionCard/HomeSectionCarosel'
import { Mens_Kurta } from '../../Data/Mens_Kurta.js';
import { Gouns } from '../../Data/Gouns.js';
import { Avengers } from '../../Data/Avengers.js';
import { DC} from '../../Data/DC.js';
import { SpiderMan} from '../../Data/SpiderMan.js';
import './home.css'

function Homepage() {
  return (
    <div>
      <MainCarosel/>
      <div className=' space-y-10 py-20 flex-col  justify-center px-5 lg:px-10'>
        {/* <HomeSectionCarosel data={Mens_Kurta} sectionName={"Section1"}/> */}
        {/* <HomeSectionCarosel data={Gouns} sectionName={"Section2"}/> */}
        <HomeSectionCarosel data={Avengers} sectionName={"Avengers T-shirts"}/>
        <HomeSectionCarosel data={DC} sectionName={"Detective Comics T-shirts"}/>
        <HomeSectionCarosel data={SpiderMan} sectionName={"SpiderMan Comics T-shirts"}/>
      </div>
    </div>
  )
}

export default Homepage
