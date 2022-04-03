import { SideBarItem } from "./SideBarItem";
import { MdOutlineDashboard } from "react-icons/md";

export const SideBarData: SideBarItem[] = [
    {
        title:'Dashboard',
        path:'/Dashboard',
        icon: <MdOutlineDashboard/>,
        subnav:[],
    },
    {
        title:'Thiết bị',
        path:'/Facilities',
        icon: <MdOutlineDashboard/>,
        subnav:[],
    }, 
    {
        title:'Dịch vụ',
        path:'/Service',
        icon: <MdOutlineDashboard/>,
        subnav:[],
    }
    , 
    {
        title:'Cấp số',
        path:'/Number',
        icon: <MdOutlineDashboard/>,
        subnav:[],
    }, 
    {
        title:'Báo cáo',
        path:'/Report',
        icon: <MdOutlineDashboard/>,
        subnav:[],
    },
    {
        title:'Cài đặt hệ thống',
        path:'#',
        icon: <MdOutlineDashboard/>,
        subnav:[
           {
            title:'Quản lý vai trò',
            path:'/Role',
            icon: <MdOutlineDashboard/>,
           },
           {
            title:'Quản lý tài khoản',
            path:'/Account',
            icon: <MdOutlineDashboard/>,
           },
           {
            title:'Nhật ký người dùng',
            path:'/User',
            icon: <MdOutlineDashboard/>,
           },

        ],
    }
]