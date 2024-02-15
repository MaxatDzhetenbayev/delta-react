import {Outlet} from 'react-router-dom'
import {Header} from '../components/Header/Header'
export const Wrapper = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}
