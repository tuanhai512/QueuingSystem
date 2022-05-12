import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../firebase/config'
import { BsDot } from 'react-icons/bs';
type Props = {}

const roleCollection = firebase.firestore().collection("role");
export const TableRole:FC = (props: Props) => {
    const [role, setRole] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    
  
    function getRole() {
        roleCollection.onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          item.push(doc.data());
        });
        setRole(item);
        setLoader(false);
      });
    }
    useEffect(() => {
        getRole();
      console.log(role);
    }, []);
  
    return (
      <>
        <table
        cellSpacing={0}>   
          <tr className="header">
            <th>Tên vai trò</th>
            <th>Số người dùng</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
          {loader === false &&
            role?.map((r: any) => (      
                <tr className="center">
                  <td>{r.name}</td>
                  <td>{r.userUsed}</td>
                  <td>{r.description}</td>
                  <td  className="update">
                    <Link to={`/updateRole/${r.id}`} key={r.id}>
                      Cập nhật
                    </Link>
                  </td>
                </tr>
           
            ))}
           
        </table>
      </>
    );
}

