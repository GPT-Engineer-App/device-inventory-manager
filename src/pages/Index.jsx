import { useState } from "react";
import { Box, Heading, Text, Button, Input, Select, Table, Thead, Tbody, Tr, Th, Td, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [devices, setDevices] = useState([]);
  const [deviceType, setDeviceType] = useState("");
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("in-stock");
  const [assignedTo, setAssignedTo] = useState("");
  const [editingDevice, setEditingDevice] = useState(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddDevice = () => {
    const newDevice = {
      id: Date.now(),
      deviceType,
      name,
      brand,
      quantity: parseInt(quantity),
      serialNumber,
      phoneNumber,
      status,
      assignedTo,
    };
    setDevices([...devices, newDevice]);
    resetForm();
    onClose();
  };

  const handleEditDevice = (device) => {
    setEditingDevice(device);
    setDeviceType(device.deviceType);
    setName(device.name);
    setBrand(device.brand);
    setQuantity(device.quantity.toString());
    setSerialNumber(device.serialNumber);
    setPhoneNumber(device.phoneNumber);
    setStatus(device.status);
    setAssignedTo(device.assignedTo);
    onOpen();
  };

  const handleUpdateDevice = () => {
    const updatedDevices = devices.map((device) =>
      device.id === editingDevice.id
        ? {
            ...device,
            deviceType,
            name,
            brand,
            quantity: parseInt(quantity),
            serialNumber,
            phoneNumber,
            status,
            assignedTo,
          }
        : device,
    );
    setDevices(updatedDevices);
    resetForm();
    onClose();
  };

  const handleDeleteDevice = (id) => {
    const updatedDevices = devices.filter((device) => device.id !== id);
    setDevices(updatedDevices);
  };

  const resetForm = () => {
    setDeviceType("");
    setName("");
    setBrand("");
    setQuantity("");
    setSerialNumber("");
    setPhoneNumber("");
    setStatus("in-stock");
    setAssignedTo("");
    setEditingDevice(null);
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Inventory Management System
      </Heading>
      <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={onOpen}>
        Add Device
      </Button>

      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Device Type</Th>
            <Th>Name</Th>
            <Th>Brand</Th>
            <Th>Quantity</Th>
            <Th>Serial Number</Th>
            <Th>Phone Number</Th>
            <Th>Status</Th>
            <Th>Assigned To</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {devices.map((device) => (
            <Tr key={device.id}>
              <Td>{device.deviceType}</Td>
              <Td>{device.name}</Td>
              <Td>{device.brand}</Td>
              <Td>{device.quantity}</Td>
              <Td>{device.serialNumber}</Td>
              <Td>{device.phoneNumber}</Td>
              <Td>{device.status}</Td>
              <Td>{device.assignedTo}</Td>
              <Td>
                <Button size="sm" colorScheme="blue" leftIcon={<FaEdit />} mr={2} onClick={() => handleEditDevice(device)}>
                  Edit
                </Button>
                <Button size="sm" colorScheme="red" leftIcon={<FaTrash />} onClick={() => handleDeleteDevice(device.id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editingDevice ? "Edit Device" : "Add Device"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Device Type</FormLabel>
              <Input value={deviceType} onChange={(e) => setDeviceType(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Brand</FormLabel>
              <Input value={brand} onChange={(e) => setBrand(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Quantity</FormLabel>
              <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Serial Number</FormLabel>
              <Input value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Phone Number</FormLabel>
              <Input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Status</FormLabel>
              <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="in-stock">In Stock</option>
                <option value="deployed">Deployed</option>
              </Select>
            </FormControl>
            {status === "deployed" && (
              <FormControl mb={4}>
                <FormLabel>Assigned To</FormLabel>
                <Input value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
              </FormControl>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={editingDevice ? handleUpdateDevice : handleAddDevice}>
              {editingDevice ? "Update" : "Add"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
