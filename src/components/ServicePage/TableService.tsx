import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./../../firebase/config";
import { BsDot } from "react-icons/bs";
import ReactPaginate from "react-paginate";

type Props = {};

const serviceCollection = firebase.firestore().collection("service");
export const TableService: FC = (props: Props) => {
  const [service, setService] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setService.length / userPerPage);

  function getService() {
    serviceCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setService(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getService();
    console.log(service);
  }, []);

  return (
    <>
      <table cellSpacing={0}>
        <tr className="header">
          <th>Mã dịch vụ</th>
          <th>Tên dịch vụ</th>
          <th>Mô tả</th>
          <th>Trạng thái hoat động</th>
          <th></th>
          <th></th>
        </tr>
        {loader === false &&
          service
            ?.slice(pageVisited, pageVisited + userPerPage)
            .map((sc: any) => (
              <tr className="center">
                <td>KIO_0{sc.id}</td>
                <td>{sc.name}</td>
                <td>{sc.description}</td>
                <td>
                  {" "}
                  <span
                    className={`${
                      sc.status === "Hoạt động" ? "active" : "inactive"
                    }`}
                  >
                    <BsDot /> {sc.status}
                  </span>{" "}
                </td>

                <td className="detail">
                  <Link to={`/detailService/${sc.id}`} key={sc.id}>
                    Chi tiết
                  </Link>
                </td>
                <td className="update">
                  <Link to={`/updateService/${sc.id}`} key={sc.id}>
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
