import React, { FC, useEffect, useState } from 'react'
import SideBar from './../SideBar/SideBar';
import { Button, Col, Form, Input, Select } from 'antd';
import { Row } from 'antd';
import { Option } from 'antd/lib/mentions';
import { devicesCollection } from './TableFacillity';

type Props = {}

export const UpdateFacility:FC =({}: Props) => {
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [service, setService] = useState<string>('default');
    const [connect, setConnect] = useState<string>("");
    const [active, setActive] = useState<string>("");
  
    const children:[] = [];
// for (let i = 0 ; i < serviceList.length; i++) {
//   children.push(<Option key={i. + i}>{i.toString(36) + i}</Option>);
// }
const options = [{ value: 'Khám tim mạch' }, { value: 'Khám sản phụ khoa' }, { value: 'Khám tai mũi họng' }, { value: 'Khám hô hấp' }];

    function createFacility(newData: any) {
      devicesCollection
        .doc()
        .set(newData)
        .catch((err) => {
          alert(err);
          console.log(err);
        });
    }
    const handleChange = (e: any) => {
      setType(e.value);
    };
  
    useEffect(() => {
      setActive("Hoạt động");
      setConnect("Kết nối");
    }, []);
  
    return (
      <>
        <SideBar />
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
          <div className="formAdd">
            <Row>
              <Col span={24}>
                <h1>Thông tin thiết bị</h1>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form>
                  <Form.Item>
                    <p>
                      Mã thiết bị<span>*</span>
                    </p>
                    <Input
                      type="id"
                      placeholder="id"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <p>
                      Tên thiết bị<span>*</span>
                    </p>
                    <Input
                      type="text"
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <p>
                      Địa chỉ IP <span>*</span>
                    </p>
                    <Input
                      type="text"
                      placeholder="address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Item>
                </Form>
              </Col>
              <Col span={12}>
                <Form>
                  <Form.Item>
                    <p>
                      Loại<span>*</span>
                    </p>
                    <Select
                      suffixIcon={<img src={require("../../assets/arrow.png")} />}
                      labelInValue
                      placeholder="Chọn loại thiết bị"
                      style={{ width: "520px", borderRadius: "15px" }}
                      onChange={(e) => handleChange(e)}
                    >
                      <Option value="1">Kiosk</Option>
                      <Option value="2">Kiosk2</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <p>
                      Tên đăng nhập<span>*</span>
                    </p>
                    <Input
                      type="text"
                      placeholder="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Item>
                  <Form.Item>
                    <p>
                      Mật khẩu<span>*</span>
                    </p>
                    <Input
                      type="text"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form.Item>
                  <p>
                    Dịch vụ sử dụng<span>*</span>
                  </p>
                  <Select
                    className="selectService"
                    mode="multiple"
                    placeholder="service"
                    defaultValue={options}
                    onChange={handleChange}
                    options={options}
                  />
                </Form.Item>
              </Col>
            </Row>
            <p>
              <span>*</span>Là thông tin bắt buộc
            </p>
          </div>
          <div className="formAdd_btnGroup"></div>
  
          <div className="formAdd_btnGroup-btnCancel">
            <Button className="formAdd_btnGroup-btnCancel--cancel">
              {" "}
              Hủy bỏ
            </Button>
          </div>
          <div className="formAdd_btnGroup-btnCreate">
            <Button
              className="formAdd_btnGroup-btnCreate--create"
              onClick={() => {
                createFacility({
                  name,
                  id,
                  type,
                  address,
                  password,
                  username,
                  service,
                  connect,
                  active,
                });
                alert("Thêm thành công");
              }}
            >
              Thêm thiết bị
            </Button>
          </div>
        </div>
      </>
    );
}

