import React, { FC } from 'react';
import DescriptionFormations from './Description/description-formations';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { SkillDto } from '@api/dto/skillDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { LanguageDto } from '@api/dto/languageDto';
import DescriptionMore from './Description/description-more';

interface CVMunsonProps {
  profil?: ProfilDto;
  trainings?: TrainingsDto[];
  experiences?: ExperiencesDto[];
  skill?: SkillDto;
  language?: LanguageDto;
  firstBgColor?: string;
  secondBgColor?: string;
  firstTextColor?: string;
  secondTextColor?: string;
  fontText?: string;
  fontTitle?: string;
}

const CvMunson: FC<CVMunsonProps> = (props) => {
  const {
    profil,
    trainings,
    experiences,
    skill,
    language,
    firstBgColor,
    secondBgColor,
    firstTextColor,
    secondTextColor,
    fontText,
    fontTitle,
  } = props;

  return (
    <div className="h-full px-3 py-5 flex justify-center relative z-0 text-[#303030]">
      <div className="flex flex-col w-64 max-w-[256px] justify-between">
        <div
          className={`${!secondBgColor && 'bg-[#ffbd59]'} w-4 h-[110px] absolute top-0`}
          style={{ background: secondBgColor }}
        />
        <div
          className="text-[8px] text-[#303030] flex flex-col ml-1 mt-2 z-20"
          style={{ fontFamily: fontText }}
        >
          {contactData(profil!).map((data, index) => (
            <DescriptionContact
              key={index}
              icon={data.icon}
              description={data.description!}
              iconColor={secondTextColor}
            />
          ))}
        </div>
        <aside
          className={`${!firstBgColor && 'bg-[#303030]'} relative h-[82%] px-4 py-3 w-[180px]`}
          style={{ background: firstBgColor, color: firstTextColor }}
        >
          <div className="space-y-4">
            {trainings?.length! > 0 && (
              <div
                className="space-y-1"
                style={{ color: !firstTextColor ? 'white' : firstTextColor }}
              >
                <h3
                  className="text-[12px] tracking-[5px] font-medium uppercase"
                  style={{
                    fontFamily: fontText,
                  }}
                >
                  Formations
                </h3>
                <div className="w-5 h-[0.3px] bg-white" />
                <div className="space-y-3 pt-2" style={{ fontFamily: fontText }}>
                  {trainings?.map((data, index) => (
                    <DescriptionFormations
                      key={index}
                      level={data.level!}
                      schoolName={data.schoolName!}
                    />
                  ))}
                </div>
              </div>
            )}

            {skill?.id! !== undefined && (
              <div
                className="space-y-1"
                style={{ color: !firstTextColor ? 'white' : firstTextColor }}
              >
                <h3
                  className="text-[12px] tracking-[5px] font-medium uppercase"
                  style={{
                    fontFamily: fontText,
                  }}
                >
                  Compétences
                </h3>
                <div className="w-5 h-[0.3px] bg-white" />
                <div className="space-y-3 pt-2" style={{ fontFamily: fontText }}>
                  <DescriptionMore title={skill?.description} />
                </div>
              </div>
            )}

            {language?.id! !== undefined && (
              <div
                className="space-y-1"
                style={{ color: !firstTextColor ? 'white' : firstTextColor }}
              >
                <h3
                  className="text-[12px] tracking-[5px] font-medium uppercase"
                  style={{
                    fontFamily: fontText,
                  }}
                >
                  Langues
                </h3>
                <div className="w-5 h-[0.3px] bg-white" />
                <div className="space-y-3 pt-2" style={{ fontFamily: fontText }}>
                  <DescriptionMore title={language?.description} />
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      <div className="flex flex-col w-full">
        <header
          className={`${!firstBgColor && 'bg-[#303030]'} relative py-5`}
          style={{ background: firstBgColor, color: !firstTextColor ? 'white' : firstTextColor }}
        >
          <div className="text-2xl uppercase leading-6 flex space-x-2 p-5 tracking-[5px]">
            <h3 className="font-normal" style={{ fontFamily: fontTitle }}>
              {profil?.name}
            </h3>
            <h5 className="font-normal" style={{ fontFamily: fontTitle }}>
              {profil?.firstName}
            </h5>
          </div>
          <div
            className={`${!secondBgColor && 'bg-[#ffbd59]'} w-44 h-8 absolute mt-1`}
            style={{ background: secondBgColor }}
          >
            <p
              className="text-[12px] flex items-center justify-start pl-5 h-full"
              style={{ color: !secondTextColor ? 'white' : secondTextColor, fontFamily: fontText }}
            >
              {profil?.title}
            </p>
          </div>
        </header>

        <section className="px-4 space-y-3 mt-10">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="w-full space-y-1">
                <h3
                  className="text-[12px] tracking-[5px] font-medium uppercase"
                  style={{ fontFamily: fontText }}
                >
                  Profil
                </h3>
                <div
                  className={`${!firstBgColor && 'bg-[#303030]'} w-5 h-[0.3px]`}
                  style={{ background: firstBgColor }}
                />
                <div className="pt-1" style={{ fontFamily: fontText }}>
                  <DescriptionProfil description={profil?.about} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {experiences?.length! > 0 && (
              <div className="space-y-4">
                <div className="w-full space-y-1">
                  <h3
                    className="text-[12px] tracking-[5px] font-medium uppercase"
                    style={{ fontFamily: fontText }}
                  >
                    Expériences
                  </h3>
                  <div
                    className={`${!firstBgColor && 'bg-[#303030]'} w-5 h-[0.3px]`}
                    style={{ background: firstBgColor }}
                  />
                  <div className="space-y-3 pt-1" style={{ fontFamily: fontText }}>
                    {experiences?.map((data, index) => (
                      <DescriptionXp
                        key={index}
                        title={data.title}
                        companyName={data.companyName}
                        description={data.jobDescription}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CvMunson;
