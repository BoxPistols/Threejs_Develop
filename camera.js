// forked from FumioNonaka's "three.js r85: Rotating a plane" http://jsdo.it/FumioNonaka/mtPFL
var width = window.innerWidth;
var height = window.innerHeight;
var side = Math.min(width, height) / 30;
var scene;
var camera;
var renderer;
var mesh;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(20, width / height, 1, 1000);
  renderer = createRenderer(width, height);
  mesh = createMesh(side);
  camera.position.z = 800;
  scene.add(mesh);
  update();
}

function createRenderer(width, height) {
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function createMesh() {
  var geometry = new THREE.IcosahedronGeometry(100, 1);
  var material = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function update() {
  var rdm = (0, 0.05);
  mesh.rotation.x += rdm;
  mesh.rotation.y += 0.02;
  mesh.rotation.z += rdm;
  requestAnimationFrame(update);
  renderer.render(scene, camera);

  controls.update();
  requestAnimationFrame(update);
}


window.addEventListener('DOMContentLoaded', init);
