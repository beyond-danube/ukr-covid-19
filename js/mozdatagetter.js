async function getDatabyGeoRegion(params, fieldToGet) {

    let url = new URL("https://arcane-everglades-34285.herokuapp.com/mozdatabyregion")
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    url.searchParams.append('csvfield', fieldToGet)
    let response = await fetch(url);
  
    console.log(url);

    let data = await response.json();

    console.log(data);

    return data;
}