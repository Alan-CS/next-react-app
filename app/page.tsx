"use client"

import Header from "@/app/components/Header";
import Carousel from "@/app/components/Carousel";
import {useEffect} from "react";

export default function Home() {

    // TODO: See how to do this in server rendered component as previously this was a
    // server rendered component and had to change it to client when adding useEffect
    // https://stackoverflow.com/questions/69074227/how-to-add-custom-class-to-body-element-for-some-routes-nexjts
    useEffect(() => {
        const body = document.querySelector("body");
        const className = "overflow-hidden";
        if (body) {
            if(!body.classList.contains(className)) {
                body.classList.add(className);
            }
        }
        return () => {
            if (body) {
                body.classList.remove(className)
            }
        }
    }, []);

  return (
      <div>
            <Header/>
            <Carousel/>
      </div>
  );
}
