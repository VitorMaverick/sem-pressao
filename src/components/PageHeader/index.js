import React from "react";
import { Link } from "react-router-dom";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import './styles.css';


const PageHeader = (props) => {
  return (
    <header className="page-header">
      

      <div className="header-content">
       
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
