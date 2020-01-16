import React         from "react";
import NavigationBar from "../NavigationBar";
import BannerBar     from "../BannerBar";
import FooterBar     from "../FooterBar";

export default function HomePage() {
    return (
        <div>
            <NavigationBar/>
            <BannerBar/>
            <FooterBar/>
        </div>
    );
}