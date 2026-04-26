function getScene() {
  var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x111111);
  return scene;
}

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  return camera;
}

function getLight(scene) {
    pointLight = new THREE.PointLight(0xffffff, 1, 0);
    pointLight.position.set(20, 50, 20);
  scene.add(pointLight);
    ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
}

function getRenderer() {
  var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.enabled = false;
  return controls;
}

var scene, camera, renderer, controls;
var cube, sphere;
var pointLight;
var ambientLight;

function addShapes() {
  var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  var cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-2, 0, 0);
    cube.scale.set(6, 6, 6);
    scene.add(cube);


  var sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
  var sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff4444 });
    sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(5, 0, 0);
    sphere.scale.set(3, 3, 3);
    scene.add(sphere);
}

function loadModel() {
  var loader = new THREE.OBJLoader();

  loader.load('window.obj', function (object) {
    object.name = "model";
      var box = new THREE.Box3().setFromObject(object);
      var center = new THREE.Vector3();
      var size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);
      object.position.sub(center);
      object.rotation.y = Math.PI / -2;
    scene.add(object);
    camera.position.set(0, 0, size.z * 2);
    camera.lookAt(0, 0, 0);

    document.querySelector('h1').style.display = 'none';

  });
}

function render() {
  requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    sphere.rotation.y += 0.02;
  var t = Date.now() * 0.001;
    pointLight.color.setHSL((t % 1), 1, 0.5);
    controls.update();
    renderer.render(scene, camera);
}

scene = getScene();
camera = getCamera();
renderer = getRenderer();
controls = getControls(camera, renderer);

getLight(scene);
addShapes();
loadModel();
render();

