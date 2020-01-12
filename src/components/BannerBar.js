import React from "react";

export default function BannerBar() {
    return (
        <div className="bg-light pb-5 pt-2 border-top border-bottom">
            <div style={{ position: "relative" }}>
                <img alt="Profile"
                     className="rounded-circle mx-auto d-block justify-content-center mt-2 mb-2 border bg-white p-2"
                     src="https://avatars3.githubusercontent.com/u/22604455?v=4"
                     style={{
                         position: "absolute",
                         top: -30,
                         left: "50%",
                         transform: "translate(-50%, -10%)",
                         width: 150
                     }}/>
            </div>
            <div>
                <h1 style={{ fontSize: "2.2rem", paddingTop: 130 }}>Jake</h1>
                <p>I write bugs and then I fix them.</p>
                <h5 align="justify" style={{ margin: "0, 30" }}>
                    This page is intended to showcase my projects.
                    I am interested in automation, image processing, and proof-of-concept projects.
                    In general, my projects are mostly just things I find cool or fun to make.
                    I hope someone enjoys them as much as I do.
                </h5>
            </div>
        </div>
    );
}