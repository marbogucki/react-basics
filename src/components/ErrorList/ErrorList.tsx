import React from "react";
import ErrorListStyled from "./ErrorList.styled";

export type ErrorListProps = {
  message: string | undefined;
};

const ErrorList = ({ message }: ErrorListProps) => (
  <ErrorListStyled className="error-list">{message}</ErrorListStyled>
);

export default ErrorList;
