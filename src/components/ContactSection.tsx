
const ContactSection = () => {
    return (
        <section className="py-24 px-6 bg-secondary-periwinkle/30 dark:bg-slate-900" id="contact">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-5xl font-extrabold mb-4">Let's work together</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">Got a project in mind? Or just want to say hi? My inbox is always open.</p>
            </div>
            <div className="max-w-xl mx-auto bg-white dark:bg-slate-800 border-2 border-slate-900 rounded-3xl p-1 shadow-chunky">
                <div className="border-b-2 border-dashed border-slate-300 dark:border-slate-700 p-8">
                    <form action={"https://api.web3forms.com/submit"} method="POST" className="space-y-6">
                        <div>
                            <label className="block text-sm font-extrabold mb-2 uppercase tracking-widest">Your Name</label>
                            <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 rounded-xl focus:ring-4 focus:ring-primary/20 transition-all outline-none" placeholder="John Doe" type="text" name="name" />
                        </div>
                        <div>
                            <label className="block text-sm font-extrabold mb-2 uppercase tracking-widest">Your Email</label>
                            <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 rounded-xl focus:ring-4 focus:ring-primary/20 transition-all outline-none" placeholder="john@example.com" type="email" name="email" />
                        </div>
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                        <input type="hidden" name="apikey" value={import.meta.env.VITE_WEB3FORMS_API_KEY} />
                        <div>
                            <label className="block text-sm font-extrabold mb-2 uppercase tracking-widest">Message</label>
                            <textarea className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 border-slate-900 rounded-xl focus:ring-4 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="Tell me about your project..." rows={4} name="message"></textarea>
                        </div>
                        <button className="chunky-btn w-full bg-primary py-4 rounded-xl border-2 border-slate-900 shadow-chunky text-slate-900 font-bold text-lg">
                            Send Message
                        </button>
                    </form>
                </div>
            </div >
        </section >
    )
}

export default ContactSection