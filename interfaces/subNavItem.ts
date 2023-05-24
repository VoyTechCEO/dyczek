export default interface SubNavItem {
  name: string;
  link?: string;
  dropdown?: SubNavItem[];
}
