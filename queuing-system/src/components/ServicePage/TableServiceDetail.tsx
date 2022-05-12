import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import firebase from "./../../firebase/config";
type Props = {};

const serviceDetailCollection = firebase
  .firestore()
  .collection("serviceDetail");
export const TableServiceDetail: FC = ({}: Props) => {
  const [service, setService] = useState<[]>();
  const [loader, setLoader] = useState<boolean>(true);
  
  function getDetailService() {
    serviceDetailCollection.onSnapshot((querySnapshot) => {
      const item: any = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setService(item);
      setLoader(false);
    });
  }
  useEffect(() => {
    getDetailService();
    console.log(service);
  }, []);

  return (
    <>
      <table cellSpacing={0}>
        <tr className="header">
          <th>Số thứ tự </th>
          <th>Trạng thái</th>
        </tr>
        {loader === false &&
          service?.map((sc: any) => (
            <tr className="center">
              <td>{sc.id}</td>
              <td>
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
              </td>
            </tr>
          ))}
      </table>
    </>
  );
};
