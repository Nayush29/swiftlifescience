import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CareersSlider() {
  const sections = [
    {
      title: "Life at SWIFT",
      content: [
        "At SWIFT, we understand that it is our people who shape the organization’s identity and drive its success. That’s why we consistently strive to provide the best working environment and recruit a team that will lead the company to greater heights.",
        "Despite a fast-paced work environment, we prioritize professional development, interpersonal relationships, and creating a positive, people-oriented culture across the organization."
      ]
    },
    {
      title: "Areas of Opportunity",
      content: [
        "SWIFT Life Sciences is committed to being a global leader in the pharmaceutical industry. We are always looking for talented and high-performing individuals to join our team.",
        "Whether your expertise lies in Sales, Marketing, Research, or Operations, SWIFT offers endless opportunities for growth and advancement."
      ]
    },
    {
      title: "Human Resource Development",
      content: [
        "At SWIFT, we believe that our people are our most valuable asset. Our HRD initiatives are designed to empower and equip employees with the skills needed to excel in a dynamic and competitive industry.",
        "Key HR initiatives include:",
        "• Performance Management System (PMS)",
        "• Management Trainee Program",
        "• Induction Training Program (ITP)",
        "• Leadership Development and Workshops"
      ]
    },
    {
      title: "Performance Appraisal Management",
      content: [
        "The Performance Appraisal Management (PAM) system at SWIFT ensures that high job performance is recognized and rewarded.",
        "It focuses on achievement traits and adherence to company values. Through continuous feedback and evaluations, we aim to maintain a high standard of excellence."
      ]
    },
    {
      title: "Induction Training Program (ITP)",
      content: [
        "Our 14-month Induction Training Program (ITP) is designed to develop business leaders with a generalist perspective on business.",
        "The program prepares individuals for leadership roles at SWIFT and is a vital link in our people and talent management strategy."
      ]
    }
  ];

  return (
    <section className="w-full min-h-screen bg-white">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="h-full"
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center text-center px-6 py-20 min-h-screen bg-gray-50">
              <h2 className="text-4xl font-semibold text-indigo-700 mb-6">{section.title}</h2>
              {section.content.map((para, i) => (
                <p key={i} className="text-gray-700 leading-7 mb-4 max-w-3xl">{para}</p>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
