const button = document.getElementById("send");
// const alert = document.querySelector(".alert");
const alert = document.querySelector(".alert");
function sendEmail(e) {
   e.preventDefault();
  
 
 
  let tempParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_gor5aje", "template_3cqlqmy", tempParams)
    .then((res) => {
      let nameS = document.getElementById("name").value
      if(nameS !== ""){
         const beepSound = document.getElementById("beep-sound");
      beepSound.play();
      }
      const alert = document.querySelector(".alert");
      // const alertNo = document.querySelector(".alert h2");
      alert.classList.remove("alert-hide");
      alert.classList.remove("alert-hide");

      setTimeout(() => {
        alert.classList.add("alert-hide");
      }, 5000);

      setTimeout(() => {
        window.location.reload();
      }, 3300);

    });
}
button.addEventListener("click", sendEmail);