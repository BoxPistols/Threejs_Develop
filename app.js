  (function() {
      'use strict';

      var scene;
      var box;
      var camera;
      var renderer;
      var width = 500;
      var height = 300;
      var controls;
      var loader;

      // scene ステージ
      scene = new THREE.Scene();

      // camera
      camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
      camera.position.set(150, 150, 300);
      camera.lookAt(scene.position);

      // controls
      controls = new THREE.OrbitControls(camera);

      // renderer
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setClearColor(0xefefef);
      renderer.setPixelRatio(window.devicePixelRatio);
      document.getElementById('stage').appendChild(renderer.domElement);

      // texture
      loader = new THREE.TextureLoader();
      loader.load('img/logo.svg', function(texture) {
          createBox(texture);
          render();
      });

      function createBox(texture) {
          // box
          box = new THREE.Mesh(
              new THREE.BoxGeometry(120, 120, 120),
              new THREE.MeshBasicMaterial({ map: texture })
          );
          box.position.set(0, 0, 0);
          scene.add(box);
      }

      function render() {
          requestAnimationFrame(render);

          controls.update();
          renderer.render(scene, camera);
      }
      // render();

  })();