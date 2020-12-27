function showHide(id, infoId = null) {

  let panel = document.getElementById(id);
  let text = document.getElementById(infoId);

  if (panel.style.display === "none"){
    panel.style.display = "block";
    if(text !== null)
    {
      text.innerHTML = text.innerHTML.replace('показати ', 'сховати ');
    }
  } else {
    panel.style.display = "none";
    if(text !== null)
    {
      text.innerHTML = text.innerHTML.replace('сховати ', 'показати ');
    }
  }
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

    legendcolors[i].childNodes[1].nodeValue = (isNaN(range[index].value) && range[index].value.includes('%') ? parseInt(range[index].value) : range[index].value) + '' + (next >= 0 ? ('\u00A0-\u00A0' + range[next].value + '\u00A0\u00A0') : ' +\u00A0\u00A0');
  }
}

function checkDateInput(){
  
  const days31 = ['01', '03', '05', '07', '08', '10', '12']
  let monthInSelector = document.getElementById('month').value;

  let maxDayNumber = days31.includes(monthInSelector) ? 31 : monthInSelector == "02" ? 28 : 30;

  if (this.value > maxDayNumber || this.value < 1)
  {
    this.value = 1;
  }
}

function selectFiled(){
  let element = document.getElementById(this.id);
  element.select();
}