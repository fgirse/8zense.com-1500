import Image from "next/image";
import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";
import AnimationLogo from "@/components/AnimationLogo"

const Home = () => {
  const homepage = getListPage("homepage/_index.md");
  const testimonial = getListPage("sections/testimonial.md");
  const callToAction = getListPage("sections/call-to-action.md");
  const { frontmatter } = homepage;
  const {
    banner,
    features,
  }: {
    banner: { title: string; title_2: string; title_3: string; index_1: string; index_2: string; image: string; content?: string; button?: Button };
    features: Feature[];
  } = frontmatter;

  return (
    <>
      <SeoMeta />
      <section className="w-full bg-gradient-to-b from-gray-900 via-slate-900 to-slate-400">
        <div className="">
          <div className="row justify-center">
            <div className="mb-16">

<div className="py-3 grid  lg:grid-cols-[100px , 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr, 1fr,  100px] lg:grid-rows-[16%,18%,24%,6%, 24%, 10%] gap-x-1  ">
    <div className="lg:col-start-1 lg:col-span-7 lg;row-start-1 lg:row-end-2 ">
    <h1
                className="inline-block text-transparent bg-clip-text text-4xl uppercase bg-gradient-to-b from-yellow-500 via-amber-500 to-slate-600 lg:py-10 lg:text-[7rem] lg:col-start-0 col-span-8"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              />
    </div>
    <div className="col-span-8 row-span-1 col-start-1 row-start-2">
    <h1
                className={"relative -top-36 text-[5rem] inline-block text-transparent bg-clip-text uppercase bg-gradient-to-b from-yellow-500 via-orange-300  to-slate-600 lg:text-[14rem]"}
                dangerouslySetInnerHTML={markdownify(banner.title_2)}
              />
    </div>
    <div className="col-span-4 row-span-5 col-start-10 row-start-1"> <p
                className="py-2  text-right text-[.60rem] text-slate-200 lg:text-3xl lg:w-4/12"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              />
              <div className="relative left-16 lg:left-[40vw]  py-1 flex flex-col bg-orange-400 rounded-full w-8 h-8 leading-0 lg:w-28 lg:h-28 lg:py-5 ">
              <h1
                className="text-[.50rem] inline-block text-transparent bg-clip-text text-center mb-0  uppercase bg-gradient-to-b from-gray-50  via-white to-slate-600 lg:text-3xl "
                dangerouslySetInnerHTML={markdownify(banner.index_1)}
              />
              <h1
                className=" text-[.50rem] relative inline-block text-transparent bg-clip-text text-center uppercase bg-gradient-to-b from-gray-50  via-white to-slate-600 lg:text-3xl"
                dangerouslySetInnerHTML={markdownify(banner.index_2)}
              />
              </div>
              </div>
</div>
    
           
             
             
              {banner.button!.enable && (
                <Link className="btn btn-primary" href={banner.button!.link}>
                  {banner.button!.label}
                </Link>
              )}
            </div>
            {banner.image && (
              <div className="col-start-5 col-span-full collg:bg-[url('/images/sideboardobg.png')] bg-cover bg-no-repeat ">
                <ImageFallback
                  src={banner.image}
                  className="mx-auto"
                  width="600"
                  height="420"
                  alt="banner image"
                  priority
                />
              </div>
            )}
          </div>
          <div className="">
            
          <video autoPlay loop>
    <source src="/images/animationsLogo.mp4" type="video/mp4" />
</video>

          </div>

          
        </div>
      </section>

      {features.map((feature, index: number) => (
        <section
          key={index}
          className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
        >
          <div className="container">
            <div className="row items-center justify-between">
              <div
                className={`mb:md-0 mb-6 md:col-5 ${
                  index % 2 !== 0 && "md:order-2"
                }`}
              >
                <ImageFallback
                  src={feature.image}
                  height={480}
                  width={520}
                  alt={feature.title}
                />
              </div>
              <div
                className={`md:col-7 lg:col-6 ${
                  index % 2 !== 0 && "md:order-1"
                }`}
              >
                <h2
                  className="mb-4"
                  dangerouslySetInnerHTML={markdownify(feature.title)}
                />
                <p
                  className="mb-8 text-lg"
                  dangerouslySetInnerHTML={markdownify(feature.content)}
                />
                <ul>
                  {feature.bulletpoints.map((bullet: string) => (
                    <li className="relative mb-4 pl-6" key={bullet}>
                      <FaCheck className={"absolute left-0 top-1.5"} />
                      <span dangerouslySetInnerHTML={markdownify(bullet)} />
                    </li>
                  ))}
                </ul>
                {feature.button.enable && (
                  <Link
                    className="btn btn-primary mt-5"
                    href={feature.button.link}
                  >
                    {feature.button.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      <Testimonials data={testimonial} />
      <CallToAction data={callToAction} />
    </>
  );
};

export default Home;
