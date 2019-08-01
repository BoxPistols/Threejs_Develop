(function() {
    'use strict';

    var scene;
    var box;
    var plane;
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
    var shadowHelper;

    // scene ステージ
    scene = new THREE.Scene();

    // mesh 物体
    box = new THREE.Mesh(
        new THREE.BoxGeometry(50, 50, 50),
        new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    // plane
    plane = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshLambertMaterial({ color: 0x0096d6, side: THREE.DoubleSide })
    );
    plane.position.set(0, -50, 0);
    plane.rotation.x = 90 * Math.PI / 180;
    scene.add(plane);

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

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // shadow
    renderer.shadowMap.enabled = true;
    light.castShadow = true;
    light.shadow.camera.left = -200;
    light.shadow.camera.right = 200;
    light.shadow.camera.top = 200;
    light.shadow.camera.bottom = -200;
    shadowHelper = new THREE.CameraHelper(light.shadow.camera);
    scene.add(shadowHelper);
    box.castShadow = true;
    plane.receiveShadow = true;

    function render() {
        requestAnimationFrame(render);

        controls.update();
        renderer.render(scene, camera);
    }
    render();

})();