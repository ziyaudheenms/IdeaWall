"use client";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
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
import axios from "axios";

function page() {
  const [Data, setData] = useState({});
  const [text, settext] = useState({});
  const router = useRouter();
  const [likes, setLikes] = React.useState(IdeaCard.likes);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = React.useState("");

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const ID = localStorage.getItem("ItemCardID");
    const UserId = localStorage.getItem("Access_Token");
    axios
      .post(
        `https://ideawall-backed.onrender.com/api/v1/Dashboard/comment/${ID}/`,
        {
          text: commentText,
        },
        {
          headers: {
            Authorization: `Bearer ${UserId}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success("comment added successfully");
        console.log(res);

        GetComments();
      })
      .catch((err) => {
        toast.error("error occured ! login once again");
        router.push("/Login")
      });
  };

  // State for likes

  const GetData = () => {
    const ID = localStorage.getItem("ItemCardID");
    axios
      .get(`https://ideawall-backed.onrender.com/api/v1/Dashboard/viewSinglePage/${ID}/`)
      .then((responce) => {
        console.log(responce.data.message);
        setData(responce.data.message);
        // setUserImage(responce.data.message);
      })
      .catch((err) => {
        console.log(err);
        router.push("/Login");
      });
  };

  const GetComments = () => {
    const ID = localStorage.getItem("ItemCardID");
    const UserId = localStorage.getItem("Access_Token");
    axios
      .get(`https://ideawall-backed.onrender.com/api/v1/Dashboard/comment/page/${ID}/`)
      .then((res) => {
        // toast.success(res.data.data);
        console.log(res.data.data);
        
          setComments(res.data.data);
       
      })
      .catch((err) => {
        toast.error("error occured ! login once again");
      });
  };

  // Handler to increment likes
  const handleLike = () => {
    const ID = localStorage.getItem("ItemCardID");
    const UserId = localStorage.getItem("Access_Token");
    axios
      .get(`https://ideawall-backed.onrender.com/api/v1/Dashboard/Like/${ID}/`, {
        headers: {
          Authorization: `Bearer ${UserId}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success(res.data.data);
        console.log(res);

        GetData();
      })
      .catch((err) => {
        toast.error("error occured ! login once again");
        router.push("/Login")
      });
  };
  useEffect(() => {
    GetData();
    GetComments();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-0 px-1">
      <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%] bg-white rounded-xl border-1 border-gray-300 relative pb-5">
        <img
          src={Data.Hero_Image}
          alt={Data.Title_of_Idea}
          className="w-full h-80 object-cover rounded-tl-xl rounded-tr-xl mb-6"
        />
        <div className="flex items-center justify-between mb-4 px-4">
          <div className="flex items-center text-xs text-gray-500 gap-2">
            <CalendarRange className="w-3 h-3 text-gray-400 ml-2" />
            <span className="text-sm text-gray-500">{Data.date_of_post}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <Tag className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{Data.category}</span>
          </div>
        </div>
        <div className="flex items-center justify-between my-3 px-4">
          <h2 className="text-xl font-semibold mb-2 md:text-2xl">
            {Data.Title_of_Idea}
          </h2>
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLike}
          >
            <Heart className="w-4 h-4 md:h-6 md:w-6 text-red-500" />
            <span className="text-gray-700 font-extralight text-sm md:text-xl">
              {Data.no_of_likes}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-[16px] md:text-xl flex-1 px-4">
          {Data.description}
        </p>

        <div className="flex items-center justify-between mt-3 px-4">
          <a href={Data.website_link} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-[#ECFDF4] text-[#059664]  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]">
              <SquareArrowOutUpRight className="w-4 h-4 " /> Visit Website
            </Button>
          </a>
          <div>
            <Link href={`/Profile`}>
              <span className="text-[18px] font-sans text-gray-700">
                {Data.Author}
              </span>
            </Link>
          </div>
        </div>
        
          <div className="mt-8 px-4">
            <h3 className="text-lg font-semibold mb-2">Comments</h3>
            <form className="mt-4 flex gap-2 my-3">
              <input
                type="text"
                className="border rounded p-2 text-sm w-[90%] resize-none"
                rows={2}
                placeholder="Add a comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
              <div onClick={handleCommentSubmit}>
                <Button
            className="self-end bg-[#ECFDF4] text-[#059664] w-full  hover:bg-[#059664] cursor-pointer hover:text-[#ECFDF4]"
            type="submit"
            disabled={commentText.trim() === ""}
                >
            Post
                </Button>
              </div>
            </form>
            <div className="space-y-3">
              {Array.isArray(comments) && comments.length > 0 ? (
                comments.map((com) => (
            <div key={com.id} className="bg-gray-100 rounded p-3">
              <div className="text-sm font-medium text-gray-800">
                {com.user}
              </div>
              <div className="text-gray-600 text-sm">{com.text}</div>
            </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm">No comments yet.</div>
              )}
            </div>
          </div>
              </div>
              {/* Author Section */}
      <div className="flex items-center w-full md:w-[80%] lg:w-[70%] xl:w-[50%] gap-3 mt-6 px-4 py-2 bg-gray-50 rounded-lg">
        <div className="w-full">
          <h1 className="text-xl mb-2 font-bold font-sans">About the Author</h1>
          <Link href="/Profile">
            <div className="text-[18px] font-sans text-gray-700 font-semibold">
              {Data.Author}
            </div>
          </Link>
          <div className="flex justify-between w-full ">
            <div className="text-sm text-gray-500">
              {Data.designation_of_author}
            </div>
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <a
                href={Data.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#059664]">Website</span>
              </a>
              <a
                href={Data.github_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[#059664]">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
