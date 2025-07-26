"use client";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Image from "next/image";
import { UnsplashPhoto } from "@/types";
import Skeleton from "react-loading-skeleton";
import { SearchContext } from "@/context/SearchContext";
import { Modal } from "./Modal";

type Prop = {
  query?: string;
};

export default function ImageContainer({ query }: Prop) {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Context not found");
  }
  const { setSearchValue } = context;

  const [data, setData] = useState<UnsplashPhoto[]>();
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<UnsplashPhoto | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const searchQuery = query || "african";
      setLoading(true);
      try {
        const res = await axios.get(`/api/unsplash?query=${searchQuery}`);
        setData(res?.data.results.slice(0, 8));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto place-items-center">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Skeleton
                key={index}
                height={240}
                width={200}
                borderRadius={8}
                baseColor="#e0e0e0"
                highlightColor="#f5f5f5"
              />
            ))
          : data?.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-[200px] h-[240px] p-3"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.urls.regular}
                  alt={item.alt_description || item.slug}
                  width={item.width}
                  height={item.height}
                  className="rounded-lg cursor-pointer"
                />
              </div>
            ))}
      </div>

      {selectedImage && (
        <Modal
          name={selectedImage.user.name}
          width={selectedImage.width}
          height={selectedImage.height}
          location={selectedImage.user.location}
          img={selectedImage.urls.regular}
          alt={selectedImage.alt_description || selectedImage.slug}
          open={true}
          onOpenChange={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
