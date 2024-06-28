// See: https://react.dev/learn/manipulating-the-dom-with-refs#how-to-manage-a-list-of-refs-using-a-ref-callback

import { useRef, useState } from "react";
import './styles.css';

export default function ScrollingImages() {
    const [index, setIndex] = useState(0);
    const itemsRef = useRef(null);

    function scrollToImage(imgId:number) {
        const map = getMap();
        const node = map.get(imgId);
        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }

    function getMap() {
        if (!itemsRef.current) {
            // Initialize the Map on first usage.
            itemsRef.current = new Map();
        }
        return itemsRef.current;
    }

    function handleNextButtonClick() {
        if (index < imgList.length - 1) {
            setIndex(index + 1);
            scrollToImage(imgList[index + 1].id)
        } else {
            setIndex(0);
            scrollToImage(imgList[0].id)
        }
    }

    function handleLastButtonClick() {
        setIndex(imgList.length - 1);
        scrollToImage(imgList[imgList.length - 1].id)
    }

    function handleFirstButtonClick() {
        setIndex(0);
        scrollToImage(imgList[0].id)
    }

    return (
        <>
            <nav className="flex justify-around">
                <button className="btn-primary-block"
                        onClick={handleFirstButtonClick}
                >
                    First Image
                </button>
                <button className="btn-primary-block"
                        onClick={handleNextButtonClick}
                >
                    Next
                </button>
                <button className="btn-primary-block"
                        onClick={handleLastButtonClick}
                >
                    Last Image
                </button>
            </nav>
            <div className="imgParent">
                <ul>
                    {imgList.map((img, i) => (
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
                                className={
                                    index === i ?
                                        'active' :
                                        ''
                                }
                                src={img.imageUrl}
                                alt={'img #' + img.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

// ALAN: Used loremflickr for images
const imgList:ImgList  = [];
for (let i = 0; i < 10; i++) {
    imgList.push({
        id: i,
        imageUrl: 'https://loremflickr.com/100/100/' + i
    });
}

