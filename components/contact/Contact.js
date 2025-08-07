import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import Reveal from "../util/Reveal";
import styles from "./Contact.module.css";

//TODO: Add contact form

const width = {
  width: "100%",
};

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.wrapper}>
        <Reveal width={width}>
          <h4 className={styles.h4}>
            Contact<span className={styles.span}>.</span>
          </h4>
        </Reveal>
        <Reveal width={width}>
          <p className={styles.para}>
            Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/jakub-dejworek-41214816a/"
              target="_blank"
              className={styles.link}
            >
              Linkedin
            </Link>{" "}
            if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width={width}>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJpFGhfbpMDnzGqVDPHTdtDmZrLMnCjlfRcPslhRLgXFLPQhHlMVmRvsMkrtQwTNgwfPg"
            target="_blank"
            className={styles.emailLink}
          >
            <div className={styles.emailDiv}>
              <AiFillMail />
              <span>jakubdejworek@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
