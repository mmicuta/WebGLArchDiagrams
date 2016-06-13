var $container = $('#3Dcontainer');

var canvasWidth = $container.innerWidth();
var canvasHeight = canvasWidth/1.618;

// Set Scene, Camera & Lighting
            
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 25, canvasWidth/canvasHeight, 0.1, 10000 );

var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( .5, 1, .5 );
scene.add( directionalLight );

var light = new THREE.HemisphereLight( 0xffffff, 0x000000, .5 );
scene.add( light );

//

//Add Controls

controls = new THREE.TrackballControls( camera );

controls.rotateSpeed = 2.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;

controls.noZoom = false;
controls.noPan = false;

controls.staticMoving = true;
controls.dynamicDampingFactor = 0.3;

controls.keys = [ 65, 83, 68 ];

controls.addEventListener( 'change', render );

//

var renderer = new THREE.WebGLRenderer();
renderer.setSize( canvasWidth, canvasHeight );
renderer.setClearColor( 0xffffff );

$container.append( renderer.domElement );

var material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x111111 } );
var materialHidden = new THREE.MeshStandardMaterial( { color: 0xffffff, visible: false } );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var cube = new THREE.Mesh( geometry, materialHidden );
scene.add( cube );

// instantiate load manager
var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

	console.log( item, loaded, total );

};

var focusObject = [];

// instantiate a loader
var loader = new THREE.OBJLoader( manager );
loader.load('data/ArchMassMeters.obj', function(object) {
    
    object.traverse( function ( child ) {

        if ( child instanceof THREE.Mesh ) {

            child.material = material;

        }
    });
    
    scene.add( object );
});

camera.position.z = 200;
camera.position.y = 30;

var render = function () {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
};

function animate() {

    requestAnimationFrame( animate );
    controls.update();

}


$(document).ready(function() {
    render();
    animate();
});


