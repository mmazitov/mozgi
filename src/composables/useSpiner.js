// useSpiner composable for controlling spinner animation on hover
import { computed, ref } from 'vue';

export function useSpiner() {
  const rotation = ref(180); // Initialize rotation angle at 180 degrees
  const isHovering = ref(false); // Flag to track hover state

  // Computed style for dynamic rotation and transition
  const rotateStyle = computed(() => {
    return {
      transform: `rotate(${rotation.value}deg)`, // Apply dynamic rotation
      transition: isHovering.value ? 'transform 0s' : 'transform 0.5s ease-out', // Adjust transition based on hover state
    };
  });

  // Start the spinner animation on hover
  function startAnimation() {
    isHovering.value = true;
    animate(); // Begin animation when hover starts
  }

  // Pause the spinner animation when hover ends
  function pauseAnimation() {
    isHovering.value = false;
  }

  // Recursive animation function to keep rotating the spinner while hovering
  function animate() {
    if (isHovering.value) {
      rotation.value += 1; // Increment the rotation by 1 degree per frame
      if (rotation.value >= 360) {
        rotation.value = 0; // Reset rotation after completing 360 degrees
      }
      requestAnimationFrame(animate); // Continue animation using requestAnimationFrame
    }
  }

  // Return style and animation control functions
  return {
    rotateStyle,
    startAnimation,
    pauseAnimation,
  };
}
