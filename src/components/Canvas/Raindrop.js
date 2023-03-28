class Raindrop {
    constructor(x, y) {
        this.init(x, y)
    }

    init(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1 + 1;
        this.weight = Math.random() * 2 + 1;
        this.directionX = 0.01;
    }
    update(ctx, resetRaindrop) {
        // this.y is the locaiton of each element raindrop on the y axis
        if (this.y > ctx.canvas.height) {
            resetRaindrop(this);
        }
        // this.y = 0 - this.size;
        // this.weight = Math.random() * 2 + 1;
        // this.x = Math.random() * ctx.canvas.width * 1;


        // this is basically the weight of the element as it affects how fast it falls
        this.weight += 0.01;
        // this controls the gravity of each raindrop
        this.y += this.weight;
        // this randomizes where they appear on the x axis
        this.x += this.directionX;

    }

    draw(ctx) {
        ctx.fillStyle = `rgba(179, 213, 255, 1)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

export const downpour = (ctx, numberOfParticles) => {
    const particlesArray = [];

    const resetRaindrop = (raindrop) => {
        const x = Math.random() * ctx.canvas.width;
        const y = 0 - raindrop.size;
        raindrop.init(x, y)
    }
    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * ctx.canvas.width;
        const y = Math.random() * ctx.canvas.height;
        particlesArray.push(new Raindrop(x, y));
    }
    return { particlesArray, resetRaindrop };
}

export const animate = (ctx, particlesArray, resetRaindrop) => {
    ctx.fillStyle = "rgba(0, 0, 0)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(ctx, resetRaindrop);
        particlesArray[i].draw(ctx);
    }
    requestAnimationFrame(animate)
}


export default Raindrop;
