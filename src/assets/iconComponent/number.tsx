import * as React from "react";

function SvgNumber(props: React.SVGProps<SVGSVGElement>) {
  return (<svg width="20" height="20" viewBox="0 0 20 20" fill="white" {...props}>
  <path d="M1.66666 14.167L10 18.3337L18.3333 14.167" stroke="#282739" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.66666 10L10 14.1667L18.3333 10" stroke="#282739" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1.66699L1.66666 5.83366L10 10.0003L18.3333 5.83366L10 1.66699Z" stroke="#282739" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>)
}
export default SvgNumber