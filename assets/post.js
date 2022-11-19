//write fetch request post

var fetch = require("node-fetch");

const post = (url, data) => {
    return fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    };

post("https://metaplex.devnet.rpcpool.com/", {
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getAccountInfo",
    "params": [
      "Hs2PEGkTweiyRYbcd5GvkkajH9tvSaw6CBxy1pA6rgMx",
      {
        "encoding": "jsonParsed"
      }
    ]
  }
).then((res) => (console.log(res.body)));
