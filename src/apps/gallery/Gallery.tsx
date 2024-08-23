import { useEffect, useState } from "react";
import ZoomedPicture from "./ZoomedPicture";

const Gallery = () => {
  const [imageGallery, setImageGallery] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [zoomedPicture, setZoomedPicture] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breeds/image/random/50`,
          { signal }
        );
        if (!response.ok) {
          setIsError(true);
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setImageGallery(data?.message);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            setIsError(true);
            console.error(err);
          }
        }
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  const renderImages = () => {
    const result: JSX.Element[] = [];

    imageGallery?.forEach((src, index) => {
      const colSpan = Math.floor(Math.random() * 2) + 1;

      result.push(
        <div
          onClick={() => setZoomedPicture(index)}
          key={index}
          className={`overflow-hidden cursor-pointer rounded-xl col-span-${colSpan} max-h-[15rem]`}
        >
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={src}
            alt={`dog-${index}`}
          />
        </div>
      );
    });

    return result;
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-3xl min-h-96 relative mx-auto p-6 mb-2 text-text rounded-lg bg-gradient-to-br from-primary-600 to-blue-500 hover:from-primary-600 hover:to-blue-500 hover:text-white">
        <div className="font-bold text-center text-3xl mt-0 my-8">
          Image Gallery 🐕
        </div>
        {!isLoading ? (
          isError ? (
            <div className="flex my-3 items-center justify-center py-3 px-3 w-full border-text/40 rounded-lg text-sm font-bold bg-neutral-900 border-neutral-700 text-rose-400">
              FAILED TO FETCH IMAGES DATA FROM SERVER.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {renderImages()}
              <ZoomedPicture
                setZoomedPicture={setZoomedPicture}
                imageGallery={imageGallery}
                zoomedPicture={zoomedPicture}
              />
            </div>
          )
        ) : (
          <div className="flex my-3 items-center justify-center py-3 px-3 w-full border-text/40 rounded-lg text-sm font-bold bg-neutral-900 border-neutral-700 text-neutral-400">
            LOADING IMAGES DATA FROM SERVER.
          </div>
        )}
        <div className="text-xs my-2 text-slate-300">
          Please note that this is an external API, so availability and
          performance may vary. Thank you for your understanding! 🤭
        </div>
      </div>
    </div>
  );
};

export default Gallery;
