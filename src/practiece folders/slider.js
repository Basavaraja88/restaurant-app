// "use client";
// import Image from "next/image";
// // Third party packages
// import { useKeenSlider } from "keen-slider/react";
// import { IEventsTile } from "@/utils/interface";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { fetchData } from "@/lib/getAxiosInstance";

// const EventSlider: React.FC = async () => {
//   const [eventsData, setEventsData] = useState<IEventsTile[]>([]);

//   useEffect(() => {
//     // API call for testimonials
//     const fetchEventsData = async () => {
//       try {
//         const response = await fetchData("/event");
//         //   console.log("re20 events",response)
//         const filteredTestimonials: IEventsTile[] = response.data.map(
//           (item: any) => ({
//             end_date: item.end_date,
//             title: {
//               en: item.title.en,
//             },
//             image: item.image,
//             id: item.id,
//           })
//         );
//         setEventsData(filteredTestimonials);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchEventsData();
//   }, []);

//   const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       breakpoints: {
//         "(min-width: 1024px)": {
//           slides: { perView: 1.8, spacing: 36 },
//         },
//       },

//       slides: {
//         perView: 2,
//         spacing: 15,
//       },
//     },
//     [
//       (slider) => {
//         let timeout: ReturnType<typeof setTimeout>;
//         let mouseOver = false;
//         function clearNextTimeout() {
//           clearTimeout(timeout);
//         }
//         function nextTimeout() {
//           clearTimeout(timeout);
//           if (mouseOver) return;
//           timeout = setTimeout(() => {
//             slider.next();
//           }, 2000);
//         }
//         slider.on("created", () => {
//           slider.container.addEventListener("mouseover", () => {
//             mouseOver = true;
//             clearNextTimeout();
//           });
//           slider.container.addEventListener("mouseout", () => {
//             mouseOver = false;
//             nextTimeout();
//           });
//           nextTimeout();
//         });
//         slider.on("dragStarted", clearNextTimeout);
//         slider.on("animationEnded", nextTimeout);
//         slider.on("updated", nextTimeout);
//       },
//     ]
//   );

//   return (
//     <div className="navigation-wrapper w-[328px] lg:w-full">
//       <div ref={sliderRef} className="keen-slider">
//         {eventsData?.map((val, index) => (
//           <div key={index} className="keen-slider__slide">
//             <div className="w-[175px] lg:w-[260px]">
//               <div className="relative w-full h-[106px] lg:h-[156px] rounded-md overflow-hidden">
//                 <Image
//                   src={val.image}
//                   alt={`events ${val.title.en}`}
//                   fill={true}
//                   className="object-cover"
//                 />
//               </div>

//               <div className="flex mt-1 lg:mt-2">
//                 <div>
//                   <p className="inline text-white text-lg leading-[22px] lg:text-[27px] font-bold">
//                     {val.title.en}
//                   </p>
//                   {/* <span className="text-[8px] lg:text-xs text-[#CECECE] pl-2">{formatDate(val.end_date)}</span> */}
//                 </div>
//                 <div className="flex flex-col gap-[20px] justify-end">
//                   <Link prefetch={true} href={`/events/details/${val.id}`}>
//                     <p className="text-[12px] text-white w-[56px] bg-[#0000006B] rounded-full py-[.5px] pl-[15px]">
//                       view
//                     </p>
//                   </Link>
//                   <p className="text-[12px] leading-[14px] text-[#CECECE] pl-2 whitespace-nowrap">
//                     17 March 2023
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }; // End of EventSlider

// export default EventSlider;
