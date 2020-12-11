function getColor(value, gradient, range){

  let color = 'rgba(0, 0, 0, 0)';

  for(let i = 0; i < range.length; i++)
  {
    let rangeValue = !isNaN(range[i].value) ? range[i].value : range[i].value.includes('%') ? parseInt(range[i].value) / 100 : parseFloat(range[i].value);

    if(value >= rangeValue)
    {
      let index = gradient.find(x => x.step === range[i].step);
      color = index.color;
      break;
    }
  }

  return color;
}

function getDateFromSelector(){

    let date = { 
        year: document.getElementById("year").value,
        month: document.getElementById("month").value,
        day: document.getElementById("day").value
    }

    return date;
};

function setDateToSelector(){

    let date = transformData(getToday());

    document.getElementById("year").value = date.year;
    document.getElementById("month").value = date.month;
    document.getElementById("day").value = date.day;
}


function getToday(){
    let date = new Date();
    let today = {
      year: date.getFullYear() - 2000,
      month: date.getMonth() + 1,
      day: date.getDate() - 1
    }
  
    return today;
  }
  
function transformData(date){
    
  date.month.toString().length === 1 ? date.month = '0' + date.month : date.month = date.month;
  date.day.toString().length === 1 ? date.day = '0' + date.day : date.day = date.day;
  
  return date;
}