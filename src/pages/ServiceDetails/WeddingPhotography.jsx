import React from "react";
import ServiceDetailTemplate from "./ServiceDetailTemplate";
import { SERVICES_DATA } from "../../utils/data";

export default function WeddingPhotography({ onOpenBooking }) {
  const service = SERVICES_DATA.find(s => s.id === "wedding-photography");
  return <ServiceDetailTemplate service={service} onOpenBooking={onOpenBooking} />;
}
