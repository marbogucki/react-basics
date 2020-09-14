import React from "react";
import "./ErrorList.scss";

type ErrorListProps = {
  message: string | undefined;
};

const ErrorList = ({ message }: ErrorListProps) => (
  <div className="error-list">{message}</div>
);

export default ErrorList;
