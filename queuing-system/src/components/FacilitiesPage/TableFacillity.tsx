import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/config";
import './facilities.scss';
import { BsDot } from "react-icons/bs";
type Props = {};

const devicesCollection = firebase.firestore().collection("facilities");
export const TableFacillity: FC = (props: Props) => {
  const [facilities, setFacilities] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  

  function getFacility() {
    devicesCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setFacilities(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getFacility();
    console.log(facilities);
  }, []);

  return (
    <>
      <table
      cellSpacing={0}>   
        <tr className="header">
          <th >Mã Thiết Bị</th>
          <th >Tên Thiết Bị</th>
          <th>Địa chỉ IP</th>
          <th >Trạng thái hoat động</th>
          <th>Trạng thái kết nối</th>
          <th>Dịch vụ sử dụng</th>
          <th ></th>
          <th></th>
        </tr>
        {loader === false &&
          facilities?.map((fac: any) => (      
              <tr className="center">
                <td>KIO_0{fac.id}</td>
                <td>{fac.name}</td>
                <td>{fac.address}</td>
                <td> <span className={`${fac.active === "Hoạt động" ? "active" : "inactive"}`}><BsDot/>  {fac.active}</span> </td>
                <td> <span className={`${fac.connect === "Kết nối" ? "active" : "inactive"}`}><BsDot/>{fac.connect}</span></td>
                <td>
                  {fac.service}
                  <br />
                  <a href="#">Xem thêm</a>
                </td>
                <td className="detail">
                  <Link to={`/detailFacility/${fac.id}`} key={fac.id}>
                    Chi tiết
                  </Link>
                </td>
                <td  className="update">
                  <Link to={`/updateFacility/${fac.id}`} key={fac.id}>
                    Cập nhật
                  </Link>
                </td>
              </tr>
         
          ))}
         
      </table>
    </>
  );
};

export {devicesCollection}
