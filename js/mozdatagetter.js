async function getDatabyGeoRegion(params, fieldToGet) {

    let mozdatabyregion = configuration.baseRequestUrl + 'mozdatabyregion';

    let url = new URL(mozdatabyregion)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    url.searchParams.append('csvfield', fieldToGet)
    let response = await fetch(url);
  
    console.log(url);

    let data = await response.json();

    console.log(data);

    return data;
}