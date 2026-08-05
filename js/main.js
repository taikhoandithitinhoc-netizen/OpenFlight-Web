import * as THREE from "../libs/three.module.js";
import { GLTFLoader } from "../libs/GLTFLoader.js";

console.log("OpenFlight Web");
console.log("Build 002");

const canvas = document.getElementById("gameCanvas");

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);

camera.position.set(0, 2, 8);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

// Light
const sun = new THREE.DirectionalLight(0xffffff, 3);
sun.position.set(10, 20, 10);
scene.add(sun);

scene.add(new THREE.AmbientLight(0xffffff, 1));

// Ground
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(1000,1000),
    new THREE.MeshStandardMaterial({
        color:0x55aa55
    })
);

ground.rotation.x = -Math.PI/2;
scene.add(ground);

// Aircraft
const loader = new GLTFLoader();

loader.load(
    "../assets/aircraft/Cessna+172_SP.glb",

    function(gltf){

        const plane = gltf.scene;

        plane.scale.set(1,1,1);
        plane.position.set(0,0.2,0);

        scene.add(plane);

        console.log("Aircraft Loaded");

    },

    undefined,

    function(error){
        console.error(error);
    }

);

function animate(){

    requestAnimationFrame(animate);

    renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

camera.aspect=window.innerWidth/window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(window.innerWidth,window.innerHeight);

});
