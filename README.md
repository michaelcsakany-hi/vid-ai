# Fix for Graph Disconnected Error

This repository contains a reproduction and fix for the "Graph disconnected" error in TensorFlow.js.

## The Error

The error `Graph disconnected: cannot obtain value for tensor [object Object] at layer "input4"` occurs when an input tensor is used in the model's computation graph but is not included in the `inputs` array passed to `tf.model()`.

## Verify in Browser (Recommended)

Since the error seems to be occurring in a browser environment, I have created a standalone HTML file to demonstrate the fix.

1. Open `index.html` in your web browser.
2. Click **"Run Buggy Code"** to reproduce the error.
3. Click **"Run Fixed Code"** to see the solution.

The fix involves ensuring that all input tensors used in the graph (like `input4`) are explicitly included in the `inputs` list when creating the model.

## Verify in Node.js

If you have Node.js installed, you can also run the server-side verification:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the test:
   ```bash
   node test_model.js
   ```
