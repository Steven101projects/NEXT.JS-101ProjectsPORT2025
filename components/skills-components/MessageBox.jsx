"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export default function MessageBox() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  async function handleSend() {
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Send failed");

      setForm({ name: "", phone: "", email: "", message: "" });
      setOpen(false);
      alert("Message sent successfully");
    } catch {
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative">
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`
          bg-white border border-black rounded-3xl p-2 shadow-md transition-all duration-300 z-50
          fixed left-4 top-24
          sm:${open ? "absolute top-[13px] left-[740px]" : "fixed top-[120px] left-[20px]"}
        `}
      >
        <ChatBubbleLeftRightIcon className="w-12 h-12 text-black" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[92vw] h-auto
                sm:top-[120px] sm:left-[90px]
                sm:translate-x-0 sm:translate-y-0
                sm:w-[670px] sm:h-[450px]
                bg-black border border-black rounded-4xl shadow-xl overflow-hidden z-40
              "
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Left Panel */}
                <motion.div
                  className="
                    w-full sm:w-[60%]
                    p-6
                    border-b sm:border-b-0 sm:border-r
                    bg-white rounded-4xl border-black
                    flex flex-col justify-between
                  "
                  initial={{ x: -80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                >
                  <div>
                    <h2 className="text-3xl sm:text-4xl mb-4 flex items-center">
                      Let’s Talk!
                      <ChatBubbleLeftRightIcon className="w-6 h-6 ml-2" />
                    </h2>

                    <div className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="border border-black rounded-md px-3 py-2"
                      />

                      <input
                        type="text"
                        placeholder="Contact Number"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        className="border border-black rounded-md px-3 py-2"
                      />

                      <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="border border-black rounded-md px-3 py-2"
                      />

                      <textarea
                        rows={4}
                        placeholder="Your Message"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="border border-black rounded-md px-3 py-2 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSend}
                    disabled={loading}
                    className="
                      mt-4 mx-auto sm:ml-36
                      bg-black text-white py-2 px-6
                      rounded-xl hover:bg-gray-800
                      text-base disabled:opacity-60
                    "
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </motion.div>

                {/* Right Panel */}
                <motion.div
                  className="
                    w-full sm:w-[40%]
                    bg-black text-white
                    p-6 sm:p-8
                    flex flex-col text-sm sm:text-[15px]
                  "
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                >
                  <p className="mb-2 text-lg sm:text-xl">
                    Other Contacts
                  </p>

                  <a
                    href="mailto:castroconi101@gmail.com"
                    className="underline text-lg sm:text-xl"
                  >
                    Email
                  </a>

                  <a
                    href="tel:+14374451436"
                    className="underline text-lg sm:text-xl mb-3"
                  >
                    Phone
                  </a>

                  <p className="text-lg sm:text-xl mb-2">
                    Want to Connect?
                  </p>

                  <a
                    href="https://www.linkedin.com/in/nico-steven-castro-5a5285332/"
                    className="underline text-lg sm:text-xl"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/theultracheese_3/#"
                    className="underline text-lg sm:text-xl"
                  >
                    Instagram
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
