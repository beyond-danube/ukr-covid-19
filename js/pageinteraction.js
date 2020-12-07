
function showHide(id, infoId, textToChange) {
    let legendinfo = document.getElementById(id);
    let swither = document.getElementById(infoId);
    if (legendinfo.style.display === "none") {
      legendinfo.style.display = "block";
      swither.innerText = 'cховати ' + textToChange;
    } else {
      legendinfo.style.display = "none";
      swither.innerText = 'показати ' + textToChange;
    }
  }
  
  function dataInfoToLegend(){
    let legend = document.getElementById('datainfolegend');
    let settings = document.getElementById('data');
  
    let selected = settings.options[settings.selectedIndex].text;
  
    legend.innerText = selected;
  }