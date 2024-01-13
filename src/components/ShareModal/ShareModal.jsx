import  PostShare  from '../PostShare/PostShare';
import { Modal, useMantineTheme } from '@mantine/core';

function ShareModal({ modalOpened, setModalOpened }) {
    // const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();

    return (
        <>
            {/* opened={opened} onClose={close} title="Authentication" */}
            <Modal
                overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]} overlayOpacity={0.55}
                overlayBlur={3}
                size='40%'
                opened={modalOpened}
                onClose={() => setModalOpened(false)}>
                
                <PostShare></PostShare>
            </Modal>


        </>
    );
}

export default ShareModal;