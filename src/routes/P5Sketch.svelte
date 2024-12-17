<script>
  import { onMount } from 'svelte';

  let sketchContainer;

  onMount(async () => {
      const p5 = (await import('p5')).default;

      const sketch = (p) => {
          let particlesArray = []; // Array to store particles

          class Particle {
              constructor(x, y, size) {
                  this.x = x;
                  this.y = y;
                  this.size = size;
                  this.lifespan = 600; // Lifespan in frames (10 seconds at 60 FPS)
              }

              update() {
                  this.lifespan -= 1; // Decrease lifespan
              }

              draw() {
                  p.noStroke();
                  p.fill(0, 0, 0, this.lifespan / 6); // Fade out effect
                  p.rect(this.x, this.y, this.size, this.size);
              }

              isAlive() {
                  return this.lifespan > 0; // Check if particle is still alive
              }
          }

          p.setup = () => {
              p.createCanvas(
                  sketchContainer.getBoundingClientRect().width,
                  document.getElementById("app-div").getBoundingClientRect().height
              ).parent(sketchContainer);
          };

          p.draw = () => {
              p.clear(); // Clear the canvas for smooth rendering
              if (p.mouseX !== p.pmouseX && p.mouseY !== p.pmouseY) {
                  for (let i = 0; i < 10; i++) {
                      const x = p.mouseX + p.random(-10, 10);
                      const y = p.mouseY + p.random(-10, 10);
                      const size = p.random(5, 10);
                      particlesArray.push(new Particle(x, y, size));
                  }
              }

              // Update and draw particles
              particlesArray.forEach((particle, index) => {
                  particle.update();
                  particle.draw();

                  // Remove particles that are no longer alive
                  if (!particle.isAlive()) {
                      particlesArray.splice(index, 1);
                  }
              });
          };

          if (sketchContainer) {
              p.windowResized = () => {
                  p.resizeCanvas(
                      sketchContainer.getBoundingClientRect().width,
                      document.getElementById("app-div").getBoundingClientRect().height
                  );
              };
          }
      };

      const myP5 = new p5(sketch);

      // Optional cleanup
      return () => myP5.remove();
  });
</script>

<div id="sketch-container" bind:this={sketchContainer}></div>

<style>
  #sketch-container {
      width: 100vw;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      pointer-events: none;
  }
</style>
