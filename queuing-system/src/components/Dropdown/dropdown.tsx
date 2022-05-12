import { useRef, useState } from "react";
import "./dropdown.scss";

export interface IDropDownProps {
  width: string;
  title?: string;
  onGetValue?: any;
  Menu: {
    display: string;
    value: string;
  }[];
  special?: boolean;
}

export const DropDown = (props: IDropDownProps) => {
  const width = { width: `${props.width}` };
  const title = props.title;
  const listMenu = props.Menu;
  const special = props.special ? "special" : "";
  const [itemShow, setItemShow] = useState(listMenu[0]);
  const [isActive, setActive] = useState(false);
  const itemClick = (index: number) => {
    setItemShow(listMenu[index]);
    props.onGetValue(listMenu[index].value);
    setActive(!isActive);
  };
  const ref = useRef<any | null>(null);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="dropdown" style={width}>
      <div className="dropdown__header">
        <span className="dropdown__header--title">{title}</span>
      </div>
      <div className="dropdown__content ">
        <button
          className={`dropdown__button  ${isActive ? "active" : ""} ${special}`}
          style={width}
          onClick={handleClick}
        >
          <span className="dropdown__button--title">{itemShow.display}</span>
          <img
            srcSet={`${
              isActive
                ? require("../../assets/arrow2.png")
                : require("../../assets/arrow.png")
            } 2x `}
            className="dropdown__button--icon"
            alt="Dropdown"
          />
        </button>
        <div
          className={`dropdown__list  ${isActive ? "active" : ""}`}
          style={width}
        >
          <div className="dropdown__list--content" style={width} ref={ref}>
            {listMenu.map((item, index, listMenu) => {
              return (
                <button
                  className="dropdown__list--content-item"
                  key={index}
                  onClick={() => itemClick(index)}
                >
                  <span className="dropdown__list--content-item-title">
                    {item.display}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
