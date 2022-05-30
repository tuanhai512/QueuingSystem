import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IModelCardProps } from "./CardItem";
import './CardModel.scss'

export const CardModal = (props: IModelCardProps) => {
    const percent = props.percent;
    const percentBigColor = props.percentBigColor;
    const percentSmallColor= props.percentSmallColor;
  
    const icon = props.icon;
    const iconColor = {filter : `${props.iconColor}` }; 
  
    const count= props.count;
    const title= props.title;
    const  mainColor= {color : `${props.mainColor}` };
  
    const itemActiveCount= props.itemActiveCount;
    const itemActiveTitle= props.itemActiveTitle;
    const itemActiveColor= {color : `${props.itemActiveColor}`};
           
  
    const itemInactiveCount= props.itemInactiveCount;
    const itemInactiveTitle= props.itemInactiveTitle;
    const itemInactiveColor= {color : `${props.itemInactiveColor}`};
  return (
    <div className='model'>
    <div className='model__L'>
      <div className='model__L--chart'>
        <CircularProgressbar className='model__L--chart-B' 
                              value={percent} text={`${percent}%`} 
                              strokeWidth={5}
                              styles={{path:{stroke:`${percentBigColor}`},
                                      trail:{stroke:'#EAEAEC'},
                                      text:{stroke:"#535261",fontFamily: 'Nunito',fontSize:'18px',lineHeight:'24px',fontWeight:'700',fontStyle:'normal'}}} />
        <CircularProgressbar className='model__L--chart-S' 
                              value={100-percent}  
                              strokeWidth={5}
                              styles={buildStyles({pathColor: `${percentSmallColor}`,trailColor: '#EAEAEC'})} />
      </div>
      <div className='model__L--content'>
          <div className='model__L--content-count'>
            <span>{count}</span>
          </div>
          <div className='model__L--content-title'>
              <div className='model__L--content-title-icon'>
                <img src={require(`../../../assets/${icon}.png`)}
                className='model__L--content-title-icon'
                style={iconColor}
                  alt=""/>
              </div>
              <div className='model__L--content-title-name'style={mainColor} >
                <span>{title}</span>
              </div>
          </div>
      </div>
    </div>
    <div className='model__R'>
        <div className='model__R--content'>
          <div className='model__R--content-icon' style={itemActiveColor}>
            <span>.</span>
          </div>
          <div className='model__R--content-title'>
            <span>{itemActiveTitle}</span>
          </div>
          <div className='model__R--content-count' style={mainColor}>
            <span>{itemActiveCount}</span>
          </div>
        </div>
        <div className='model__R--content'>
          <div className='model__R--content-icon' style={itemInactiveColor}>
            <span>.</span>
          </div>
          <div className='model__R--content-title'>
            <span>{itemInactiveTitle}</span>
          </div>
          <div className='model__R--content-count' style={mainColor}>
            <span>{itemInactiveCount}</span>
          </div>
        </div>
        
    </div>
  </div>
  );
};
