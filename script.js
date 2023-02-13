document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("#message");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
  
    message.textContent = "Will you be mine forever?";
    var audio1 = new Audio('Arcade(PagalWorld)-[AudioTrimmer.com].mp3');
    var audio = new Audio('Tum Tak_192(Ghantalele.com)-[AudioTrimmer.com].mp3');
    yesButton.addEventListener("click", function() {
      alert("Congratulations! you are totally mine for today!!"   );
      const x=document.getElementById('ring');
      x.remove();
      document.getElementById('four').classList.remove("bgimg");
      const t=document.getElementById('randi');
      t.innerHTML="I LOVE YOU!!";
      t.style.color="#fff";
      document.getElementById('message').remove();
      const y = document.getElementById('change');
      y.style.display = 'block';
      document.body.style.backgroundImage = "url('https://www.icegif.com/wp-content/uploads/2021/12/icegif-1546.gif')";
      audio1.pause();
      audio.play();
      
    });
  
    noButton.addEventListener("click", function() {
      alert("RHEGI TO FIRBHI MERI HI");
      audio.pause();
      audio1.play();
    });
  });

  