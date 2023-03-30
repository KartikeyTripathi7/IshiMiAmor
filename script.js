document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector("#message");
    const yesButton = document.querySelector("#yes");
    const noButton = document.querySelector("#no");
  
    message.textContent = "So do you love me.....'me blushing'?";
    var audio1 = new Audio('Arcade(PagalWorld)-[AudioTrimmer.com].mp3');
    var audio = new Audio('Tum Tak_192(Ghantalele.com)-[AudioTrimmer.com].mp3');
    yesButton.addEventListener("click", function() {
      alert("Haash!!!......let's make it the most beautiful people around us have ever seen."   );
      const x=document.getElementById('ring');
      x.remove();
      document.getElementById('four').classList.remove("bgimg");
      const t=document.getElementById('randi');
      t.innerHTML="I LOVE YOU TOO!!";
      t.style.color="#fff";
      document.getElementById('message').remove();
      const y = document.getElementById('change');
      y.style.display = 'block';
      document.body.style.backgroundImage = "url('https://www.icegif.com/wp-content/uploads/2021/12/icegif-1546.gif')";
      audio1.pause();
      audio.play();
      
    });
  
    noButton.addEventListener("click", function() {
      alert("KOI BAAT NHI!!");
      audio.pause();
      audio1.play();
    });
  });

  