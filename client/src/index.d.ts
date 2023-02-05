import { type CreateStyled } from '@emotion/styled/types/index'
import { type ITheme } from './utils/types'
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}
declare module '@emotion/styled' {
  export * from '@emotion/styled/types/index'
  const customStyled: CreateStyled<App.Theme>
  export default customStyled
}
