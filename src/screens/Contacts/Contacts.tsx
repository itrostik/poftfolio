import React from "react";
import styles from "./Contacts.module.scss";
type ContactsProps = {
  contactsRef: React.RefObject<HTMLDivElement>;
};
export default function Contacts({ contactsRef }: ContactsProps) {
  return (
    <div ref={contactsRef}>
      <div className={styles["contacts__title"]}>
        #<span>контакты</span>
      </div>
      <div className={styles["contacts"]}>
        <a href="https://t.me/itrostik">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="telegram"
            fill="#fff"
            width={50}
            height={50}
          >
            <path d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"></path>
          </svg>
        </a>
        <a href="https://github.com/itrostik">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="github"
            fill="#fff"
            width={50}
            height={50}
          >
            <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
          </svg>
        </a>
        <a href="https://vk.com/itrostik">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="vk"
            fill="#fff"
            width={50}
            height={50}
          >
            <path d="M15.07294,2H8.9375C3.33331,2,2,3.33331,2,8.92706V15.0625C2,20.66663,3.32294,22,8.92706,22H15.0625C20.66669,22,22,20.67706,22,15.07288V8.9375C22,3.33331,20.67706,2,15.07294,2Zm3.07287,14.27081H16.6875c-.55206,0-.71875-.44793-1.70831-1.4375-.86463-.83331-1.22919-.9375-1.44794-.9375-.30206,0-.38544.08332-.38544.5v1.3125c0,.35419-.11456.5625-1.04162.5625a5.69214,5.69214,0,0,1-4.44794-2.66668A11.62611,11.62611,0,0,1,5.35419,8.77081c0-.21875.08331-.41668.5-.41668H7.3125c.375,0,.51044.16668.65625.55212.70831,2.08331,1.91669,3.89581,2.40625,3.89581.1875,0,.27081-.08331.27081-.55206V10.10413c-.0625-.97913-.58331-1.0625-.58331-1.41663a.36008.36008,0,0,1,.375-.33337h2.29169c.3125,0,.41662.15625.41662.53125v2.89587c0,.3125.13544.41663.22919.41663.1875,0,.33331-.10413.67706-.44788a11.99877,11.99877,0,0,0,1.79169-2.97919.62818.62818,0,0,1,.63544-.41668H17.9375c.4375,0,.53125.21875.4375.53125A18.20507,18.20507,0,0,1,16.41669,12.25c-.15625.23956-.21875.36456,0,.64581.14581.21875.65625.64582,1,1.05207a6.48553,6.48553,0,0,1,1.22912,1.70837C18.77081,16.0625,18.5625,16.27081,18.14581,16.27081Z"></path>
          </svg>
        </a>
        <a href="mailto: rostislavsergeev.it@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            className={styles["email"]}
          >
            <path
              d="M4.16666 7.29175H45.8333C47.5 7.29175 48.9583 8.75008 48.9583 10.4167V39.5834C48.9583 41.2501 47.5 42.7084 45.8333 42.7084H4.16666C2.49999 42.7084 1.04166 41.2501 1.04166 39.5834V10.4167C1.04166 8.75008 2.49999 7.29175 4.16666 7.29175Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M44.7917 7.29175L25 21.8751L5.20834 7.29175"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.29166 42.7083V17.0833L25 30.2083L48.9583 12.5M42.7083 17.0833V42.7083"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}