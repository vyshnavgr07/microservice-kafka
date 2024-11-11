import KafkaConfig from '../kafka/config.js';

const kafka = new KafkaConfig();

export const sendTestMessage = async () => {
  const testMessage = [{ value: JSON.stringify({ orderId: 1234, product: 'Sample Product', quantity: 1 }) }];
  await kafka.produce('order-topic', testMessage);
  console.log("Test message sent to order-topic");
};




