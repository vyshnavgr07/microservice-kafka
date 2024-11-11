import KafkaConfig from '../kafka/config.js';

const kafka = new KafkaConfig();

export const consumeOrderMessages = async () => {
  await kafka.consume('order-topic', (message) => {
    console.log("Received message:", message);


    const orderData = JSON.parse(message);
    console.log("Order data:", orderData);


  });
};



