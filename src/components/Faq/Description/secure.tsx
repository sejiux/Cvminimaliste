import React from 'react';

const Secure = () => {
  return (
    <div className="xl:px-5">
      <div className="space-y-4">
        <p>Oui, le site est sous certificat SSL</p>
        <p>
          {`Nous confions la gestion de nos paiements en ligne à Stripe & Paypal 100% Sécurisés.`}
        </p>
      </div>
    </div>
  );
};

export default Secure;
