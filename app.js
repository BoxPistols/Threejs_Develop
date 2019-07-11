(function() {
  'use strict';

  var scene;
  var camera;
  var box;
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

  box = new THREE.Mesh(
    new THREE.BoxGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({
      // color: 0xff0000
      // color: 'teal',
      color: 'hsl(220, 100%, 60%)',
      // color: new THREE.Color(0xff0000)

    })
  );
  box.position.set(0, 0, 0);
  // box.position.x = 0;
  // box.position.y = -20;
  // box.position.z = 20;
  box.scale.set(2, 1, .5)
  // box.rotation.x = 45 * Math.PI / 180;
  box.rotation.set(145 * Math.PI / 180, 0, 0);

  scene.add(box);

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

    camera.lookAt(scene.position);

    // box.rotation.z += 0.01;
    renderer.render(scene, camera);
  }
  render();

})();
