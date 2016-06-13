var $container = $('#3Dcontainer');

var canvasWidth = $container.innerWidth();
var canvasHeight = canvasWidth/1.618;

//alert($container.innerWidth());
            
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, canvasWidth/canvasHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0xffffff );

$container.append( renderer.domElement );

//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );


// instantiate a loader
var loader = new THREE.ObjectLoader();

// load a resource
loader = new THREE.JSONLoader();
loader.load('data/data.json'});

loader.parse

//http://www.yienandmarc.net/js/data.json
//http://www.yienandmarc.net/js/cartest.js


camera.position.set = ( 0, 100, 300 );

var render = function () {
    requestAnimationFrame( render );

    //cube.rotation.z += 0.01;

    renderer.render(scene, camera);
};




$(document).ready(function() {
    render();
});


