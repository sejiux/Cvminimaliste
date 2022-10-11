import React, { FC } from 'react';
import DescriptionFormations from './Description/description-formations';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionLists from './Description/description-more';
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
  firstColor?: string;
  secondColor?: string;
}

const CvHarrington: FC<CVHarringtonProps> = (props) => {
  const { profil, trainings, experiences, skill, language, firstColor, secondColor } = props;

  return (
    <div className="h-full flex justify-between text-[#303030]">
      <aside
        className={`${!firstColor && 'bg-[#303030]'} relative h-full w-44 px-4 text-white`}
        style={{ background: firstColor }}
      >
        <div
          className={`${!secondColor && 'bg-[#ffbd59]'} w-[1.7px] h-6 ml-1`}
          style={{ background: secondColor }}
        />
        <div className="text-[8px] text-white flex flex-col h-auto pt-2">
          {contactData(profil!).map((data, index) => (
            <DescriptionContact key={index} icon={data.icon} description={data.description!} />
          ))}
        </div>
        <div className="space-y-4 mt-7">
          {trainings?.length! > 0 && (
            <div className="space-y-1">
              <h3 className="text-[11px] font-PoppinsRegular">Formations</h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3">
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
              <h3 className="text-[11px] font-PoppinsRegular">Compétences</h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3">
                  <DescriptionMore title={skill?.description} />
                </div>
              </div>
            </div>
          )}

          {language?.id! !== undefined && (
            <div className="space-y-1">
              <h3 className="text-[11px] font-PoppinsRegular">Langues</h3>
              <div className="space-y-2">
                <div className="w-10 h-[0.3px] bg-white absolute left-0" />
                <div className="space-y-3 pt-3">
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
            <h3 className="font-PoppinsRegular">{profil?.name}</h3>
            <h5 className="font-PoppinsBold">{profil?.firstName}</h5>
          </div>
          <div className="flex items-center absolute mt-2">
            <div
              className={`${!secondColor && 'bg-[#ffbd59]'} w-5 py-[1px]`}
              style={{ background: secondColor }}
            />
            <p className="pl-2 font-PoppinsRegular text-[10px]">{profil?.title}</p>
          </div>
        </header>

        <section className="px-4 space-y-3 mt-10">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="w-full space-y-2">
                <h3 className="text-[11px] font-PoppinsRegular">Profil</h3>
                <div
                  className={`${!firstColor && 'bg-[#303030]'} w-full py-[0.3px]`}
                  style={{ background: firstColor }}
                />
                <DescriptionProfil description={profil?.about} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {experiences?.length! > 0 && (
              <div className="space-y-4">
                <div className="w-full space-y-2">
                  <h3 className="text-[11px] font-PoppinsRegular">Expériences</h3>
                  <div
                    className={`${!firstColor && 'bg-[#303030]'} w-full py-[0.3px]`}
                    style={{ background: firstColor }}
                  />
                  <div className="space-y-3">
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
