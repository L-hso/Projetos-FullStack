
import { ReactNode } from "react";
import "./timeline-body.scss";

export function TimelineBody({children}:{children: ReactNode}){
  return <main id="timeline_body">{children}</main>;
}
