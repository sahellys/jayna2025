// laskin on kyllä helpompi jos ei aivoilta lähe mutta jos välttämättä haluat niin tästä decodamaan.
const qList = [
    { q: "1. 12 × 3 + 6", a: "NDI=" },
    { q: "2. √81 + 4²", a: "MjU=" },
    { q: "3. (30 ÷ 5) × 2 + 7", a: "MTk=" },
    { q: "4. log₁₀(100) + 6", a: "OA==" },
    { q: "5. 5 × (2 + 3) + 10", a: "MzU=" }
  ];
  
  const encodedCode = ["Mg==", "NDA=", "NA=="];
  
  let i = 0;
  
  function decode(str) {
    return atob(str);
  }
  
  function showQ() {
    document.getElementById("question").textContent = qList[i].q;
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
  }
  
  function checkAnswer() {
    const user = document.getElementById("answer").value.trim();
    if (user === decode(qList[i].a)) {
      i++;
      if (i < qList.length) {
        showQ();
      } else {
        const code = encodedCode.map(decode).join("");
        document.querySelector(".quiz-box").innerHTML =
          `<div class="code-box" id="success">Hyvää vappua ja kahvitaukoa!<br>Koodi on: <strong>${code}</strong></div>`;
      }
    } else {
      alert("Yritä enemmän!");
      i = 0;
      showQ();
    }
  }
  document.getElementById("answer").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      checkAnswer();
    }
  });
  
  showQ();
  