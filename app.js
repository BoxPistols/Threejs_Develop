// ページの読み込みを待つ
window.addEventListener('load', init);

function init() {

  // サイズを指定
  const width = 960;
  const height = 540;

  // レンダラーを作成
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#myCanvas')
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  // THREE.PerspectiveCameraクラスのコンストラクターで
  // 画角、アスペクト比、描画開始距離、描画終了距離の4つの情報を引数として渡しカメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height);
  camera.position.set(0, 0, +1000);

  // 箱を作成
  // 立方体はメッシュという表示オブジェクトを使用して作成
  // メッシュを作るには、ジオメトリ（形状）とマテリアル（素材）の二種類を用意
  // ジオメトリ: 頂点情報や面情報
  // (幅, 高さ, 奥行き)
  const geometry = new THREE.BoxGeometry(400, 400, 400);
  // マテリアル: 色や質感の情報
  const material = new THREE.MeshNormalMaterial();
  // 作成したジオメトリとマテリアルを使って、メッシュを作る。
  const box = new THREE.Mesh(geometry, material);
  // 作成したメッシュをシーンに追加
  scene.add(box);


  // アニメーション
  // JavaScriptでアニメーションをさせるには、時間経過で関数を呼び続ける必要がある


  tick();

  // 毎フレーム時に実行されるループイベントです
  function tick() {

    // アニメーション
    box.rotation. y += 0.01;

    // 明示的に画面が更新されるように命令を書く
    // renderer.render()という命令で更新を指示
    renderer.render(scene, camera); // レンダリング

    // requestAnimationFrame(): グローバルメソッド
      // 引数として渡された関数を、毎フレーム実行する
    requestAnimationFrame(tick);
  }
}