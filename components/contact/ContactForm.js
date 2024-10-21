import { storeContact } from "@/lib/storeContact";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  return (
    <form action={storeContact}>
      <div>
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>
      <div>
        <label htmlFor="message">message</label>
        <textarea id="message" name="message" rows={10} required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
