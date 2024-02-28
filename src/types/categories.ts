interface CSSProperties {
    // color?: string;
    backgroundColor: string
  }
export type Category = {
    name: string;
    id?: number;
    icon_name: string;
    styles: CSSProperties
}