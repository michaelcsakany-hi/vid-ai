const tf = require('@tensorflow/tfjs-node');

function createModel() {
  const input1 = tf.input({shape: [10], name: 'input1'});
  const input2 = tf.input({shape: [10], name: 'input2'});
  const input3 = tf.input({shape: [10], name: 'input3'});
  const input4 = tf.input({shape: [10], name: 'input4'});

  const dense1 = tf.layers.dense({units: 32}).apply(input4);
  const output = tf.layers.dense({units: 1}).apply(dense1);

  // Corrected: input4 is now included in inputs
  const model = tf.model({inputs: [input1, input2, input3, input4], outputs: output});

  return model;
}

module.exports = { createModel };
