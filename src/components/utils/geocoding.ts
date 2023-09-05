export const geocoding = async (address:string):Promise<{lat:number|undefined;lon:number|undefined}> => {

    const geoRes = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
    const geoData = await geoRes.json();

    const lat = geoData[0] ? parseFloat(geoData[0].lat):undefined;
    const lon = geoData[0] ? parseFloat(geoData[0].lon):undefined;

    return {lat,lon}
}