import React from "react";

import { Button, Img, Text } from "components";
import HomeLink from "components/HomeLink";

const HomePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto pt-2 w-full">
        <div className="flex flex-col items-center justify-start max-w-[1144px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[41px]">
              <HomeLink className="flex sm:flex-col flex-row sm:gap-10 gap-[65px] items-start justify-start w-auto sm:w-full" />
              <Text
                className="mt-[179px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtPoppinsMedium40"
              >
                Hello,
              </Text>
              <div className="md:h-[72px] h-[99px] mt-0.5 relative w-[98%] sm:w-full">
                <Text
                  className="absolute left-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900 top-[0]"
                  size="txtPoppinsSemiBold48"
                >
                  I Am Herbi Saptiko
                </Text>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-black-900 text-xl w-max"
                  size="txtPoppinsMedium20"
                >
                  Graphic Designer || UI UX Designer || Web Developer
                </Text>
              </div>
              <Text
                className="mt-1.5 text-black-900 text-xl"
                size="txtPoppinsMedium20"
              >
                2 Years Experienced Visual Office in Griya Pratama
              </Text>
              <Button className="cursor-pointer leading-[normal] min-w-[131px] mt-[34px] text-base text-center">
                Let’s Talk
              </Button>
            </div>
            <Img
              className="h-[705px] md:h-auto object-cover"
              src="images/img_fotoku.png"
              alt="fotoku"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-amber-A400 flex flex-col items-center justify-end p-[35px] sm:px-5 w-full">
            <Text
              className="mt-14 md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtPoppinsSemiBold32"
            >
              About Me
            </Text>
            <Text
              className="mt-[37px] text-2xl md:text-[22px] text-black-900 text-justify sm:text-xl"
              size="txtPoppinsLight24"
            >
              <>
                Halo, saya Herbi, seorang desainer UI/UX dan pengembang web
                dengan hasrat untuk menciptakan pengalaman digital yang
                menakjubkan. Saya memadukan keahlian desain dan pengembangan
                untuk membawa ide-ide kreatif menjadi kenyataan yang fungsional.
                <br />
                <br />
                Desain bagi saya bukan hanya tentang estetika visual, tetapi
                juga tentang memahami kebutuhan pengguna dan menciptakan
                antarmuka yang intuitif. Saya percaya bahwa desain yang baik
                tidak hanya indah, tetapi juga dapat meningkatkan efisiensi dan
                kepuasan pengguna.
              </>
            </Text>
            <Img
              className="h-[27px] md:h-auto mt-[98px] object-cover w-[130px] sm:w-full"
              src="images/img_sosialmedia.png"
              alt="sosialmedia"
            />
            <div className="flex flex-row gap-[5px] items-start justify-start mt-2.5 md:px-5 w-auto">
              <Text
                className="text-2xl md:text-[22px] text-indigo-600 text-justify sm:text-xl w-auto"
                size="txtPoppinsRegular24"
              >
                Download{" "}
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-justify text-white-A700 sm:text-xl w-auto"
                size="txtPoppinsLight24WhiteA700"
              >
                Curiculum Vitat
              </Text>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col md:gap-10 gap-[75px] items-center justify-start p-[106px] md:px-10 sm:px-5 w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
              size="txtPoppinsSemiBold32"
            >
              Skill
            </Text>
            <div className="flex flex-col md:gap-10 gap-[111px] items-center justify-start max-w-[950px] mb-[65px] mx-auto w-full">
              <div className="md:gap-10 gap-[70px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 items-start justify-start w-auto md:w-full">
                <div className="h-[100px] md:h-[97px] pb-0.5 relative w-[100px]">
                  <div className="bg-gray-900_01 h-[89px] m-auto w-[91%]"></div>
                  <Img
                    className="absolute h-[97px] inset-[0] justify-center m-auto"
                    src="images/img_vector.svg"
                    alt="vector_One"
                  />
                </div>
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_photoshop1.svg"
                  alt="photoshopOne"
                />
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_adobeillustratoricon.svg"
                  alt="adobeillustrato"
                />
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_figmaicon1.svg"
                  alt="figmaiconOne"
                />
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_microsoft1.svg"
                  alt="microsoftOne"
                />
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_gitscmicon1.svg"
                  alt="gitscmiconOne"
                />
              </div>
              <Img
                className="h-[100px] w-[950px]"
                src="images/img_dev.svg"
                alt="dev"
              />
            </div>
          </div>
          <div className="bg-amber-A400 flex flex-col items-center justify-end p-[83px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-2 sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtPoppinsSemiBold40"
            >
              Thanks You for Visiting
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
