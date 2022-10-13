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
  secondBgColor?: string;
  firstTextColor?: string;
  secondTextColor?: string;
}

const CvWheeler: FC<CvWheelerProps> = (props) => {
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
  } = props;

  return (
    <div className="font-regular" style={{ color: secondTextColor }}>
      <header className="relative">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl ml-7 leading-6">
              <h3 className="font-PoppinsRegular">{profil?.name}</h3>
              <h5 className="font-PoppinsBold">{profil?.firstName}</h5>
            </div>
            <div className="flex items-center absolute -bottom-1">
              <div
                className={`${!secondBgColor && 'bg-[#ffbd59]'} w-10 py-[1px]`}
                style={{ background: secondBgColor }}
              />
              <p className="pl-2 font-PoppinsRegular text-[10px]">{profil?.title}</p>
            </div>
          </div>
          <div
            className={`${!secondBgColor && 'bg-[#ffbd59]'} w-36 h-24`}
            style={{ background: secondBgColor }}
          >
            <div
              className="text-[8px] flex flex-col justify-center align-middle h-full pl-3"
              style={{ color: secondTextColor }}
            >
              {contactData(profil!).map((data, index) => (
                <DescriptionContact key={index} icon={data.icon} description={data.description!} />
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
                  <h3 className="text-[11px] font-PoppinsRegular">Expériences</h3>
                  <div className="space-y-3">
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
                <div className="space-y-3">
                  <h3 className="text-[11px] font-PoppinsRegular">Langues</h3>
                  <DescriptionMore title={language?.description} />
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-4 w-36">
              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular">Profil</h3>
                <DescriptionProfil description={profil?.about} />
              </div>

              {trainings?.length! > 0 && (
                <div className="space-y-1">
                  <h3 className="text-[11px] font-PoppinsRegular">Formations</h3>
                  <div className="space-y-3">
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
                <div className="space-y-1">
                  <h3 className="text-[11px] font-PoppinsRegular">Compétences</h3>
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
