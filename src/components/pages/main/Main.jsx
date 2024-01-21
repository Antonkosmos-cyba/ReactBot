import React from "react";
import "./main.css";
import Ram from "./horizontally-centered-vertical-decoration.png";

function Main() {
  return (
    <>
      <div class="body">
        <div class="outer-border">
          <div class="mid-border">
            <div class="inner-border">
              <img class="vertical-decoration top" src={Ram}></img>
              <img class="vertical-decoration bottom" src={Ram}></img>

              <div class="container">
                <div class="row">
                  <div class="col-lg-12 text-center">
                    <p>
                      Мы рады сообщить Вам, что 26 июня 2024 года состоится
                      праздничный вечер, посвященный нашему
                      <br /> бракосочетанию.
                      <br />
                      Мы от всего сердца просим Вас провести этот незабываемый
                      день вместе с нами.
                      <br />
                      Иван и Елизавета.
                      <br />
                      Праздник состоится по адресу: ул. Вершина, д. 24 кв. 26
                      <br />в 18.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
