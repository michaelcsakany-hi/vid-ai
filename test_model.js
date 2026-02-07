const assert = require('assert');
const { createModel } = require('./model');

try {
  console.log('Attempting to create model...');
  const model = createModel();
  console.log('Model created successfully!');
  assert.ok(model, 'Model should be created');
  console.log('Test PASSED');
} catch (error) {
  console.error('Test FAILED: Model creation threw an error:', error.message);
  process.exit(1);
}
