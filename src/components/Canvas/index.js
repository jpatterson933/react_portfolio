import React, { useEffect, useRef } from "react";

import { downpour } from "./Raindrop";

const useCanvas = (draw, canvasReference) => {
    useEffect(() => {
        const canvas = canvasReference.current;
        const ctx = canvas.getContext('2d');

        draw(ctx);

        return () => {
            // clean up code if needed
        }
    }, [draw, canvasReference])
}

export const Canvas = ({ width }) => {
    const containerReference = useRef(null);
    const canvasReference = useRef(null);
    const setCanvasSize = () => {
        const container = containerReference.current;
        const canvas = canvasReference.current;
        if (container && canvas) {
            canvas.width = container.clientWidth;
        }
    }

    useEffect(() => {
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        return () => {
            window.removeEventListener('resize', setCanvasSize);
        };
    }, []);

    useCanvas((ctx) => {
        const numberOfParticles = 500;
        const { particlesArray, resetRaindrop } = downpour(ctx, numberOfParticles);

        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0)";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update(ctx, resetRaindrop);
                particlesArray[i].draw(ctx);
            }
            requestAnimationFrame(animate)
        }

        animate();
    }, canvasReference);


    const jumboStyle = {
        position: "absolute",
        zIndex: "-1",
        top: "48px",
        borderRadius: "4px 4px 0 0",
    }

    return (
        <div ref={containerReference}>
            <canvas width={width} ref={canvasReference} style={jumboStyle}></canvas>
        </div>
    )
}

