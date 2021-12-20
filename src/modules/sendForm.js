const sendForm = ({ formName, someElem = [] }) => {
  const form = document.getElementsByName(formName)[0];
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется";
  let boolName = false;
  let boolPhone = false;

  form.noValidate = true;
  const validate = function (list) {
    let success = false;
    boolName = false;
    boolPhone = false;
    list.forEach((elem) => {
      if (elem.attributes.name.value === "fio") {
        if (/^[а-яА-Яa-zA-Z]{2,}$/gi.test(elem.value)) {
          boolName = true;
        } else {
          elem.setCustomValidity("Заполните не менее 2-х символов");
          elem.reportValidity();
        }
      }
      if (elem.attributes.name.value === "phone") {
        if (/^[\d\+]{5,16}$/gi.test(elem.value)) {
          boolPhone = true;
        } else {
          elem.setCustomValidity("Заполните номер цифрами, не более 16 цифр");
          elem.reportValidity();
        }
      }
    });
    if (boolName === true && boolPhone === true) {
      success = true;
    }
    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.innerHTML = "<img src='./src/images/load.png'>";
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);
      if (element != null) {
        if (elem.type === "block") {
          formBody[elem.id] = element.value;
        } else {
          formBody[elem.id] = element.value;
        }
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 5000);
          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = "";
    }
  };
  try {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
export default sendForm;
