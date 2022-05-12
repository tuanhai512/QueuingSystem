import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/config";
import "./facilities.scss";
import { BsDot } from "react-icons/bs";
import ReactPaginate from "react-paginate";

const devicesCollection = firebase.firestore().collection("facilities");

export const TableFacillity: FC = () => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
 
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

  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setFacilities.length / userPerPage);

  console.log(pageCount);
  return (
    <>
      <table cellSpacing={0}>
        <tr className="header">
          <th>Mã Thiết Bị</th>
          <th>Tên Thiết Bị</th>
          <th>Địa chỉ IP</th>
          <th>Trạng thái hoat động</th>
          <th>Trạng thái kết nối</th>
          <th>Dịch vụ sử dụng</th>
          <th></th>
          <th></th>
        </tr>
        {loader === false &&
          facilities
            ?.slice(pageVisited, pageVisited + userPerPage)
            .map((fac: any) => (
              <tr className="center">
                <td>KIO_0{fac.id}</td>
                <td>{fac.name}</td>
                <td>{fac.address}</td>
                <td>
                  {" "}
                  <span
                    className={`${
                      fac.active === "Hoạt động" ? "active" : "inactive"
                    }`}
                  >
                    <BsDot /> {fac.active}
                  </span>{" "}
                </td>
                <td>
                  {" "}
                  <span
                    className={`${
                      fac.connect === "Kết nối" ? "active" : "inactive"
                    }`}
                  >
                    <BsDot />
                    {fac.connect}
                  </span>
                </td>
                <td>
                  {fac.service}
                  <br />
                  <a href="#">Xem thêm</a>
                </td>
                <td className="detail">
                  <Link to={`/detailFacility/${fac.doc}`}>Chi tiết</Link>
                </td>
                <td className="update">
                  <Link to={`/updateFacility/${fac.doc}`}>Cập nhật</Link>
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
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          onPageChange={handlePageClick}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export { devicesCollection };
