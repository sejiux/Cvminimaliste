import React, { useState } from 'react';
import Layout from 'components/layout';
import Seo from 'components/seo';
import Header from 'components/Header';
import Card from 'components/Card';
import { isMobile } from 'utils/isMobile.utils';
import { cardPresentationData } from 'utils/data/card.utils';
import Description from 'components/Description/';
import Navbar from 'components/Navbar/Navbar';
import Faq from 'components/Faq/faq';
import { faqListDate } from 'utils/data/faq.utils';
import CV1 from 'images/cv/1.png';
import CV2 from 'images/cv/2.png';
import CV3 from 'images/cv/4.png';
import Footer from 'components/Footer';
import Logo from 'images/logo.png';
import Menu from 'images/menu.svg';
import { navigate } from 'gatsby';

const IndexPage = () => {
  const [selected, setSelected] = useState(0);
  const isMobiles = isMobile();

  const seo = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    description: 'A simple starter with SEO optimization to quickly develop with Gatsby',
    name: 'Sayro Dev',
    url: 'https://gatsby-starter-seo.netlify.app/',
    logo: 'https://gatsby-starter-seo.netlify.app/images/logo.png',
  };

  return (
    <Layout>
      <Seo title="Accueil" schemaMarkup={seo} />

      <Navbar
        logo={Logo}
        menu={<Menu className="block lg:hidden h-auto" />}
        buttonTitle="Créer un nouveau CV"
        handleClick={() => navigate('/create')}
        navbarLink={[
          {
            url: '#modedemploi',
            name: `Mode d'emploi`,
          },
          {
            url: '#exemples',
            name: `Exemples`,
          },
          {
            url: '#faq',
            name: `FAQ`,
          },
          {
            url: '#support',
            name: `Support`,
          },
        ]}
      />

      <Header
        subtitle="Simple et rapide, choisissez, remplissez et téléchargez votre modèle favoris."
        buttonTitle="Créer un nouveau CV"
      >
        <h1 className="mx-auto text-3xl xs:text-4xl lg:text-5xl 2xl:text-6xl 4xl:text-8xl md:w-[580px] lg:w-full sm:leading-[50px] md:leading-[60px] lg:leading-[60px] 4xl:leading-[80px] font-Frontage font-normal">
          <strong>
            Créez votre CV <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014b8e] to-[#049be7] font-Frontage font-bold">
              minimaliste
            </span>
          </strong>
        </h1>
      </Header>

      <section id="modedemploi" className="bg-gradient-to-r from-[#014b8e] to-[#049be7] w-full">
        <div className="py-20 lg:py-24 lg:w-[90%] 2xl:w-[60%] mx-auto text-white">
          <Description title="Comment ça marche ?" />
          <div className="flex flex-col lg:flex-row lg:justify-around space-y-5 items-center px-8 lg:px-0 lg:items-baseline lg:space-x-5 pt-9 text-[#191919]">
            {cardPresentationData.map((data, index) => (
              <Card
                key={index}
                icon={data.iconSVG}
                title={data.title}
                subtitle={data.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section
        id="exemples"
        className="bg-[#24445c] text-white h-screen mx-auto text-center py-20 lg:py-24 px-5 xs:px-8"
      >
        <Description title="Exemples de nos modèles" />
        <div className="w-max flex mx-auto overflow-x-hidden justify-center align-baseline items-center mt-10">
          <div className="flex flex-nowrap snap-x space-x-10">
            <div className="snap-center inline-block border-2 border-[#24445c] shadow-lg shadow-[#24445c] hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <img src={CV2} alt="" width="340px" height="10px" className="max-w-xs" />
            </div>
            <div className="snap-center inline-block border-2 border-[#24445c] shadow-lg shadow-[#24445c] hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <img src={CV1} alt="" width="340px" height="10px" className="max-w-xs" />
            </div>
            <div className="snap-center inline-block border-2 border-[#24445c] shadow-lg shadow-[#24445c] hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden">
              <img src={CV3} alt="" width="340px" height="10px" className="max-w-xs" />
            </div>
          </div>
        </div>
      </section> */}

      <section id="faq" className="bg-[#F7FAFC] w-full">
        <div className="py-20 lg:py-24 w-[80%] md:w-[70%] lg:w-[80%] 2xl:w-full mx-auto">
          <Description title="FAQ" />
          <div className="xl:w-[700px] mx-auto mt-10">
            {faqListDate.map((data, index) => (
              <Faq
                key={index}
                title={data.title}
                handleClick={() => setSelected(index)}
                value={selected}
                onSelected={index}
              >
                {selected === index && (
                  <div className="pt-10 pb-5 font-Poppins font-extralight">{data.description}</div>
                )}
              </Faq>
            ))}
          </div>
        </div>
      </section>

      <section
        id="support"
        className="h-[auto] mx-auto text-center py-20 lg:py-24 px-5 xs:px-8 bg-gradient-to-r from-[#014b8e] to-[#049be7] text-white"
      >
        <Description
          title="Vous avez d'autres questions ?"
          subtitle="Une équipe dédiée au Support est disponible pour répondre à toutes vos questions."
          button
        />
      </section>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
