import React from "react";
import Sandeep from '../../../public/sandeep.png'
import Pradip from '../../../public/pradip.png'
import Image from "next/image";
const teamMembers = [
  {
    name: "John Smith",
    designation: "Designation",
    image: Sandeep,
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Jane Doe",
    designation: "Designation",
    image: Pradip,
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Alice Johnson",
    designation: "Designation",
    image: Sandeep,
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];
const Team = () => {
  return (
    <div className="w-full px-7 py-8 flex flex-col gap-y-8 rounded-xl bg-white max-[768px]:px-2">
      <p className="text-3xl font-semibold">Team</p>
      <p>
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-y-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex gap-x-2 px-4 py-2 bg-[#c9e5f0] rounded-xl items-center max-[768px]:flex-col"
          >
            <div className="flex flex-col gap-x-2 items-center basis-[25%]">
              <Image src={member.image} alt={member.name} width={100} height={100} className='rounded-xl'/>
              <p className="text-base font-semibold">{member.name}</p>
              <p className="text-xs font-medium text-gray-600">
                {member.designation}
              </p>
            </div>
            <div className="basis-[75%] max-[768px]:text-left text-sm">
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
