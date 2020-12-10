function showHide(id, infoId, textToChange) {
  let legendinfo = document.getElementById(id);
  let swither = document.getElementById(infoId);
  if (legendinfo.style.display === "none"){
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

function getRangeFormSelector(){
  let settings = document.getElementById('data');

  let selected = settings.options[settings.selectedIndex].value;

  let index = dataToRangeMapping.find(x => x.data === selected);
  
  return index.range;
}

function changeColorValuesToDataFromSelector(){
  let legendcolors = document.getElementById('legendcolors').children;

  let range = getRangeFormSelector();

  for(i = 0; i < legendcolors.length; i++)
  {
    let elementStepNumber = parseInt(legendcolors[i].className.split('-')[1]);

    let index = range.findIndex(x => x.step === elementStepNumber);
    let next = range.findIndex(x => x.step === elementStepNumber + 1);

    legendcolors[i].childNodes[1].nodeValue = range[index].value + '' + (next >= 0 ? (' - ' + range[next].value) : ' +');
  }
}