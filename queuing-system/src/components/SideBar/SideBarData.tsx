import { SideBarItem } from "./SideBarItem";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMore } from "react-icons/ai";
import {HiOutlineDesktopComputer} from "react-icons/hi";
import SvgMonitor from './../../assets/iconComponent/monitor';
import SvgDashboard from '../../assets/iconComponent/dashboard';
import SvgNumber from "../../assets/iconComponent/number";
import SvgReport from "../../assets/iconComponent/report";
import SvgService from './../../assets/iconComponent/service';
import SvgSetting from './../../assets/iconComponent/setting';

export const SideBarData: SideBarItem[] = [
    {
        title:'Dashboard',
        path:'/Dashboard',
        iconOpened:"",
        iconClosed:"",
        icon: <SvgDashboard/>,
       
    },
    {
        title:'Thiết bị',
        path:'/Facilities',
        iconOpened:"",
        iconClosed:"",
        icon:<SvgMonitor/>,
       
    }, 
    {
        title:'Dịch vụ',
        path:'/Service',
        iconOpened:"",
        iconClosed:"",
        icon: <SvgService/>,
       
    }
    , 
    {
        title:'Cấp số',
        path:'/Number',
        iconOpened:"",
        iconClosed:"",
        icon: <SvgNumber/>
    },
        
    {
        title:'Báo cáo',
        path:'/Report',
        iconOpened:"",
        iconClosed:"",
        icon: <SvgReport/>,
       
    },
    {
        title:'Cài đặt hệ thống',
        path:'#',
        iconOpened:<AiOutlineMore/>,
        iconClosed:<AiOutlineMore/>,
        icon: <SvgSetting/>,
        subnav:[
           {
            title:'Quản lý vai trò',
            path:'/Role',
            iconOpened:"",
            iconClosed:"",
            icon: <MdOutlineDashboard/>,
           },
           {
            title:'Quản lý tài khoản',
            path:'/Account',
            iconOpened:"",
            iconClosed:"",
            icon: <MdOutlineDashboard/>,
           },
           {
            title:'Nhật ký người dùng',
            path:'/User',
            iconOpened:"",
            iconClosed:"",
            icon: <MdOutlineDashboard/>,
           },

        ],
    }
]