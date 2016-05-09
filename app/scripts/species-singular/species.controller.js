(function() {
  'use strict';

  angular
    .module('yapp.speciesSingular')
    .controller('SpeciesController', SpeciesController);

  SpeciesController.$inject = [];

  function SpeciesController() {
    var vm = this;
    vm.species = [];

    init();

    function init() {
        vm.species = {
          "count": 37,
          "next": "http://swapi.co/api/species/?page=2",
          "previous": null,
          "results": [
            {
              "name": "Rodian",
              "classification": "sentient",
              "designation": "reptilian",
              "average_height": "170",
              "skin_colors": "green, blue",
              "hair_colors": "n/a",
              "eye_colors": "black",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/23/",
              "language": "Galatic Basic",
              "people": [
                "http://swapi.co/api/people/15/"
              ],
              "films": [
                "http://swapi.co/api/films/1/"
              ],
              "created": "2014-12-10T17:05:26.471000Z",
              "edited": "2014-12-20T21:36:42.144000Z",
              "url": "http://swapi.co/api/species/4/"
            },
            {
              "name": "Hutt",
              "classification": "gastropod",
              "designation": "sentient",
              "average_height": "300",
              "skin_colors": "green, brown, tan",
              "hair_colors": "n/a",
              "eye_colors": "yellow, red",
              "average_lifespan": "1000",
              "homeworld": "http://swapi.co/api/planets/24/",
              "language": "Huttese",
              "people": [
                "http://swapi.co/api/people/16/"
              ],
              "films": [
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/1/"
              ],
              "created": "2014-12-10T17:12:50.410000Z",
              "edited": "2014-12-20T21:36:42.146000Z",
              "url": "http://swapi.co/api/species/5/"
            },
            {
              "name": "Yoda's species",
              "classification": "mammal",
              "designation": "sentient",
              "average_height": "66",
              "skin_colors": "green, yellow",
              "hair_colors": "brown, white",
              "eye_colors": "brown, green, yellow",
              "average_lifespan": "900",
              "homeworld": "http://swapi.co/api/planets/28/",
              "language": "Galactic basic",
              "people": [
                "http://swapi.co/api/people/20/"
              ],
              "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/",
                "http://swapi.co/api/films/6/",
                "http://swapi.co/api/films/3/",
                "http://swapi.co/api/films/2/"
              ],
              "created": "2014-12-15T12:27:22.877000Z",
              "edited": "2014-12-20T21:36:42.148000Z",
              "url": "http://swapi.co/api/species/6/"
            },
            {
              "name": "Trandoshan",
              "classification": "reptile",
              "designation": "sentient",
              "average_height": "200",
              "skin_colors": "brown, green",
              "hair_colors": "none",
              "eye_colors": "yellow, orange",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/29/",
              "language": "Dosh",
              "people": [
                "http://swapi.co/api/people/24/"
              ],
              "films": [
                "http://swapi.co/api/films/2/"
              ],
              "created": "2014-12-15T13:07:47.704000Z",
              "edited": "2014-12-20T21:36:42.151000Z",
              "url": "http://swapi.co/api/species/7/"
            },
            {
              "name": "Mon Calamari",
              "classification": "amphibian",
              "designation": "sentient",
              "average_height": "160",
              "skin_colors": "red, blue, brown, magenta",
              "hair_colors": "none",
              "eye_colors": "yellow",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/31/",
              "language": "Mon Calamarian",
              "people": [
                "http://swapi.co/api/people/27/"
              ],
              "films": [
                "http://swapi.co/api/films/3/"
              ],
              "created": "2014-12-18T11:09:52.263000Z",
              "edited": "2014-12-20T21:36:42.153000Z",
              "url": "http://swapi.co/api/species/8/"
            },
            {
              "name": "Ewok",
              "classification": "mammal",
              "designation": "sentient",
              "average_height": "100",
              "skin_colors": "brown",
              "hair_colors": "white, brown, black",
              "eye_colors": "orange, brown",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/7/",
              "language": "Ewokese",
              "people": [
                "http://swapi.co/api/people/30/"
              ],
              "films": [
                "http://swapi.co/api/films/3/"
              ],
              "created": "2014-12-18T11:22:00.285000Z",
              "edited": "2014-12-20T21:36:42.155000Z",
              "url": "http://swapi.co/api/species/9/"
            },
            {
              "name": "Sullustan",
              "classification": "mammal",
              "designation": "sentient",
              "average_height": "180",
              "skin_colors": "pale",
              "hair_colors": "none",
              "eye_colors": "black",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/33/",
              "language": "Sullutese",
              "people": [
                "http://swapi.co/api/people/31/"
              ],
              "films": [
                "http://swapi.co/api/films/3/"
              ],
              "created": "2014-12-18T11:26:20.103000Z",
              "edited": "2014-12-20T21:36:42.157000Z",
              "url": "http://swapi.co/api/species/10/"
            },
            {
              "name": "Neimodian",
              "classification": "unknown",
              "designation": "sentient",
              "average_height": "180",
              "skin_colors": "grey, green",
              "hair_colors": "none",
              "eye_colors": "red, pink",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/18/",
              "language": "Neimoidia",
              "people": [
                "http://swapi.co/api/people/33/"
              ],
              "films": [
                "http://swapi.co/api/films/4/"
              ],
              "created": "2014-12-19T17:07:31.319000Z",
              "edited": "2014-12-20T21:36:42.160000Z",
              "url": "http://swapi.co/api/species/11/"
            },
            {
              "name": "Gungan",
              "classification": "amphibian",
              "designation": "sentient",
              "average_height": "190",
              "skin_colors": "brown, green",
              "hair_colors": "none",
              "eye_colors": "orange",
              "average_lifespan": "unknown",
              "homeworld": "http://swapi.co/api/planets/8/",
              "language": "Gungan basic",
              "people": [
                "http://swapi.co/api/people/36/",
                "http://swapi.co/api/people/37/",
                "http://swapi.co/api/people/38/"
              ],
              "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/"
              ],
              "created": "2014-12-19T17:30:37.341000Z",
              "edited": "2014-12-20T21:36:42.163000Z",
              "url": "http://swapi.co/api/species/12/"
            },
            {
              "name": "Toydarian",
              "classification": "mammal",
              "designation": "sentient",
              "average_height": "120",
              "skin_colors": "blue, green, grey",
              "hair_colors": "none",
              "eye_colors": "yellow",
              "average_lifespan": "91",
              "homeworld": "http://swapi.co/api/planets/34/",
              "language": "Toydarian",
              "people": [
                "http://swapi.co/api/people/40/"
              ],
              "films": [
                "http://swapi.co/api/films/5/",
                "http://swapi.co/api/films/4/"
              ],
              "created": "2014-12-19T17:48:56.893000Z",
              "edited": "2014-12-20T21:36:42.165000Z",
              "url": "http://swapi.co/api/species/13/"
            }
          ]
        }
      }

  }
})();
