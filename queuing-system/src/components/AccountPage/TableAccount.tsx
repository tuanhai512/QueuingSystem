import firebase from '../../firebase/config';
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';

type Props = {}

const accountCollection = firebase.firestore().collection("account");
export const TableAccount:FC = (props: Props) => {
    const [account, setAccount] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    
  
    function getAccount() {
        accountCollection.onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setAccount(item);
        setLoader(false);
      });
    }
    useEffect(() => {
        getAccount();
      console.log(account);
    }, []);
  
    return (
      <>
        <table
        cellSpacing={0}>   
          <tr className="header">
            <th>Tên đăng nhập</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
          </tr>
          {loader === false &&
            account?.map((ac: any) => (      
                <tr className="center">
                    <td>{ac.username}</td>
                  <td>{ac.name}</td>
                  <td>{ac.phone}</td>
                  <td>{ac.email}</td>
                  <td>{ac.role}</td>
                  <td> <span className={`${ac.status === "Hoạt động" ? "active" : "inactive"}`}><BsDot/>  {ac.status}</span> </td>
                  <td  className="update">
                    <Link to={`/updateFacility/${ac.id}`} key={ac.id}>
                      Cập nhật
                    </Link>
                  </td>
                </tr>
           
            ))}
           
        </table>
      </>
    );
}

