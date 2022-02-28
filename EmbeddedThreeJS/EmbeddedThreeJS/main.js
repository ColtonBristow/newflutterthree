import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene;

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347 , wireframe: true});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus);

const pointLight = new THREE.AmbientLight(0xffffff);
pointLight.position.set(50, 50, 50);

scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);
// const loader = new THREE.ObjectLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'mesh/GB_Wooden.obj',
// 	// called when resource is loaded
// 	function ( object ) {

// 		scene.add( object );

// 	},
// 	// called when loading is in progresses
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );



//! load background image.jpg
// const backgroundTexture = new THREE.TextureLoader().load();
// scene.background = spaceTexture.load(backgroundTexture)

function animate() {
	requestAnimationFrame(animate);

	torus.rotation.x += 0.01;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.1;

	controls.update();

	renderer.render(scene, camera);
}

animate()