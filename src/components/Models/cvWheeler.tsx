import React, { FC } from 'react';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionFormations from './Description/description-formations';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingsDto } from '@api/dto/trainingsDto';
import { SkillDto } from '@api/dto/skillDto';
import { ExperiencesDto } from '@api/dto/experiencesDto';
import { LanguageDto } from '@api/dto/languageDto';
import DescriptionMore from './Description/description-more';

interface CvWheelerProps {
  profil?: ProfilDto;
  trainings?: TrainingsDto[];
  experiences?: ExperiencesDto[];
  skill?: SkillDto;
  language?: LanguageDto;
  firstBgColor?: string;
  firstTextColor?: string;
  fontText?: string;
  fontTitle?: string;
  width?: number;
  height?: number;
}

const CvWheeler: FC<CvWheelerProps> = (props) => {
  const {
    profil,
    trainings,
    experiences,
    skill,
    language,
    firstBgColor,
    firstTextColor,
    fontText,
    fontTitle,
    width,
    height,
  } = props;

  return (
    <div className="font-regular text-[#191919]">
      <header className="relative">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl ml-7 leading-6">
              <h3 style={{ fontFamily: fontTitle }}>{profil?.name}</h3>
              <h5 style={{ fontFamily: fontTitle }}>{profil?.firstName}</h5>
            </div>
            <div className="flex items-center absolute -bottom-1">
              <div
                className={`${!firstBgColor && 'bg-[#ffbd59]'} w-10 py-[1px]`}
                style={{ background: firstBgColor }}
              />
              <p className="pl-2 text-[10px]" style={{ fontFamily: fontText }}>
                {profil?.title}
              </p>
            </div>
          </div>
          <div
            className={`${!firstBgColor && 'bg-[#ffbd59]'}`}
            style={{ background: firstBgColor, width: width! / 2.5, height: height! / 6 }}
          >
            <div
              className="text-[8px] flex flex-col justify-center align-middle h-full pl-3 py-[30%]"
              style={{ fontFamily: fontText }}
            >
              {contactData(profil!).map((data, index) => (
                <DescriptionContact
                  key={index}
                  icon={data.icon}
                  description={data.description!}
                  iconColor={firstTextColor}
                  textColor={firstTextColor}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-6">
        <div className="space-y-4">
          <div className="flex space-x-6">
            <div className="flex flex-col space-y-4 w-64">
              {experiences?.length! > 0 && (
                <div className="space-y-1">
                  <h3 className="text-[11px]" style={{ fontFamily: fontText }}>
                    Expériences
                  </h3>
                  <div className="space-y-3" style={{ fontFamily: fontText }}>
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
              )}

              {language?.id! !== undefined && (
                <div className="space-y-3" style={{ fontFamily: fontText }}>
                  <h3 className="text-[11px]">Langues</h3>
                  <DescriptionMore title={language?.description} />
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4 w-36">
              <div className="space-y-1" style={{ fontFamily: fontText }}>
                <h3 className="text-[11px]">Profil</h3>
                <DescriptionProfil description={profil?.about} />
              </div>

              {trainings?.length! > 0 && (
                <div className="space-y-1">
                  <h3 className="text-[11px]" style={{ fontFamily: fontText }}>
                    Formations
                  </h3>
                  <div className="space-y-3" style={{ fontFamily: fontText }}>
                    {trainings?.map((data, index) => (
                      <DescriptionFormations
                        key={index}
                        level={data?.level!}
                        schoolName={data?.schoolName!}
                      />
                    ))}
                  </div>
                </div>
              )}

              {skill?.id! !== undefined && (
                <div className="space-y-1" style={{ fontFamily: fontText }}>
                  <h3 className="text-[11px]">Compétences</h3>
                  <DescriptionMore title={skill?.description} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CvWheeler;
