import { FC, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { CreateRoleData } from "@sources/newsApi/types";

import styles from "./RoleModal.module.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateRoleData) => void;
};

export const RoleModal: FC<Props> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = () => {
    if (title && description) {
      onSubmit({
        title,
        description,
      });
      onClose();
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Создание Роли</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.inputContainer}>
          <Input
            colorScheme="teal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название роли"
          />
          <Textarea
            colorScheme="teal"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Описание"
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
            Сохранить
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
