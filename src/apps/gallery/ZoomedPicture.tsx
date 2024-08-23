import { FaChevronLeft, FaChevronRight, FaDownload } from "react-icons/fa6";

const ZoomedPicture = ({
  imageGallery,
  zoomedPicture,
  setZoomedPicture,
}: {
  imageGallery: string[] | undefined;
  zoomedPicture: number | null;
  setZoomedPicture: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const handleDownload = async (url: string, fileName: string) => {
    try {
      const response = await fetch(url, { mode: "cors" });
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    imageGallery &&
    zoomedPicture !== null && (
      <div
        onClick={() => setZoomedPicture(null)}
        className="fixed z-50 top-0 left-0 h-screen w-screen bg-black/50 backdrop-blur-sm flex items-start pt-8 justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-[660px] mx-auto"
        >
          <img
            className="rounded-2xl aspect-video w-full"
            src={imageGallery[zoomedPicture]}
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-3">
            <button onClick={()=>setZoomedPicture(zoomedPicture-1)} className="bg-purple-200 font-medium p-3 text-black rounded-full shadow-lg flex items-center gap-1 hover:bg-gray-200 transition">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-3">
            <button onClick={()=>setZoomedPicture(zoomedPicture+1)} className="bg-purple-200 font-medium p-3 text-black rounded-full shadow-lg flex items-center gap-1 hover:bg-gray-200 transition">
              <FaChevronRight />
            </button>
          </div>
          <div className="absolute top-2 right-2">
            <button
              onClick={() =>
                handleDownload(
                  imageGallery[zoomedPicture],
                  `image-${zoomedPicture}.jpg`
                )
              }
              className="bg-purple-200 font-medium p-3 text-black rounded-lg shadow-lg flex items-center gap-1 hover:bg-gray-200 transition"
            >
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ZoomedPicture;
