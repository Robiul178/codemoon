import React from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import './Pdf.css'



const ref = React.createRef();

export default function PDF() {
    const course = useLoaderData();
    const { description, title, price } = course;
    return (
        <div className="App">
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className="btn btn-outline btn-success mt-28 mb-6">Download PDF</button>}
            </Pdf>
            <div className="pdf-div">
                <div></div>
                <div className="text-black " ref={ref}>
                    <h1 className="text-4xl">{title}</h1>
                    <p>{description}</p>
                    <h2>Price:{price}</h2>
                </div>
                <div></div>
            </div>
        </div>
    );
}
