export interface SideBarItem{
    title: string;
    path: string;
    icon:any;
    subnav?: SideBarItem[] | undefined ;
    iconOpened: any;
    iconClosed: any;
}