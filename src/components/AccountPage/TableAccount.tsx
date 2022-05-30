import firebase from "../../firebase/config";
import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import ReactPaginate from "react-paginate";

type Props = {};

const accountCollection = firebase.firestore().collection("account");
export const TableAccount: FC = (props: Props) => {
  const [account, setAccount] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;

  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setAccount.length / userPerPage);

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
      <table cellSpacing={0}>
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
          account
            ?.slice(pageVisited, pageVisited + userPerPage)
            .map((ac: any) => (
              <tr className="center">
                <td>{ac.username}</td>
                <td>{ac.name}</td>
                <td>{ac.phone}</td>
                <td>{ac.email}</td>
                <td>{ac.role}</td>
                <td>
                  {" "}
                  <span
                    className={`${
                      ac.status === "Hoạt động" ? "active" : "inactive"
                    }`}
                  >
                    <BsDot /> {ac.status}
                  </span>{" "}
                </td>
                <td className="update">
                  <Link to={`/updateAccount/${ac.id}`} key={ac.id}>
                    Cập nhật
                  </Link>
                </td>
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
};
