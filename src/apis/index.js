const server = 'https://test-twilio-pace.herokuapp.com/';
const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:2000'
    : process.env.NODE_ENV === 'production'
    ? server
    : null;

export const sendSms = async data => {
  const res = await fetch(`${baseURL}/api/smsMessage`, {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};
