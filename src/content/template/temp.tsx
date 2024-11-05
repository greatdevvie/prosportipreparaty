import { ActionIcon, BackgroundImage, Box, Container } from "@mantine/core";
import { ArrowDown, ArrowUp } from "../media/icons";
import styles from "./styles/style.module.scss";

interface TemplateInterface {
    id: number,
    children: any,
    src: string,
    isArrowUp?: boolean,
    isArrowDown?: boolean
}
export default function Template({ id, isArrowUp, src, isArrowDown, children }: TemplateInterface) {

    return (
        <BackgroundImage className={styles.base} src={src} id={`${id}`}>
            <Box className={styles.base_blur}>
                <Container className={styles.base_blur_c}>
                    <Box style={{ visibility: isArrowUp ? 'visible' : 'hidden' }} className={styles.base_blur_c_top}>
                        <ActionIcon size={'xl'} variant="transparent" onClick={() => document.getElementById(`${id - 1}`)?.scrollIntoView({ behavior: 'smooth' })}>
                            <ArrowUp />
                        </ActionIcon>
                    </Box>
                    <Box className={styles.base_blur_c_center}>
                        {children}
                    </Box>
                    <Box style={{ visibility: isArrowDown ? 'visible' : 'hidden' }} className={styles.base_blur_c_bottom} onClick={() => document.getElementById(`${id + 1}`)?.scrollIntoView({ behavior: 'smooth' })}>
                        <ActionIcon size={'xl'} variant="transparent">
                            <ArrowDown />
                        </ActionIcon>
                    </Box>
                </Container>
            </Box>
        </BackgroundImage>
    )
}