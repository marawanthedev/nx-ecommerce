import { NavigationItem } from "./common";

export type NavItem = NavigationItem

export interface NavbarProps {
    items: NavItem[];
    brand: string
}
