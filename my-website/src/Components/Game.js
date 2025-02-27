import React, { useEffect, useRef } from 'react';

const Game = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        console.log('useEffect is running');
        
        const canvas = canvasRef.current;
        console.log('Canvas:', canvas);
        
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        let playerX = 50;
        let playerY = 50;
        const playerSize = 20;
        const playerSpeed = 5;

        let obstacleX = 200;
        let obstacleY = 150;
        const obstacleSize = 100;
        
        let score = 0;

        // Load images
        const playerImage = new Image();
        playerImage.src = 'https://gallerypngs.com/wp-content/uploads/2024/08/golden-star-png-photo-250x234.png'; // Replace with your image URL

        const obstacleImage = new Image();
        obstacleImage.src = 'https://png.pngtree.com/element_our/20240621/bbe33ccab4f0a4c9f8dd13b01c47bb21.png'; // Replace with your image URL

        function drawPlayer() {
            if (playerImage.complete) {
                ctx.drawImage(playerImage, playerX, playerY, playerSize, playerSize);
            } else {
                playerImage.onload = () => {
                    ctx.drawImage(playerImage, playerX, playerY, playerSize, playerSize);
                };
            }
        }

        function drawObstacle() {
            if (obstacleImage.complete) {
                ctx.drawImage(obstacleImage, obstacleX, obstacleY, obstacleSize, obstacleSize);
         } else {
             obstacleImage.onload = () => {
                 ctx.drawImage(obstacleImage, obstacleX, obstacleY, obstacleSize, obstacleSize);
             };
         }
        }


        function drawScore() {
            ctx.fillStyle = 'black';
            ctx.font = '16px Arial';
            ctx.fillText('Score: ' + score, 10, 20);
        }

        function checkCollision() {
            if (
                playerX < obstacleX + obstacleSize &&
                playerX + playerSize > obstacleX &&
                playerY < obstacleY + obstacleSize &&
                playerY + playerSize > obstacleY
            ) {
                playerX = 50;
                playerY = 50;
                score = 0;
            }
        }

        function update() {
            console.log('Updating canvas');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawPlayer();
            drawObstacle();
            drawScore();
            checkCollision();
            requestAnimationFrame(update);
        }
        
        const handleKeyDown = (event) => {
            event.preventDefault(); // Stop the page from scrolling
            console.log('Key pressed:', event.key);
            switch (event.key) {
                case 'ArrowUp':
                    playerY -= playerSpeed;
                    break;
                case 'ArrowDown':
                    playerY += playerSpeed;
                    break;
                case 'ArrowLeft':
                    playerX -= playerSpeed;
                    break;
                case 'ArrowRight':
                    playerX += playerSpeed;
                    break;
                default:
                    break;
            }
            playerX = Math.max(0, Math.min(canvas.width - playerSize, playerX));
            playerY = Math.max(0, Math.min(canvas.height - playerSize, playerY));
            score += 1;
        };
        

        document.addEventListener('keydown', handleKeyDown);
        update();

        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div>
            <h2>Game Canvas</h2>
            <canvas 
                ref={canvasRef} 
                width={400} 
                height={300} 
                id="gameCanvas" 
                style={{ border: '1px solid black' }} 
            />
        </div>
    );
};

export default Game;
