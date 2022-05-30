import { Col, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { FC, useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import DateRange from "../ServicePage/DateTimePicker";
import SideBar from "../SideBar/SideBar";
import { TableDiary } from "./TableDiary";
import firebase from "../../firebase/config";

type Props = {};
const userCollection = firebase.firestore().collection("diary");
export const Diary: FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [diary, setDiary] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  const [filter, setFilter] = useState<any>();
  const notify = [
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
    {
      name: " Nguyễn Thị Thùy Dung",
      time: "12h20 ngày 30/11/2021",
    },
  ];
  const [value, setValue] = useState<string>("");

  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
  };
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;

  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setDiary.length / userPerPage);

  function getAccount() {
    userCollection.onSnapshot((querySnapshot: any) => {
      const item: any = [];
      querySnapshot.forEach((doc: any) => {
        item.push(doc.data());
      });
      setFilter(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getAccount();
  }, []);
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Cài đặt hệ thống{" "}
            <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Nhật ký hoạt động</span>
          <span>
            <span
              className="iconNotificationL"
              onClick={() => setOpen((open) => !open)}
            >
              <SvgNotification />
            </span>
            <div className={open ? "openN" : "closedN"}>
              <div className="openN_titleN">
                {" "}
                <h1>Thông báo </h1>
              </div>

              {notify.map((item, index) => {
                return (
                  <Col className="openN_contentN" key={index} span={24}>
                    <p className="openN_contentN--topN">
                      Người dùng:{item.name}
                    </p>
                    <p className="openN_contentN--bottomN">
                      Thời gian nhận số: {item.time}
                    </p>
                  </Col>
                );
              })}
            </div>
            <Link to="/account-user">
              <div className="facility_title-T">
                <AccountUserLeft />
              </div>
            </Link>{" "}
          </span>
        </div>
        <div className="facility_top">
          <div className="facility_top--title">
            <h1> Nhật ký hoạt động</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-timeR">
              <div className="facility_top--groupBtn-timeN_title">
                Chọn thời gian
              </div>
              <DateRange />
            </div>

            <div className="facility_top--groupBtn-searchD">
              <div className="facility_top--groupBtn-searchD_titleD">
                Từ khóa
              </div>
              <Input
                onChange={onChangeSearch}
                style={{ width: 400, height: 45, marginLeft: "220%" }}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">
            {filter ? (
              <>
                <table cellSpacing={0}>
                  <tr className="header">
                    <th>Tên đăng nhập</th>
                    <th>Thời gian hoạt động</th>
                    <th>IP thực hiện</th>
                    <th>Thao tác thực hiện</th>
                  </tr>
                  {loader === false &&
                    filter
                      ?.filter(
                        (fac: any) =>
                          fac.username.toLowerCase().includes(value) ||
                          fac.time.includes(value) ||
                          fac.address.toLowerCase().includes(value) ||
                          fac.action.toLowerCase().includes(value)
                      )
                      .map((d: any) => (
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
                    nextLabel={
                      <img alt="" src={require("../../assets/ArrowPngR.png")} />
                    }
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
            ) : (
              <TableDiary />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
