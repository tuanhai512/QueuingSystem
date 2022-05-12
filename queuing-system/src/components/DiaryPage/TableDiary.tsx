import firebase from '../../firebase/config';
import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

type Props = {}

const userCollection = firebase.firestore().collection("diary");
export const TableDiary:FC = (props: Props) => {
    const [diary, setDiary] = useState<[]>();
    const [loader, setLoader] = useState<boolean>(true);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const userPerPage = 9;
    const pageVisited = pageNumber * userPerPage;
  
    const handlePageClick = (data: any) => {
      setPageNumber(data.selected);
      console.log(setPageNumber(data.selected));
    };
    const pageCount = Math.ceil(setDiary.length / userPerPage);
  
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
        <div className="pagination">
        <ReactPaginate
          pageCount={10}
          previousLabel={
            <img alt="" src={require("../../assets/ArrowPngL.png")} />
          }
          nextLabel={<img alt="" src={require("../../assets/ArrowPngR.png")} />}
          breakLabel={"..."}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          onPageChange={handlePageClick}
          activeClassName={'active'}
        />
      </div>
      </>
    );
}

