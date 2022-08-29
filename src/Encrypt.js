// hash计算
const sha256 = require("crypto-js/sha256");
const ecLib = require("elliptic").ec;
const ec = new ecLib("secp256k1");