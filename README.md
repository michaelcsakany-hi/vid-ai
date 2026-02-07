# Fix for Graph Disconnected Error

This repository contains a reproduction and fix for the "Graph disconnected" error in TensorFlow.js.

## The Error

The error `Graph disconnected: cannot obtain value for tensor [object Object] at layer "input4"` occurs when an input tensor is used in the model's computation graph but is not included in the `inputs` array passed to `tf.model()`.

## The Fix

To fix this, ensure that all input tensors used to compute the output are included in the `inputs` array.

See `model.js` for the corrected code.

## Running the Verification

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the test:
   ```bash
   node test_model.js
   ```
