import LandingHeader from '../components/Home/LandingHeader'
import Navbar from '../components/Navbar'
import { hackthon } from '../State/Actions/hackthon'
import { useDispatch,useSelector } from 'react-redux'
import HackathonCards from '../components/Home/Cards'

export default function Home() {
  const dispatch = useDispatch();
  dispatch(hackthon());

  return (
    <>
      <Navbar />
      <LandingHeader />
      <HackathonCards />
    </>
  )
}
