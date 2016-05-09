(function() {
  'use strict';

  angular
    .module('yapp.planet')
    .controller('PlanetsController', PlanetsController);

  PlanetsController.$inject = [];

  function PlanetsController() {
    var vm = this;
    vm.planets = [];

    init();

    function init() {
      vm.planets = {
        "count": 61,
        "next": "http://swapi.co/api/planets/?page=2",
        "previous": null,
        "results": [
          {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
              "http://swapi.co/api/people/5/",
              "http://swapi.co/api/people/68/",
              "http://swapi.co/api/people/81/"
            ],
            "films": [
              "http://swapi.co/api/films/6/",
              "http://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "http://swapi.co/api/planets/2/"
          },
          {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
              "http://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "http://swapi.co/api/planets/3/"
          },
          {
            "name": "Hoth",
            "rotation_period": "23",
            "orbital_period": "549",
            "diameter": "7200",
            "climate": "frozen",
            "gravity": "1.1 standard",
            "terrain": "tundra, ice caves, mountain ranges",
            "surface_water": "100",
            "population": "unknown",
            "residents": [],
            "films": [
              "http://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:39:13.934000Z",
            "edited": "2014-12-20T20:58:18.423000Z",
            "url": "http://swapi.co/api/planets/4/"
          },
          {
            "name": "Dagobah",
            "rotation_period": "23",
            "orbital_period": "341",
            "diameter": "8900",
            "climate": "murky",
            "gravity": "N/A",
            "terrain": "swamp, jungles",
            "surface_water": "8",
            "population": "unknown",
            "residents": [],
            "films": [
              "http://swapi.co/api/films/6/",
              "http://swapi.co/api/films/3/",
              "http://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:42:22.590000Z",
            "edited": "2014-12-20T20:58:18.425000Z",
            "url": "http://swapi.co/api/planets/5/"
          },
          {
            "name": "Bespin",
            "rotation_period": "12",
            "orbital_period": "5110",
            "diameter": "118000",
            "climate": "temperate",
            "gravity": "1.5 (surface), 1 standard (Cloud City)",
            "terrain": "gas giant",
            "surface_water": "0",
            "population": "6000000",
            "residents": [
              "http://swapi.co/api/people/26/"
            ],
            "films": [
              "http://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:43:55.240000Z",
            "edited": "2014-12-20T20:58:18.427000Z",
            "url": "http://swapi.co/api/planets/6/"
          },
          {
            "name": "Endor",
            "rotation_period": "18",
            "orbital_period": "402",
            "diameter": "4900",
            "climate": "temperate",
            "gravity": "0.85 standard",
            "terrain": "forests, mountains, lakes",
            "surface_water": "8",
            "population": "30000000",
            "residents": [
              "http://swapi.co/api/people/30/"
            ],
            "films": [
              "http://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:50:29.349000Z",
            "edited": "2014-12-20T20:58:18.429000Z",
            "url": "http://swapi.co/api/planets/7/"
          },
          {
            "name": "Naboo",
            "rotation_period": "26",
            "orbital_period": "312",
            "diameter": "12120",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grassy hills, swamps, forests, mountains",
            "surface_water": "12",
            "population": "4500000000",
            "residents": [
              "http://swapi.co/api/people/3/",
              "http://swapi.co/api/people/21/",
              "http://swapi.co/api/people/36/",
              "http://swapi.co/api/people/37/",
              "http://swapi.co/api/people/38/",
              "http://swapi.co/api/people/39/",
              "http://swapi.co/api/people/42/",
              "http://swapi.co/api/people/60/",
              "http://swapi.co/api/people/61/",
              "http://swapi.co/api/people/66/",
              "http://swapi.co/api/people/35/"
            ],
            "films": [
              "http://swapi.co/api/films/5/",
              "http://swapi.co/api/films/4/",
              "http://swapi.co/api/films/6/",
              "http://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:52:31.066000Z",
            "edited": "2014-12-20T20:58:18.430000Z",
            "url": "http://swapi.co/api/planets/8/"
          },
          {
            "name": "Coruscant",
            "rotation_period": "24",
            "orbital_period": "368",
            "diameter": "12240",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "cityscape, mountains",
            "surface_water": "unknown",
            "population": "1000000000000",
            "residents": [
              "http://swapi.co/api/people/34/",
              "http://swapi.co/api/people/55/",
              "http://swapi.co/api/people/74/"
            ],
            "films": [
              "http://swapi.co/api/films/5/",
              "http://swapi.co/api/films/4/",
              "http://swapi.co/api/films/6/",
              "http://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:54:13.921000Z",
            "edited": "2014-12-20T20:58:18.432000Z",
            "url": "http://swapi.co/api/planets/9/"
          },
          {
            "name": "Kamino",
            "rotation_period": "27",
            "orbital_period": "463",
            "diameter": "19720",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "ocean",
            "surface_water": "100",
            "population": "1000000000",
            "residents": [
              "http://swapi.co/api/people/22/",
              "http://swapi.co/api/people/72/",
              "http://swapi.co/api/people/73/"
            ],
            "films": [
              "http://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:45:06.577000Z",
            "edited": "2014-12-20T20:58:18.434000Z",
            "url": "http://swapi.co/api/planets/10/"
          },
          {
            "name": "Geonosis",
            "rotation_period": "30",
            "orbital_period": "256",
            "diameter": "11370",
            "climate": "temperate, arid",
            "gravity": "0.9 standard",
            "terrain": "rock, desert, mountain, barren",
            "surface_water": "5",
            "population": "100000000000",
            "residents": [
              "http://swapi.co/api/people/63/"
            ],
            "films": [
              "http://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:47:22.350000Z",
            "edited": "2014-12-20T20:58:18.437000Z",
            "url": "http://swapi.co/api/planets/11/"
          }
        ]
      }
    }

  }
})();