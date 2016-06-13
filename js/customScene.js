var $container = $('#3Dcontainer');

var canvasWidth = $container.innerWidth();
var canvasHeight = canvasWidth/1.618;

//alert($container.innerWidth());
            
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, canvasWidth/canvasHeight, 0.1, 10000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0xffff00 );

$container.append( renderer.domElement );

//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//var cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

// instantiate load manager
var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

	console.log( item, loaded, total );

};

// instantiate a loader
var loader = new THREE.OBJLoader( manager );
loader.load('data/ArchMassMeters2.obj', function(object) {
  scene.add(object);
});



camera.position.z = 100;

var render = function () {
    requestAnimationFrame( render );

    //cube.rotation.z += 0.01;

    renderer.render(scene, camera);
};




$(document).ready(function() {
    render();
});


