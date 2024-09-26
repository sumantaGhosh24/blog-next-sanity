"use client";

import {useState, memo} from "react";
import {LayoutGrid} from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface BlogMediaProps {
  image: any[];
}

const BlogMedia = memo(({image}: BlogMediaProps) => {
  const [open, setOpen] = useState(false);

  const [controls] = useState(true);
  const [playsInline] = useState(true);
  const [autoPlay] = useState(false);
  const [loop] = useState(false);
  const [muted] = useState(false);
  const [disablePictureInPicture] = useState(false);
  const [disableRemotePlayback] = useState(false);
  const [controlsList] = useState<
    ("nodownload" | "nofullscreen" | "noremoteplayback")[]
  >([]);
  const [crossOrigin] = useState("");
  const [preload] = useState("");

  const slides = image.map((item) => ({
    src: item.asset.url,
    width: 3840,
    height: 2560,
    srcSet: [
      {src: item.asset.url, width: 320, height: 213},
      {src: item.asset.url, width: 640, height: 426},
      {src: item.asset.url, width: 1200, height: 800},
      {src: item.asset.url, width: 2048, height: 1365},
      {src: item.asset.url, width: 3840, height: 2560},
    ],
  }));

  return (
    <>
      <h3 className="mb-2 mt-10 text-xl font-bold">
        Images and video ({image.length})
      </h3>
      <div className="flex items-center gap-2">
        <Image
          src={image[0].asset.url}
          alt="asset"
          height={100}
          width={100}
          className="h-[100px] w-[100px] cursor-pointer rounded object-cover"
          onClick={() => setOpen(true)}
        />
        <Image
          src={image[1].asset.url}
          alt="asset"
          height={100}
          width={100}
          className="h-[100px] w-[100px] cursor-pointer rounded object-cover"
          onClick={() => setOpen(true)}
        />
        <div
          className="flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-md bg-gray-200"
          onClick={() => setOpen(true)}
        >
          <LayoutGrid className="mb-2 text-black" />
          <p className="font-bold text-black">View all</p>
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[...slides]}
          plugins={[Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          video={{
            controls,
            playsInline,
            autoPlay,
            loop,
            muted,
            disablePictureInPicture,
            disableRemotePlayback,
            controlsList: controlsList.join(" "),
            crossOrigin,
            preload,
          }}
        />
      </div>
    </>
  );
});

BlogMedia.displayName = "BlogMedia";

export default BlogMedia;
