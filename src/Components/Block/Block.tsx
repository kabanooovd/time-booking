import { DoctorAppointment } from "../DoctorAppointment/DoctorAppointment";
import style from "./Block.module.css";

export const Block = () => {
  return <div className={style.block__container}>
    <DoctorAppointment />
  </div>;
};
