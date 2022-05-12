import React, { FC, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TableAccount } from "./TableAccount";
import { Col, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import "./account.scss";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";
import firebase from "../../firebase/config";
import ReactPaginate from "react-paginate";
import { BsDot } from "react-icons/bs";

const accountCollection = firebase.firestore().collection("account");

export const Account: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
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


  //const [search, setSearch] = useState<any>([]);
  const [value, setValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [account, setAccount] = useState<[]>();
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setAccount.length / userPerPage);

  const onChangeSearch = (e: any) => {
    setValue(e.target.value)
  }
  function getFilter() {
    accountCollection
      .orderBy("status")
      .startAt("Hoạt động")
      .endAt("Hoạt động")
      .onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          item.push(doc.data());
        });
        setFilter(item);
        setLoader(false);
      });
  }
  function getFilterInActive() {
    accountCollection
      .orderBy("status")
      .startAt("Ngưng hoạt động")
      .endAt("Ngưng hoạt động")
      .onSnapshot((querySnapshot) => {
        const item: any = [];
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          item.push(doc.data());
        });
        setFilter(item);
        setLoader(false);
      });
  }

  function getService() {
    accountCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setFilter(item);
      setLoader(false);
    });
  }

  useEffect(() => {
    getFilter();
    getFilterInActive();
    getService();
    // getData();
  }, []);

  const onChange = (e: any) => {
    if (e.value === "all") {
      getService();

      console.log(setFilter);
    } else if (e.value === "active") {
      getFilter();
    } else {
      getFilterInActive();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Cài đặt hệ thống{" "}
            <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Quản lý tài khoản</span>
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
            <h1> Danh sách tài khoản</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-active">
              <div className="facility_top--groupBtn-active_title">
                Trạng thái hoạt động
              </div>
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                defaultValue={{ value: "all" }}
                style={{ width: 400, height: 45 }}
                onChange={onChange}
              >
                <Option value="all">Tất cả</Option>
                <Option value="active">Hoạt động</Option>
                <Option value="inactive">Ngưng hoạt động</Option>
              </Select>
            </div>

            <div className="facility_top--groupBtn-searchA">
              <div className="facility_top--groupBtn-searchA_titleA">
                Từ khóa
              </div>
              <Input
              onChange={onChangeSearch}
                style={{ width: 400, height: 45, marginLeft: "200%" }}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">

            {filter ?  (
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
                    filter.filter(
                      (fac: any) =>
                        fac.username?.toLowerCase()?.includes(value) ||
                        fac.phone?.includes(value) ||
                        fac.email?.toLowerCase()?.includes(value) ||
                        fac.role?.toLowerCase()?.includes(value) ||
                        fac.name?.toLowerCase()?.includes(value) 
                    )
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
                                ac.status === "Hoạt động"
                                  ? "active"
                                  : "inactive"
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
              <TableAccount />
            )}
          </div>
        </div>
        <Link to="/addAccount" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a>Thêm tài khoản</a>
        </Link>
      </div>
    </>
  );
};
