(function() {
    'use strict';

    var scene;
    var box;
    var renderer;
    var width = 500;
    var height = 250;

    scene = new THREE.Scene()

    box = new THREE.Mesh(
        new THREE.BoxGeometry(50, 50, 50),
        new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    box.position.set(0, 0, 0);
    scene.add(box);

    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(200, 100, 300);
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0xefefef);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);
    renderer.render(scene, camera);


})();
