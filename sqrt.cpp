#include <emscripten.h>
#include <math.h>

extern "C" {

  EMSCRIPTEN_KEEPALIVE
  double double_sqrt(double x) {
    return sqrt(x);
  }

}
