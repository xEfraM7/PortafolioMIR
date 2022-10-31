// Hay un error para los correos automatizados

import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";
const VITE_APP_MAILCHIMP_URL = import.meta.env.VITE_APP_MAILCHIMP_URL;
const VITE_APP_MAILCHIMP_U = import.meta.env.VITE_APP_MAILCHIMP_U;
const VITE_APP_MAILCHIMP_ID = import.meta.env.VITE_APP_MAILCHIMP_ID;

export const MailchimpForm = () => {
  const postUrl = `${VITE_APP_MAILCHIMP_URL}?u=${VITE_APP_MAILCHIMP_U}&id=${VITE_APP_MAILCHIMP_ID}`;
  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => 
        <Newsletter 
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}/>}
      />
    </>
  );
};

