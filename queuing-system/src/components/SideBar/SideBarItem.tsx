export interface SideBarItem{
    title: string;
    path: string;
    icon:any;
    subnav?: SideBarItem[];
}