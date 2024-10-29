import { createClient } from "redis";
const redisClient = createClient();
(async () => {
  await redisClient.on("error", (err) => console.log(err));
  await redisClient.connect();
})();
export default redisClient;
