import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import firebase from "../../firebase/config";
import ReactPaginate from "react-paginate";

type Props = {};
const numberCollection = firebase.firestore().collection("number");
export const TableNumber: FC = (props: Props) => {
  const [number, setNumber] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setNumber.length / userPerPage);

  console.log(pageCount);

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
      <table cellSpacing={0}>
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
          number
            ?.slice(pageVisited, pageVisited + userPerPage)
            .map((num: any) => (
              <tr className="center">
                <td>{num.id}</td>
                <td>{num.name}</td>
                <td>{num.service}</td>
                <td>{num.time}</td>
                <td>{num.limit}</td>
                <td>
                  {" "}
                  <span
                    className={`${
                      num.status === "Đã sử dụng"
                        ? "doing"
                        : num.status === "Bỏ qua"
                        ? "cancel"
                        : "done"
                    }`}
                  >
                    <BsDot /> {num.status}
                  </span>
                </td>
                <td>{num.source}</td>
                <td className="detail">
                  <Link to={`/detailNumber/${num.id}`} key={num.id}>
                    Chi tiết
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
          activeClassName={"active"}
        />
      </div>
    </>
  );
};
export { numberCollection };
