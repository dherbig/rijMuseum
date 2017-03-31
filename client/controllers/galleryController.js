// var rijMuse = angular.module('rijMuse');

rijMuse.controller('galleryController', ['$http', '$routeParams', 'canvasFactory', '$scope', function($http, $routeParams, canvasFactory, $scope){

    console.log("In galleryController")
    var galleryPrefix = 'https://www.rijksmuseum.nl/api/pages/en/rijksstudio/';
    var keyJson = '?key=xvBxNCX5&format=json&imgonly=true';
    $scope.theGallery = {
        'splash':'https://i.kinja-img.com/gawker-media/image/upload/s--_WYd3ZqT--/18j4qz58pmh9ujpg.jpg',
        'text':'Hey look. an easter egg. I guess that makes this spring themed!! ',
        'artList': [
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            },
            {
                url:'http://lh6.ggpht.com/ZYWwML8mVFonXzbmg2rQBulNuCSr3rAaf5ppNcUc2Id8qXqudDL1NSYxaqjEXyDLSbeNFzOHRu0H7rbIws0Js4d7s_M=s0',
                height:'3',
                width:'2',
                maker:'Stan',
                makerHeight:'3',
                text:'Eric Cartman wuz here'
            }
        ]
    };
    // List of all availible galleries.  To add a new gallery, take the URL of the page and copy everything from 
    
    // The URLs for for calls to the API are urlPrefix + 'optionalObjectNumber' + keyJson + 'searchTerms'
    var galleryIndex = {
        "rembrandt": "artists/rembrandt-harmensz-van-rijn",
        "masterpieces": "works-of-art/masterpieces",
        "classicism": "styles/classicism",
        "rococo": "styles/rococo",
        "italianates":"styles/italianates",
        "baroque":"styles/baroque",
        "mannerism":"styles/mannerism",
        "renaissance":"styles/renaissance",
        "gothic":"styles/gothic"
    }

    var lastClick = 0;

    $scope.getGallery = function(galleryName, page = 1){
        if (lastClick >= (Date.now() - 8000)){
            return;
        }
        lastClick = Date.now();
        console.log($scope.theGallery);
        if(galleryName === 'undefined'){
            galleryName = 'vermeer';
        }
        var pageData = '&p='+page+'&ps=16'
        var queryURL = galleryPrefix + galleryIndex[galleryName] + keyJson + pageData;
        // console.log("Query = " + queryURL);
        $http({
            method: 'GET',
            url: queryURL
        }).then(function successCallback(jsonData) {
            // this callback will be called asynchronously
            // when the response is available
            // console.log("JSON = " + JSON.stringify(jsonData));
            //Takes JSON data and converts it into a gallery object
            var newGallery = {}
            newGallery.artList = jsonData.data.contentPage.artObjectSet;
            newGallery.text = jsonData.data.contentPage.body.markdown;
            newGallery.splash = jsonData.data.contentPage.headerImage;
            var result = [];
            var num = newGallery.artList.length;
            for(var i=0; i < num; i++){
                var q = Math.floor(Math.random()*newGallery.artList.length);
                result.push(newGallery.artList.splice(q, 1));
            };
            newGallery.artList = result;
            var buffer = 0;
            var done = 0;
            for(var i = 0; i< newGallery.artList.length && done < 17; i++){

                !function outer(i){
                    canvasFactory(newGallery.artList[i],function(newCanvas){
                        while(newCanvas == null && i+buffer < newGallery.artList.length){
                            newCanvas = canvasFactory(newGallery.artist[17 + buffer])
                            buffer++;
                        }
                        newGallery.artList[i] = newCanvas;
                        done++;
                        // console.log("Image " + (i+1) + ": "+ JSON.stringify(newGallery.artList[i]));
                    });
                }(i)
            }
  
            // console.log("TEH BROWSER SEEED THE DATAS AZZZZ ***************************************" + JSON.stringify(newGallery))
            console.log(JSON.stringify(newGallery, undefined, 2));
            $scope.theGallery = newGallery;
            return newGallery;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("Sorry, this wing is closed. Try a different gallery!")
        });
    }
}])

