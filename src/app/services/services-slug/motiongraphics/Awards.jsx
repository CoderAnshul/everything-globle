import React from 'react';
import AnimatedReadMore from '../../../../component/common/AnimatedReadMore';
import { Link } from 'react-router-dom';

const awardsData = [
  {
    icon: '/image/services/shop-home-icon-img1.webp',
    title: 'Creative Animation',
    description: 'We design captivating animations that convey your brand message in a visually stimulating way, keeping your audience hooked.',
  },
  {
    icon: '/image/services/shop-home-icon-img2.webp',
    title: 'Brand Consistency',
    description: 'Every motion graphic we create stays true to your brand’s identity, ensuring a cohesive look and feel across all media.',
  },
  {
    icon: '/image/services/shop-home-icon-img3.webp',
    title: 'Enhanced Storytelling',
    description: 'We use motion to highlight key messages, making complex concepts easier to understand and more memorable for your audience.',
  },
];


const AwardCard = ({ icon, title, description }) => (
  <div className="relative p-10 pr-4 xl:p-20">
    <img src="/image/services/h1-icon-img1.png" alt="" className="absolute top-0 left-0" />
    <div className="flex items-end gap-5">
      <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h5 className="text-xl lg:text-2xl font-semibold">{title}</h5>
    </div>
    <div className="mt-5">
      <p className="text-sm lg:text-base text-gray-600">{description}</p>
      {/* <Link to="#" className="w-fit block mt-3">
        <AnimatedReadMore />
      </Link> */}
    </div>
  </div>
);

export default function Awards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {awardsData.map((award, index) => (
        <AwardCard key={index} {...award} />
      ))}
    </div>
  );
}
