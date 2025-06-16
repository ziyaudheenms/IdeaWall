import React from 'react'
import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Tag } from 'lucide-react';
import { Heart } from 'lucide-react';
import { SquareArrowOutUpRight } from 'lucide-react';
import { CalendarRange } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import Image from 'next/image';
const ProfileDetails = {
  name: "John Doe",
  designation:"Future Techie Student",
  website: "https://johndoe.com",
  github: "https://github.com/johndoe",
  Team_Lead : "Ziyaudheen M.S",
  no_of_ideas : 2,
  likes_got:10,
}
const IdeaCard = [
  {
    id:1,
    title:"AI BASED TODO APP",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes:10,
    category:"AI/ML",
    image:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user:{
      name:"John Doe",
      image:"/gg.webp",
    },
    date:"02/04/2025",
    website_link : "https://example.com",
    color:"red"
  },
   {
    id:2,
    title:"AI BASED TODO APP",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes:10,
    category:"WEB APP",
    image:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user:{
      name:"John Doe",
      image:"/gg.webp",
    },
    date:"02/04/2025",
    website_link : "https://example.com",
    color:"green"
  },
  
  {
    id:6,
    title:"AI BASED TODO APP",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes:10,
    category:"WEB APP",
    image:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user:{
      name:"John Doe",
      image:"/gg.webp",
    },
    date:"02/04/2025",
    website_link : "https://example.com",
    color:"green"
  },
   {
    id:7,
    title:"AI BASED TODO APP",
    description:"lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes:10,
    category:"WEB APP",
    image:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user:{
      name:"John Doe",
      image:"/gg.webp",
    },
    date:"02/04/2025",
    website_link : "https://example.com",
    color:"green"
  },

]
function page() {
 return (
    <div className=" h-full bg-gradient-to-br flex-col  flex items-center justify-center">
        <div className="bg-white shadow-xl border-1 border-gray-300 rounded-2xl p-8 max-w-md w-full">
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#1a987c] to-[#79c244] flex items-center justify-center text-white text-4xl font-bold mb-4">
                    {ProfileDetails.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h1 className="text-2xl font-bold text-gray-800">{ProfileDetails.name}</h1>
                <p className="text-gray-500">{ProfileDetails.designation}</p>
                <div className="flex space-x-4 mt-4">
                  
                    <a href={ProfileDetails.github} target="_blank" rel="noopener noreferrer" className="text-[#059664  ] hover:text-black flex items-center">
                        <svg className="inline w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.11 3.02.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                        GitHub
                    </a>
                </div>
            </div>
            <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Team Lead:</span>
                    <span className="text-gray-900 text-[18px] font-semibold">{ProfileDetails.Team_Lead}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Ideas Submitted:</span>
                    <span className="text-gray-900">{ProfileDetails.no_of_ideas}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-700">Likes Received:</span>
                    <span className="text-gray-900">{ProfileDetails.likes_got}</span>
                </div>
            </div>
        </div>
        <div className="lg:px-10 xl:px-20 md:px-10 sm:px-3 mt-10">
                <div className="flex items-center justify-between ">
                  <h1 className="text-xl font-sans flex items-center justify-between ">All Ideas of<span className='text-[#059664]'> {ProfileDetails.name}</span></h1>

                </div>
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                    {IdeaCard.map((idea) => (
                      <div key={idea.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                         <Link href='/SinglePage' className="text-blue-600 hover:underline">
                        <div className="relative h-40 w-full">
                          <Image
                            src={idea.image}
                            alt={idea.title}
                            fill
                            className="object-cover"
                          />
                          
                        </div>
                        </Link>
                        <div className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag className="w-4 h-4 text-gray-400" />
                            <span className="text-xs text-gray-500">{idea.category}</span>
                          </div>
                         
                          <div className="flex items-center justify-between gap-2">
                            <h2 className="text-lg font-semibold mb-2">{idea.title}</h2>
                            <div className="flex items-center gap-2">
                              <Heart className="w-4 h-4 text-red-500" />
                              <span className="text-sm">{idea.likes}</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm flex-1">{idea.description}</p>
                          <div className="flex items-center justify-between gap-2 mt-4">
                            <span className="text-[18px] font-sans text-gray-700">{idea.user.name}</span>
                            <div className="flex items-center text-xs text-gray-500 gap-2">
                              <CalendarRange className="w-3 h-3 text-gray-400 ml-2" />
                              <span className="text-xs text-gray-500">{idea.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-4 w-full">
                            <a href={idea.website_link} target="_blank" rel="noopener noreferrer">
                              <Button className="w-full bg-[#ECFDF4] text-[#059664]  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]">
                                <SquareArrowOutUpRight className="w-4 h-4 " /> Visit Website
                              </Button>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
    </div>
)

}


export default page