// Initialize and add the map
function initMap() {
    // 소프트웨어학과로 처음 지정
    const cbnu_software = { lat: 36.625627, lng: 127.454416 };
    // 소프트웨어학과로 가운데로
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: cbnu_software,
    });
    // 소프트웨어학과에 마커 표시
    const marker = new google.maps.Marker({
      position: cbnu_software,
      map: map,
    });
  }
  
  window.initMap = initMap;
  