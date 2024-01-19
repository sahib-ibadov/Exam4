import React from 'react'
import Cards from '../Companents/Cards'
import Section1 from '../Companents/Section1'
import Section3 from '../Companents/Section3'
import Section4 from '../Companents/Section4'
import {Helmet} from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Allahverdi-Sahib-Ismayıl-Orxan</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Section1/>
        <Cards/>
        <Section3/>
        <Section4/>
      
    </div>
  )
}

export default Home
