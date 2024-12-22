/* eslint-disable */
"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/sidebar";
import {
  IconTextRecognition,
  IconAbc,
  IconAlertCircle,
  IconHome,
  IconUser
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ActiveView = "Dashboard" | "Profile" | "Settings";

const SidebarDemo = () => {
  const [activeView, setActiveView] = useState<ActiveView>("Dashboard");

  const links = [
    {
      label: "Spam API",
      onClick: () => setActiveView("Dashboard"),
      href: "#",
      icon: (
        <IconAbc className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Toxicity API",
      onClick: () => setActiveView("Profile"),
      href: "#", // Provide a dummy href for all links
      icon: (
        <IconAlertCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Image Detection API",
      onClick: () => setActiveView("Settings"),
      href: "#",
      icon: (
        <IconTextRecognition className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Homepage",
      href: "/",
      icon: (
        <IconHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <>
              <Logo />
            </>
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                   // Handle click events for dynamic views
                >
                  <Link href={link.href || "#"} onClick={link.onClick}>
                    <div className="flex items-center gap-2">
                      {link.icon}
                      <span>{link.label}</span>
                    </div>
                  </Link>
                </SidebarLink>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Shiv",
                href: "#",
                icon: (
                  <IconUser className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        {activeView === "Dashboard" && <Dashboard />}
        {activeView === "Profile" && <Profile />}
        {activeView === "Settings" && <Settings />}
      </div>
    </div>
  );
};

export default SidebarDemo;

// Dashboard View
const Dashboard = () => {
  const [inputText, setInputText] = useState(
    "pay me or else I will file a lawsuit against you"
  );
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiEndpoint = "https://spam-azure.vercel.app/api/spam"; // Replace with your actual API endpoint

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   setLoading(true);
   setError("");
   setResponse(null);

   console.log("Form submitted, sending request...");

   try {
     console.log("Sending request to API with body:", { text: inputText });

     const res = await fetch(apiEndpoint, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ text: inputText }), // Ensure "text" matches backend expectations
     });

     if (!res.ok) {
       console.error(`API returned status: ${res.status}`);
       throw new Error(`API returned status ${res.status}`);
     }

     const data = await res.json();
     console.log("API Response Data:", data);

     setResponse(data);
   } catch (err: any) {
     console.error("Error during fetch:", err);

     if (err instanceof TypeError) {
       setError("Network error or CORS issue. Please check the API server.");
     } else {
       setError(err.message || "An error occurred while making the request.");
     }
   } finally {
     setLoading(false);
     console.log("Request completed.");
   }
 };

  return (
    <div className="p-6 flex-1 bg-gray-50 dark:bg-neutral-900">
      <h2 className="text-xl font-semibold">Spam Prediction</h2>
      <p>
        Welcome to the Spam Detection page. Please enter text to check if it’s
        spam.
      </p>

      <div className="mt-6 p-4 bg-white dark:bg-neutral-800 rounded-md shadow-md">
        <h3 className="text-lg font-medium mb-4">Text Input</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="apiInput"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Enter Text for Spam Detection:
            </label>
            <textarea
              id="apiInput"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to check for spam"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check for Spam"}
          </button>
        </form>

        <div className="mt-6">
          <h4 className="text-md font-medium">Response:</h4>
          <div className="mt-2 p-4 bg-gray-100 dark:bg-neutral-700 rounded-md">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {response ? (
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              !loading && (
                <p className="text-gray-500">
                  No response yet. Submit the form above to test the API.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile View
const Profile = () => {
  const [inputText, setInputText] = useState(
    "pay me or else I will file a lawsuit against you"
  );
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiEndpoint = "https://toxicity-chi.vercel.app/api/toxicity";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    console.log("Form submitted, sending request...");

    try {
      console.log("Sending request to API with body:", { comment: inputText });

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: inputText }), // Ensure "comment" matches backend expectations
      });

      if (!res.ok) {
        console.error(`API returned status: ${res.status}`);
        throw new Error(`API returned status ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response Data:", data);

      setResponse(data);
    } catch (err: unknown) {
      console.error("Error during fetch:", err);

      if (err instanceof TypeError) {
        setError("Network error or CORS issue. Please check the API server.");
      } else {
        setError("An error occurred while making the request.");
      }
    } finally {
      setLoading(false);
      console.log("Request completed.");
    }
  };

  return (
    <div className="p-6 flex-1 bg-gray-50 dark:bg-neutral-900">
      <h2 className="text-xl font-semibold">Toxicity API</h2>
      <p>Pass in the parameter to detect if text is toxic or not</p>

      <div className="mt-6 p-4 bg-white dark:bg-neutral-800 rounded-md shadow-md">
        <h3 className="text-lg font-medium mb-4">API Dashboard</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="apiInput"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              API Body Input:
            </label>
            <textarea
              id="apiInput"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
              rows={4}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder='{"text": "pay me or else i will file a lawsuit against you"}'
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Request"}
          </button>
        </form>

        <div className="mt-6">
          <h4 className="text-md font-medium">Response:</h4>
          <div className="mt-2 p-4 bg-gray-100 dark:bg-neutral-700 rounded-md">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {response ? (
              <pre
                className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap"
                style={{
                  maxHeight: "300px", // Adjust the max height as per your requirement
                  overflowY: "auto", // Enables vertical scrolling
                }}
              >
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              !loading && (
                <p className="text-gray-500">
                  No response yet. Submit the form above to test the API.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings View
const Settings = () => {
  const [imageData, setImageData] = useState(",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");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiEndpoint = "https://detect-bice.vercel.app/api/detect";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse(null);

    console.log("Form submitted, sending request...");

    try {
      console.log("Sending request to API with body:", { imageData });

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageData }), // Send base64 image
      });

      if (!res.ok) {
        console.error(`API returned status: ${res.status}`);
        throw new Error(`API returned status ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response Data:", data);

      setResponse(data);
    } catch (err: unknown) {
      console.error("Error during fetch:", err);

      if (err instanceof TypeError) {
        setError("Network error or CORS issue. Please check the API server.");
      } else {
        setError("An error occurred while making the request.");
      }
    } finally {
      setLoading(false);
      console.log("Request completed.");
    }
  };

  return (
    <div className="p-6 flex-1 bg-gray-50 dark:bg-neutral-900">
      <h2 className="text-xl font-semibold">Image Detection API</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Upload an image in base64 format to detect features using the API.
      </p>

      <div className="mt-6 p-4 bg-white dark:bg-neutral-800 rounded-md shadow-md">
        <h3 className="text-lg font-medium mb-4">API Input</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="imageData"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Base64 Image Input:
            </label>
            <textarea
              id="imageData"
              className="mt-1 block w-full p-2 border border-gray-300 dark:border-neutral-600 rounded-md dark:bg-neutral-700 dark:text-white"
              rows={6}
              value={imageData}
              onChange={(e) => setImageData(e.target.value)}
              placeholder="Paste your base64 image data here"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <div className="mt-6">
          <h4 className="text-md font-medium">Response:</h4>
          <div className="mt-2 p-4 bg-gray-100 dark:bg-neutral-700 rounded-md">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {response ? (
              <pre className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                {JSON.stringify(response, null, 2)}
              </pre>
            ) : (
              !loading && (
                <p className="text-gray-500">
                  No response yet. Submit the form above to test the API.
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


const Logo = () => (
  <Link
    href="/"
    className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
  >
    <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-black dark:text-white whitespace-pre"
    >
      FLEXICONNECT
    </motion.span>
  </Link>
);
