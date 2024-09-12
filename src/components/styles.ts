// import { BottomNavigationAction, Box, Stack, styled } from '@mui/material'

// export const SideMenuStackStyled = styled(Stack)(
//   ({ theme }: { theme: any }) => ({
//     borderTopLeftRadius: 40,
//     borderBottomLeftRadius: 40,
//     width: 300,
//     overflowY: 'auto',
//     overflowX: 'hidden',
//     borderRight: '1px solid',
//     borderRightColor: 'lightGray',
//     [theme.breakpoints.down('md')]: {
//       width: 233,
//     },
//   }),
// )

// export const SideMenuItemsStyled = styled(Stack)(() => ({}))
// export const SideMenuItemStyled = styled(Stack)(
//   ({ isSelected, theme }: { isSelected: boolean; theme?: any }) => ({
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: 8,
//     marginTop: 20,
//     background: isSelected ? theme.palette.primary[50] : 'transparent',
//     color: theme.palette.primary[600],
//     borderLeft: isSelected ? `5px solid ${theme.palette.primary[300]}` : 'none',
//     fontSize: 14,
//     cursor: 'pointer',
//     '&:hover': {
//       background: theme.palette.secondary[100],
//     },
//   }),
// )

// export const sideMenuIconStyles = {
//   width: 25,
//   height: 24,
//   mr: 2,
// }

// export const BottomStackMenuStyled = styled(Box)(() => ({
//   position: 'absolute',
//   background: 'red',
//   width: '100%',
// }))

// export const BottomNavigationActionStyled = styled(BottomNavigationAction)(
//   ({ isActive, theme }: { isActive: boolean; theme?: any }) => ({
//     color: isActive ? theme.palette.primary.main : theme.palette.secondary.main,
//   }),
// )

// export const SideMenuImageBoxStyled = styled(Box)(
//   ({ theme }: { theme: any }) => ({
//     padding: 20,
//     background: theme.palette.primary[50],
//   }),
// )

import { Stack, styled } from '@mui/material'

export const TodoStackStyled = styled(Stack)(() => ({
  // background: 'lightGray',
  width: '500px',
}))
