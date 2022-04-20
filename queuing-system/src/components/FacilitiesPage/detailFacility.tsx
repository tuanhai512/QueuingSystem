import React, { FC, useEffect, useState } from 'react'
import { devicesCollection } from './TableFacillity';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { Col, Form, Row } from 'antd';
import { AiFillPlusSquare } from 'react-icons/ai';


type Props = {}

export const DetailFacility:FC = (props: Props) => {
  
     
    
    return(
        <>
        <SideBar/>
        <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Thiết bị <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R">
            Danh sách thiết bị
            <img src={require("../../assets/arrowTitle.png")} alt="" />
          </span>
          <span className="facility_title-R"> Thêm mới thiết bị</span>
        </div>
        <div className='formDetail'>

<Row><Col span={24}> <h1>Thông tin thiết bị</h1></Col></Row>
        <Row>
            <Col span={12}> 
            <Form>
                <Form.Item>
                <p className='formDetail_title'>
                    Mã thiết bị
                  </p>
                  <p className='formDetail_content'>K0_01</p>
                </Form.Item>
                <Form.Item>
                <p className='formDetail_title'>
                    Tên thiết bị
                  </p>
                  <p className='formDetail_content'>Kiosk</p>
                </Form.Item>
                <Form.Item>
                <p className='formDetail_title'>
                    Địa chỉ IP
                  </p>
                  <p className='formDetail_content'>128.172.308</p>
                </Form.Item>
            </Form>
                </Col>
                <Col span={12}>
                <Form.Item>
                <p className='formDetail_title'>
                    Loại thiết bị
                  </p>
                  <p className='formDetail_content'>Kiosk</p>
                </Form.Item>
                <Form.Item>
                <p className='formDetail_title'>
                    Tên đăng nhập
                  </p>
                  <p className='formDetail_content'>Linhkyo011</p>
                </Form.Item>
                <Form.Item>
                <p className='formDetail_title'>
                    Mật khẩu
                  </p>
                  <p className='formDetail_content'>CMS</p>
                </Form.Item>
                </Col>
        </Row>
        <Row><Col span={24}>Dịch vụ sử dụng</Col>
        <Col span={24}>Khám tim mạch</Col>
        </Row>
       
        </div>
        <Link to="/updateFacility" className="facility_top--addBtn">
          <AiFillPlusSquare/>
            <a href="/updateFacility">Cập nhật thiết bị</a> 
            </Link>
        </div>

    </>
    )

  
}

