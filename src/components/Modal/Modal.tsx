import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
function ModalComponent({
  isOpen,
  onClose,
  children,
  modalTitle,
}: {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  modalTitle?: string;
}) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW={"fit-content"} minW="md">
          {modalTitle && <ModalHeader>{modalTitle}</ModalHeader>}
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalComponent;
