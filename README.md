# node-wasm

You can simple run: node index.js after you have pulled the git repo.

you can get documentation from http://kripken.github.io/emscripten-site/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html

For compiling c/c++ to wasm I used emscripten, you can install it from: http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html
Next step you compile the c/c++ without optimization in shell: emcc [name.cpp] and the output will be an wasm file and js file. For this project I used only wasm file 
