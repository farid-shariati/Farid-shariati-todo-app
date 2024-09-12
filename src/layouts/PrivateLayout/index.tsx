import { Outlet } from 'react-router-dom'
import {
  ContentStyled,
  PrivateLayoutContainerStyled,
  PrivateLayoutMainStackStyled,
} from './styles'
import SideMenu from '../../components/SideMenu'
import { isBrowser, isMobile } from 'react-device-detect'
import BottomMenu from '../../components/BottomMenu'

const PrivateLayout = () => {
  return (
    <PrivateLayoutContainerStyled>
      <PrivateLayoutMainStackStyled isMobile={isMobile}>
        {isBrowser && <SideMenu />}
        <ContentStyled>
          <Outlet />
        </ContentStyled>
        {isMobile && <BottomMenu />}
      </PrivateLayoutMainStackStyled>
    </PrivateLayoutContainerStyled>
  )
}

export default PrivateLayout
