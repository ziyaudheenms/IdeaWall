"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from "sonner"
import { UploadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
function page() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [website, setWebsite] = useState('')
    const router = useRouter()


    const handleSubmit = async (e) => {
         e.preventDefault();
                const UserId = localStorage.getItem('Access_Token');
                const formData = new FormData();
                formData.append('Title', title);
                formData.append('Hero_img', image);
                formData.append('content', description);
                formData.append('Category', category);
                formData.append('website_link', website);

                try {
                    await axios.post(
                        "https://ideawall-backed.onrender.com/api/v1/Dashboard/create/idea/",
                        formData,
                        {
                            headers: {
                                Authorization: `Bearer ${UserId}`,
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    );
                    toast.success("Successfully submitted the idea");
                    router.push('/')
                } catch (err) {
                    toast.error("oops! some error occured");
                    router.push('/Login')
                }
        
    }


    return (
        <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%]  mx-auto mt-12 p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">Submit Your Idea</h2>
            <form className="space-y-6" >
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        placeholder="Enter your idea title"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image Upload</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={e => {
                            setImage(e.target.files[0])
                        }}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                    />
                    {image && typeof image === 'object' && (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="preview"
                            className="mt-3 max-w-full rounded-lg shadow-md border border-gray-200"
                        />
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
                    <input
                        type="url"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        placeholder="https://yourwebsite.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
                        placeholder="Describe your idea"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition bg-white"
                    >
                       <option value='1'>AI/ML</option>
                       <option value='2'>WEB APP</option>
                       <option value='3'>MOBILE APP</option>
                       <option value='4'>TECH</option>
                    </select>
                </div>
                <div onClick={handleSubmit}>
                <Button
                    type="submit"
                    className="w-full bg-[#059664] text-white hover:bg-[#059664] cursor-pointer transition-colors flex items-center justify-center gap-2"
                >
                    <UploadIcon />
                    Submit Your Idea
                </Button>
                </div>
            </form>
        </div>
    )
}

export default page