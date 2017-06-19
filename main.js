              function initMap() {
                var food = {lat: 40.8054491, lng: -73.9654415};
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 4,
                  center: food
                });
                var marker = new google.maps.Marker({
                  position: food,
                  map: map
                });
              }
