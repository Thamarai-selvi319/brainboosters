"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
}

export default function BlogCard({
  title,
  description,
  date,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full"
    >
      <Card className="h-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col bg-white cursor-pointer">
        <div className="h-40 w-full bg-gradient-to-br from-[#EEF7FC] via-[#D9EEFA] to-[#BFE3F6] flex flex-col justify-end p-5">
  <h3 className="text-lg font-bold text-[#2B2E63] leading-snug line-clamp-2">
    {title}
  </h3>
  <p className="text-xs text-[#2B2E63]/70 mt-1">{date}</p>
</div>

        <CardContent className="flex flex-col flex-grow pt-5">
          <p className="text-sm text-gray-600 line-clamp-2 mb-6">
            {description}
          </p>
          <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-indigo-600">
            <span>Read More</span>
            <motion.span
              whileHover={{ x: 6 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
