const saveVacChanges = async (payload) => {
  fetch("/api/saveVacChanges", { method: "put", body: payload }).then(() => {
    console.log("success");
  });
};

export default saveVacChanges;
