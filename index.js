const firstTime = Date.now();
const fs = require('fs');

const source = fs.readFileSync('./a.out.wasm');

const tempRet0 = 0;

const setTempRet0 = function(value) {
  tempRet0 = value;
}

const getTempRet0 = function() {
  return tempRet0;
}

function enlargeMemory() {
  abortOnCannotGrowMemory();
}

const TOTAL_MEMORY = 16777216;

function getTotalMemory() {
  return TOTAL_MEMORY;
}

function abortOnCannotGrowMemory() {
  throw new Error('Cannot enlarge memory arrays');
}

function enlargeMemory() {
  abortOnCannotGrowMemory();
}

function _emscripten_memcpy_big(dest, src, num) {
  new Uint32Array(typedArray).set(HEAPU8.subarray(src, src+num), dest);
  return dest;
}


const env = {
    memory: new WebAssembly.Memory({
      initial: 256,
      maximum: 256,
    }),
    table: new WebAssembly.Table({
      initial: 10,
      maximum: 10,
      element: 'anyfunc',
    }),
    DYNAMICTOP_PTR: 4144,
    tempDoublePtr: 4080,
    STACKTOP: 4160,
    STACK_MAX: 5247040,
    __memory_base: 1024,
    __table_base: 0,
    setTempRet0,
    enlargeMemory,
    getTotalMemory,
    abortOnCannotGrowMemory,
    abortStackOverflow: () => { throw new Error('overflow'); },
    ___lock: () => {},
    ___setErrNo: () => {},
    ___syscall140: () => {},
    ___syscall145: () => {},
    ___syscall146: () => {},
    ___syscall221: () => {},
    ___syscall5: () => {},
    ___syscall54: () => {},
    ___syscall6: () => {},
    ___unlock: () => {},
    nullFunc_ii: () => {},
    nullFunc_iiii: () => {},
    _emscripten_memcpy_big,
  }


const global = {
  'NaN': NaN,
  'Infinity': Infinity
};

const typedArray = new Uint8Array(source);

const run = () => WebAssembly.instantiate(typedArray, {
  env,
  global,
}).then(result => {

  console.log(result.instance.exports._double_sqrt(9));
  console.log(result.instance.exports._double_sqrt(16));
  console.log(result.instance.exports._double_sqrt(15));
  console.log("timestamp", Date.now() - firstTime);
}).catch(e => {
  console.log(e);
});

run();
