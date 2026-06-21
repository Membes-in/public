import PrimaryButton from "@/globalComponents/buttons/primaryButton/PrimaryButton";
import styles from "./ConfirmationModal.module.css";
import accepted from "../../icons/accepted.svg";
import Image from "next/image";

interface Props {
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function ConfirmationModal({ setIsModalActive }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={`bg-leaf-green ${styles.logo}`}>
          <Image src={accepted} alt="" height={16} width={16} />
        </div>
        <div>
          <h1>Thanks for reaching out!</h1>
          <hr className={styles.divider} />
          <p>
            Your message has been prepared in your email app so you can send it
            directly to the Membes team without relying on a backend form
            service.
          </p>
        </div>
        <PrimaryButton onClick={() => setIsModalActive(false)}>
          Close
        </PrimaryButton>
      </div>
    </div>
  );
}

export default ConfirmationModal;
