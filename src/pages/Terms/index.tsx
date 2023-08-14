import React from 'react'
import TermsHero from './components/TermsHero'
import TextSection from './components/TextSection'
import TermsGetIntouch from './components/TermsGetIntouch'

type Props = {}

const Terms = (props: Props) => {
  return (
    <div>
      <TermsHero/>
      <TextSection/>
      <TermsGetIntouch/>
    </div>
  )
}

export default Terms