import React, { FC } from 'react';
import DescriptionFormations from './Description/description-formations';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { SkillDto } from '@api/dto/skillDto';
import { LanguageDto } from '@api/dto/languageDto';
import DescriptionMore from './Description/description-more';

interface CVHarringtonProps {
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
  width?: number;
}

const CvHarrington: FC<CVHarringtonProps> = (props) => {
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
    width,
  } = props;

  return (
    <div className="h-full flex justify-between text-[#303030]">
      <aside
        className={`${!firstBgColor && 'bg-[#303030]'} ${
          !firstTextColor && 'text-white'
        } relative h-full px-4`}
        style={{ background: firstBgColor, color: firstTextColor, width: width! / 2 }}
      >
        <div
          className={`${!secondBgColor && 'bg-[#ffbd59]'} w-[1.7px] h-6 ml-1`}
          style={{ background: secondBgColor }}
        />
        <div className="text-[8px] flex flex-col h-auto pt-2" style={{ fontFamily: fontText }}>
          {contactData(profil!).map((data, index) => (
            <DescriptionContact
              key={index}
              icon={data.icon}
              description={data.description!}
              textColor={firstTextColor}
              iconColor={firstTextColor}
            />
          ))}
        </div>
        <div className="space-y-4 mt-7">
          {trainings?.length! > 0 && (
            <div className="space-y-1">
              <h3 className="text-[11px] font-normal" style={{ fontFamily: fontText }}>
                Formations
              </h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3" style={{ fontFamily: fontText }}>
                  {trainings?.map((data, index) => (
                    <DescriptionFormations
                      key={index}
                      level={data.level!}
                      schoolName={data.schoolName!}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {skill?.id! !== undefined && (
            <div className="space-y-1">
              <h3 className="text-[11px] font-normal" style={{ fontFamily: fontText }}>
                Compétences
              </h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3" style={{ fontFamily: fontText }}>
                  <DescriptionMore title={skill?.description} />
                </div>
              </div>
            </div>
          )}

          {language?.id! !== undefined && (
            <div className="space-y-1">
              <h3 className="text-[11px] font-normal" style={{ fontFamily: fontText }}>
                Langues
              </h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3" style={{ fontFamily: fontText }}>
                  <DescriptionMore title={language?.description} />
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>

      <div className="flex flex-col w-full">
        <header className="pt-5">
          <div className="text-2xl leading-6 ml-4">
            <h3 className="font-normal" style={{ fontFamily: fontTitle }}>
              {profil?.name}
            </h3>
            <h5 className="font-bold" style={{ fontFamily: fontTitle }}>
              {profil?.firstName}
            </h5>
          </div>
          <div className="flex items-center absolute mt-2">
            <div
              className={`${!secondBgColor && 'bg-[#ffbd59]'} w-5 py-[1px]`}
              style={{ background: secondBgColor }}
            />
            <p className="pl-2 font-normal text-[10px]" style={{ fontFamily: fontText }}>
              {profil?.title}
            </p>
          </div>
        </header>

        <section className="px-4 space-y-3 mt-10">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="w-full space-y-2" style={{ fontFamily: fontText }}>
                <h3 className="text-[11px] font-normal">Profil</h3>
                <div
                  className={`${!firstBgColor && 'bg-[#303030]'} w-full py-[0.3px]`}
                  style={{ background: firstBgColor }}
                />
                <DescriptionProfil description={profil?.about} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {experiences?.length! > 0 && (
              <div className="space-y-4">
                <div className="w-full space-y-2">
                  <h3 className="text-[11px] font-normal" style={{ fontFamily: fontText }}>
                    Expériences
                  </h3>
                  <div
                    className={`${!firstBgColor && 'bg-[#303030]'} w-full py-[0.3px]`}
                    style={{ background: firstBgColor }}
                  />
                  <div className="space-y-3" style={{ fontFamily: fontText }}>
                    {experiences?.map((data, index) => (
                      <DescriptionXp
                        key={index}
                        title={data.title}
                        companyName={data.companyName}
                        description={data?.jobDescription}
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

export default CvHarrington;
