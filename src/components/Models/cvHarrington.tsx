import React, { FC } from 'react';
import DescriptionFormations from './Description/description-formations';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionLists from './Description/description-lists';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingDto } from '@api/dto/trainingDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { SkillsDto } from '@api/dto/skillsDto';
import { LanguageDto } from '@api/dto/languageDto';

interface CVHarringtonProps {
  profil?: ProfilDto;
  trainings?: TrainingDto[];
  experiences?: ExperienceDto[];
  skill?: SkillsDto;
  language?: LanguageDto;
}

const CvHarrington: FC<CVHarringtonProps> = (props) => {
  const { profil, trainings, experiences, skill, language } = props;

  return (
    <div className="h-full flex justify-between text-[#303030]">
      <aside className="relative h-full w-44 bg-[#303030] px-4 text-white">
        <div className="bg-[#ffbd59] w-[1.7px] h-6 ml-1" />
        <div className="text-[8px] text-white flex flex-col h-auto pt-2">
          {contactData(profil!).map((data, index) => (
            <DescriptionContact key={index} icon={data.icon} description={data.description!} />
          ))}
        </div>
        <div className="space-y-4 mt-10">
          <div className="space-y-1">
            <h3 className="text-[11px] font-PoppinsRegular uppercase">Formations</h3>
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

          <div className="space-y-1">
            <h3 className="text-[11px] font-PoppinsRegular uppercase">Compétences</h3>
            <div className="space-y-2">
              <div className="w-10 h-[0.3px] bg-white absolute left-0" />
              <div className="space-y-3 pt-3">
                <ul className="text-[7px] space-y-1">
                  {skill?.list?.map((data, index) => (
                    <DescriptionLists key={index} title={data.title} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-[11px] font-PoppinsRegular uppercase">Langues</h3>
            <div className="space-y-2">
              <div className="w-10 h-[0.3px] bg-white absolute left-0" />
              <div className="space-y-3 pt-3">
                <ul className="text-[7px] space-y-1">
                  {language?.list?.map((data, index) => (
                    <DescriptionLists key={index} title={data.title} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex flex-col w-full">
        <header className="pt-5">
          <div className="text-2xl leading-6 ml-4">
            <h3 className="font-PoppinsRegular">{profil?.name}</h3>
            <h5 className="font-PoppinsBold">{profil?.firstName}</h5>
          </div>
          <div className="flex items-center absolute mt-2">
            <div className="w-5 py-[1px] bg-[#ffbd59]" />
            <p className="pl-2 font-PoppinsRegular text-[10px]">{profil?.title}</p>
          </div>
        </header>

        <section className="px-4 space-y-3 mt-10">
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="w-full space-y-2">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Profil</h3>
                <div className="w-full py-[0.3px] bg-[#303030]" />
                <DescriptionProfil description={profil?.about} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-4">
              <div className="w-full space-y-2">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Expériences</h3>
                <div className="w-full py-[0.3px] bg-[#303030]" />
                <div className="space-y-3">
                  {experiences?.map((data, index) => (
                    <DescriptionXp
                      key={index}
                      title={data.title}
                      companyName={data.companyName}
                      description={data.jobDescription}
                    >
                      {data.list?.map((data, index) => (
                        <DescriptionLists key={index} title={data.title} />
                      ))}
                    </DescriptionXp>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CvHarrington;
