// Importando dependências
const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// Configurando rede e caminho de derivação (BIP49 para Testnet)
const network = bitcoin.networks.testnet;
const path = "m/49'/1'/0'/0/0";

// Gerando frase mnemônica e seed
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando carteira HD e derivando o primeiro endereço
let root = bip32.fromSeed(seed, network);
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

// Gerando endereço Bitcoin P2PKH (Testnet)
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
}).address;

// Exibindo informações da carteira
console.log("Carteira Gerada!");
console.log("Endereço:", btcAddress);
console.log("Chave Privada:", node.toWIF());
console.log("Seed:", mnemonic);