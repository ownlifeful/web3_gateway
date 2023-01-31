
const dns = require('dns');
const polygon = require('polygon');

let cache = {};

const cacheTime = 300000; // 5 minutes

const resolve = (domain, callback) => {
  if (cache[domain] && cache[domain].timestamp + cacheTime > Date.now()) {
    return callback(null, cache[domain].address);
  }

  polygon.resolve(domain, (err, address) => {
    if (err) {
      return callback(err);
    }

    cache[domain] = {
      address,
      timestamp: Date.now(),
    };

    return callback(null, address);
  });
};

const server = dns.createServer((request, response) => {
  const domain = request.question[0].name;

  resolve(domain, (err, address) => {
    if (err) {
      return response.send(err);
    }

    response.answer.push({
      name: domain,
      type: 'A',
      data: address,
    });

    response.send();
  });
});

server.listen(53, '0.0.0.0', () => {
  console.log('DNS server is up and running');
});

