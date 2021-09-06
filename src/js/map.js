// JAWG map
const accessToken = 'DlkKKPEnbe5w2WR5itwcjf5Q34AOmvXh90NenJgD3fTZjiQ3vDm3dL7bUmid7HUg';
    const map = L.map('map').setView([50.3229559, 30.3651731], 12);
    L.tileLayer(
      `https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}.png?access-token=${accessToken}`, {
        attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank" class="jawg-attrib">&copy; <b>Jawg</b>Maps</a> | <a href="https://www.openstreetmap.org/copyright" title="OpenStreetMap is open data licensed under ODbL" target="_blank" class="osm-attrib">&copy; OSM contributors</a>',
        maxZoom: 22
      }
    ).addTo(map);

    // This add a marker with the default icon
    // L.marker([48.852966, 2.349902]).addTo(map);
    // Marker with custom icon
    L.marker([50.3229559, 30.3651731], {
      icon: L.icon({
        iconUrl: 'https://previews.dropbox.com/p/thumb/ABQsCpybg_OK0DG1P3-4pyOiIyiRFCLjC5IQdIrUEo0LrE2M2vPGSTg765H9RRU_FTmchSEkZwN-K1QkwdYQ3a7pY4AxrClbH8ehzl4hNwgX2dI_ZMCaatuv7zWvN-EFOqLxEUxQ2yD8Qe6mXY-uPdGOAMpWMjFnEgYovqsXqA999Qwu9jPVRxO_hxr1Wgu3582HuKgif0kCAKfw4DT8hXb9ua9fkcJIBwe2cxlit-214HPB7RrrE2HFA7wQm3E9fps0m5rmvS6LdttgDxNTWAtBH6YDbIKZrAtR4kEyPHrYBCjkPw5r_XTjVzcESj41q5NazVAbi-Vn4XnF0UcjiHdtXh_I-ZC_C48r3iIwJiDqBg/p.jpeg?fv_content=true&size_mode=5',
        iconSize: [50, 50]
      })
    }).addTo(map);