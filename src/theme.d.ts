import { ITheme } from '@theme/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ITheme {}
}
