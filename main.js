import './style.css'

import * as THREE from 'three';
import { AmbientLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(innerWidth/innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);


//extra box for fun
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial( {color:0xf71084 } );
const photo = new THREE.Mesh(geometry1, material);

scene.add(photo);


//platform for under the photo

const geometry2 = new THREE.RingGeometry(1, 5, 32)
const material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry2, material2 );

scene.add( mesh );


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//GridHelper
//PointLightHelper

function addParticle() {
  const geometry3 = new THREE.SphereGeometry(0.25, 24, 24);
  const material3 = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const particle = new THREE.Mesh(geometry3, material3);


const [x, y, z] = Array(3)
  .fill()
  .map(() => THREE.MathUtils.randFloatSpread(100));

particle.position.set(x, y, z);
scene.add(particle);

}

Array(200).fill().forEach(addParticle); 

//Background

const beachTexture = new THREE.TextureLoader().load('ocean.jpg');
scene.background = beachTexture;

//profile photo

const puffyTexture = new THREE.TextureLoader().load('beach.jpg');
const puffy = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial( {map: puffyTexture} ));

scene.add(puffy);

puffy.position.x = 2;
puffy.position.z = -5;











