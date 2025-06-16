"use client";
import React from "react";
import { toast } from "sonner";
const IdeaCard = {
  id: 1,
  title: "AI BASED TODO APP",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing      adipisicing adipisicing  adipisicing elit. Dolor ex atque recusandae id, ullam nesciunt adipisci tenetur consequuntur accusantium eum officia sed magnam et assumenda nisi suscipit voluptatem quo architecto?",
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
  Designation_of_author: "Future Techie Student",
};
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Tag } from "lucide-react";
import { CalendarRange } from "lucide-react";
import Link from "next/link";

function page() {
  const [comments, setComments] = React.useState([
    {
      name: "Jane Smith",
      text: "Great idea! Would love to see this in action.",
    },
  ]);
  const [commentText, setCommentText] = React.useState("");

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return;
    setComments([
      ...comments,
      {
        name: "Anonymous",
        text: commentText,
      },
    ]);
    toast.success("added comment successfully")
    setCommentText("");
  };

  // State for likes
  const [likes, setLikes] = React.useState(IdeaCard.likes);

  // Handler to increment likes
  const handleLike = () => {
    setLikes(likes + 1);
    toast.success("liked the post")
  };

  return (
    <div className="flex justify-center flex-col items-center py-0 px-1">
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%] bg-white rounded-xl border-1 border-gray-300 relative pb-5">
        <img
          src={IdeaCard.image}
          alt={IdeaCard.title}
          className="w-full h-80 object-cover rounded-tl-xl rounded-tr-xl mb-6"
        />
        <div className="flex items-center justify-between mb-4 px-4">
          <div className="flex items-center text-xs text-gray-500 gap-2">
            <CalendarRange className="w-3 h-3 text-gray-400 ml-2" />
            <span className="text-sm text-gray-500">{IdeaCard.date}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Tag className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{IdeaCard.category}</span>
          </div>
        </div>
        <div className="flex items-center justify-between my-3 px-4">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">{IdeaCard.title}</h2>
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLike}>
            <Heart className="w-4 h-4 md:h-6 md:w-6 text-red-500" />
            <span className="text-gray-700 font-extralight text-sm md:text-xl">
              {likes}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-[16px] md:text-xl flex-1 px-4">
          {IdeaCard.description}
        </p>

        <div className="flex items-center justify-between mt-3 px-4">
          <a
            href={IdeaCard.website_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-[#ECFDF4] text-[#059664]  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]">
              <SquareArrowOutUpRight className="w-4 h-4 " /> Visit Website
            </Button>
          </a>
          <div>
            <Link href={`/Profile`}>
            <span className="text-[18px] font-sans text-gray-700">
              {IdeaCard.user.name}
            </span>
            </Link>
          </div>
        </div>
        {/* Comments Section */}
        <div className="mt-8 px-4">
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          <form className="mt-4 flex gap-2 my-3" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              className="border rounded p-2 text-sm w-[90%] resize-none"
              rows={2}
              placeholder="Add a comment..."
              value={commentText}
              onChange={handleCommentChange}
            />
            <Button
              className="self-end bg-[#ECFDF4] text-[#059664] w-[10%]  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]"
              type="submit"
              disabled={commentText.trim() === ""}
            >
              Post
            </Button>
          </form>
          <div className="space-y-3">
            {comments.map((comment, idx) => (
              <div key={idx} className="bg-gray-100 rounded p-3">
                <div className="text-sm font-medium text-gray-800">
                  {comment.name}
                </div>
                <div className="text-gray-600 text-sm">{comment.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Author Section */}
      <div className="flex items-center w-full md:w-[80%] lg:w-[70%] xl:w-[50%] gap-3 mt-6 px-4 py-2 bg-gray-50 rounded-lg">
        <div className="w-full">
          <h1 className="text-xl mb-2 font-bold font-sans">About the Author</h1>
      <Link href="/Profile">

          <div className="text-[18px] font-sans text-gray-700 font-semibold">
            {IdeaCard.user.name}
          </div>
          </Link>
          <div className="flex justify-between w-full ">
            <div className="text-sm text-gray-500">
              {IdeaCard.Designation_of_author}
            </div>
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <Link href={IdeaCard.website_link} target="_blank" rel="noopener noreferrer">
              <span className="text-[#059664]">Website</span>
              </Link>
              <Link href={IdeaCard.website_link} target="_blank" rel="noopener noreferrer">
                <span className="text-[#059664]">Github</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
