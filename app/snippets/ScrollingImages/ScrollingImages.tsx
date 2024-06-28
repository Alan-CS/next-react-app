import {useRef, useState} from "react";
import './styles.css';

type Img = {
    id: number;
    imageUrl: string;
};

type ImgList = Img[];

const ScrollingImages: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const itemsRef = useRef<Map<number, HTMLLIElement> | null>(null);

    const scrollToImage = (imgId: number): void => {
        const map = getMap();
        const node = map.get(imgId);
        if (node) {
            node.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    const getMap = (): Map<number, HTMLLIElement> => {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    };

    const handleNextButtonClick = (): void => {
        if (index < imgList.length - 1) {
            setIndex(index + 1);
            scrollToImage(imgList[index + 1].id);
        } else {
            setIndex(0);
            scrollToImage(imgList[0].id);
        }
    };

    const handleLastButtonClick = (): void => {
        setIndex(imgList.length - 1);
        scrollToImage(imgList[imgList.length - 1].id);
    };

    const handleFirstButtonClick = (): void => {
        setIndex(0);
        scrollToImage(imgList[0].id);
    };

    return (
        <>
            <nav className="flex justify-around">
                <button className="btn-primary-block" onClick={handleFirstButtonClick}>
                    First Image
                </button>
                <button className="btn-primary-block" onClick={handleNextButtonClick}>
                    Next
                </button>
                <button className="btn-primary-block" onClick={handleLastButtonClick}>
                    Last Image
                </button>
            </nav>
            <div className="imgParent">
                <ul>
                    {imgList.map((img: Img, i: number) => (
                        <li
                            className="imgLi"
                            key={img.id}
                            ref={(node) => {
                                const map = getMap();
                                if (node) {
                                    map.set(img.id, node);
                                } else {
                                    map.delete(img.id);
                                }
                            }}
                        >
                            <img
                                className={index === i ? 'active' : ''}
                                src={img.imageUrl}
                                alt={`img #${img.id}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

// ALAN: Used loremflickr for images
const imgList: ImgList = [];
for (let i = 0; i < 10; i++) {
    imgList.push({
        id: i,
        imageUrl: `https://loremflickr.com/100/100/${i}`,
    });
}

export default ScrollingImages;
