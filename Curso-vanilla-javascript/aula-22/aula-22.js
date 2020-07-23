//TOGGLE

(function (window, document) {
  "use strict";

  let btn = document.querySelector("#btn")
  let menu = document.querySelector(".menu")
  let body = document.querySelector("body")

  function toggle(event) {
    //verifica se uma determinada classe existe
    if (menu.classList.contains("show")) {
      //se já existir eu removo da lista de classes
      menu.classList.remove("show")
      //setando o src do botão para um menu aberto
      btn.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8jHyAAAABPTU7W1dUcGBkZExVqaGgfGxwHAAAbFhf29vYQCAofGhsUDhDy8vKxsLAxLS7o6OgMAAWOjI18enteXFxFQ0PCwcG3trbq6urc3NxVU1OWlJSHhoZycHClpKVCP0A5Nje9vLzJyMiAfn5samooJCWopqcI4FBKAAAC1UlEQVR4nO3c2XaqQBCFYWknhhZxwijBIdHE93/CYBYSxT7nisK1iv+7rQvYgEiPvR4AAAAAAAAAAAAAAAAAAAAAAAAAAAAANeaDLHr1OciJkndzNcvnrz4VGZuZCb0r3y6WGm/kzvheJVhPa+V5nr73RaTLQSsBV8a7F88e7+LO2FE4lBCG1uxbeGQOjwGLiOl9Oa2Xm2WP9UemcVP7dFSz+SvvAtGARcT03+fWjN1zwslHVR3I3sEr8ymc8DlgcdDqBbCPxRP6M9mAzptkl2U1kg9YXE/Z/+BPV8LRuKxm8g9pkfBNNOFh4Tjm5FhW39pIGCTtJxyuy+pJQUL9T6n7TZPfyhPfUW464VY0Yc93ZDDZrXqWf5mG6/+dXgPy54+WsF9VM+lPmuJynoQTRs838f6HkUv/EoO9cMCicVjPsHg45sqI/hRN2kLjonabbP+xfPFMPJIRB3HuPqeGHcoW/pVvxvWLOt2cv8YiVonwa7Ry6pv491kMjXdp6ZhtO50nQRDYNNHYS1OZq04HAAA6Ibssv84H6cbo62w+TGBH8cIEufhAySts+3+t3MB77vmKsoGMrKXLmX2P7hrAE1NrP0W7mTUyFrN9Gw3E6XfoPXgcDBoYK9eN4cfiI0+FtN5h6Id3F3Yg203j+fIRHR339lxVo2PoOK1GI4bSD2rfEcFUb4BEvlvf7mQDTl0RTDVWsh6KJ/SMbELn+Fm8KqvbVkZmZL8zEle3/fC9rLYyunY/MUJA7hrH929TFdoZIZXtwNR/D/X/DvW/S/X/H3bgm0b/d2kH2hb624cdaOP39PfTXGnvawMAAJ2he06U9nlt6ucmqp9fqn6OsPp53vrn6utfb6F+zYz+dU/6167pX3+ofw2p/qdU/1pu/evxO7Cngv59MfTvbdKB/Wk6sMdQB/aJ6sBeX79079cGAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNQPclNNNX+giAMAAAAASUVORK5CYII=")
      body.style.backgroundColor = "white"
    } else {
      //se não existir eu adiciono a lista de classes
      menu.classList.add("show")
      //setando o src do botão para um menu fechado
      btn.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX///8dHR0AAABaWlpeXl5ZWVlWVlZgYGCYmJgQEBBiYmJQUFCUlJRTU1NtG+3ZAAABzElEQVR4nO3b4XKiMBQGUAUUbev7v+7KCoO2asGBdvPtOX+dzOTOF0iA62YDAAAAAAAAAAAAAAAAAAAAAAAw1aF+YVB9WHweqzlUVTN7UFNVxZR4qLbb6m3moLYbVEiJH+e5nmc7L8XmMqiMEt//TnZbtTPGtP2Y99VmtahTP93pKTb9iNOKs1rUbmaJQ4G7VWe1qNOshdqWlmBnTooFJtjZT05xSHD/A7Na1H5iik2pBY4L9XmKbZlL9GLKplGXeJMZfZ/isERfOaj/E75LseBrcPB80yg+wc6zrT8gwU79MKfHvxTm0UIt9CRzz+5uVnVOgWMx1ylG3GRG+y/l1Bk3mdHnFMMS7Nwew+MS7FyneO+6DDCmGLRN3OqTO1bHyAQ7/b64jbvJjK5KzCzwvFCPfYHHwCV6MYRY/fZE1tKkZ1inX4fx99L4/fDrmSbqVHp7Fg18svj8bBGYYvzzYfwzfvx7mvh3bfHvS+PfeT/7+hSxacR/e4r/fhj/DXjKd/yiU4zvxYjvp4nviYrva4vvTYzvL43vER76vOd0678V1ed9iO/Vz/+/xX/wn5nN5uOVo/SuoAIBAAAAAAAAAAAAAAAAAAAAAIBf9wdHngj2Vd+JCAAAAABJRU5ErkJggg==")
      body.style.backgroundColor = "black"
    }
  }

  btn.addEventListener("click", toggle)

})(window, document)