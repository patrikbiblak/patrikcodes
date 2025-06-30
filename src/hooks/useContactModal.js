import { useState, useEffect, useCallback } from 'react';

function useContactModal(delayMs = 5000) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShown(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs, hasShown]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    setHasShown(true);
  }, []);

  return {
    isOpen,
    closeModal,
    openModal,
    hasShown,
  };
}

export default useContactModal;