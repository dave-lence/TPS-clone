import './oldAndSlow.css'
import OldHero from './components/OldHero'
import OldStories from './components/OldStories'
import OldServices from './components/OldServices'
import GetInTouch from './components/GetInTouch'
import ItEquipments from './components/ItEquipments'
import OldTechnology from './components/OldTechnology'

export default function OldAndSlow() {
  return (
    <>
      <OldHero />
      <ItEquipments />
      <OldTechnology />
      <OldServices />
      <OldStories />
      <GetInTouch />
    </>
  )
}
