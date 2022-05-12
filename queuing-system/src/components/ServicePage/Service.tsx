import { Col, Input, Select } from "antd";
import { Option } from "antd/lib/mentions";
import React, { FC, useContext, useEffect, useState } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import SvgNotification from "../../assets/iconComponent/notification";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SideBar from "../SideBar/SideBar";
import DateRange, { valueStart, valueEnd } from "./DateTimePicker";
import { TableService } from "./TableService";
import firebase from "../../firebase/config";

const serviceCollection = firebase.firestore().collection("service");
export const Service: FC<{ props: any }> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<[]>();

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

  const handlePageClick = (data: any) => {
    setPageNumber(data.selected);
    console.log(setPageNumber(data.selected));
  };
  const pageCount = Math.ceil(setFilter.length / userPerPage);
  // const [datetime, setDatetime] = useState<any>();

  //const datetime = datetime;

  useEffect(() => {
    getFilter();
    getFilterInActive();
    getService();
    // getData();
  }, []);

  const [startValue, setStartValue] = useState<any | undefined>();
  const [endValue, setEndValue] = useState<any | undefined>();
  const [value, setValue] = useState<string>("");
  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  // function getData() {

  //   serviceCollection
  //     .orderBy("date")
  //     .startAt("1/4/2020")
  //     .endAt("1/5/2020")
  //     .onSnapshot((querySnapshot) => {
  //       const item: any = [];
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());
  //         item.push(doc.data());
  //       });
  //       setFilter(item);
  //       setLoader(false);
  //     });

  //   console.log(setFilter);
  // }
  function getFilter() {
    serviceCollection
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
    serviceCollection
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

  function getService() {
    serviceCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setFilter(item);
      setLoader(false);
    });
  }

  const childToParent = (...RangeDate: any) => {
    setStartValue(RangeDate.startValue);
    setEndValue(RangeDate.endValue);
    console.log(setStartValue(RangeDate.startValue));
    console.log(setEndValue(RangeDate.endValue));
  };

  const onChangeDate = () => {
    // getData();
    setStartValue(startValue);
    setEndValue(endValue);
    console.log(setStartValue(startValue));
    console.log(setStartValue(endValue));
  };

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

  const start = useContext(valueStart);
  const end = useContext(valueEnd);

  console.log("1111:{0}",useContext(valueStart));
  console.log("1111:{0}",useContext(valueEnd));


  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Dịch vụ <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Danh sách dịch vụ</span>
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
            <h1> Quản lý dịch vụ</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-activeS">
              <div className="facility_top--groupBtn-activeS_title">
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

            <div className="facility_top--groupBtn-time">
              <div className="facility_top--groupBtn-time_title">
                Chọn thời gian
              </div>
              <DateRange />
              {/* <Calendar/> */}
            </div>

            <div className="facility_top--groupBtn-search">
              <div className="facility_top--groupBtn-search_title">Từ khóa</div>
              <Input
                onChange={onChangeSearch}
                style={{ width: 400, height: 45, marginLeft: "55%" }}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">
            {filter ? (
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
                    filter
                      .filter(
                        (sc: any) =>
                          sc.id?.includes(value) ||
                          sc.name?.toLowerCase()?.includes(value) ||
                          sc.des?.toLowerCase()?.includes(value)
                      )
                      ?.slice(pageVisited, pageVisited + userPerPage)
                      .map((sc: any) => (
                        <tr className="center">
                          <td>KIO_0{sc.id}</td>
                          <td>{sc.name}</td>
                          <td>{sc.des}</td>
                          <td>
                            {" "}
                            <span
                              className={`${
                                sc.active === "Hoạt động"
                                  ? "active"
                                  : "inactive"
                              }`}
                            >
                              <BsDot /> {sc.active}
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
              <TableService />
            )}
          </div>
        </div>
        <Link to="/add-service" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/add-service">Thêm dịch vụ</a>
        </Link>
      </div>
    </>
  );
};
