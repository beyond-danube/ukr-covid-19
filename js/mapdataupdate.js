function updateDataLayer(){

  let day = transformData(getDateFromSelector());

  popup.remove();

  if(map.getLayer('ukradm-join'))
  {
    map.removeLayer('ukradm-join')
  }
  
  let drawData = function(result){ 

    drawingdata = result;

    let matchExpression = ['match', ['get', 'ADM1_PCODE']];
    
    drawingdata.data.forEach(function(row) {
    matchExpression.push(row['ADM1_PCODE'], getColor(row['DATA'], defaultGradient, getRangeFormSelector()));

  });

  // Last value is the default, used where there is no data
  matchExpression.push('rgba(0, 0, 0, 0)');

  checkForAllZeroValues(drawingdata) ? showAllZeroWarn() : hideAllZeroWarn();

  map.addLayer({
    'id': 'ukradm-join',
    'type': 'fill',
    'source': 'ukradm',
    'source-layer': 'ukr_admbnda_adm1_q2_sspe_2017-9lhdux',
    'paint': {
      'fill-color': matchExpression,
      'fill-opacity': 0.7
      }
    }, 'water');
  };

  getDatabyGeoRegion(day,
    getFiledValueAccoringToYear())
  .then(drawData);
};

function drawPopUp(e){
  let index = drawingdata.data.findIndex(x => x.ADM1_PCODE === e.features[0].properties.ADM1_PCODE);

  let regionValue = "немає даних";

  if(index !== -1)
  {
    let originalRegionValue = drawingdata.data[index].DATA;
    regionValue = (originalRegionValue === null | originalRegionValue === 0) ? regionValue : (originalRegionValue >= 0.01 && originalRegionValue < 1) ? parseInt(originalRegionValue * 100) + '%' : originalRegionValue;
  }

  popup
    .setLngLat(e.lngLat.wrap())
    .setHTML(regionValue)
    .addTo(map);
};

// A hook to woraround changed data format, made simple by sacrificing couple of days of data around New Year 
function getFiledValueAccoringToYear(){

  let year = document.getElementById('year').value;

  let settings = document.getElementById('data');

  let field = year === '20' ? settings.value : settings.options[settings.selectedIndex].dataset.newfiled;

  return field;
}

function checkForAllZeroValues(drawingdata) {
  
  let allZero = true;
  
  drawingdata.data.forEach(e => {
    
    if (e.DATA > 0) {
      allZero = false;
    }
  });

  return allZero;
}

function showAllZeroWarn() {

  let allZeroWarn = document.getElementById('all-zero');
  allZeroWarn.style.display = "block";

}

function hideAllZeroWarn() {

  let allZeroWarn = document.getElementById('all-zero');
  allZeroWarn.style.display = "none";

}
