import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCloseBtnClicked: () => void;
}

const Alert = ({ children, onCloseBtnClicked }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissable fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseBtnClicked}
      ></button>
    </div>
  );
};

export default Alert;
