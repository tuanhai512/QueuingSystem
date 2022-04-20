import firebase from '../../firebase/config';
import React, { FC, useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs';
import { Link } from 'react-router-dom';

type Props = {}

const reportCollection = firebase.firestore().collection("report");
export const TableReport:FC = (props: Props) => {
    const [service, setService] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    
  
    function getReport() {
        reportCollection.onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setService(item);
        setLoader(false);
      });
    }
    useEffect(() => {
        getReport();
      console.log(service);
    }, []);
  
    return (
      <>
        <table
        cellSpacing={0}>   
          <tr className="header">
            <th >Số thứ tự</th>
            <th>Tên dịch vụ</th>
            <th >Thời gian cấp</th>
            <th>Tình trạng</th>
            <th >Nguồn cấp</th>
          </tr>
          {loader === false &&
            service?.map((sc: any) => (      
                <tr className="center">
                  <td>{sc.id}</td>
                  <td>{sc.name}</td>
                  <td>{sc.time}</td>
                  <td> <span className={`${sc.status === "Hoạt động" ? "active" : "inactive"}`}><BsDot/>  {sc.status}</span> </td>
                  <td>{sc.source}</td>
                </tr>
           
            ))}
           
        </table>
      </>
    );
}

export {reportCollection}