import { ITheme } from "./utils/types";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
