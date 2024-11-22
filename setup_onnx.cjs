const ort = require('onnxruntime-web');
(async () => {
  console.log('ONNX Runtime Web is ready:', ort.InferenceSession !== undefined);
})();
