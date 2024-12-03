"use client";

import { Modal } from "@/shared/components";
import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCancelModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    handleOpenModal,
    handleCancelModal,
    Modal: Modal
  };
};
