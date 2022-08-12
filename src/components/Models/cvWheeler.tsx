import React, { FC } from 'react';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionFormations from './Description/description-formations';
import DescriptionLists from './Description/description-lists';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingDto } from '@api/dto/trainingDto';
import { SkillsDto } from '@api/dto/skillsDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { LanguageDto } from '@api/dto/languageDto';

interface CvWheelerProps {
  profil?: ProfilDto;
  trainings?: TrainingDto[];
  experiences?: ExperienceDto[];
  skill?: SkillsDto;
  language?: LanguageDto;
}

const CvWheeler: FC<CvWheelerProps> = (props) => {
  const { profil, trainings, experiences, skill, language } = props;

  return (
    <div className="font-regular text-[#303030]">
      <header className="relative">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl ml-7 leading-6">
              <h3 className="font-PoppinsRegular">{profil?.name}</h3>
              <h5 className="font-PoppinsBold">{profil?.firstName}</h5>
            </div>
            <div className="flex items-center absolute -bottom-1">
              <div className="w-10 py-[1px] bg-[#ffbd59]" />
              <p className="pl-2 font-PoppinsRegular text-[10px]">{profil?.title}</p>
            </div>
          </div>
          <div className="bg-[#ffbd59] w-36 h-24">
            <div className="text-[8px] text-[#303030] flex flex-col justify-center align-middle h-full pl-3">
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
              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Expériences</h3>
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

              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Langues</h3>
                <ul className="text-[7px] space-y-1">
                  {language?.list?.map((data, index) => (
                    <DescriptionLists key={index} title={data.title} />
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-36">
              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Profil</h3>
                <DescriptionProfil description={profil?.about} />
              </div>

              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Formations</h3>
                <div className="space-y-3">
                  {trainings?.map((data, index) => (
                    <DescriptionFormations
                      key={index}
                      level={data.level!}
                      schoolName={data.schoolName!}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular uppercase">Compétences</h3>
                <ul className="text-[7px] space-y-1">
                  {skill?.list?.map((data, index) => (
                    <DescriptionLists key={index} title={data.title} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CvWheeler;
