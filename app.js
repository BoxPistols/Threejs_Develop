(function() {
  'use strict';

  var scene;
    var box;

    var head;
    var body;
    var person;

    var light;
    var ambient;
    var camera;
    var gridHelper;
    var axisHelper;
    var lightHelper;
    var renderer;
    var width = 500;
    var height = 250;
    var controls;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    head = new THREE.Mesh(
      new THREE.BoxGeometry(25, 25, 25),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    head.position.set(0, 30, 0);
    // scene.add(head);

    body = new THREE.Mesh(
      new THREE.BoxGeometry(50, 50, 50),
      new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    body.position.set(0, 0, 0);
    // scene.add(body);

    person = new THREE.Group();
    person.add(head);
    person.add(body);
    scene.add(person);

    // box.scale.set(2,2,2);
    // box.rotation.set(45 * Math.PI / 180, 45, 45);

    // light
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 100, 30);
    scene.add(light);
    ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    // helper
    gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper);
    axisHelper = new THREE.AxisHelper(1000);
    scene.add(axisHelper);
    lightHelper = new THREE.DirectionalLightHelper(light, 20);
    scene.add(lightHelper);

    // controls
    controls = new THREE.OrbitControls(camera);
    // controls.autoRotate = true;

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    function render() {
      requestAnimationFrame(render);
      person.rotation.y += 0.01;
      // controls.update();
      renderer.render(scene, camera);
    }
    render();

  })();
