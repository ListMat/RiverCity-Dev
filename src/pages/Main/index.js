import React from "react";
import "./styles.css";

export default function Main() {
  return (
    <div className="wrapper-container">
      <div className="chat-container">
        <div id="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <div id="conversation-list">
          <div className="conversation active">
            <img
              src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
              alt="Mateus Henrique"
            />
            <div className="title-text">
              Mateus Henrique asdlhfokdshfdsdhfdsj djsahdkjhsfk
            </div>
            <div className="created-date">out 22</div>
            <div className="conversation-message">
              eai meu rei blz ?ashfodhsfkhdsklfhhgsdajlsdjf
              dslkfhlkdshflhdflfhdfs
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="conversation">
            <img
              src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
              alt="Mateus Henrique"
            />
            <div className="title-text">
              Mateus Henrique asdlhfokdshfdsdhfdsj djsahdkjhsfk
            </div>
            <div className="created-date">out 22</div>
            <div className="conversation-message">
              eai meu rei blz ?ashfodhsfkhdsklfhhgsdajlsdjf
              dslkfhlkdshflhdflfhdfs
            </div>
          </div>
          {/* <!-- 3 --> */}
          <div className="conversation">
            <img
              src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
              alt="Mateus Henrique"
            />
            <div className="title-text">
              Mateus Henrique asdlhfokdshfdsdhfdsj djsahdkjhsfk
            </div>
            <div className="created-date">out 22</div>
            <div className="conversation-message">
              eai meu rei blz ?ashfodhsfkhdsklfhhgsdajlsdjf
              dslkfhlkdshflhdflfhdfs
            </div>
          </div>
          {/* <!-- 4 --> */}
          <div className="conversation">
            <img
              src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
              alt="Mateus Henrique"
            />
            <div className="title-text">
              Mateus Henrique asdlhfokdshfdsdhfdsj djsahdkjhsfk
            </div>
            <div className="created-date">out 22</div>
            <div className="conversation-message">
              eai meu rei blz ?ashfodhsfkhdsklfhhgsdajlsdjf
              dslkfhlkdshflhdflfhdfs
            </div>
          </div>
          {/* <!-- 5 --> */}
          <div className="conversation">
            <img
              src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
              alt="Mateus Henrique"
            />
            <div className="title-text">
              Mateus Henrique asdlhfokdshfdsdhfdsj djsahdkjhsfk
            </div>
            <div className="created-date">out 22</div>
            <div className="conversation-message">
              eai meu rei blz ?ashfodhsfkhdsklfhhgsdajlsdjf
              dslkfhlkdshflhdflfhdfs
            </div>
          </div>
        </div>
        <div id="new-message-container">
          <a href="#">+</a>
        </div>
        {/* <!-- chat title --> */}

        <div id="chat-title">
          <span>Mateus Henrique</span>
          <img src="./assets/excluir.svg" alt="" srcset="" />
        </div>
        <div id="chat-message-list">
          <div className="message-row you-message">
            <div className="message-container">
              <div className="message-text">eai men</div>
              <div className="message-time">out 52</div>
            </div>
          </div>
          {/* <!-- // --> */}
          <div className="message-row other-message">
            <div className="message-container">
              <img
                src="https://avatars3.githubusercontent.com/u/34573490?s=460&u=4c559c9b57ec51f6880b54f139c5c946ecd3241b&v=4"
                alt="Mateus"
              />
              <div className="message-text">
                ok menok men ok menok menok menok menok menok menok men ok menok
                menok menok menok menok menok men ok menok menok menok menok
                menok menok menok menok men
              </div>
              <div className="message-time">out 52</div>
            </div>
          </div>
        </div>
        <div id="chat-form">
          <img src="./assets/attachment.svg" alt="add attachment " />
          <input type="text" placeholder="type a message" />
        </div>
      </div>
    </div>
  );
}
