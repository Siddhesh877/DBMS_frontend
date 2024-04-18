import { toast } from "react-hot-toast";
import useCurrentUser from "../../hooks/useCurrentUser";
import useEditModal from "../../hooks/useEditModal";
import useUser from "../../hooks/useUser";
import useLoginModal from "../../hooks/useLoginModal";
import axios from "axios";
import Modal from "../Modal";
import { useCallback, useEffect, useState } from "react";
import Input from "../Input";

const EditModal = () => {
  console.log("in edit modal");
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.user_id);
  const editModal = useEditModal();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setUsername(currentUser.username);
      setDescription(currentUser.description);
      setEmail(currentUser.email);
    }
  }, [currentUser?.name, currentUser?.username, currentUser?.description, currentUser?.email]);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      // await axios.put('/api/edit', {
      //     name,
      //     username,
      //     description,
      //     email
      // });
      // mutateFetchedUser();
      toast.success('Profile updated successfully');
      editModal.onClose();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [name, username, description, email, editModal, mutateFetchedUser]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={editModal.isOpen}
        title="Edit Profile"
        actionLabel="Save"
        onClose={editModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
      />
    </div>
  );
};

export default EditModal;