import React from "react";
import { Link, useParams } from "react-router-dom";

export default function MerchandiseLink() {
  const { link } = useParams();

  return (
    <div>
      MerchandiseLink
      <p>{link}</p>
    </div>
  );
}
