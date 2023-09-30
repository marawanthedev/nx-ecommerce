export interface NavItem {
    name: string;
    link: string;
}

export interface NavbarProps {
    items: NavItem[];
    brand: string
}
