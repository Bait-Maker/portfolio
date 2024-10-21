"use server";

import { sendContactForm } from "./api";

export const storeContact = async (formData) => {
  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };
};
