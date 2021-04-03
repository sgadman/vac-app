import React from "react";
import EditView from "../../views/EditView";
import { useLocation, useNavigate } from "@reach/router";
import saveVacChanges from "../../apis/saveVacChanges";

const EditPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnSubmit = (data) => {
    saveVacChanges(data).then(() => navigate("../"));
  };

  return <EditView formData={location.state} handleOnSubmit={handleOnSubmit} />;
};

export default EditPage;
