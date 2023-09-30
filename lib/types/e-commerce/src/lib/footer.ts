import { NavigationItem } from "./common";

export type FooterItem = NavigationItem

export interface FooterProps {
    items: FooterItem[];
    brand: string
}
