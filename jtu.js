document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("#message");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
  
    message.textContent = "Will you be mine for today?";
  
    yesButton.addEventListener("click", function() {
      alert("Congratulations! you are totally mine for today!!"   );
    });
  
    noButton.addEventListener("click", function() {
      alert("RHEGI TO FIRBHI MERI HI");
    });
  });
  
