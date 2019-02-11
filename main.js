let scene = new THREE.Scene();
//án scene væri ekkert á skjánum bara hvítt
let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1 , 1000);
//Camera 50 er FOV, window.innerWidth/window.innerHeight þetta er aspect ratioið, seinnu tvö þýðir bara ef það er object bakvið annað object það mun ekki renderast
let renderer = new THREE.WebGLRenderer();
//Renderer er aðalega fyrir fólk sem eru að nota browser sem supporta ekki webgl til að hjálpa við að styðja það
renderer.setSize( window.innerWidth, window.innerHeight );
//setja hvað þetta á að vera stórt er t.d. að nota 100% height og width
document.body.appendChild( renderer.domElement );

let geometry = new THREE.BoxGeometry( 1, 1, 1 );
//búa til kassa með 1 í hæð,breidd og lengd
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//material tekur inn object af properties hérna erum við t.d bara að taka inn lit "hex color"
let cube = new THREE.Mesh( geometry, material );
//Mesh er til að blanda saman geometry og material semsagt hérna tekur hann boxið og setur litinn á hann.
scene.add( cube );
camera.position.z = 5;
//Scene.add og Camera.position eru að vinna eiginlega saman því að default væri cameran inní scene.add það er ástæðan afhverju við færum cameruna um z=5


let animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	//þetta lætur cubeið eða Meshið snúast 0.01 px á hverju hertz eða 60 sinnum á sek
	renderer.render( scene, camera );
};
animate();
//Animate er búa til loop sem að refreshar oftast 60 sinnum á sek.
