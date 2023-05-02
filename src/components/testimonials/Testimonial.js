import "./Testimonial.css";
import { testimonials } from "../../data";
import Review from "./Review";
import { useState } from "react";

const Testimonial=()=>{
    const [index, setIndex]= useState(0);
    const { id, name, profession, text, image }= testimonials[index];

    const incrementIndex= ()=>{
        setIndex((index)=>{
            let newIndex= index+1 > testimonials.length-1 ? 0: index+1;
            return newIndex;
        })
    };
    const decrementIndex= ()=>{
        setIndex((index)=>{
            let newIndex= index-1<0? testimonials.length-1: index-1;
            return newIndex;
        })
    };
    
    return(
        <section className="testimonial">
            <div className="testimonial-container">
                <h2>What our customers say about us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                <div className="review-container">
                    <Review id={id}
                        name={name}
                        profession={profession}
                        text={text}
                        image={image}
                        incrementIndex={incrementIndex}
                        decrementIndex={decrementIndex}/>
                    
                </div>

            </div>
        </section>
    );
};
export default Testimonial;