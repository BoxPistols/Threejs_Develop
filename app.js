(function() {
  'use strict';

  let scene, box, head, body, person, sphere, plane, sphere1, sphere2, sphere3, light, ambient, camera, gridHelper,
    axisHelper, lightHelper, renderer, width = innerWidth, height = innerHeight, controls;


  var shadowHelper;

  // scene ステージ
  scene = new THREE.Scene();

  // mesh 物体
  head = new THREE.Mesh(
    new THREE.BoxGeometry(25, 25, 25, 30),
    new THREE.MeshLambertMaterial({
      // color: 0xcc33cc
      color: "rgba(173, 175, 200)",
      wireframe: true
    })
  );
  head.position.set(0, 50, 0);
  // scene.add(head);

  body = new THREE.Mesh(
    new THREE.BoxGeometry(50, 50, 50, 30),
    new THREE.MeshLambertMaterial({
      color: 0x3399cc,
      wireframe: true
    })
  );
  body.position.set(0, 20, 0);
  // scene.add(body);

  person = new THREE.Group();
  person.add(head);
  person.add(body);
  scene.add(person);

  // box.scale.set(2,2,2);
  // box.rotation.set(45 * Math.PI / 180, 45, 45);

  sphere = new THREE.Mesh(
    new THREE.SphereGeometry(130, 30, 30),
    new THREE.MeshLambertMaterial({
      color: 0x333399,
      wireframe: true
    })
  );
  sphere.position.set(0, 100, 0);
  scene.add(sphere);

  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(250, 250),
    new THREE.MeshLambertMaterial({
      color: "aliceblue",
      side: THREE.DoubleSide,
    })
  );
  plane.position.set(0, -50, 0);
  plane.rotation.x = 90 * Math.PI / 180;
  // scene.add(plane);

  sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 30, 0),
    //new THREE.MeshBasicMaterial({
    new THREE.MeshPhongMaterial({
      color: "teal"
    })
  );
  sphere1.position.set(-100, 100, 0);
  scene.add(sphere1);

  sphere2 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 30, 0),
    // new THREE.MeshLambertMaterial({
    new THREE.MeshPhongMaterial({
      color: "orange"
    })
  );
  sphere2.position.set(100, 100, 0);
  scene.add(sphere2);

  sphere3 = new THREE.Mesh(
    new THREE.SphereGeometry(50, 30, 0),
    new THREE.MeshPhongMaterial({
      color: "crimson"
    })
  );
  sphere3.position.set(0, 200, 0);
  scene.add(sphere3);

  // light
  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 100, 30);
  scene.add(light);
  ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);

  // camera
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1500);
  camera.position.set(200, 500, 300);
  camera.lookAt(scene.position);

  // helper
  gridHelper = new THREE.GridHelper(300, 20);
  scene.add(gridHelper);
  axisHelper = new THREE.AxisHelper(800);
  scene.add(axisHelper);
  // lightHelper = new THREE.DirectionalLightHelper(light, 20);
  // scene.add(lightHelper);

  // controls
  controls = new THREE.OrbitControls(camera);
  controls.autoRotate = true; // set controls.update();

  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  // renderer
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(width, height);
  renderer.setClearColor(0xefefef);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('stage').appendChild(renderer.domElement);

  // shadow
  // renderer.ShadowMap.enabled = true;
  // light.castShadow = true;
  // shadowHelper = new THREE.CameraHelper(light.shadow.camera);
  // scene.add(shadowHelper);

  function render() {
    requestAnimationFrame(render);
    // person.rotation.y += 0.01;

    controls.update(); // orbit
    renderer.render(scene, camera);
  }
  render();

})();
