import "./style.scss";

export default function ModalMessage({ message, openModal, setOpenModal }) {
  if (openModal) {
    return (
      <div className="modal">
        <div className="modal__content">
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <button className="content__close" onClick={() => setOpenModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="content__text-modal">{message}</p>
        </div>
      </div>
    );
  }
}
