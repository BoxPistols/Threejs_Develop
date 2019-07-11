(function() {
  'use strict';

  var scene;
  var camera;
  var box;

  var head;
  var body;
  var person;

  var light;
  var ambient;
  var renderer;
  var width = 500;
  var height = 400;

  var gridHelper;
  var axisHelper;
  var lightHelper;

  var theta = 0;

  scene = new THREE.Scene()

  head = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    new THREE.MeshLambertMaterial({color: 'teal',})
  );
  head.position.set(0, 40, 0);
  // scene.add(head);

  body = new THREE.Mesh(
    new THREE.BoxGeometry(40, 60, 40),
    new THREE.MeshLambertMaterial({color: 'teal',})
  );
  body.position.set(0, 0, 0);
  // scene.add(body);

  person = new THREE.Group();
  person.add(head);
  person.add(body);
  scene.add(person);

  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 60, 30);
  scene.add(light);

  ambient = new THREE.AmbientLight(0x040404);
  light.position.set(0, 60, 30);
  scene.add(ambient);

  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
  camera.position.set(200, 80, 200);
  camera.lookAt(scene.position);

  gridHelper = new THREE.GridHelper(1000, 50);
  scene.add(gridHelper);

  axisHelper = new THREE.AxisHelper(1000);
  scene.add(axisHelper);

  lightHelper = new THREE.DirectionalLightHelper(light, 10);
  scene.add(lightHelper);

  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xefefef);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('stage').appendChild(renderer.domElement);

  function render() {
    requestAnimationFrame(render);

    // theta += 0.1;
    // camera.position.x = Math.cos(THREE.Math.degToRad(theta)) * 300;
    // camera.position.z = Math.sin(THREE.Math.degToRad(theta)) * 300;

    // camera.lookAt(scene.position);
    person.rotation.y += 0.01;
    // box.rotation.z += 0.01;
    renderer.render(scene, camera);
  }
  render();

})();
