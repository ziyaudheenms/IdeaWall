"use client";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Categories = [
  {
    id: 1,
    title: "AI/ML",
  },
  {
    id: 2,
    title: "WEB APP",
  },
  {
    id: 3,
    title: "MOBILE APP",
  },
  {
    id: 4,
    title: "TECH",
  },
];

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Home() {
  const [Data, setData] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [q, setq] = useState("");
  const [auther, setauther] = useState("");
  const router = useRouter()
  const GetData = () => {
    axios
      .get("https://ideawall-backed.onrender.com/api/v1/Dashboard/viewAllPosts/")
      .then((responce) => {
        console.log(responce.data.message);
        setData(responce.data.message);
        // setUserImage(responce.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const SearchFilter = (q) => {
    const UserId = localStorage.getItem("Access_Token");

    axios
      .get("https://ideawall-backed.onrender.com/api/v1/Dashboard/search/filter/idea/", {
        headers: {
          Authorization: `Bearer ${UserId}`,
        },
        params: {
          q: q,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => alert(err));
  };
  const SearchFilterByAuthorName = (auther) => {
    const UserId = localStorage.getItem("Access_Token");

    axios
      .get("https://ideawall-backed.onrender.com/api/v1/Dashboard/search/filter/name/", {
        headers: {
          Authorization: `Bearer ${UserId}`,
        },
        params: {
          q: auther,
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => alert(err));
  };
  const handleLike = (ID) => {
    
    const UserId = localStorage.getItem("Access_Token");
    axios
      .get(
        `hhttps://ideawall-backed.onrender.com/api/v1/Dashboard/Like/${ID}/`,
        {
          headers: {
            Authorization: `Bearer ${UserId}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        toast.success(res.data.data);
        console.log(res);

        GetData();
      })
      .catch((err) => {
        toast.error("error occured ! login once again");
        router.push("/Login");
      });
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div>
      <>
        <header className="bg-white">
          <nav
            aria-label="Global"
            className="mx-auto flex w-full items-center justify-between p-6 lg:px-10 xl:px-20 md:px-10 sm:px-3 "
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">IdeaWall</span>
                <h1 className="text-3xl font-bold font-sans bg-gradient-to-l text-transparent from-[#1a987c] to-[#79c244] bg-clip-text">
                  IdeaWall
                </h1>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <div className="flex items-center gap-2  border-1 border-grey-600 py-2 px-2 rounded-lg">
                <Search className="h-5 w-5" />
                {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
                <input
                  placeholder="Search By Name "
                  className="outline-0"
                  onChange={(e) => {
                    setauther(e.target.value);
                    SearchFilterByAuthorName(auther);
                  }}
                />
              </div>
            </div>
          </nav>
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="lg:hidden"
          >
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">IdeaWall</span>
                  <h1 className="text-3xl font-bold font-sans bg-gradient-to-l text-transparent from-[#1a987c] to-[#79c244] bg-clip-text">
                    IdeaWall
                  </h1>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <Disclosure as="div" className="-mx-3">
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                  <div className="py-6">
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                      <div className="flex items-center gap-2  border-1 border-green-400 py-2 px-2 rounded-lg">
                        <Search className="h-5 w-5" />
                        {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
                        <input
                          placeholder="Search By Name "
                          className="outline-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </>
      {/* Search Bar */}
      <div className="w-full flex justify-center ">
        <div className="flex items-center bg-white border border-gray-400 rounded-lg  px-3 py-3 w-full mx-auto md:w-[80%] xl:w-[60%]">
          <Search className="w-6 h-6 text-black mr-3" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-black placeholder-gray-400 text-lg font-medium"
            placeholder="Search for amazing ideas..."
            onChange={(e) => {
              setq(e.target.value);
              SearchFilter(q);
            }}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center mt-5 gap-3 sm:gap-2 md:gap-2">
          <div
            onClick={() => GetData()}
            className="px-4 py-2 bg-[#ECFDF4] rounded-lg cursor-pointer text-[#059664] font-semibold hover:bg-[#059664] hover:text-white transition-colors
                text-sm sm:text-xs md:text-sm
                w-auto sm:w-[45%] md:w-auto
                "
          >
            All Items
          </div>
          {Categories.map((category) => (
            <div
              key={category.id}
              className="px-4 py-2 bg-[#ECFDF4] rounded-lg cursor-pointer text-[#059664] font-semibold hover:bg-[#059664] hover:text-white transition-colors
                text-sm sm:text-xs md:text-sm
                w-auto sm:w-[45%] md:w-auto
                "
              onClick={() => {
                axios
                  .get(
                    `https://ideawall-backed.onrender.com/api/v1/Dashboard/search/filter/Category/${category.id}`
                  )
                  .then((res) => {
                    console.log(res);
                    if(res.data.status_code == 5000){
                       setData(res.data.message);
                    }else{
                      toast.info('no data available');
                      
                    }
                   
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              {category.title}
            </div>
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
         <div>
          {Data && Data.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
              {Data.map((idea) => (
                <div
                  key={idea.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
                  onClick={() => {
                    localStorage.setItem("ItemCardID", idea.id);
                  }}
                >
                
                    <div className="relative h-40 w-full">
                      <Image
                        src={idea.Hero_Image}
                        alt={idea.Title_of_Idea}
                        fill
                        className="object-cover"
                      />
                    </div>
        
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
                      <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
                        handleLike(idea.id)
                      }}>
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm">{idea.no_of_likes}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm flex-1">
                      {idea.description
                        ? idea.description.slice(0, 100) +
                          (idea.description.length > 20 ? "..." : "")
                        : ""}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-4">
                      <span className="text-[18px] font-sans text-gray-700">
                        {idea.Author}
                      </span>
                      <div className="flex items-center text-xs text-gray-500 gap-2">
                        <CalendarRange className="w-3 h-3 text-gray-400 ml-2" />
                        <span className="text-xs text-gray-500">
                          {idea.date_of_post}
                        </span>
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
          ) : (
            <div className="flex flex-col items-center justify-center mt-20 mb-20">
              <Image
                src="/error.gif"
                alt="No Data Found"
                width={200}
                height={200}
                className="mb-6"
              />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">LOADING</h2>
              <p className="text-gray-500">Try adjusting your search or filter to find ideas.</p>
            </div>
          )}
        </div>


        </div>
      </div>
    </div>
  );
}
