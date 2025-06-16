"use client" 
import { Button } from '@/components/ui/button'
import React from 'react'
import { LogIn } from 'lucide-react'
import { toast } from 'sonner'
function page() {
const [form, setForm] = React.useState({ email: '', password: '' });
const [loading, setLoading] = React.useState(false);

const handleChange = (e) => {
    setForm({ ...form, [e.target.type]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Login successful! Redirecting...");
    // setLoading(true);
    // try {
    //     // Replace '/api/login' with your actual backend endpoint
    //     const res = await axios.post('/api/login', form);
    //     // handle success (e.g., redirect, show message)
    // } catch (err) {
    //     // handle error (e.g., show error message)
    // } finally {
    //     setLoading(false);
    // }
};

return (
    <div className=" flex items-center justify-center bg-gradient-to-br pt-20 to-white">
        <div className="bg-white p-10 rounded-xl shadow-xl min-w-[340px] w-full max-w-md border-1 border-gray-300">
            <h2 className="text-3xl font-bold text-center mb-8 tracking-wide font-sans">Login</h2>
            <form >
                <div className="mb-6">
                    <label className="block mb-2 font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 border-2  rounded-xl outline-none text-lg  transition"
                    />
                </div>
                <div className="mb-8">
                    <label className="block mb-2  font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border-2  rounded-xl outline-none text-lg transition"
                    />
                </div>
                <div onClick={handleSubmit}>
                <Button
                    type="submit"
                    className="w-full bg-[#059664] hover:bg-[#0FA76F] text-white font-semibold flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Logging in...' : 'Login'}
                </Button>
                </div>
            </form>
        </div>
    </div>
)
}



export default page