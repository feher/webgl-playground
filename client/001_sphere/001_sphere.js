var WIDTH = 1024;
var HEIGHT = 768;

var VIEW_ANGLE = 45;
var ASPECT_RATIO = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;

var container = $('#webgl-container');

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);

var camera =
    new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT_RATIO, NEAR, FAR);
camera.position.z = 300;

var scene = new THREE.Scene();

var radius = 50, segments = 16, rings = 16;
var sphere = new THREE.Mesh(
        new THREE.SphereGeometry(radius, segments, rings),
        new THREE.MeshLambertMaterial({ color : 0xCC0000 })
    );

var light = new THREE.PointLight(0xFFFFFF);
light.position = { x:10, y:50, z:130 };

scene.add(sphere);
scene.add(camera);
scene.add(light);

container.append(renderer.domElement);
renderer.render(scene, camera);
