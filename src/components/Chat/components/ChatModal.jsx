import { useState } from "react";
import "../style.scss";
import expandIcon from "../../../assets/expandir.png";
import minimizeIcon from "../../../assets/retrair.png";
import { sendMessage } from "../../../services/api";
import { formatedData } from '../../../utils/masks';

export default function ChatModal({ visibility }) {
  const [expand, setExpand] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [attDate, setAttDate] = useState('');

  const send = async () => {
    setAttDate(new Date())
    setMessage("");
    const newMessages = [...messages];
    newMessages.push({ by: "client", message });
    setMessages(newMessages);
    setTimeout(async () => {
      const response = await sendMessage({ question: message });
      setMessages([...messages, { by: "client", message }, { by: "atendent", message: response }]);
    }, 2000)
  };

  return (
    <div
      className="chat"
      style={{
        height: expand ? "612px" : "361px",
        top: expand ? "2.8vh" : "35vh",
        visibility: visibility ? "hidden" : "visible",
        opacity: visibility ? 0 : 1,
      }}
    >
      <div className="chat__header">
        <div className="chat__perfil">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
          >
            <path
              d="M1 13L7 7L1 1"
              stroke="#5DF5D6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 15H17"
              stroke="#5DF5D6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className="header__button" onClick={() => setExpand(!expand)}>
          {expand ? "Recolher" : "Expandir"}
          <img width="12px" src={expand ? minimizeIcon : expandIcon} alt="" />
        </button>
      </div>
      <div className="chat__help">
        <p className="help__text">🖖 Como posso ajudar?</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="chat__box">
          {messages.length ? (
            <div className="box__all__messages">
              <div
                className="div__scroll"
                style={{
                  maxHeight: expand ? "369px" : "118px",
                  overflow: "auto",
                  transition: "300ms",
                }}
              >
                <div className="box__date">
                  <p className="date__text">{formatedData(attDate)}</p>
                </div>
                {messages.map((mes, index) => (
                  <div
                    key={index}
                    className="box__message"
                    style={{
                      justifyContent: mes.by === "client" ? "end" : "start",
                    }}
                  >
                    <span
                      className="message__text"
                      style={{
                        borderRadius:
                          mes.by === "client"
                            ? "16px 16px 0px 16px"
                            : "16px 16px 16px 0",
                        backgroundColor:
                          mes.by === "client" ? "none" : "#EFEFEF",
                      }}
                    >
                      {mes.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="box__messages">
              <p className="messages__history">
                Role para cima{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M4 4L6.5 1.5L9 4"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 9.5H4.5C5.03043 9.5 5.53914 9.28929 5.91421 8.91421C6.28929 8.53914 6.5 8.03043 6.5 7.5V1.5"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                para ver o histórico
              </p>
            </div>
          )}
        </div>
        <div className="chat__input-button">
          <input
            className="chat__input"
            type="text"
            placeholder="Digite sua dúvida"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
          <button
            className="chat__button--send"
            onClick={send}
            onMouseEnter={() => {
              setRotate(true);
            }}
            onMouseLeave={() => setRotate(false)}
          >
            <svg
              className="send__image"
              style={{ transform: rotate ? "rotate(-45deg)" : "none" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M17 1L8.19995 9.8"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17 1L11.4 17L8.2 9.8L1 6.6L17 1Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
