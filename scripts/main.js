const butt = document.querySelector("#donbtn");
const emailinp = document.getElementById("email").value.trim();
const contribt = document.getElementById("money").value.trim();
butt.addEventListener("click", function () {
  if (emailinp === "" || contribt === ""){
    alert("😭 Try again... 😭");
  }
  else if (emailinp !== "" & contribt !== ""){
    alert("👍 Thank you! 👍");
  }
});