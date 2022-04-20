import firebase from '../../firebase/config';
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';

type Props = {}

const userCollection = firebase.firestore().collection("diary");
export const TableDiary:FC = (props: Props) => {
    const [diary, setDiary] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    
  
    function getAccount() {
        userCollection.onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setDiary(item);
        setLoader(false);
      });
    }
    useEffect(() => {
        getAccount();
      console.log(diary);
    }, []);
  
    return (
      <>
        <table
        cellSpacing={0}>   
          <tr className="header">
            <th>Tên đăng nhập</th>
            <th>Thời gian hoạt động</th>
            <th>IP thực hiện</th>
            <th>Thao tác thực hiện</th>
          
          
          </tr>
          {loader === false &&
            diary?.map((d: any) => (      
                <tr className="center">
                    <td>{d.username}</td>
                  <td>{d.time}</td>
                  <td>{d.address}</td>
                  <td>{d.action}</td>
             
                
                 
                </tr>
           
            ))}
           
        </table>
      </>
    );
}

