// ALAN: This version uses only one ref (instead a map of refs) that is assigned to the
// currently selected li element's dom by react. As a result, it needs to use flushsync
// https://react.dev/learn/manipulating-the-dom-with-refs#flushing-state-updates-synchronously-with-flush-sync
// https://react.dev/learn/manipulating-the-dom-with-refs#scrolling-an-image-carousel

import {useRef, useState} from "react";
import './styles.css';
import {flushSync} from "react-dom";

type Img = {
    id: number;
    imageUrl: string;
};

type ImgList = Img[];

const ScrollingImagesFlushSync: React.FC = () => {
    const [index, setIndex] = useState<number>(0);
    const itemRef = useRef<HTMLLIElement | null>(null);

    const scrollToSelectedImage = (): void => {
        if (itemRef.current) {
            itemRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
        }
    };

    const handleNextButtonClick = (): void => {
        if (index < imgList.length - 1) {
            flushSync( () => {
                setIndex(index + 1);
            })
        } else {
            flushSync( () => {
                setIndex(0);
            })
        }
        scrollToSelectedImage();
    };

    const handleLastButtonClick = (): void => {
        flushSync( () => {
            setIndex(imgList.length - 1);
        })
        scrollToSelectedImage();
    };

    const handleFirstButtonClick = (): void => {
        flushSync( () => {
            setIndex(0);
        })
        scrollToSelectedImage();
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
                            ref={index === i ? itemRef : null}
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

export default ScrollingImagesFlushSync;
