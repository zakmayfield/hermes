"use client";

import { Modal } from "@/shared/components";
import React, { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCancelModal = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    handleOpenModal,
    handleCancelModal,
    Modal: Modal
  };
};
