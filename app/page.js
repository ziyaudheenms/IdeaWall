"use client"
import Image from "next/image";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import { Tag } from "lucide-react";
import { Heart } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import { CalendarRange } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const Categories = [
  {
    id: 1,
    title: "All Ideas",
  },
  {
    id: 2,
    title: "Mobile Apps",
  },
  {
    id: 3,
    title: "Web Apps",
  },
  {
    id: 4,
    title: "AI/ML",
  },
  {
    id: 5,
    title: "Dev Tools",
  },
  {
    id: 6,
    title: "Tech Tools",
  },
];

const IdeaCard = [
  {
    id: 1,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "AI/ML",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "red",
  },
  {
    id: 2,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 3,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 4,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 5,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 6,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 7,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
  {
    id: 8,
    title: "AI BASED TODO APP",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
    likes: 10,
    category: "WEB APP",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    user: {
      name: "John Doe",
      image: "/gg.webp",
    },
    date: "02/04/2025",
    website_link: "https://example.com",
    color: "green",
  },
];
export default function Home() {
  const [Data , setData] = useState([])
  const GetData = () => {
    axios
      .get("https://ideawall-backed.onrender.com/api/v1/Dashboard/viewAllPosts/")
      .then((responce) => {
        console.log(responce.data.message);
        setData(responce.data.message)
        // setUserImage(responce.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      {/* Search Bar */}
      <div className="w-full flex justify-center ">
        <div className="flex items-center bg-white border border-gray-400 rounded-lg  px-3 py-3 w-full mx-auto md:w-[80%] xl:w-[60%]">
          <Search className="w-6 h-6 text-black mr-3" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-lg font-medium"
            placeholder="Search for amazing ideas..."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center mt-5 gap-3 sm:gap-2 md:gap-2">
          {Categories.map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 bg-[#ECFDF4] rounded-lg cursor-pointer text-[#059664] font-semibold hover:bg-[#059664] hover:text-white transition-colors
                text-sm sm:text-xs md:text-sm
                w-auto sm:w-[45%] md:w-auto
                "
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
      <div className="lg:px-10 xl:px-20 md:px-10 sm:px-3 mt-10">
        <div className="flex items-center justify-between ">
          <h1 className="text-xl font-sans flex items-center justify-between">
            All Ideas
          </h1>
          <Link href="/CreateIdea">
            <Button className="bg-[#0FA76F] cursor-pointer hover:bg-[#059664] text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2">
              <Plus className="w-4 h-4 gap-2" />
              Add Idea
            </Button>
          </Link>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {Data.map((idea) => (
              <div
                key={idea.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                onClick={() => {
                  localStorage.setItem("ItemCardID" , idea.id)
                }}
              >
                <Link
                  href="/SinglePage"
                  className="text-blue-600 hover:underline"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={idea.Hero_Image}
                      alt={idea.Title_of_Idea}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {idea.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-semibold mb-2">
                      {idea.Title_of_Idea
                        ? idea.Title_of_Idea.length > 20
                          ? idea.Title_of_Idea.slice(0, 20) + "..."
                          : idea.Title_of_Idea
                        : ""}
                    </h2>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">{idea.no_of_likes}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm flex-1">
                    {idea.description ? idea.description.slice(0, 100) + (idea.description.length > 20 ? "..." : "") : ""}
                  </p>
                  <div className="flex items-center justify-between gap-2 mt-4">
                    <span className="text-[18px] font-sans text-gray-700">
                      {idea.Author}
                    </span>
                    <div className="flex items-center text-xs text-gray-500 gap-2">
                      <CalendarRange className="w-3 h-3 text-gray-400 ml-2" />
                      <span className="text-xs text-gray-500">{idea.date_of_post}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 w-full">
                    <a
                      href={idea.website_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-[#ECFDF4] text-[#059664]  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]">
                        <SquareArrowOutUpRight className="w-4 h-4 " /> Visit
                        Website
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
  );
}
