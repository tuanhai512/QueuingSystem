import React, { FC, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { TableNumber } from "./TableNumber";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import Input from "antd/lib/input/Input";
import { Option } from "antd/lib/mentions";
import { Col, Select } from "antd";
import DateRange from "../ServicePage/DateTimePicker";
import "./number.scss";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";
import firebase from "../../firebase/config";
import ReactPaginate from "react-paginate";
import { BsDot } from "react-icons/bs";

type Props = {};
const numberCollection = firebase.firestore().collection("number");

export const Number: FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [filter, setFilter] = useState<[]>();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const userPerPage = 9;
  const [number, setNumber] = useState<[]>();
  const pageVisited = pageNumber * userPerPage;
  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setNumber.length / userPerPage);
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

  useEffect(() => {
    // setFilter(filter)
    // getFacility();
    getFilterSystem();
    getFilterKiosk();
    getFilterCancel();
    getFilterKr();
    getFilterKs();
    getFilterKt();
    getFilterUsed();
    getFilterWait();
  }, []);

  function getFilterSystem() {
    numberCollection
      .orderBy("source")
      .startAt("Hệ thống")
      .endAt("Hệ thống")
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
  function getFilterKiosk() {
    numberCollection
      .orderBy("source")
      .startAt("Kiosk")
      .endAt("Kiosk")
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

  function getFilterUsed() {
    numberCollection
      .orderBy("status")
      .startAt("Đã sử dụng")
      .endAt("Đã sử dụng")
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
  function getFilterCancel() {
    numberCollection
      .orderBy("status")
      .startAt("Bỏ qua")
      .endAt("Bỏ qua")
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
  function getFilterWait() {
    numberCollection
      .orderBy("status")
      .startAt("Đang chờ")
      .endAt("Đang chờ")
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
  function getFilterKs() {
    numberCollection
      .orderBy("service")
      .startAt("Khám sản - Phụ khoa")
      .endAt("Khám sản - Phụ khoa")
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

  function getFilterKr() {
    numberCollection
      .orderBy("service")
      .startAt("Khám răng hàm mặt")
      .endAt("Khám răng hàm mặt")
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

  function getFilterKt() {
    numberCollection
      .orderBy("service")
      .startAt("Khám tai mũi họng")
      .endAt("Khám tai mũi họng")
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
    numberCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setFilter(item);
      setLoader(false);
    });
  }

  const onChangeSource = (e: any) => {
    if (e.value === "2") {
      getFilterSystem();
      console.log(setFilter);
    } else if (e.value === "3") {
      getFilterKiosk();
    } else {
      getFacility();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  const onChangeService = (e: any) => {
    if (e.value === "2") {
      getFilterKs();
    } else if (e.value === "3") {
      getFilterKr();
    } else if (e.value === "4") {
      getFilterKt();
    } else {
      getFacility();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  const onChangeStatus = (e: any) => {
    if (e.value === "used") {
      getFilterUsed();
      console.log(setFilter);
    } else if (e.value === "wait") {
      getFilterWait();
    } else if (e.value === "cancel") {
      getFilterCancel();
    } else {
      getFacility();
    }
    console.log(setFilter);
    console.log(e.value);
  };

  const [value, setValue] = useState<any>("");
  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Cấp số <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Danh sách cấp số</span>
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
            <h1> Quản lý cấp số</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-serviceN">
              <div className="facility_top--groupBtn-serviceN_title">
                Tên dịch vụ
              </div>
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                defaultValue={{ value: "1" }}
                style={{ width: 200, height: 45 }}
                onChange={onChangeService}
              >
                <Option value="1">Tất cả</Option>
                <Option value="2">Khám sản - Phụ khoa</Option>
                <Option value="3">Khám răng hàm mặt</Option>
                <Option value="4">Khám tai mũi họng</Option>
              </Select>
            </div>

            <div className="facility_top--groupBtn-activeN">
              <div className="facility_top--groupBtn-activeN_title">
                Tình trạng
              </div>
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                defaultValue={{ value: "all" }}
                style={{ width: 200, height: 45, marginLeft: "20px" }}
                onChange={onChangeStatus}
              >
                <Option value="all">Tất cả</Option>
                <Option value="wait">Đang chờ</Option>
                <Option value="used">Đã sử dụng</Option>
                <Option value="cancel">Bỏ qua</Option>
              </Select>
            </div>

            <div className="facility_top--groupBtn-sourceN">
              <div className="facility_top--groupBtn-sourceN_title">
                Nguồn cấp
              </div>
              <Select
                suffixIcon={<img src={require("../../assets/arrow.png")} />}
                labelInValue
                defaultValue={{ value: "1" }}
                style={{ width: 200, height: 45, marginLeft: "20px" }}
                onChange={onChangeSource}
              >
                <Option value="1">Tất cả</Option>
                <Option value="2">Kiosk</Option>
                <Option value="3">Hệ thống</Option>
              </Select>
            </div>
            <div className="facility_top--groupBtn-timeN">
              <div className="facility_top--groupBtn-timeN_title">
                Chọn thời gian
              </div>
              <DateRange />
            </div>
            <div className="facility_top--groupBtn-searchN">
              <div className="facility_top--groupBtn-searchN_title">
                Từ khóa
              </div>
              <Input
                onChange={onChangeSearch}
                style={{ width: 400, height: 45, marginLeft: "45%" }}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">
            {filter ? (
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
                    filter
                      .filter(
                        (fac: any) =>
                          fac.name?.toLowerCase()?.includes(value) ||
                          fac.id?.includes(value) ||
                          fac.service?.toLowerCase()?.includes(value) ||
                          fac.time?.includes(value) ||
                          fac.limit?.includes(value)
                      )
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
              <TableNumber />
            )}
          </div>
        </div>
        <Link to="/addNumber" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/addNumber">Cấp số mới</a>
        </Link>
      </div>
    </>
  );
};
