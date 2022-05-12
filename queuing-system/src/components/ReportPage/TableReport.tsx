import firebase from "../../firebase/config";
import React, { FC, useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

type Props = {};

const reportCollection = firebase.firestore().collection("report");
export const TableReport: FC = (props: Props) => {
  const [report, setReport] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);

  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setReport.length / userPerPage);

  console.log(pageCount);
  function getReport() {
    reportCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setReport(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getReport();
    console.log(report);
  }, []);

  return (
    <>
      <table cellSpacing={0}>
        <tr className="header">
          <th>Số thứ tự</th>
          <th>Tên dịch vụ</th>
          <th>Thời gian cấp</th>
          <th>Tình trạng</th>
          <th>Nguồn cấp</th>
        </tr>
        {loader === false &&
          report
            ?.slice(pageVisited, pageVisited + userPerPage)
            .map((sc: any) => (
              <tr className="center">
                <td>{sc.id}</td>
                <td>{sc.name}</td>
                <td>{sc.time}</td>
                <span
                  className={`${
                    sc.status === "Đang thực hiện"
                      ? "doing"
                      : sc.status === "Vắng"
                      ? "cancel"
                      : "done"
                  }`}
                >
                  <BsDot /> {sc.status}
                </span>
                <td>{sc.source}</td>
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

export { reportCollection };
