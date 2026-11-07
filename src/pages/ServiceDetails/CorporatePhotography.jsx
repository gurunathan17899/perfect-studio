import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";
import { SERVICES_DATA } from "../../utils/data";

export default function CorporatePhotography({ onOpenBooking }) {
  const service = SERVICES_DATA.find(s => s.id === "corporate-photography");
  return <ServiceDetailTemplate service={service} onOpenBooking={onOpenBooking} />;
}
