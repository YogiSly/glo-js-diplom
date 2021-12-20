const viewer = () => {
  const sertificate = document.querySelectorAll(".sertificate-document");
  let viewModal;
  let imgSer;
  let nextImg;
  const viewerActions = () => {
    viewModal.addEventListener("click", (e) => {
      if (e.target.classList.contains("view-modal")) {
        viewModal.remove();
      }
    });
  };
  const viewerCreate = (actions, i) => {
    sertificate.forEach((doc) => {
      doc.addEventListener("click", (e) => {
        e.preventDefault();
        viewModal = document.createElement("div");
        imgSer = document.createElement("img");
        nextImg = document.createElement("next");
        viewModal.className = "view-modal";
        imgSer.setAttribute("src", doc.getAttribute("href"));
        nextImg.className = "next-img";
        document.body.append(viewModal);
        viewModal.append(imgSer);
        viewModal.append(nextImg);
        actions();
      });
    });
  };
  viewerCreate(viewerActions);
};
export default viewer;
