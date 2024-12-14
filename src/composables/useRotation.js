// useRotation composable to calculate and track rotation angle based on window size
import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useRotation() {
  const rotationAngle = ref(0); // Initialize rotation angle to 0

  // Calculate rotation angle based on screen dimensions
  const calculateRotationAngle = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calculate the angle between the lower-left and upper-right corners
    const angle = Math.atan2(screenHeight, screenWidth) * (-180 / Math.PI); // Convert radians to degrees
    rotationAngle.value = angle; // Update rotation angle
  };

  // Set up event listeners for calculating rotation angle on window resize
  onMounted(() => {
    calculateRotationAngle(); // Calculate initial rotation angle
    window.addEventListener('resize', calculateRotationAngle); // Listen for window resize events
  });

  // Clean up event listener when component is destroyed
  onBeforeUnmount(() => {
    window.removeEventListener('resize', calculateRotationAngle); // Remove resize event listener
  });

  // Return the computed rotation angle
  return { rotationAngle };
}
