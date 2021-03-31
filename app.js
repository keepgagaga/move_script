const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

let type = process.argv[2];

if (type === 'react') {
    shell.cp('-R', path.resolve(__dirname, '../temp-react/build'), path.resolve(__dirname, '../saulzh.github.io/dist/react'));
    console.log('react move success');
} else if (type === 'vue') {
    shell.cp('-R', path.resolve(__dirname, '../template-vue/dist'), path.resolve(__dirname, '../saulzh.github.io/dist/vue'));
    console.log('vue move success');
} else if (type === 'vue3') {
    shell.cp('-R', path.resolve(__dirname, '../template-vue3/dist'), path.resolve(__dirname, '../saulzh.github.io/dist/vue3'));
    console.log('vue3 move success');
}







