window.addEventListener("load", runScriptMainStatic);

function runScriptMainStatic() {
  let checkValue;
  const useClipboard = true;

  //Get and set session storage
  //alert("hello from handleCeckBoks");
  checkValue = sessionStorage.getItem("checkValue");
  console.log("check value in scripts.js: ", checkValue);

  if (checkValue) {
    document.body.style = "background-color: #56a09930 !important;";
    //MinTid Actions
    const tjekOption = document.querySelector(
      "#project > option:last-child"
    ).value;

    const elementProject = document.querySelector("#project");
    elementProject.value = tjekOption;
    var event = new Event("change");
    elementProject.dispatchEvent(event);

    const elementActivity = document.querySelector("#activity");
    elementActivity.value = 97;
    var event = new Event("change");
    elementActivity.dispatchEvent(event);

    navigator.clipboard.readText().then((clipText) => {
      if (document.querySelector("#note").value.length < 7) {
        document.querySelector("#note").value = clipText;
      }
    });
    document.querySelector("#note").focus();
  }
  //mintidAutomationActions();
}

function mintidAutomationActions() {
  document.body.style = "background-color: #56a09930 !important; transition: all 1s ease-in;";
  //MinTid Actions
  const tjekOption = document.querySelector(
    "#project > option:last-child"
  ).value;

  const elementProject = document.querySelector("#project");
  elementProject.value = tjekOption;
  var event = new Event("change");
  elementProject.dispatchEvent(event);

  const elementActivity = document.querySelector("#activity");
  elementActivity.value = 97;
  var event = new Event("change");
  elementActivity.dispatchEvent(event);

  navigator.clipboard.readText().then((clipText) => {
    if (document.querySelector("#note").value.length < 7) {
      document.querySelector("#note").value = clipText;
    }
  });
  document.querySelector("#note").focus();
}
