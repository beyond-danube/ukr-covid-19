function updateDataLayer(){
  
    popup.remove();
  
    if(map.getLayer('ukradm-join'))
    {
      map.removeLayer('ukradm-join')
    }
    let drawData = function(result){ 
  
      drawingdata = result;
  
      let matchExpression = ['match', ['get', 'ADM1_PCODE']];
      
      drawingdata.data.forEach(function(row) {
      matchExpression.push(row['ADM1_PCODE'], getColor(row['DATA'], lienarGradientBluePurple, getRangeFormSelector()));
    });
  
    // Last value is the default, used where there is no data
    matchExpression.push('rgba(0, 0, 0, 0)');
  
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
      document.getElementById('data').value)
    .then(drawData);
};

function drawPopUp(e){
    let index = drawingdata.data.findIndex(x => x.ADM1_PCODE === e.features[0].properties.ADM1_PCODE);
  
    let originalRegionValue = drawingdata.data[index].DATA
  
    let regionValue = (originalRegionValue > 0.01 && originalRegionValue < 1) ? originalRegionValue * 100 + '%' : originalRegionValue;
  
    popup
      .setLngLat(e.lngLat.wrap())
      .setHTML(regionValue)
      .addTo(map);
};