"use client"
import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from "sonner"
import { UploadIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
function page() {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('Technology')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [website, setWebsite] = useState('')

    const categories = ['Technology', 'Business', 'Education', 'Health', 'Art']

    const handleSubmit = async (e) => {
        toast.success("Congratulations! Your idea has been submitted successfully.")
        console.log("gctf");
        
    }


    return (
        <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[50%]  mx-auto mt-12 p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 tracking-tight">Submit Your Idea</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                    <input
                        type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                        placeholder="Paste an image URL"
                    />
                    {image && (
                        <img
                            src={image}
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
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
                <div onClick={handleSubmit}>
               <Button className="w-full bg-[#059664] text-white hover:bg-[#059664] cursor-pointer transition-colors flex items-center justify-center gap-2">
                <UploadIcon />
                Submit Your Idea
               </Button>
               </div>
            </form>
        </div>
    )
}

export default page