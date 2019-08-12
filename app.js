 (function() {
    'use strict';

    let scene;
    let camera;
    let renderer;
    let width = innerWidth;
    let height = innerHeight;
    let controls;

    let particles;
    let loader;

    // scene ステージ
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(100, 100, 100);
    camera.lookAt(scene.position);

    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage').appendChild(renderer.domElement);

    // particles
    // mesh: Points
    // geometry: 図形の頂点
    // material: PointsMaterial
    loader = new THREE.TextureLoader();
    loader.load('img/star.png', function(texture) {
      createParticles(texture);
      render();
    });

    function createParticles(texture) {
      let pGeometry;
      var pMaterial;
      var count = 1000;
      var i;

      // pGeometry
      pGeometry = new THREE.Geometry();
      for (i = 0; i < count; i++) {
        pGeometry.vertices.push(
          new THREE.Vector3(

            Math.random() * 200 - 100, // -100~100の乱数
            Math.random() * 200 - 100,
            Math.random() * 200 - 100
          )
        );
      }

      // pMaterial
      pMaterial = new THREE.PointsMaterial({
        map: texture,
        size: 5, // サイズ
        blending: THREE.AdditiveBlending, // ブレンドモード(加算)
        transparent: true, // 透過true
        depthTest: false // 物体が重なった時に後ろにあるものを描画するかしないか
      });

      particles = new THREE.Points(pGeometry, pMaterial);
      scene.add(particles);
    }

    function render() {
      requestAnimationFrame(render);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      particles.rotation.z += 0.003;
      renderer.render(scene, camera);
    }

  })();