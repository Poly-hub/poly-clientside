import "./GradientBackground.css"
export default function GradientBackground() {

    const gradientBalls = [
        {id: 1, color: "hsla(315,0%,100%,1)", size: 70, top: "20%", left: "10%", duration: "20s" },
        // {id: 2, color: "hsla(225,100%,77%,1)", size: 70, top: "40%", left: "40%", duration: "15s" },
        // {id: 3, color: "hsl(282,100%,80%)", size: 80, top: "0%", left: "60%", duration: "12s" },
        {id: 4, color: "hsl(211,100%,91%)", size: 80, top: "40%", left: "20%", duration: "10s" },
        {id: 5, color: "hsl(0,100%,87%)", size: 80, top: "-30%", left: "50%", duration: "9s" },
        {id: 6, color: "hsl(313,100%,84%)", size: 100, top: "-10%", left: "-20%", duration: "15s" },
        {id: 7, color: "hsl(284,100%,89%)", size: 70, top: "40%", left: "-30%", duration: "14s" },
        // {id: 8, color: "hsl(315,100%,87%)", size: 80, top: "0%", left: "30%", duration: "10s" },
        // {id: 9, color: "hsl(38,100%,76%)", size: 80, top: "50%", left: "20%", duration: "17s" },

    ]

    return(
        <div className={"gradient-container"}>
            {gradientBalls.map((ball) => {
                return (
                    <div
                        key={ball.id}
                        className={"gradient-ball"}
                        style={{
                            background: `radial-gradient(circle, ${ball.color} 50px, transparent 50%`,
                            top: ball.top,
                            left: ball.left,
                            animationDuration: ball.duration,
                            width: `${ball.size}vw`,
                            height: `${ball.size}vh`,

                        }}
                    />

                )
            })}
        </div>
    )

}