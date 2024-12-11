<script>
    import { onMount } from 'svelte';
  
    let sketchContainer;
  
    onMount(async () => {
      const p5 = (await import('p5')).default; 

      const sketch = (p) => {
        // const particlesArray

        p.setup = () => {
          p.createCanvas(sketchContainer.getBoundingClientRect().width, document.getElementById("app-div").getBoundingClientRect().height).parent(sketchContainer);
        };
  
        p.draw = () => {
            p.noStroke();
            p.fill(0, 0, 0, p.random(20, 50)); 
            // if(p.mouseX != p.pmouseX && p.mouseY != p.pmouseY){
                for (let i = 0; i < 5; i++) {
                    const x = p.mouseX + p.random(-10, 10); // Add random offset for grainy effect
                    const y = p.mouseY + p.random(-10, 10);
                    const size = p.random(5, 10); // Randomize particle size
                    p.rect(x, y, size, size);
                }
            // }
        };

        if(sketchContainer){
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
    #sketch-container{
        /* background-color: black;  */
        width: 100vw; 
        /* height: 200vh;  */
        position: absolute; 
        left: 0; 
        top: 0; 
        z-index: 10; 
        pointer-events: none;
    }
  </style>