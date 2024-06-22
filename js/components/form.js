const button = document.getElementById("send");
const form = document.getElementById("form");
// const alert = document.querySelector(".alert");
const alert = document.querySelector(".alert");
function sendEmail(e) {
  e.preventDefault();
  document.querySelector(".btn-ring").style.display = "block";

  button.disabled = true;
  button.value = "disabled";

  let tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_gor5aje", "template_3cqlqmy", tempParams)
    .then((res) => {
      let nameS = document.getElementById("name").value;
      if (nameS !== "") {
        const beepSound = document.getElementById("beep-sound");
        beepSound.play();
      }
      document.querySelector(".btn-ring").style.display = "none";
      button.disabled = false;
      const alert = document.querySelector(".alert");
      // const alertNo = document.querySelector(".alert h2");
      alert.classList.remove("alert-hide");
      alert.classList.remove("alert-hide");

      setTimeout(() => {
        alert.classList.add("alert-hide");
      }, 5000);
      // let whatsappUrl = `https://api.whatsapp.com/send?phone=9946724697&text=${encodeURIComponent(
      //   `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
      // )}`;

      // window.open(whatsappUrl);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3300);
    });
}
form.addEventListener("submit", sendEmail);
