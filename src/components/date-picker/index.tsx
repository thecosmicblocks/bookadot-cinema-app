import { DatePicker as AntdDatePicker, Flex } from "antd";
import "./style.scss";
import { Calendar } from "../icon";
import dayjs from "dayjs";
import Typography from "../typography";
interface IDatePicker {
  value: any;
  onChange: (value: any) => void;
}

const DatePicker = ({ value, onChange }: IDatePicker) => {
  return (
    <Flex vertical align="center">
      <Calendar />

      <div className="date-picker-wrapper">
        <AntdDatePicker
          suffixIcon={null}
          onChange={(v) => {
            if (v) onChange(v);
          }}
          popupClassName="picker-popup"
          value={value}
        />
        <Typography
          component="p"
          className="mt-2"
          style={{
            fontWeight: 700,
          }}
        >
          {dayjs(value).format("MMM, DD")}
          {/* April, 18 */}
        </Typography>
      </div>
    </Flex>
  );
};

export default DatePicker;
