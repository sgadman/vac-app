const saveVacChanges = async (payload) => {
  fetch("/api/saveVacChanges", { method: "put", body: payload })
    .then(() => {
      console.log("success");
    })
    .catch((error) => console.log(error));
};

export default saveVacChanges;
