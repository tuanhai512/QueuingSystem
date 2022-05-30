import { DatePicker } from "antd";
import React, { createContext, useRef } from "react";
import ReactDOM from "react-dom";
import "./service.scss";
import moment from "moment";

export interface Range {
  startValue: null;
  endValue: null;
  // endOpen: false,
  onChange: any;
}
export const valueStart = createContext(null);
export const valueEnd = createContext(null);

class DateRange extends React.Component {
  constructor(props: any) {
    super(props);
  }
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = (startValue: any) => {
    const endValue: any = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = (endValue: any) => {
    const startValue: any = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field: any, value: any) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = (value: any) => {
    this.onChange("startValue", value);
    console.log(value);
  };

  onEndChange = (value: any) => {
    this.onChange("endValue", value);
    console.log(value);
  };

  handleStartOpenChange = (open: any) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = (open: any) => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;

    return (
      <div>
        <div className="leftCalendar">
          <span>
            {" "}
            <img src={require("../../assets/calendar.png")} />{" "}
          </span>
          <valueStart.Provider value={startValue}>
         
            <DatePicker
              disabledDate={this.disabledStartDate}
              // showTime
              suffixIcon={null}
              //  superPrevIcon={<img src={require("../../assets/calendar.png")} alt=""/>}

              // prefix={}
              mode="date"
              format={moment(startValue).format("DD/MM/YYYY").toLocaleString()}
              value={startValue}
              placeholder="Start"
              onChange={this.onStartChange}
              onOpenChange={this.handleStartOpenChange}
            />
          </valueStart.Provider>
        </div>
        <div className="centerCalendar">
          <span>
            {" "}
            <img src={require("../../assets/Vector.png")} alt="" />{" "}
          </span>{" "}
        </div>
        <div className="rightCalendar">
          <span>
            {" "}
            <img src={require("../../assets/calendar.png")} alt="" />{" "}
          </span>
          <valueEnd.Provider value={endValue}>
            <DatePicker
              disabledDate={this.disabledEndDate}
              //  showTime
              suffixIcon={null}
              mode="date"
              format={moment(endValue).format("DD/MM/YYYY").toLocaleString()}
              value={endValue}
              placeholder="End"
              onChange={this.onEndChange}
              open={endOpen}
              onOpenChange={this.handleEndOpenChange}
            />
          </valueEnd.Provider>
        </div>
      </div>
    );
  }
}

export default DateRange;
