import React from "react";
import TCss from "./CSS/TableIn.module.css";

export default function Table() {
  return (
    <div>
      <table>
        <tr>
          <th>SIZE</th>
          <th>
            <p>A. TO FIT SHOULDER</p>
          </th>
          <th>
            <p>B. TO FIT CHEST</p>
          </th>
          <th>
            <p>C. TO FIT WAIST</p>
          </th>
        </tr>
        <tr>
          <th>Size</th>
          <th>16.75</th>
          <th></th>
          <th></th>
        </tr>
      </table>
    </div>
  );
}
