import React from "react";
import { Card, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

function Maqsad() {
  return (
    <div className="h-auto relative rounded-2xl p-10 mx-5  mb-5">
      <div className="flex justify-center gap-52 lg:mb-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: -0, transition: { duration: 1 } }}
          className="hidden font-kalnia text-3xl text-white font-light lg:flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-copy "
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>

          <h1>Copy Link Of Your Post</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            isHoverable
            radius="lg"
            className="border-none"
            isBlurred
            shadow="lg"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://ik.imagekit.io/luxswipe/version-2.0/Mockup1.png?updatedAt=1711687991784"
              width={400}
            />
          </Card>
        </motion.div>
      </div>
      <div className="flex justify-center gap-52 lg:mb-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            isHoverable
            radius="lg"
            className="border-none"
            isBlurred
            shadow="lg"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://ik.imagekit.io/luxswipe/version-2.0/Create-Post.png?updatedAt=1711687991499"
              width={400}
            />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="hidden font-kalnia text-3xl text-white font-light lg:flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fillRule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
            />
          </svg>

          <h1>Create Post On LuxSwipe</h1>
        </motion.div>
      </div>
      <div className="flex justify-center gap-52 lg:mb-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: -0, transition: { duration: 1 } }}
          className="hidden font-kalnia text-3xl text-white font-light lg:flex items-center justify-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-clipboard-check"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"
            />
            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z" />
            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z" />
          </svg>

          <h1>Paste Your Link And List Products</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            isHoverable
            radius="lg"
            className="border-none"
            isBlurred
            shadow="lg"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://ik.imagekit.io/luxswipe/version-2.0/Add-Products.png?updatedAt=1711687991618"
              width={400}
            />
          </Card>
        </motion.div>
      </div>
      <div className="flex justify-center gap-52 lg:mb-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            isHoverable
            radius="lg"
            className="border-none"
            isBlurred
            shadow="lg"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://ik.imagekit.io/luxswipe/version-2.0/copy-link.png?updatedAt=1711687991675"
              width={400}
            />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          className="hidden font-kalnia text-3xl text-white font-light lg:flex items-center justify-center gap-2"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-copy "
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
            />
          </svg>
          <h1>Copy Link Of Your Store</h1>
        </motion.div>
      </div>
      <div className="flex justify-center gap-52">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: -0, transition: { duration: 1 } }}
          className="hidden font-kalnia text-3xl text-white font-light lg:flex items-center justify-center gap-2"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-share"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
          </svg>
          <h1>Share With Your Fans</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <Card
            isHoverable
            radius="lg"
            className="border-none"
            isBlurred
            shadow="lg"
          >
            <Image
              alt="Woman listing to music"
              className="object-cover"
              src="https://ik.imagekit.io/luxswipe/version-2.0/paste-it.png?updatedAt=1711687991301"
              width={400}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default Maqsad;
