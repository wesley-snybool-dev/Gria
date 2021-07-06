
import { 
    Button, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalFooter, 
    ModalBody, 
    ModalCloseButton,
    ModalHeader,
    useDisclosure,
    Text
    } from '@chakra-ui/react'

    import { useRouter } from 'next/router'


function ModalSendEmail({email='fulano-de-tal@gmail.com'}) {

  const router = useRouter();


    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        
  
        <Modal  isOpen={true} onClose={onClose}
        
        >
          <ModalOverlay  />
          <ModalContent
            width='100vw'
            position='relative'
          >
            <ModalHeader display='flex' justifyContent='center'>Status Do cadastro</ModalHeader>
            
            <ModalBody >
              <Text>Enviamos um email para {email}</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => router.push('/')}>
                Voltar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalSendEmail;