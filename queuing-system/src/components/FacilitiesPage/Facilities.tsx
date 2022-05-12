import React, { FC, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { Col, Select } from "antd";
import { Option } from "antd/lib/mentions";
import "./facilities.scss";
import { Input } from "antd";
import { AiFillPlusSquare } from "react-icons/ai";
import { TableFacillity } from "./TableFacillity";
import { Link } from "react-router-dom";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";
import firebase from "../../firebase/config";
import ReactPaginate from "react-paginate";
import { BsDot } from "react-icons/bs";

const devicesCollection = firebase.firestore().collection("facilities");
export const Facilities: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<[]>();
  //const [filterConnect, setFilterConnect] = useState<[]>();

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
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const pageVisited = pageNumber * userPerPage;
  const [loader, setLoader] = useState<boolean>(true);
  const [value, setValue] = useState<string>("");
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setFilter.length / userPerPage);

  useEffect(() => {
    // setFilter(filter)
    // getFacility();
    getFilterConnect();
    getFilterDisconnect();
    getFilter();
    getFilterInActive();
  }, []);

  function getFilterConnect() {
    devicesCollection
      .orderBy("connect")
      .startAt("Kết nối")
      .endAt("Kết nối")
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
  function getFilterDisconnect() {
    devicesCollection
      .orderBy("connect")
      .startAt("Mất kết nối")
      .endAt("Mất kết nối")
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

  function getFilter() {
    devicesCollection
      .orderBy("active")
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
    devicesCollection
      .orderBy("active")
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
  function getFacility() {
    devicesCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });

      setFilter(item);
      setLoader(false);
    });
  }

  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
  };

  const onChangeConnect = (e: any) => {
    if (e.value === "connect") {
      getFilterConnect();
      console.log(setFilter);
    } else if (e.value === "disconnect") {
      getFilterDisconnect();
    } else {
      getFacility();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  const onChange = (e: any) => {
    if (e.value === "active") {
      getFilter();
      console.log(setFilter);
    } else if (e.value === "inactive") {
      getFilterInActive();
    } else {
      getFacility();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  console.log(filter);
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Thiết bị <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Danh sách thiết bị</span>

          <span>
            <span
              className="iconNotificationN"
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
            <h1> Danh sách thiết bị</h1>
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

            <div className="facility_top--groupBtn-connect">
              <div className="facility_top--groupBtn-connect_title">
                Trạng thái kết nối
              </div>
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                defaultValue={{ value: "all" }}
                style={{ width: 400, height: 45, marginLeft: "50px" }}
                onChange={onChangeConnect}
              >
                <Option value="all">Tất cả</Option>
                <Option value="connect">Kết nối</Option>
                <Option value="disconnect">Mất kết nối</Option>
              </Select>
            </div>

            <div className="facility_top--groupBtn-search">
              <div className="facility_top--groupBtn-search_title">Từ khóa</div>
              <Input
                style={{ width: 400, height: 45, marginLeft: "55%" }}
                onChange={onChangeSearch}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">
            {filter ? (
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
                    filter
                      .filter(
                        (fac: any) =>
                          fac.name?.toLowerCase()?.includes(value) ||
                          fac.id?.includes(value) ||
                          fac.address?.includes(value)
                      )
                      ?.slice(pageVisited, pageVisited + userPerPage)
                      .map((fac: any, index: any) => (
                        <tr className="center" key={index}>
                          <td>KIO_0{fac.id}</td>
                          <td>{fac.name}</td>
                          <td>{fac.address}</td>
                          <td>
                            {" "}
                            <span
                              className={`${
                                fac.active === "Hoạt động"
                                  ? "active"
                                  : "inactive"
                              }`}
                            >
                              <BsDot /> {fac.active}
                            </span>{" "}
                          </td>
                          <td>
                            {" "}
                            <span
                              className={`${
                                fac.connect === "Kết nối"
                                  ? "active"
                                  : "inactive"
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
                            <Link to={`/detailFacility/${fac.id}`} key={fac.id}>
                              Chi tiết
                            </Link>
                          </td>
                          <td className="update">
                            <Link to={`/updateFacility/${fac.id}`} key={fac.id}>
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
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    onPageChange={handlePageClick}
                    activeClassName={"active"}
                  />
                </div>
              </>
            ) : (
              <TableFacillity />
            )}
          </div>
        </div>
        <Link to="/add-Facility" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/add-Facility">Thêm thiết bị</a>
        </Link>
      </div>
    </>
  );
};
