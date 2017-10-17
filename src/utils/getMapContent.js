import randomcolor from 'randomcolor';

export default async (id) => {
  const routeRsp = await window.fetch(`http://www.gspns.rs/feeds/linijatacke/${id}`);
  const routeJson = await routeRsp.json();

  const route = routeJson[0].tacke.split('|').slice(0, -1).map(tacka => {
    const parsed = tacka
      .replace('(', '')
      .replace(')', '')
      .replace(' ', '')
      .split(',');

    return { latitude: Number(parsed[0]), longitude: Number(parsed[1]) };
  });

  const stopsRsp = await window.fetch(`http://www.gspns.rs/feeds/linijastajalista/${id}`);
  const stopsJson = await stopsRsp.json();

  const stops = stopsJson.map(stop => ({
    longitude: Number(stop.longitude),
    latitude: Number(stop.latitude),
  }));

  const color = randomcolor();

  return { route, stops, color };
};
