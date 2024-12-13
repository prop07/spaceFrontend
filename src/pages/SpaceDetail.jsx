import React from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import Input from "../components/Input";

const SpaceDetail = () => {
  const { spaceId } = useParams();
  return (
    <div className="p-2 space-y-3">
      <Input />
      <Card />
    </div>
  );
};

export default SpaceDetail;
