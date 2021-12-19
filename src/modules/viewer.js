const viewer = () => {
  const sertificate = document.querySelectorAll(".sertificate-document");
  let viewModal;
  let imgSer;
  const viewerActions = () => {
    viewModal.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-modal")) {
        viewModal.remove();
      }
    });
  };
  const viewerCreate = (actions) => {
    sertificate.forEach((doc) => {
      doc.addEventListener("click", (e) => {
        e.preventDefault();
        viewModal = document.createElement("div");
        imgSer = document.createElement("img");
        viewModal.className = "view-modal";
        imgSer.setAttribute("src", doc.getAttribute("href"));
        document.body.append(viewModal);
        viewModal.append(imgSer);
        actions();
      });
    });
  };
  viewerCreate(viewerActions);
};
export default viewer;
