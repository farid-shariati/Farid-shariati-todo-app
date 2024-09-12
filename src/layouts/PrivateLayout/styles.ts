import { Stack, styled } from '@mui/material'

export const PrivateLayoutContainerStyled = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'center',
}))

export const ContentStyled = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  borderTopRightRadius: 40,
  borderBottomRightRadius: 40,
  padding: 15,
}))

export const PrivateLayoutMainStackStyled = styled(Stack)(
  ({ theme, isMobile }: { theme?: any; isMobile: boolean }) =>
    isMobile
      ? {
          padding: 10,
          // position: 'relative',
          width: '100%',
          height: '100%',
        }
      : {
          borderRadius: 40,
          boxShadow:
            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
          flexDirection: 'row',
          height: 650,
          width: 733,
          [theme.breakpoints.down('md')]: {
            width: 633,
          },
          [theme.breakpoints.down('sm')]: {
            width: 333,
          },
        },
)
