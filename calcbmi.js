const button = document.getElementById("btn");

button.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height === "" || isNaN(height) || height <= 0) {
    alert("Please Provide a Valid height");
  }
  if (weight == "" || isNaN(weight) || weight <= 0) {
    alert("Please Provide a Valid Weight");
  }
  height = height / 100;
  let bmi = weight / (height * height);
  bmi = bmi.toFixed(2);
  console.log(bmi);
  if (bmi === "" || isNaN(bmi) || bmi <= 0) {
    document.querySelector("#bmi_result").innerHTML = "";
  } else {
    document.querySelector("#bmi_result").innerHTML = bmi;
  }

  let status = "";
  if(bmi <= 0){
    status = ""
  }
  if (bmi > 0 && bmi < 18.5) {
    status = "Under Weight";
  }
  if (bmi > 18.5 && bmi < 24.9) {
    status = "Healthy";
  }
  if (bmi >= 25 && bmi < 30) {
    status = "Over Weight";
  }
  if (bmi >= 30) {
    status = "Obesity";
  }
  document.querySelector(".health").innerHTML = status;
});
