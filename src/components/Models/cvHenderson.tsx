import React, { FC } from 'react';
import { RiMapPin2Fill, RiPhoneFill, RiMailFill } from 'react-icons/ri';
import DescriptionFormations from './Description/description-formations';
import DescriptionProfil from './Description/description-profil';
import DescriptionXp from './Description/description-xp';
import DescriptionLists from './Description/description-lists';
import DescriptionContact from './Description/description-contact';
import { ProfilDto } from '@api/dto/profilDto';
import { contactData } from '@utils/data/forms.utils';
import { TrainingDto } from '@api/dto/trainingDto';
import { SkillsDto } from '@api/dto/skillsDto';
import { ExperienceDto } from '@api/dto/experienceDto';
import { LanguageDto } from '@api/dto/languageDto';
import { ListDto } from '@api/dto/listDto';

interface CVHendersonProps {
  profil?: ProfilDto;
  trainings?: TrainingDto[];
  experiences?: ExperienceDto[];
  lists?: ListDto[];
  skill?: SkillsDto[];
  language?: LanguageDto[];
}

const CvHenderson: FC<CVHendersonProps> = (props) => {
  const { profil, trainings, experiences, skill, language } = props;

  return (
    <div className="font-regular text-[#303030]">
      <header className="relative bg-[#303030] text-white h-28">
        <div className="flex justify-between items-center pt-5">
          <div>
            <div className="text-2xl ml-7 leading-6">
              <h3 className="font-PoppinsRegular">{profil?.name}</h3>
              <h5 className="font-PoppinsBold">{profil?.firstName}</h5>
            </div>
            <div className="flex items-center absolute bottom-3">
              <div className="w-10 py-[1px] bg-[#ffbd59]" />
              <p className="pl-2 font-RalewayRegular text-[10px]">{profil?.title}</p>
            </div>
          </div>
          <div className="bg-[#ffbd59] w-40 h-auto py-2">
            <div className="text-[8px] text-[#303030] flex flex-col justify-center align-middle h-full pl-3">
              {contactData(profil!).map((data, index) => (
                <DescriptionContact key={index} icon={data.icon} description={data.description!} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-5">
        <div className="space-y-4">
          <div className="w-full space-y-1">
            <h3 className="text-[11px] font-PoppinsRegular">Profil</h3>
            <div className="flex space-x-2">
              <div className="h-auto px-[0.3px] bg-[#303030]" />
              <DescriptionProfil description={profil?.about} />
            </div>
          </div>

          <div className="flex space-x-6">
            {experiences?.length! > 0 && (
              <div className="w-64 space-y-1">
                <h3 className="text-[11px] font-PoppinsRegular">Expériences</h3>
                <div className="flex space-x-2">
                  <div className="h-auto px-[0.3px] bg-[#303030]" />
                  <div className="space-y-3">
                    {experiences?.map((data, index) => (
                      <DescriptionXp
                        key={index}
                        title={data.title}
                        companyName={data.companyName}
                        description={data.jobDescription}
                      >
                        {data.lists &&
                          data.lists?.map((data, index) => (
                            <DescriptionLists key={index} title={data.description} />
                          ))}
                      </DescriptionXp>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-4 w-36">
              {trainings?.length! > 0 && (
                <div className="space-y-1">
                  <h3 className="text-[11px] font-PoppinsRegular">Formations</h3>
                  <div className="flex space-x-2">
                    <div className="h-auto px-[0.3px] bg-[#303030]" />
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
                </div>
              )}

              {skill?.length! > 0 && (
                <div className="space-y-1">
                  <h3 className="text-[11px] font-PoppinsRegular">Compétences</h3>
                  <div className="flex space-x-2">
                    <div className="h-auto px-[0.3px] bg-[#303030]" />
                    <ul className="text-[7px] space-y-1">
                      {skill?.map((data, index) => (
                        <DescriptionLists key={index} title={data.description} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {language?.length! > 0 && (
                <div className="space-y-1 col-span-1">
                  <h3 className="text-[11px] font-PoppinsRegular">Langues</h3>
                  <div className="flex space-x-2">
                    <div className="h-auto px-[0.3px] bg-[#303030]" />
                    <ul className="text-[7px] space-y-1">
                      {language?.map((data, index) => (
                        <DescriptionLists key={index} title={data.description} />
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CvHenderson;
