import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";
import { SERVICES_DATA } from "../../utils/data";

export default function MaternityPhotography({ onOpenBooking }) {
  const service = SERVICES_DATA.find(s => s.id === "maternity-photography");
  return <ServiceDetailTemplate service={service} onOpenBooking={onOpenBooking} />;
}
