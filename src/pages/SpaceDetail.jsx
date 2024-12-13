import React from "react";
import { useParams } from "react-router";

const SpaceDetail = () => {
  const { spaceId } = useParams();
  return <div>ID: {spaceId}</div>;
};

export default SpaceDetail;
