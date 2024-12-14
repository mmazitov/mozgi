// usePageTransition composable to manage page transitions using Vue Router
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function usePageTransition() {
  const transitionHolder = ref(null); // Reference to the transition holder element
  const router = useRouter(); // Access Vue Router
  let isFirstLoad = true; // Flag for first page load
  let isPageTransitioned = false; // Flag for page transition state

  // Start the page transition (moving transition holder to 'center' position)
  const startTransition = () => {
    transitionHolder.value.classList.remove('left'); // Remove 'left' class
    transitionHolder.value.classList.add('center'); // Add 'center' class
  };

  // Move the transition holder to the 'right' after a delay
  const moveToRight = (callback) => {
    setTimeout(() => {
      transitionHolder.value.classList.remove('center'); // Remove 'center' class
      transitionHolder.value.classList.add('right'); // Add 'right' class
      callback?.(); // Execute callback (e.g., `next`) after transition
    }, 1000); // Duration for transition from 'center' to 'right'
  };

  // Reset the transition holder to the 'left' position
  const resetTransition = () => {
    setTimeout(() => {
      transitionHolder.value.classList.remove('right'); // Remove 'right' class
      transitionHolder.value.classList.add('left'); // Add 'left' class
      isPageTransitioned = false; // Reset page transition state
    }, 1000); // Duration for transition from 'right' to 'left'
  };

  // Set up page transition handling before each route change
  const setupTransition = () => {
    router.beforeEach((to, from, next) => {
      if (isFirstLoad) {
        isFirstLoad = false; // Skip transition on the first load
        next();
        return;
      }

      if (isPageTransitioned) return; // Prevent double transitions

      isPageTransitioned = true; // Set page transition flag
      startTransition(); // Start transition
      moveToRight(() => {
        next(); // Proceed to the next route
        resetTransition(); // Reset transition after moving to the right
      });
    });
  };

  // Return transition handler and setup method
  return {
    transitionHolder,
    setupTransition,
  };
}
