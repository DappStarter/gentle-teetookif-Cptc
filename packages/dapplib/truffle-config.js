require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan riot night purse hunt kitten surge sniff'; 
let testAccounts = [
"0xd0a45024ade41dfa648cb1e5abc0adac562fda9f198769f3177a490c1e51213c",
"0x3f2127201a3e750090a5b1043a6523ba0897e246c9bc4be3b7e5c8a1b7860325",
"0x00b7be985365e5d7a8e12b0d17d36c943dde5b5f02778852cc1dbbca977e7749",
"0xe3ac95ce09ca7bb05389deaadf29d19c4009dc45ce318b648ae69c04a5fb70d1",
"0x2085a6b20d7e304d37d14a165bf48126663d2c44fca519b388171b81e323963c",
"0x6a11ba591eb7e1155bd0ed18d9ce0a9f94424fc0e1c9e5d0f7f8b0d35a511aa9",
"0x08df9a9cb3e012e299baedde87254f67be357a99e8b6752b0fa71f747c2393dc",
"0xdc3386613081d0bbb039aef81752ad84db48f5654819b52fe1b6d51417df9ece",
"0x96e89a26a9f8bfe659df9d546c3ab26390990e17615454a5ff0c7f120f76c5f8",
"0x728b997e3655920f1adc328826f5a99f7679fd90cdcc9900abd3751035076511"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


