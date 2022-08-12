import React from 'react';

const FiveSteps = () => {
  return (
    <div className="xl:px-5">
      <h3>
        {` Il y a plusieurs facteurs sur le CV qui déterminera l'envie du recruteur de vous recruter.`}
      </h3>
      <br />
      <ol>
        <li>1. Les couleurs</li>
        <li>2. L{"'"}organisation</li>
        <li>3. La lisibilité</li>
        <li>4. Les polices utilisées</li>
        <li>5. Le titre</li>
        <li>6. Vos expériences, formations et compétences</li>
      </ol>
      <div className="space-y-4">
        <p />
        <p>
          {`Si les cinq étapes ne sont pas validées par le recruteur, il ne prendra pas la
          peine de continuer.`}
        </p>
        <p>
          {`Il lui faut seulement 3 secondes pour visualiser votre cv et décider si vous avez votre
          place ou non dans l'entreprise.`}
        </p>
        <p>
          {`C'est un peu comme un site web, nous devons penser au design, car si l'utilisateur n'aime
          pas le site, le trouve pas fluide ni compréhensible alors il quittera le site avant même
          d'avoir vu le contenu.`}
        </p>
        <p>{`C'est exactement la même chose avec votre CV.`}</p>
      </div>
    </div>
  );
};

export default FiveSteps;
