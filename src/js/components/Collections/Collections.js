// @flow
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import colors from '../../styles/colors';
import CollectionCard from '../CollectionCard';
import { SquareButton } from '../shared/Button';
import CollectionDialog from '../../containers/CollectionDialogContainer';
import DotSpinner from '../../components/shared/DotSpinner';
import NoCollections from './NoCollections';
import * as types from './contants';

import {
    Loading,
    LoadingMedium,
    LoadingShorter,
    LoadingShort,
    LoadingLonger,
    LoadingLong
} from '../../styles';

const Container = styled.div`
    width: 100%;
`;

const Header = styled.section`
    width: 100%;
    background-color: ${colors.white};
    padding: 40px 40px;
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const HeaderContent = styled.section`
    width: 100%;
    max-width: 990px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: inherit;
    @media (min-width: 1600px) {
        max-width: 1328px;
    }
`;

const Info = styled.div`
    max-width: 500px;
    & h1 {
        font-size: 24px;
        font-weight: bold;
        padding-bottom: 16px;
        display: block;
        letter-spacing: -.04em;
    }
    & h3 {
        font-size: 18px;
        font-weight: normal;
        padding-bottom: 24px;
        display: block;
        line-height: 1.48;
    }
`;

const Stats = styled.div`
    & div {
        display: inline-block;
        margin-right: 20px;
    }
    & h3 {
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 8px;
        display: block;
    }
    & h5 {
        font-size: 12px;
        font-weight: 300;
        text-transform: uppercase;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 20px;
`;

const Grid = styled.section`
    height: 100%;
    padding: 20px 20px 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
    & a {
        margin: 8px;
    }
    @media (min-width: 1600px) {
        max-width: 1440px;
    }
`;

type DefaultProps = {
    loading: bool,
    groves: Array<Object>
};

type Props = {
    loading?: bool,
    refetch: () => Promise<>,
    groves?: Array<{
        id: string,
        name: string,
        description: string,
        creator: {
            id: string,
            avatar?: {
                id: string,
                urlThumb64: string
            },
            gravatar?: string
        }
    }>,
    trackEvent?: (type: string, action?: any) => void,
    trackModal?: (type: string) => void
};

type State = {
    showAdd: bool
};

class Collections extends Component<DefaultProps, Props, State> {
    static defaultProps: DefaultProps = {
        loading: false,
        groves: []
    };
    props: Props;
    state: State = {
        showAdd: false
    };
    renderCollections = () => {
        const { loading, groves } = this.props;

        if (loading) return <div style={{ marginTop: '40px' }}><DotSpinner /></div>;

        if (groves && groves.length > 0) {
            return (
                <Grid>
                    {groves.map((grove) => {
                        const {
                            creator: { gravatar, avatar },
                            id,
                            description,
                            name
                        } = grove;
                        let picture;
                        // prefer avatar over gravatar
                        if (gravatar) picture = gravatar;
                        if (avatar) picture = avatar.urlThumb64;
                        return (
                            <Link to={`/collection/${id}`} key={id}>
                                <CollectionCard name={name} description={description} picture={picture} />
                            </Link>
                        );
                    }
                    )}
                </Grid>
            );
        }

        return <NoCollections onClick={this.onShow} />;
    }
    renderInfo = () => {
        const { groves, loading } = this.props;
        return (
            <Info>
                <h1>{(loading) ? <Loading><LoadingMedium /></Loading> : Collections}</h1>
                <h3>{(loading) ?
                    <Loading><LoadingLonger /><LoadingLong /></Loading>
                    : 'Here is a quick overview of all your team’s collections.'}
                </h3>
                <Stats>
                    <div>
                        <h3>{(loading) ? <Loading><LoadingShorter /></Loading> : groves && groves.length}</h3>
                        <h5>{(loading) ? <Loading><LoadingShort /></Loading> : 'Collections'}</h5>
                    </div>
                </Stats>
            </Info>
        );
    }
    onClose = () => {
        const { refetch, trackEvent } = this.props;
        // Analytics
        if (trackEvent) trackEvent(types.CREATE_COLLECTION, false);

        refetch();
        this.setState({ showAdd: false });
    }
    onShow = () => {
        const { trackEvent } = this.props;
        // Analytics
        if (trackEvent) trackEvent(types.CREATE_COLLECTION, true);

        this.setState({ showAdd: true });
    }
    render() {
        const { showAdd } = this.state;
        return (
            <Container>
                <Header>
                    <HeaderContent>
                        {this.renderInfo()}
                        <ButtonGroup>
                            <SquareButton
                                onClick={this.onShow}
                                text="+ Add collection"
                                type="primaryLarge"
                            />
                            {showAdd &&
                                <CollectionDialog
                                    close={this.onClose}
                                />
                        }
                        </ButtonGroup>
                    </HeaderContent>
                </Header>
                {this.renderCollections()}
            </Container>
        );
    }
}

export default Collections;
