import { CSSProperties } from "react";
import { ReactNode } from "react";

export interface ItemBoxAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  children: ReactNode;
}
