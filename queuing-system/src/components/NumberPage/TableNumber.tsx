import React, { FC, useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsDot } from 'react-icons/bs';
import firebase from "../../firebase/config";


type Props = {}
const numberCollection = firebase.firestore().collection("number");
export const TableNumber:FC = (props: Props) => {
    const [number, setNumber] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    function getFacility() {
        numberCollection.onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setNumber(item);
        setLoader(false);
      });
    }
    useEffect(() => {
      getFacility();
      console.log(number);
    }, []);

  return (
      
         <>
      <table
      cellSpacing={0}>   
        <tr className="header">
          <th>STT</th>
          <th>Tên Khách hàng</th>
          <th>Tên dịch vụ</th>
          <th>Thời gian cấp</th>
          <th>Hạng sử dụng</th>
          <th>Trạng thái</th>
          <th>Nguồn cấp</th>
          <th></th>
        </tr>
        {loader === false &&
          number?.map((num: any) => (      
              <tr className="center">
                <td>{num.id}</td>
                 <td>{num.name}</td>
                <td>{num.service}</td> 
                <td>
                  {num.time}
               
                </td> 
                <td>
                  {num.limit}
               
                </td>   
                <td>{num.status}</td>
                <td>{num.source}</td>
                <td className="detail">
                  <Link to={`/detailFacility/${num.id}`} key={num.id}>
                    Chi tiết
                  </Link>
                </td> 
              </tr>
         
          ))}
         
      </table>
    </>
 
   
  );
};
export {numberCollection}

