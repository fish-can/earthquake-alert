import axios from 'axios';
import qs from 'qs';

const LINE_NOTIFY_URL = 'https://notify-api.line.me/api/notify';

// You can get your own token from https://notify-bot.line.me/my/
const AUTH_TOKEN = 'YOUR_AUTH_TOKEN';

const makeLineNotifyClient = () => {
  return axios.create({
    method: 'post',
    maxBodyLength: Infinity,
    baseURL: LINE_NOTIFY_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
};

const parseArgs = (args: string[]) => {
  // [所在地震度, 震波抵達秒數]
  const [intensity = '未知', arrivalTime = '未知'] = args;

  return {
    intensity,
    arrivalTime,
  };
};

const main = async (args: string[]) => {
  const { intensity, arrivalTime } = parseArgs(args);

  const lineNotifyClient = makeLineNotifyClient();

  const data = qs.stringify({
    message: `地震警報！\n所在地震度：${intensity}\n預估震波抵達時間：${arrivalTime} 秒`,
  });

  try {
    const response = await lineNotifyClient.request({ data });

    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};

const args = process.argv.slice(2);

main(args);
