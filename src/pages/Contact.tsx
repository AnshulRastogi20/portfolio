import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

emailjs.init("dKJYSEXueS-sux9fi"); 
const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);

    try {
      await emailjs.sendForm(
        'service_qgmsmgf',
        'template_3qacv07', 
        form,
        'dKJYSEXueS-sux9fi' 
      );

      toast("Message Sent!", {
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      toast("Error", {
        description: "Failed to send message. Please try again later.",
      });
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light to-white dark:from-dark dark:to-dark/50 pt-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-white mb-12">Contact Me</h1>
        <div className="max-w-2xl mx-auto glass rounded-xl p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-primary dark:text-white mb-2 block">Name</label>
              <Input 
                type="text" 
                name="name"
                placeholder="Your Name"
                required
                className="bg-white/10 border-primary/20 text-primary dark:text-white placeholder:text-primary/50 dark:placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="text-primary dark:text-white mb-2 block">Email</label>
              <Input 
                type="email"
                name="email" 
                placeholder="Your email"
                required
                className="bg-white/10 border-primary/20 text-primary dark:text-white placeholder:text-primary/50 dark:placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="text-primary dark:text-white mb-2 block">Message</label>
              <Textarea 
                name="message"
                placeholder="Your message"
                required
                className="bg-white/10 border-primary/20 text-primary dark:text-white placeholder:text-primary/50 dark:placeholder:text-white/50 min-h-[150px]"
              />
            </div>
            <Button 
            variant="secondary" 
            className="w-full"
            type="submit"
            disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;