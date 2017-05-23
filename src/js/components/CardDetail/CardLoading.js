import React from 'react';
import { Container, ContainerInner, Main, EditorContainer } from './styles';

export default () => {
    return (
        <Container>
            <ContainerInner>
                <Main>
                    <EditorContainer>
                        <h1>LOADING</h1>
                    </EditorContainer>
                </Main>
            </ContainerInner>
        </Container>
    );
};
