import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Common from "./Css/Common.module.css";

export default function Myorders(props) {
  return (
    <div className={Common.mdiv}>
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => props.state("")}
        />
      </div>
      <p className={Common.MyPTag}>My Orders</p>
      <p>{props.id}</p>
      <br />
      <br />
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
      cupiditate tempora odio blanditiis corrupti qui eum hic deserunt alias
      quasi provident placeat magnam officiis aspernatur quaerat perferendis!
      Culpa, architecto assumenda? Omnis dolore illo magnam nostrum impedit
      saepe? Rerum voluptatibus, odio laborum est iure odit deserunt saepe,
      similique assumenda vitae dolore dolorem reprehenderit numquam animi qui
      eius maxime perferendis et asperiores natus modi in accusantium? Fugiat
      laboriosam voluptatum iste dolor mollitia? Corrupti, repudiandae facere!
      Accusamus soluta maxime unde quos eius at doloribus. Deleniti, fugiat?
      Iusto, aliquid magni voluptatum voluptatibus corrupti omnis quae! Magnam,
      dolorem ea? Culpa ab ipsam id tempore dolorem! Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Impedit, cupiditate tempora odio blanditiis
      corrupti qui eum hic deserunt alias quasi provident placeat magnam
      officiis aspernatur quaerat perferendis! Culpa, architecto assumenda?
      Omnis dolore illo magnam nostrum impedit saepe? Rerum voluptatibus, odio
      laborum est iure odit deserunt saepe, similique assumenda vitae dolore
      dolorem reprehenderit numquam animi qui eius maxime perferendis et
      asperiores natus modi in accusantium? Fugiat laboriosam voluptatum iste
      dolor mollitia? Corrupti, repudiandae facere! Accusamus soluta maxime unde
      quos eius at doloribus. Deleniti, fugiat? Iusto, aliquid magni voluptatum
      voluptatibus corrupti omnis quae! Magnam, dolorem ea? Culpa ab ipsam id
      tempore dolorem! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Impedit, cupiditate tempora odio blanditiis corrupti qui eum hic deserunt
      alias quasi provident placeat magnam officiis aspernatur quaerat
      perferendis! Culpa, architecto assumenda? Omnis dolore illo magnam nostrum
      impedit saepe? Rerum voluptatibus, odio laborum est iure odit deserunt
      saepe, similique assumenda vitae dolore dolorem reprehenderit numquam
      animi qui eius maxime perferendis et asperiores natus modi in accusantium?
      Fugiat laboriosam voluptatum iste dolor mollitia? Corrupti, repudiandae
      facere! Accusamus soluta maxime unde quos eius at doloribus. Deleniti,
      fugiat? Iusto, aliquid magni voluptatum voluptatibus corrupti omnis quae!
      Magnam, dolorem ea? Culpa ab ipsam id tempore dolorem!
    </div>
  );
}
