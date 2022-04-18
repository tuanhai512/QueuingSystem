import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './CardModel.scss'
import { IModelHCardProps } from './CartItemHigher';

export const CardModalHigher = (props: IModelHCardProps) => {
    const percent = props.percent;
    const percentR = props.percentR;
    const percentBigColor = props.percentBigColor;
    const percentSmallColor= props.percentSmallColor;
    const percentSmallestColor= props.percentSmallestColor;

    const icon = props.icon;
    const iconColor = {filter : `${props.iconColor}` }; 
  
    const count= props.count;
    const title= props.title;
    const  mainColor= {color : `${props.mainColor}` };
           
    const itemWaitingCount= props.itemWaitingCount;
    const itemWaitingTitle= props.itemWaitingTitle;
    const itemWaitingColor= {color : `${props.itemWaitingColor}`};

    const itemUsedCount= props.itemUsedCount;
    const itemUsedTitle= props.itemUsedTitle;
    const itemUsedColor= {color : `${props.itemUsedColor}`};

    const itemCancelCount= props.itemCancelCount;
    const itemCancelTitle= props.itemCancelTitle;
    const itemCancelColor= {color : `${props.itemCancelColor}`};

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
        <CircularProgressbar className='model__L--chart-SL' 
                                value={100-percent-percentR}  
                                strokeWidth={5}
                                styles={buildStyles({pathColor: `${percentSmallestColor}`,trailColor: '#EAEAEC'})} />
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
          <div className='model__R--content-icon' style={itemWaitingColor}>
            <span>.</span>
          </div>
          <div className='model__R--content-title'>
            <span>{itemWaitingTitle}</span>
          </div>
          <div className='model__R--content-count' style={mainColor}>
            <span>{itemWaitingCount}</span>
          </div>
        </div>
        <div className='model__R--content'>
          <div className='model__R--content-icon' style={itemUsedColor}>
            <span>.</span>
          </div>
          <div className='model__R--content-title'>
            <span>{itemUsedTitle}</span>
          </div>
          <div className='model__R--content-count' style={mainColor}>
            <span>{itemUsedCount}</span>
          </div>
        </div>
        <div className='model__R--content'>
          <div className='model__R--content-icon' style={itemCancelColor}>
            <span>.</span>
          </div>
          <div className='model__R--content-title'>
            <span>{itemCancelTitle}</span>
          </div>
          <div className='model__R--content-count' style={mainColor}>
            <span>{itemCancelCount}</span>
          </div>
        </div>
    </div>
  </div>
  );
};
