document.getElementById("roller").addEventListener("click", function() {
      document.getElementById("menu").classList.add("active");
    });
  
    document.getElementById("close").addEventListener("click", function() {
      document.getElementById("menu").classList.remove("active");
    });

const colorMap = {
      "default-text": { border: "gold", background: "cornsilk", fontcolor: "black"},
      "red-text": { border: "red", background: "#fadede", fontcolor: "black"},
      "turquoise-text": { border: "#30D5C8", background: "#DFF8F5", fontcolor: "black"},
      "dark-text": { border: "gold", background: "#000033", fontcolor: "snow"},
      "lightblue-text": { border: "#0072bc", background: "#ade0ee", fontcolor: "black"},
      "lightgreen-text": { border: "#005931", background: "#bbffb9", fontcolor: "black"},
      "purple-text": { border: "#9633ff", background: "#e2c6ff", fontcolor: "black"},
      "white-text": { border: "#898989", background: "white", fontcolor: "black"},
};

document.querySelectorAll(".color-text").forEach(element => {
      element.addEventListener("click", function() {
            const selectMin = document.getElementById("select-min");
            const selectSec = document.getElementById("select-sec");
            const startBtn = document.getElementById("start-btn");
            const stopBtn = document.getElementById("stop-btn");
            const resetBtn = document.getElementById("reset-btn");
            const memo = document.getElementById("memo");
            const timefont = document.getElementsByClassName('timefont');
            const timepass = document.getElementById("time-pass");
            const colors = colorMap[this.id]

            document.body.style.backgroundColor = colors.background;

            selectMin.style.borderColor = colors.border;
            selectSec.style.borderColor = colors.border;
            startBtn.style.borderColor = colors.border;
            stopBtn.style.borderColor = colors.border;
            resetBtn.style.borderColor = colors.border;
            memo.style.borderColor = colors.border;

            Array.from(timefont).forEach(el => {
                  el.style.color = colors.fontcolor;
                  el.style.backgroundColor = colors.background;
            });

            timepass.style.color = colors.fontcolor;
      });
});