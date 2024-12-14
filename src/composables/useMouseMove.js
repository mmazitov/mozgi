import { ref } from 'vue';

// useMouseMove composable to track mouse movement and apply dynamic transform
export function useMouseMove() {
  const textStyle = ref({ transform: 'translate(0, 0)' }); // Initialize textStyle with default transform

  // Handle mouse movement, calculate offset based on mouse position
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event; // Get mouse coordinates
    const windowWidth = window.innerWidth; // Get window width
    const windowHeight = window.innerHeight; // Get window height

    // Calculate offset in X and Y directions based on mouse position
    const offsetX = ((clientX / windowWidth) - 0.5) * 40;
    const offsetY = ((clientY / windowHeight) - 0.5) * 40;

    // Update textStyle with new transform values
    textStyle.value = {
      transform: `translate(${offsetX}px, ${offsetY}px)`,
    };
  };

  // Return the computed textStyle and handleMouseMove method
  return { textStyle, handleMouseMove };
}
