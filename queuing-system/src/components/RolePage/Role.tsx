import React, { FC, useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Col, Input, Select } from "antd";
import { TableRole } from "./TableRole";
import { Option } from "antd/lib/mentions";
import AccountUserLeft from "../AccountUserPage/AccountUserLeft";
import SvgNotification from "../../assets/iconComponent/notification";
import firebase from "../../firebase/config";
type Props = {};
const roleCollection = firebase.firestore().collection("role");
export const Role: FC = ({}: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>("");
  const [filter, setFilter] = useState<any>();
  const [loader, setLoader] = useState<boolean>(true);
  const onChangeSearch = (e: any) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
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

  function getRole() {
    roleCollection.onSnapshot((querySnapshot: any) => {
      const item: any = [];
      querySnapshot.forEach((doc: any) => {
        item.push(doc.data());
      });
      setFilter(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getRole();
  }, []);
  return (
    <>
      <SideBar />
      <div className="facility">
        <div className="facility_title">
          <span className="facility_title-L">
            Cài đặt hệ thống
            <img src={require("../../assets/arrowTitle.png")} alt="" />{" "}
          </span>
          <span className="facility_title-R"> Quản lý vai trò</span>
          <span>
            <span
              className="iconNotificationT"
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
            <h1> Danh sách vai trò</h1>
          </div>
          <div className="facility_top--groupBtn">
            <div className="facility_top--groupBtn-searchR">
              <div className="facility_top--groupBtn-searchR_titleR">
                Từ khóa
              </div>
              <Input
                onChange={onChangeSearch}
                style={{ width: 400, height: 45, marginLeft: "288%" }}
                suffix={<img src={require("../../assets/search.png")} />}
              />
            </div>
          </div>
          <div className="facility_top--table">
            {filter ? (
              <>
                {" "}
                <table cellSpacing={0}>
                  <tr className="header">
                    <th>Tên vai trò</th>
                    <th>Số người dùng</th>
                    <th>Mô tả</th>
                    <th></th>
                  </tr>
                  {loader === false &&
                    filter
                      .filter((fac: any) =>
                        fac.name?.toLowerCase()?.includes(value) ||
                        typeof fac.userUsed?.toString() === "string"
                          ? fac.userUsed
                              .toString()
                              ?.toLowerCase()
                              ?.includes(value)
                          : "" || fac.description.toLowerCase().includes(value)
                      )
                      ?.map((r: any) => (
                        <tr className="center">
                          <td>{r.name}</td>
                          <td>{r.userUsed}</td>
                          <td>{r.description}</td>
                          <td className="update">
                            <Link
                              to={`/updateRole/${roleCollection.doc().id}`}
                              key={roleCollection.doc().id}
                            >
                              Cập nhật
                            </Link>
                          </td>
                        </tr>
                      ))}
                </table>
              </>
            ) : (
              <TableRole />
            )}
          </div>
        </div>
        <Link to="/addRole" className="facility_top--addBtn">
          <AiFillPlusSquare />
          <a href="/addRole">Thêm vai trò</a>
        </Link>
      </div>
    </>
  );
};
