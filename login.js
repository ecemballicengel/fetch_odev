document.getElementById("login").addEventListener("click", funcLoginGet);

function funcLoginGet() {
  let email = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  console.log(email);
  console.log(password);
  if (email == "e@gmail.com") {
    if (password == "1234") {
      window.location.assign("./kategori.html");
      alert("Giris Basarili");
    } else {
      alert("Sifre hatali!");
    }
  } else {
    alert("Email hatali! ");
  }
}
