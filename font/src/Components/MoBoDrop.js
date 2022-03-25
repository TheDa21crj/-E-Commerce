import React from "react";
import DMcss from "./Css/Mobo.module.css";
export default function MoBoDrop(props) {
  return (
    <div>
      <div>
        <h1>{props.h21}</h1>
        <ul>
          <li> {props.li1} </li> <li> {props.li2} </li> <li> {props.li3} </li>
          <li> {props.li4} </li> <li> {props.li5} </li> <li> {props.li6} </li>
          <li> {props.li7} </li> <li> {props.li8} </li> <li> {props.li9} </li>
          <li> {props.li10} </li> <li> {props.li11} </li>
          <li> {props.li12m} </li>
        </ul>
      </div>
      <div>
        <h1>{props.h22}</h1>
        <ul>
          <li> {props.li12} </li> <li> {props.li22} </li>
          <li> {props.li32} </li> <li> {props.li42} </li>
          <li> {props.li52} </li> <li> {props.li62} </li>
          <li> {props.li72} </li> <li> {props.li82} </li>
          <li> {props.li92} </li> <li> {props.li102} </li>
          <li> {props.li112} </li> <li> {props.li122} </li>
        </ul>
      </div>
      <div>
        <h1>{props.h23}</h1>
        <ul>
          <li> {props.li13} </li> <li> {props.li23} </li>
          <li> {props.li33} </li> <li> {props.li43} </li>
          <li> {props.li53} </li> <li> {props.li63} </li>
          <li> {props.li73} </li> <li> {props.li83} </li>
          <li> {props.li93} </li> <li> {props.li103} </li>
          <li> {props.li113} </li> <li> {props.li123} </li>
        </ul>
      </div>
    </div>
  );
}
